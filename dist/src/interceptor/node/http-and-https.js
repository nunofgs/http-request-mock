"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-types */
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var url_1 = __importDefault(require("url"));
var utils_1 = require("../../common/utils");
var base_1 = __importDefault(require("../base"));
var client_request_1 = __importDefault(require("./client-request"));
var NodeHttpAndHttpsRequestInterceptor = /** @class */ (function (_super) {
    __extends(NodeHttpAndHttpsRequestInterceptor, _super);
    function NodeHttpAndHttpsRequestInterceptor(mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var _this = _super.call(this, mocker, proxyServer) || this;
        if (NodeHttpAndHttpsRequestInterceptor.instance) {
            return NodeHttpAndHttpsRequestInterceptor.instance;
        }
        NodeHttpAndHttpsRequestInterceptor.instance = _this;
        _this.httpRequest = http_1.default.request.bind(http_1.default);
        _this.httpsRequest = https_1.default.request.bind(https_1.default);
        _this.httpGet = http_1.default.get.bind(http_1.default);
        _this.httpsGet = https_1.default.get.bind(https_1.default);
        _this.intercept();
        return _this;
    }
    /**
     * Setup request mocker for unit test.
     * @param {Mocker} mocker
     */
    NodeHttpAndHttpsRequestInterceptor.setupForUnitTest = function (mocker) {
        if (!(0, utils_1.isNodejs)()) {
            throw new Error('Not a nodejs envrioment.');
        }
        return new NodeHttpAndHttpsRequestInterceptor(mocker);
    };
    /**
     * https://nodejs.org/api/http.html#http_request_end_data_encoding_callback
     * https://nodejs.org/api/https.html#https_https_request_options_callback
     *
     * Intercept http.get, https.get, http.request, https.request.
     */
    NodeHttpAndHttpsRequestInterceptor.prototype.intercept = function () {
        this.inteceptRequestMethod();
        this.inteceptGetMethod();
    };
    /**
     * Logic of intercepting http.request and https.request method.
     */
    NodeHttpAndHttpsRequestInterceptor.prototype.inteceptRequestMethod = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        http_1.default.request = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return me.doRquest.apply(me, __spreadArray(['request', me.httpRequest], args, false));
        };
        https_1.default.request = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return me.doRquest.apply(me, __spreadArray(['request', me.httpsRequest], args, false));
        };
    };
    /**
     * https://nodejs.org/api/http.html#http_http_get_url_options_callback
     * Logic of intercepting http.get and https.get method.
     *
     * Since most requests are GET requests without bodies, Node.js provides this convenience method.
     * The only difference between this method and http.request() is that it sets the method to GET
     * and calls req.end() automatically. The callback must take care to consume the response data
     * for reasons stated in http.ClientRequest section.
     */
    NodeHttpAndHttpsRequestInterceptor.prototype.inteceptGetMethod = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        http_1.default.get = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return me.doRquest.apply(me, __spreadArray(['get', me.httpGet], args, false));
        };
        https_1.default.get = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return me.doRquest.apply(me, __spreadArray(['get', me.httpsGet], args, false));
        };
    };
    NodeHttpAndHttpsRequestInterceptor.prototype.doRquest = function (getOrRequest, getOrRequestFunc) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result = this.getClientRequest(args);
        if (!result) {
            return getOrRequestFunc.apply(void 0, args);
        }
        var opts = result;
        if (opts && opts.isNodeRequestOpts) {
            var protocol = /^https:/i.test(opts.url) ? 'https' : 'http';
            var func = getOrRequest.replace(/^\w/, function (c) { return c.toUpperCase(); });
            var request = "".concat(protocol).concat(func);
            return this[request](opts.url, opts.options, opts.callback);
        }
        var client = result;
        client.setOriginalRequestInfo(getOrRequest, getOrRequestFunc, args);
        getOrRequest === 'get' && client.end();
        return result;
    };
    /**
     * Get instance of ClientRequest.
     * @param args Arguments of http.get, https.get, http.request or https.request
     */
    NodeHttpAndHttpsRequestInterceptor.prototype.getClientRequest = function (args) {
        var _a = this.getRequestOpts(args), url = _a.url, options = _a.options, callback = _a.callback;
        if (options.useNativeModule) { // not a standard option
            return false;
        }
        if (!/^https?:/i.test(url)) {
            throw new TypeError("[ERR_INVALID_URL]: Invalid URL: ".concat(url));
        }
        var method = (options.method || 'GET');
        var mockItem = this.matchMockRequest(url, method);
        if (!mockItem)
            return false;
        //
        //
        //s
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var clientRequest = new client_request_1.default(url, options, callback);
        this.doMockRequest(clientRequest, mockItem);
        return clientRequest;
    };
    /**
     * Make mock request.
     * @param {ClientRequest} clientRequest
     * @param {MockItem} mockItem
     */
    NodeHttpAndHttpsRequestInterceptor.prototype.doMockRequest = function (clientRequest, mockItem) {
        this.doMockResponse(clientRequest, mockItem);
    };
    /**
     * Make mock request.
     * @param {ClientRequest} clientRequest
     * @param {MockItem} mockItem
     */
    NodeHttpAndHttpsRequestInterceptor.prototype.doMockResponse = function (clientRequest, mockItem) {
        var _this = this;
        var mockItemResolver = function (resolve) {
            if (mockItem.delay && mockItem.delay > 0) {
                setTimeout(function () { return resolve(mockItem, _this.mocker); }, +mockItem.delay);
            }
            else {
                resolve(mockItem, _this.mocker);
            }
        };
        clientRequest.setMockItemResolver(mockItemResolver);
    };
    /**
     * Parse and get normalized arguments of http.get, https.get, http.request or https.request method.
     * http.request(options[, callback])#
     * http.request(url[, options][, callback])
     * @param {any[]} args arguments of http.get, https.get, http.request or https.request
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NodeHttpAndHttpsRequestInterceptor.prototype.getRequestOpts = function (args) {
        var url, options, callback;
        if (typeof args[0] === 'string' || this.isUrlObject(args[0])) {
            url = typeof args[0] === 'string' ? args[0] : args[0].href;
        }
        if (url === undefined || (url && (0, utils_1.isObject)(args[1]))) {
            options = url === undefined ? args[0] : args[1];
        }
        if (typeof args[1] === 'function' || typeof args[2] === 'function') {
            callback = typeof args[1] === 'function' ? args[1] : args[2];
        }
        if (!url) {
            var port = /^\d+$/.test(options.port) ? ":".concat(options.port) : '';
            var isHttps = (port === ':443') || options.cert || /^https:/i.test(options.path);
            var protocol = options.protocol ? options.protocol : (isHttps ? 'https:' : 'http:');
            var host = options.hostname || options.host || 'localhost';
            var path = (options.path || '/').replace(/^\/+/g, '/');
            var auth = options.auth ? options.auth + '@' : '';
            var base = "".concat(protocol, "//").concat(auth).concat(host).concat(port);
            // uri property will be populated by request library.
            url = options.uri ? options.uri.href : new URL(path, base).href;
        }
        return { url: url, options: options || {}, callback: callback, isNodeRequestOpts: true };
    };
    NodeHttpAndHttpsRequestInterceptor.prototype.isUrlObject = function (url) {
        return (Object.prototype.toString.call(url) === '[object URL]')
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore urlUtil.Url for a legacy compatibility
            || ((url instanceof URL) || (url instanceof url_1.default.Url))
            || ((0, utils_1.isObject)(url) && ('href' in url) && ('hostname' in url) && !('method' in url));
    };
    return NodeHttpAndHttpsRequestInterceptor;
}(base_1.default));
exports.default = NodeHttpAndHttpsRequestInterceptor;
//# sourceMappingURL=http-and-https.js.map