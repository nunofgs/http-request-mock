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
var request_1 = __importDefault(require("../common/request"));
var utils_1 = require("../common/utils");
var dummyXMLHttpRequest = /** @class */ (function () {
    function dummyXMLHttpRequest() {
        this.requestArgs = [];
        this.reqHeaders = {};
        this._responseHeaders = {};
        this._responseBody = '';
        this.responseType = '';
        // 0 UNSENT Client has been created. open() not called yet.
        // 1 OPENED open() has been called.
        // 2 HEADERS_RECEIVED send() has been called, and headers and status are available.
        // 3 LOADING Downloading; responseText holds partial data.
        // 4 DONE The operation is complete.
        this._readyState = 0;
        this._status = 0;
        this._statusText = '';
    }
    dummyXMLHttpRequest.prototype.open = function (method, url, async, user, password) {
        if (async === void 0) { async = true; }
        if (user === void 0) { user = null; }
        if (password === void 0) { password = null; }
        this.requestArgs = [method, url, async, user, password];
        this._readyState = 1;
    };
    dummyXMLHttpRequest.prototype.send = function (body) {
        var _this = this;
        var _a = this.requestArgs, method = _a[0], url = _a[1], user = _a[2], password = _a[3];
        var opts = user && password ? {
            auth: "".concat(user, ":").concat(password),
        } : {};
        (0, request_1.default)({ url: url, method: method, headers: this.reqHeaders, body: body, opts: opts })
            .then(function (res) {
            _this._responseBody = res.body;
            _this._readyState = 4;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            _this._status = res.response.statusCode;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            _this._statusText = res.response.statusMessage;
            _this._responseHeaders = res.response.headers || {};
            _this.sendResult(_this);
        })
            .catch(function (err) {
            // Before the request completes, the value of status is 0.
            // Browsers also report a status of 0 in case of XMLHttpRequest errors.
            _this._status = 0;
            if (typeof _this.onerror === 'function') {
                _this.onerror(err);
            }
            else {
                throw err;
            }
        });
    };
    /**
     * The XMLHttpRequest.abort() method aborts the request if it has already been sent.
     * When a request is aborted, its readyState is changed to XMLHttpRequest.UNSENT (0)
     * and the request's status code is set to 0.
     */
    dummyXMLHttpRequest.prototype.abort = function () {
        this._status = 0;
        this._readyState = 0;
        this._responseBody = '';
    };
    dummyXMLHttpRequest.prototype.setRequestHeader = function (header, value) {
        this.reqHeaders[header] = value;
    };
    dummyXMLHttpRequest.prototype.sendResult = function (xhr) {
        var isEventReady = typeof Event !== 'undefined' && typeof xhr.dispatchEvent === 'function';
        if (typeof xhr.onreadystatechange === 'function') {
            xhr.onreadystatechange(this.event('readystatechange'));
        }
        else if (isEventReady) {
            xhr.dispatchEvent(new Event('readystatechange'));
        }
        if (typeof xhr.onload === 'function') {
            xhr.onload(this.event('load'));
        }
        else if (isEventReady) {
            xhr.dispatchEvent(new Event('load'));
        }
        if (typeof xhr.onloadend === 'function') {
            xhr.onloadend(this.event('loadend'));
        }
        else if (isEventReady) {
            xhr.dispatchEvent(new Event('loadend'));
        }
    };
    dummyXMLHttpRequest.prototype.event = function (type) {
        return {
            type: type,
            target: null,
            currentTarget: null,
            eventPhase: 0,
            bubbles: false,
            cancelable: false,
            defaultPrevented: false,
            composed: false,
            timeStamp: 294973.8000000119,
            srcElement: null,
            returnValue: true,
            cancelBubble: false,
            path: [],
            NONE: 0,
            CAPTURING_PHASE: 0,
            AT_TARGET: 0,
            BUBBLING_PHASE: 0,
            composedPath: function () { return []; },
            initEvent: function () { return void (0); },
            preventDefault: function () { return void (0); },
            stopImmediatePropagation: function () { return void (0); },
            stopPropagation: function () { return void (0); },
            isTrusted: false,
            lengthComputable: false,
            loaded: 1,
            total: 1
        };
    };
    dummyXMLHttpRequest.prototype.getAllResponseHeaders = function () {
        return Object.entries(__assign({}, this._responseHeaders))
            .map(function (_a) {
            var key = _a[0], val = _a[1];
            return key.toLowerCase() + ': ' + val;
        })
            .join('\r\n');
    };
    dummyXMLHttpRequest.prototype.getResponseHeader = function (key) {
        return this._responseHeaders[key] === undefined ? null : this._responseHeaders[key];
    };
    Object.defineProperty(dummyXMLHttpRequest.prototype, "readyState", {
        get: function () {
            return this._readyState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dummyXMLHttpRequest.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dummyXMLHttpRequest.prototype, "statusText", {
        get: function () {
            return this._statusText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dummyXMLHttpRequest.prototype, "response", {
        get: function () {
            var type = this.responseType;
            if (type === 'text' || type === '') {
                return this.responseText;
            }
            if (type === 'arraybuffer') {
                if ((0, utils_1.isArrayBuffer)(this._responseBody)) {
                    return this._responseBody;
                }
                else if (typeof this._responseBody === 'string') {
                    return (0, utils_1.str2arrayBuffer)(this._responseBody);
                }
                else {
                    return (0, utils_1.str2arrayBuffer)(JSON.stringify(this._responseBody));
                }
            }
            if (type === 'json') {
                if (typeof this._responseBody === 'string') {
                    try {
                        return JSON.parse(this._responseBody);
                    }
                    catch (err) { // eslint-disable-line
                        return null;
                    }
                }
            }
            return this._responseBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dummyXMLHttpRequest.prototype, "responseText", {
        get: function () {
            return typeof this._responseBody === 'string'
                ? this._responseBody
                : JSON.stringify(this._responseBody);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dummyXMLHttpRequest.prototype, "responseURL", {
        get: function () {
            return this.requestArgs[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dummyXMLHttpRequest.prototype, "responseXML", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    return dummyXMLHttpRequest;
}());
exports.default = dummyXMLHttpRequest;
//# sourceMappingURL=xhr.js.map