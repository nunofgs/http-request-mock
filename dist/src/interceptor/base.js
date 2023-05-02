"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../common/utils");
var BaseInterceptor = /** @class */ (function () {
    function BaseInterceptor(mocker, proxyServer) {
        var _a;
        if (proxyServer === void 0) { proxyServer = ''; }
        this.proxyServer = '';
        this.proxyMode = '';
        this.mocker = mocker;
        if (/^(matched@localhost:\d+)|(middleware@\/)$/.test(proxyServer)) {
            _a = proxyServer.split('@'), this.proxyMode = _a[0], this.proxyServer = _a[1];
        }
        this.global = BaseInterceptor.getGlobal();
    }
    /**
     * Setup request mocker.
     * @param {Mocker} mocker
     */
    BaseInterceptor.setup = function (mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        return new this(mocker, proxyServer);
    };
    /**
     * return global variable
     */
    BaseInterceptor.getGlobal = function () {
        if (typeof window !== 'undefined') {
            return window;
        }
        else if (typeof global !== 'undefined') {
            return global;
        }
        throw new Error('Detect global variable error');
    };
    /**
     * Check whether the specified request url matches a defined mock item.
     * If a match is found, return mock meta information, otherwise a null is returned.
     * @param {string} reqUrl
     * @param {string} reqMethod
     */
    BaseInterceptor.prototype.matchMockRequest = function (reqUrl, reqMethod) {
        // ignore matching when it is a proxy mode
        if (this.proxyMode === 'matched' && reqUrl.indexOf("http://".concat(this.proxyServer)) === 0) {
            return null;
        }
        var mockItem = this.mocker.matchMockItem(reqUrl, reqMethod);
        if (mockItem && mockItem.times !== undefined) {
            mockItem.times -= 1;
        }
        // "mockItem" should be returned if current request is under proxy mode of middleware and is marked by @deProxy
        if (this.proxyMode === 'middleware' && reqUrl.indexOf(this.getMiddlewareHost()) === 0) {
            return mockItem && mockItem.deProxy ? mockItem : null;
        }
        return mockItem;
    };
    BaseInterceptor.prototype.getRequestInfo = function (requestInfo) {
        var info = {
            url: requestInfo.url,
            method: requestInfo.method || 'GET',
            query: (0, utils_1.getQuery)(requestInfo.url),
        };
        if (requestInfo.headers || requestInfo.header) {
            info.headers = requestInfo.headers || requestInfo.header;
        }
        if (requestInfo.body !== undefined) {
            info.body = (0, utils_1.tryToParseObject)(requestInfo.body);
        }
        return info;
    };
    /**
     * Get full request url.
     * @param {string} url
     */
    BaseInterceptor.prototype.getFullRequestUrl = function (url, method) {
        if (/^https?:\/\//i.test(url)) {
            return this.checkProxyUrl(url, method);
        }
        if (typeof URL === 'function' && typeof window === 'object' && window) {
            return this.checkProxyUrl(new URL(url, window.location.href).href, method);
        }
        if (typeof document === 'object' && document && typeof document.createElement === 'function') {
            var elemA = document.createElement('a');
            elemA.href = url;
            return this.checkProxyUrl(elemA.href, method);
        }
        return this.checkProxyUrl(url, method);
    };
    /**
     * Return a proxy url if in a proxy mode otherwise return the original url.
     * @param {string} url
     */
    BaseInterceptor.prototype.checkProxyUrl = function (url, method) {
        if (!['matched', 'middleware'].includes(this.proxyMode) || !this.proxyServer) {
            return url;
        }
        var mockItem = this.mocker.matchMockItem(url, method);
        if (!mockItem) {
            return url;
        }
        var proxyUrl = this.proxyMode === 'middleware'
            ? "".concat(this.getMiddlewareHost()).concat(url.replace(/^(https?):\/\//, '/$1/'))
            : "http://".concat(this.proxyServer).concat(url.replace(/^(https?):\/\//, '/$1/'));
        return mockItem.deProxy ? url : proxyUrl;
    };
    BaseInterceptor.prototype.getMiddlewareHost = function () {
        var _a = window.location, protocol = _a.protocol, host = _a.host;
        return "".concat(protocol, "//").concat(host);
    };
    return BaseInterceptor;
}());
exports.default = BaseInterceptor;
//# sourceMappingURL=base.js.map