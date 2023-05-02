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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bypass_1 = __importDefault(require("../common/bypass"));
var utils_1 = require("../common/utils");
var config_1 = require("../config");
var base_1 = __importDefault(require("./base"));
var XMLHttpRequestInterceptor = /** @class */ (function (_super) {
    __extends(XMLHttpRequestInterceptor, _super);
    function XMLHttpRequestInterceptor(mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var _this = _super.call(this, mocker, proxyServer) || this;
        if (XMLHttpRequestInterceptor.instance) {
            return XMLHttpRequestInterceptor.instance;
        }
        XMLHttpRequestInterceptor.instance = _this;
        _this.xhr = _this.global.XMLHttpRequest.prototype;
        _this.intercept();
        return _this;
    }
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
     * Logic of intercepting XMLHttpRequest object.
     */
    XMLHttpRequestInterceptor.prototype.intercept = function () {
        // intercept methods
        this.interceptOpen();
        this.interceptSend();
        this.interceptSetRequestHeader();
        this.interceptGetAllResponseHeaders();
        this.interceptGetResponseHeader();
        // intercept getters
        this.interceptReadyState();
        this.interceptStatus();
        this.interceptStatusText();
        this.interceptResponseText();
        this.interceptResponse();
        this.interceptResponseURL();
        this.interceptResponseXML();
        return this;
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
     * Logic of intercepting XMLHttpRequest.open method.
     */
    XMLHttpRequestInterceptor.prototype.interceptOpen = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        var original = this.xhr.open;
        Object.defineProperty(this.xhr, 'open', {
            get: function () {
                var _this = this;
                return function (method, url, async, user, password) {
                    if (async === void 0) { async = true; }
                    if (user === void 0) { user = null; }
                    if (password === void 0) { password = null; }
                    var requestUrl = me.getFullRequestUrl(url, method);
                    var mockItem = me.matchMockRequest(requestUrl, method);
                    if (!_this.bypassMock) {
                        if (mockItem) {
                            // 'this' points XMLHttpRequest instance.
                            _this.isMockRequest = true;
                            _this.mockItem = mockItem;
                            _this.mockResponse = new NotResolved();
                            _this.requestInfo = me.getRequestInfo({ url: requestUrl, method: method, });
                            _this.requestArgs = [method, requestUrl, async, user, password];
                            _this.requestInfo.doOriginalCall = function () { return __awaiter(_this, void 0, void 0, function () {
                                var res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, me.getOriginalResponse(this)];
                                        case 1:
                                            res = _a.sent();
                                            this.requestInfo.doOriginalCall = undefined;
                                            return [2 /*return*/, res];
                                    }
                                });
                            }); };
                            return;
                        }
                    }
                    return original.call(_this, method, requestUrl, async, user, password);
                };
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.send method.
     */
    XMLHttpRequestInterceptor.prototype.interceptSend = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        var original = this.xhr.send;
        Object.defineProperty(this.xhr, 'send', {
            get: function () {
                var _this = this;
                return function (body) {
                    var _a;
                    if (_this.isMockRequest) {
                        if (body !== null && body !== undefined) {
                            _this.requestInfo.rawBody = body;
                            _this.requestInfo.body = (0, utils_1.tryToParseObject)(body);
                        }
                        // remoteInfo has a higher priority than BypassMock
                        var remoteInfo = (_a = _this.mockItem) === null || _a === void 0 ? void 0 : _a.getRemoteInfo(_this.requestInfo.url);
                        if (remoteInfo) {
                            return me.sendRemoteResult(_this, _this.mockItem, remoteInfo);
                        }
                        return me.doMockRequest(_this).then(function (isBypassed) {
                            if (isBypassed) {
                                _this.isMockRequest = false;
                                _this.bypassMock = true;
                                _this.open.apply(_this, _this.requestArgs);
                                return original.call(_this, body);
                            }
                        });
                    }
                    return original.call(_this, body);
                };
            }
        });
        return this;
    };
    /**
     * Set remote result.
     * @param {XMLHttpRequestInstance} xhr
     * @param {Record<string, string>} remoteInfo
     */
    XMLHttpRequestInterceptor.prototype.sendRemoteResult = function (xhr, mockItem, remoteInfo) {
        var _this = this;
        var _a = xhr.requestArgs, method = _a[0], async = _a[1], user = _a[2], password = _a[3];
        var newXhr = new XMLHttpRequest();
        newXhr.responseType = xhr.responseType;
        newXhr.timeout = xhr.timeout;
        Object.assign(newXhr, { isMockRequest: false, bypassMock: true });
        newXhr.onreadystatechange = function () {
            if (newXhr.readyState === 4) {
                var remoteResponse = {
                    status: newXhr.status,
                    headers: newXhr.getAllResponseHeaders().split('\r\n').reduce(function (res, item) {
                        var _a = item.split(':'), key = _a[0], val = _a[1];
                        if (key && val) {
                            res[key.toLowerCase()] = val.trim();
                        }
                        return res;
                    }, {}),
                    response: newXhr.response,
                    responseText: newXhr.responseText,
                    responseJson: (0, utils_1.tryToParseJson)(newXhr.responseText)
                };
                _this.doMockRequest(xhr, remoteResponse);
            }
        };
        newXhr.open(remoteInfo.method || method, remoteInfo.url, async, user, password);
        Object.entries(mockItem.requestHeaders).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            newXhr.setRequestHeader(key, val);
        });
        newXhr.send(xhr.requestInfo.rawBody); // raw body
        return xhr;
    };
    /**
     * Get original response
     * @param {XMLHttpRequestInstance} xhr
     */
    XMLHttpRequestInterceptor.prototype.getOriginalResponse = function (xhr) {
        var _a = xhr.requestArgs, method = _a[0], requestUrl = _a[1], async = _a[2], user = _a[3], password = _a[4];
        var requestInfo = xhr.requestInfo;
        return new Promise(function (resolve) {
            var newXhr = new XMLHttpRequest();
            newXhr.responseType = xhr.responseType;
            newXhr.timeout = xhr.timeout;
            Object.assign(newXhr, { isMockRequest: false, bypassMock: true });
            var status = null;
            var headers = {};
            var responseText = null;
            var responseJson = null;
            var responseBuffer = null;
            var responseBlob = null;
            newXhr.onreadystatechange = function handleLoad() {
                if (newXhr.readyState === 4) {
                    var responseType = newXhr.responseType;
                    status = newXhr.status;
                    headers = newXhr.getAllResponseHeaders()
                        .split('\r\n')
                        .reduce(function (res, item) {
                        var _a = item.split(':'), key = _a[0], val = _a[1];
                        if (key && val) {
                            res[key.toLowerCase()] = val.trim();
                        }
                        return res;
                    }, {});
                    responseText = !responseType || responseType === 'text' || responseType === 'json'
                        ? newXhr.responseText
                        : (typeof newXhr.response === 'string' ? typeof newXhr.response : null);
                    responseJson = (0, utils_1.tryToParseJson)(responseText);
                    responseBuffer = (typeof ArrayBuffer === 'function') && (newXhr.response instanceof ArrayBuffer)
                        ? newXhr.response
                        : null;
                    responseBlob = (typeof Blob === 'function') && (newXhr.response instanceof Blob)
                        ? newXhr.response
                        : null;
                    resolve({ status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: null });
                }
            };
            newXhr.open(method, requestUrl, async, user, password);
            newXhr.ontimeout = function handleTimeout() {
                var error = new Error('timeout exceeded');
                resolve({ status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: error });
            };
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            newXhr.onerror = function handleError() {
                var error = new Error('network error');
                resolve({ status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: error });
            };
            // Handle browser request cancellation (as opposed to a manual cancellation)
            newXhr.onabort = function handleAbort() {
                var error = new Error('request aborted');
                resolve({ status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: error });
            };
            Object.entries(requestInfo.headers || {}).forEach(function (_a) {
                var key = _a[0], val = _a[1];
                newXhr.setRequestHeader(key, val);
            });
            newXhr.send(requestInfo.rawBody); // raw body
        });
    };
    /**
     * Make mock request.
     * @param {XMLHttpRequestInstance} xhr
     * @param {RemoteResponse | null} remoteResponse
     */
    XMLHttpRequestInterceptor.prototype.doMockRequest = function (xhr, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var isBypassed, mockItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isBypassed = false;
                        mockItem = xhr.mockItem;
                        if (!(mockItem.delay && mockItem.delay > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, utils_1.sleep)(+mockItem.delay)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.doMockResponse(xhr, remoteResponse)];
                    case 2:
                        isBypassed = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.doMockResponse(xhr, remoteResponse)];
                    case 4:
                        isBypassed = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, isBypassed];
                }
            });
        });
    };
    /**
     * Make mock response.
     * @param {XMLHttpRequestInstance} xhr
     * @param {RemoteResponse | null} remoteResponse
     */
    XMLHttpRequestInterceptor.prototype.doMockResponse = function (xhr, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var mockItem, requestInfo, now, body, _a, spent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mockItem = xhr.mockItem, requestInfo = xhr.requestInfo;
                        now = Date.now();
                        if (!remoteResponse) return [3 /*break*/, 2];
                        return [4 /*yield*/, mockItem.sendBody(requestInfo, remoteResponse)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, mockItem.sendBody(requestInfo)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        body = _a;
                        if (body instanceof bypass_1.default) {
                            if (remoteResponse) {
                                throw new Error('[http-request-mock] A request which is marked by @remote tag cannot be bypassed.');
                            }
                            return [2 /*return*/, true];
                        }
                        spent = (Date.now() - now) + (mockItem.delay || 0);
                        xhr.mockResponse = body;
                        this.mocker.sendResponseLog(spent, body, xhr.requestInfo, mockItem);
                        this.sendResult(xhr);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#event_handlers
     * Call some necessary callbacks if specified. Trigger some necessary events.
     * 'onreadystatechange' as a property of the XMLHttpRequest instance is supported in all browsers.
     * Since then, a number of additional on* event handler properties have been implemented in various
     * browsers (onload, onerror, onprogress, etc.). See Using XMLHttpRequest. More recent browsers,
     * including Firefox, also support listening to the XMLHttpRequest events via standard addEventListener() APIs
     * in addition to setting on* properties to a handler function.
     * @param {XMLHttpRequest} xhr
     */
    XMLHttpRequestInterceptor.prototype.sendResult = function (xhr) {
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
    XMLHttpRequestInterceptor.prototype.event = function (type) {
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
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
     * Logic of intercepting XMLHttpRequest.getAllResponseHeaders method.
     */
    XMLHttpRequestInterceptor.prototype.interceptGetAllResponseHeaders = function () {
        var original = this.xhr.getAllResponseHeaders;
        Object.defineProperty(this.xhr, 'getAllResponseHeaders', {
            get: function () {
                var _this = this;
                return function () {
                    if (_this.isMockRequest) {
                        return Object.entries(__assign(__assign({}, _this.mockItem.headers), { 'x-powered-by': 'http-request-mock' }))
                            .map(function (_a) {
                            var key = _a[0], val = _a[1];
                            return key.toLowerCase() + ': ' + val;
                        })
                            .join('\r\n');
                    }
                    return original.call(_this);
                };
            }
        });
        return this;
    };
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getResponseHeader
     * Logic of intercepting XMLHttpRequest.getResponseHeader method.
     */
    XMLHttpRequestInterceptor.prototype.interceptGetResponseHeader = function () {
        var original = this.xhr.getResponseHeader;
        Object.defineProperty(this.xhr, 'getResponseHeader', {
            get: function () {
                var _this = this;
                return function (field) {
                    if (_this.isMockRequest) {
                        if (/^x-powered-by$/i.test(field)) {
                            return 'http-request-mock';
                        }
                        var item = Object.entries(_this.mockItem.headers).find(function (_a) {
                            var key = _a[0];
                            return key.toLowerCase() === field;
                        });
                        return item ? item[1] : null;
                    }
                    return original.call(_this, field);
                };
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.interceptSetRequestHeader method.
     */
    XMLHttpRequestInterceptor.prototype.interceptSetRequestHeader = function () {
        var original = this.xhr.setRequestHeader;
        Object.defineProperty(this.xhr, 'setRequestHeader', {
            get: function () {
                var _this = this;
                return function (header, value) {
                    if (_this.isMockRequest) {
                        _this.requestInfo.headers = _this.requestInfo.headers || {};
                        _this.requestInfo.header = _this.requestInfo.header || {};
                        _this.requestInfo.headers[header] = value;
                        _this.requestInfo.header[header] = value;
                        return;
                    }
                    return original.call(_this, header, value);
                };
            }
        });
        return this;
    };
    /**
     * Get getter function by key.
     * @param {string} key
     */
    XMLHttpRequestInterceptor.prototype.getGetter = function (key) {
        var descriptor = Object.getOwnPropertyDescriptor(this.xhr, key);
        if (descriptor) {
            return descriptor.get;
        }
        // when XMLHttpRequest is not a standard implement.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.xhr[key];
    };
    /**
     * Logic of intercepting XMLHttpRequest.readyState getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
     */
    XMLHttpRequestInterceptor.prototype.interceptReadyState = function () {
        var original = this.getGetter('readyState');
        Object.defineProperty(this.xhr, 'readyState', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return 1; // OPENED
                    return 4;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.status getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status
     */
    XMLHttpRequestInterceptor.prototype.interceptStatus = function () {
        var original = this.getGetter('status');
        Object.defineProperty(this.xhr, 'status', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return 0;
                    return this.mockItem.status;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.statusText getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/statusText
     */
    XMLHttpRequestInterceptor.prototype.interceptStatusText = function () {
        var original = this.getGetter('statusText');
        Object.defineProperty(this.xhr, 'statusText', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return '';
                    return config_1.HTTPStatusCodes[this.mockItem.status] || '';
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.responseText getter.
     */
    XMLHttpRequestInterceptor.prototype.interceptResponseText = function () {
        var original = this.getGetter('responseText');
        Object.defineProperty(this.xhr, 'responseText', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return '';
                    var data = this.mockResponse;
                    return typeof data === 'string' ? data : JSON.stringify(data);
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.response getter.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
     * When setting responseType to a particular value, the author should make
     * sure that the server is actually sending a response compatible with that
     * format. If the server returns data that is not compatible with the
     * responseType that was set, the value of response will be null.
     */
    XMLHttpRequestInterceptor.prototype.interceptResponse = function () {
        var original = this.getGetter('response');
        Object.defineProperty(this.xhr, 'response', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return null;
                    var type = this.responseType;
                    // An empty responseType string is the same as "text", the default type.
                    if (type === 'text' || type === '') {
                        return this.responseText;
                    }
                    // The response is a JavaScript ArrayBuffer containing binary data.
                    if (type === 'arraybuffer' && typeof ArrayBuffer === 'function') {
                        return (this.mockResponse instanceof ArrayBuffer) ? this.mockResponse : null;
                    }
                    // The response is a Blob object containing the binary data.
                    if (type === 'blob' && typeof Blob === 'function') {
                        return (this.mockResponse instanceof Blob) ? this.mockResponse : null;
                    }
                    // The response is an HTML Document or XML XMLDocument, as appropriate based on the MIME type of
                    // the received data. See HTML in XMLHttpRequest to learn more about using XHR to fetch HTML content.
                    if (type === 'document' && (typeof Document === 'function' || typeof XMLDocument === 'function')) {
                        return ((this.mockResponse instanceof Document) || (this.mockResponse instanceof XMLDocument))
                            ? this.mockResponse
                            : null;
                    }
                    // The response is a JavaScript object created by parsing the contents of received data as JSON.
                    if (type === 'json') {
                        if (typeof this.mockResponse === 'object') {
                            return this.mockResponse;
                        }
                        if (typeof this.mockResponse === 'string') {
                            try {
                                return JSON.parse(this.mockResponse);
                            }
                            catch (err) { // eslint-disable-line
                                // console.warn('The mock response is not compatible with the responseType json: ' + err.message);
                                return null;
                            }
                        }
                        return null;
                    }
                    return this.mockResponse;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.responseURL getter.
     */
    XMLHttpRequestInterceptor.prototype.interceptResponseURL = function () {
        var original = this.getGetter('responseURL');
        Object.defineProperty(this.xhr, 'responseURL', {
            get: function () {
                if (this.isMockRequest) {
                    return this.requestInfo.url;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.responseXML getter.
     */
    XMLHttpRequestInterceptor.prototype.interceptResponseXML = function () {
        var original = this.getGetter('responseXML');
        Object.defineProperty(this.xhr, 'responseXML', {
            get: function () {
                if (this.isMockRequest) {
                    return this.responseType === 'document' ? this.response : null;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    return XMLHttpRequestInterceptor;
}(base_1.default));
exports.default = XMLHttpRequestInterceptor;
var NotResolved = /** @class */ (function () {
    function NotResolved() {
    }
    return NotResolved;
}());
//# sourceMappingURL=xml-http-request.js.map