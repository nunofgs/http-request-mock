"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../common/utils");
var config_1 = require("../config");
var mock_item_1 = __importDefault(require("./mock-item"));
var Mocker = /** @class */ (function () {
    function Mocker(proxyServer) {
        var _a;
        if (proxyServer === void 0) { proxyServer = ''; }
        this.disabled = false;
        this.log = false;
        this.proxyServer = '';
        this.proxyMode = 'none';
        if (Mocker.instance) {
            return Mocker.instance;
        }
        if (/^(matched@localhost:\d+)|(middleware@\/)$/.test(proxyServer)) {
            _a = proxyServer.split('@'), this.proxyMode = _a[0], this.proxyServer = _a[1];
        }
        Mocker.instance = this;
        this.log = !(0, utils_1.isNodejs)();
        this.mockConfigData = {};
        this.groupLog([['[http-request-mock] is %cloaded.', 'color:inherit;font-weight:bold;']]);
    }
    Mocker.getInstance = function () {
        return new Mocker();
    };
    /**
     * Set global mock data configuration.
     * @param {object} mockConfigData
     */
    Mocker.prototype.setMockData = function (mockConfigData) {
        for (var key in mockConfigData) {
            this.mock(mockConfigData[key]);
        }
        return this;
    };
    /**
     * Add an mock item to global mock data configuration.
     * @param {string} key
     * @param {MockItem} val
     */
    Mocker.prototype.addMockItem = function (key, val) {
        this.mockConfigData[key] = val;
        return this;
    };
    /**
     * Reset global mock data configuration.
     */
    Mocker.prototype.reset = function () {
        this.mockConfigData = {};
        this.sendMsgToProxyServer('reset');
        return this;
    };
    /**
     * Enable mock function temporarily.
     * Not available in proxy mode.
     */
    Mocker.prototype.enable = function () {
        this.disabled = false;
        this.sendMsgToProxyServer('enable');
        this.groupLog([['[http-request-mock] is %cenabled.', 'color:green;font-weight:bold;']]);
        return this;
    };
    /**
     * Disable mock function temporarily.
     * Not available in proxy mode.
     */
    Mocker.prototype.disable = function () {
        this.disabled = true;
        this.sendMsgToProxyServer('disable');
        this.groupLog([['[http-request-mock] is %cdisabled.', 'color:red;font-weight:bold;']]);
        return this;
    };
    /**
     * Send a message to proxy server if in a proxy mode.
     * @param {string} msg
     */
    Mocker.prototype.sendMsgToProxyServer = function (msg) {
        if (msg === void 0) { msg = ''; }
        if (!this.proxyServer) {
            return;
        }
        if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
            return;
        }
        if (typeof window !== 'undefined' &&
            Object.prototype.toString.call(window) === '[object Window]' &&
            typeof window.fetch === 'function') {
            window.fetch("http://".concat(this.proxyServer, "/__hrm_msg__/") + encodeURIComponent(msg));
        }
    };
    /**
     * Disable logs function temporarily.
     * Not available in proxy mode.
     */
    Mocker.prototype.disableLog = function () {
        this.log = false;
        this.sendMsgToProxyServer('disableLog');
        return this;
    };
    /**
     * Disable logs function temporarily.
     * Not available in proxy mode.
     */
    Mocker.prototype.enableLog = function () {
        this.log = true;
        this.sendMsgToProxyServer('enableLog');
        return this;
    };
    /**
     * Note: this method is only for a nodejs environment(test environment).
     * Use a mock file & add it to global mock data configuration.
     * @param {string} file
     */
    Mocker.prototype.use = function (file) {
        throw new Error("Can not use mock case: ".concat(file, ", only for a nodejs environment"));
    };
    /**
     * Check specified mock item & add it to global mock data configuration.
     * @param {MockItem} mockItem
     * @returns false | MockItem
     */
    Mocker.prototype.mock = function (mockItemInfo) {
        if (!(0, utils_1.isObject)(mockItemInfo)) {
            throw new Error('Invalid mock item, a valid mock item must be an object.');
        }
        var mockItem = new mock_item_1.default(mockItemInfo);
        if (!mockItem.key)
            return false;
        this.addMockItem(mockItem.key, mockItem);
        return mockItem;
    };
    /**
     * Make a mock item that matches an HTTP GET request.
     * @param {RegExp | String} url
     * @param {unknown} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.get = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'GET', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP POST request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.post = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'POST', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP PUT request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.put = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'PUT', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP PATCH request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.patch = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'PATCH', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP DELETE request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.delete = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'DELETE', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
     * Warning: A response to a HEAD method should not have a body.
     * If it has one anyway, that body must be ignored, any representation
     * headers that might describe the erroneous body are instead assumed
     * to describe the response which a similar GET request would have received.
     *
     * Make a mock item that matches an HTTP HEAD request.
     * @param {RegExp | String} url
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.head = function (url, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'HEAD', body: '', delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP GET, POST, PUT, PATCH, DELETE or HEAD request.
     * @param {RegExp | String} url
     * @param {unknown} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.any = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'ANY', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Check whether the specified request url matches a defined mock item.
     * If a match is found, return the matched mock item, otherwise a null is returned.
     * @param {string} reqUrl
     * @param {string} reqMethod
     * @return null | MockItem
     */
    Mocker.prototype.matchMockItem = function (reqUrl, reqMethod) {
        if (this.disabled) {
            return null;
        }
        var requestMethod = (reqMethod || 'GET').toUpperCase();
        var items = Object.values(this.mockConfigData).filter(function (_a) {
            var disable = _a.disable, times = _a.times, method = _a.method;
            var verb = String(method).toUpperCase();
            return disable !== 'YES' && (times === undefined || times > 0) && (verb === 'ANY' || verb === requestMethod);
        });
        for (var i = 0; i < 2; i++) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var info = items_1[_i];
                try {
                    if ((info.url instanceof RegExp) && info.url.test(reqUrl)) {
                        return info;
                    }
                    var infoUrl = reqUrl.indexOf('//') === 0
                        // for the request urls which without http protocol
                        ? String(info.url).replace(/^https?:/ig, '')
                        : String(info.url);
                    // [whole matching] takes precedence over partial matching
                    if (i === 0 && reqUrl === infoUrl) {
                        return info;
                    }
                    // whole matching takes precedence over [partial matching]
                    if (i === 1 && reqUrl.indexOf(infoUrl) !== -1) {
                        return info;
                    }
                }
                catch (e) {
                    // ignore match error, normally, user doesn't care it.
                }
            }
        }
        return null;
    };
    /**
     * Set group logs
     * @param {Logs[]} logs
     * @returns
     */
    Mocker.prototype.groupLog = function (logs) {
        if (!this.log)
            return;
        if (typeof console.groupCollapsed !== 'function')
            return;
        if (typeof console.groupEnd !== 'function')
            return;
        if (Array.isArray(logs[0])) {
            console.groupCollapsed.apply(console, logs[0]);
        }
        else {
            console.groupCollapsed(logs[0]);
        }
        for (var i = 1; i < logs.length; i++) {
            if (Array.isArray(logs[i])) {
                console.log.apply(console, logs[i]);
            }
            else {
                console.log(logs[i]);
            }
        }
        console.groupEnd();
    };
    Mocker.prototype.sendResponseLog = function (spent, body, requestInfo, mockItem) {
        var logs = [
            [
                '[http-request-mock] %s %s %s (%c%s%c)',
                "".concat((0, utils_1.currentTime)()),
                requestInfo.method,
                requestInfo.url,
                ('color:' + (mockItem.status < 300 ? 'green' : 'red')),
                mockItem.status,
                'color:inherit',
            ],
            ['Request: ', requestInfo],
            ['Response: ', {
                    body: body,
                    spent: spent,
                    headers: __assign(__assign({}, mockItem.headers), { 'x-powered-by': 'http-request-mock' }),
                    status: mockItem.status,
                    statusText: config_1.HTTPStatusCodes[mockItem.status] || ''
                }],
            // ['MockItem: ', mockItem]
        ];
        if ((0, utils_1.isNodejs)()) { // less information for nodejs
            var url = mockItem.url, method = mockItem.method, delay = mockItem.delay, times = mockItem.times, status_1 = mockItem.status, disable = mockItem.disable;
            logs[3] = ['MockItem:', { url: url, method: method, delay: delay, times: times, status: status_1, disable: disable }];
        }
        else {
            logs[3] = ['MockItem: ', mockItem];
        }
        this.groupLog(logs);
    };
    return Mocker;
}());
exports.default = Mocker;
//# sourceMappingURL=mocker.js.map