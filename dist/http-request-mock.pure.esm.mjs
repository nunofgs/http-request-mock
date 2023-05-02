/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ mocker_mocker),
  "Z": () => (/* binding */ browser_pure)
});

;// CONCATENATED MODULE: ./src/common/bypass.ts
var Bypass = /** @class */ (function () {
    function Bypass() {
        this.flag = 'yes';
    }
    return Bypass;
}());
/* harmony default export */ const bypass = (Bypass);

;// CONCATENATED MODULE: ./src/common/utils.ts
var utils_filename = "/index.js";
/**
 * Get query parameters from the specified request url.
 * https://www.sitepoint.com/get-url-parameters-with-javascript/
 *
 * @param {string} reqUrl
 */
function getQuery(reqUrl) {
    var _a;
    // no protocol, domain, path and hash tag
    var query = (reqUrl || '').replace(/^.*?\?/g, '').replace(/#.*$/g, '');
    var obj = {};
    if (query) {
        var parts = query.split('&');
        for (var i = 0; i < parts.length; i++) {
            var _b = parts[i].split('='), key = _b[0], _c = _b[1], val = _c === void 0 ? '' : _c;
            // for keys which ends with square brackets, such as list[] or list[1]
            if (key.match(/\[(\d+)?\]$/)) {
                var field = key.replace(/\[(\d+)?\]/, '');
                obj[field] = obj[field] || [];
                if (key.match(/\[\d+\]$/)) {
                    // set array index, if it's an indexed array e.g. list[2]
                    obj[field][Number((_a = /\[(\d+)\]/.exec(key)) === null || _a === void 0 ? void 0 : _a[1])] = val;
                }
                else {
                    obj[field].push(val);
                }
            }
            else {
                if (key in obj) {
                    obj[key] = [].concat(obj[key], val);
                }
                else {
                    obj[key] = val;
                }
            }
        }
    }
    return obj;
}
/**
 * Convert query object to search string.
 * @param {object} queryObj
 */
function queryObject2String(queryObj) {
    var str = [];
    for (var key in queryObj) {
        if (Array.isArray(queryObj[key])) {
            for (var _i = 0, _a = queryObj[key]; _i < _a.length; _i++) {
                var val = _a[_i];
                str.push(key + '=' + val);
            }
        }
        else {
            str.push(key + '=' + queryObj[key]);
        }
    }
    return str.join('&');
}
/**
 * Check whether or not the specified obj is an object.
 * @param {unknown} obj
 */
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * Try to convert an object like string to an object.
 * @param {unknown} body
 */
function tryToParseObject(body) {
    var isObjLiked = typeof body === 'string' && body[0] === '{' && body[body.length - 1] === '}';
    var isArrLiked = typeof body === 'string' && body[0] === '[' && body[body.length - 1] === ']';
    if (!isObjLiked && !isArrLiked) {
        return body;
    }
    try {
        return JSON.parse(body);
    }
    catch (e) {
        return body;
    }
}
/**
 * Try to parse a JSON string
 * @param {unknown} body
 */
function tryToParseJson(str, defaultVal) {
    if (defaultVal === void 0) { defaultVal = null; }
    try {
        return JSON.parse(String(str));
    }
    catch (e) {
        return defaultVal;
    }
}
/**
 * Sleep the specified number of milliseconds.
 * @param {number} ms
 */
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
/**
 * Convert string to arraybuffer.
 * @param {string} str
 */
function str2arrayBuffer(str) {
    if (typeof TextEncoder === 'function') {
        return new TextEncoder().encode(str);
    }
    if (typeof ArrayBuffer === 'function') {
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    return null;
}
/**
 * Whether or not the specified data is arraybuffer.
 * @param {unknown} data
 */
function isArrayBuffer(data) {
    if (typeof ArrayBuffer === 'function' && data instanceof ArrayBuffer) {
        return true;
    }
    if (typeof Int32Array === 'function' && (data instanceof Int32Array)) {
        return true;
    }
    if (typeof Int16Array === 'function' && (data instanceof Int16Array)) {
        return true;
    }
    if (typeof Int8Array === 'function' && (data instanceof Int8Array)) {
        return true;
    }
    return false;
}
/**
 * Get current date.
 */
function currentDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(year), "-").concat(two(month), "-").concat(two(date));
}
/**
 * Get current time.
 */
function currentTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(hour), ":").concat(two(minute), ":").concat(two(second));
}
/**
 * Get current datetime.
 */
function currentDatetime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(year), "-").concat(two(month), "-").concat(two(date), " ").concat(two(hour), ":").concat(two(minute), ":").concat(two(second));
}
/**
 * Check current environment: nodejs or not.
 * Note: arrow function is required.
 */
function isNodejs() {
    return (typeof process !== 'undefined')
        && (Object.prototype.toString.call(process) === '[object process]')
        && (!!(process.versions && process.versions.node));
}
/**
 * Check if an object is a Promise
 */
function isPromise(object) {
    if (Promise && Promise.resolve) {
        return Promise.resolve(object) === object;
    }
    else {
        throw new Error('Promise not supported in your environment');
    }
}
/**
 * Check if an object is imported.
 */
function isImported(obj) {
    return obj && typeof obj === 'object' && Object.keys(obj).length === 1 && ('default' in obj);
}
/**
 * Get caller file from error stack
 */
function getCallerFile() {
    var oldPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) { return stack; };
    var stack = new Error().stack;
    Error.prepareStackTrace = oldPrepareStackTrace;
    if (stack !== null && typeof stack === 'object') {
        for (var i = 0; i < 50; i++) {
            var file = stack[i] ? stack[i].getFileName() : undefined;
            var next = stack[i + 1] ? stack[i + 1].getFileName() : undefined;
            if (file !== next && file === utils_filename) {
                return next;
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/config.ts
var HTTPStatusCodes = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    103: 'Early Hints',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a Teapot',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not Extended',
    511: 'Network Authentication Required'
};

;// CONCATENATED MODULE: ./src/interceptor/base.ts

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
        else if (typeof __webpack_require__.g !== 'undefined') {
            return __webpack_require__.g;
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
            query: getQuery(requestInfo.url),
        };
        if (requestInfo.headers || requestInfo.header) {
            info.headers = requestInfo.headers || requestInfo.header;
        }
        if (requestInfo.body !== undefined) {
            info.body = tryToParseObject(requestInfo.body);
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
/* harmony default export */ const base = (BaseInterceptor);

;// CONCATENATED MODULE: ./src/interceptor/fetch.ts
var __extends = (undefined && undefined.__extends) || (function () {
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
var __assign = (undefined && undefined.__assign) || function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
/* eslint-disable @typescript-eslint/ban-types */




var FetchInterceptor = /** @class */ (function (_super) {
    __extends(FetchInterceptor, _super);
    function FetchInterceptor(mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var _this = _super.call(this, mocker, proxyServer) || this;
        if (FetchInterceptor.instance) {
            return FetchInterceptor.instance;
        }
        FetchInterceptor.instance = _this;
        _this.fetch = _this.global.fetch.bind(_this.global);
        _this.intercept();
        return _this;
    }
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     * Intercept fetch object.
     */
    FetchInterceptor.prototype.intercept = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        this.global.fetch = function (input, init) {
            var _this = this;
            var url;
            var params;
            // https://developer.mozilla.org/en-US/docs/Web/API/Request
            // Note: the first argument of fetch maybe a Request object.
            if (typeof input === 'object') {
                url = input.url;
                params = input;
            }
            else {
                url = input;
                params = init || {};
            }
            var method = (params && params.method ? params.method : 'GET');
            var requestUrl = me.getFullRequestUrl(url, method);
            return new Promise(function (resolve, reject) {
                var mockItem = me.matchMockRequest(requestUrl, method);
                if (!mockItem) {
                    me.fetch(requestUrl, params).then(resolve).catch(reject);
                    return;
                }
                var requestInfo = me.getRequestInfo(__assign(__assign({}, params), { url: requestUrl, method: method }));
                requestInfo.doOriginalCall = function () { return __awaiter(_this, void 0, void 0, function () {
                    var res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, me.getOriginalResponse(requestUrl, params)];
                            case 1:
                                res = _a.sent();
                                requestInfo.doOriginalCall = undefined;
                                return [2 /*return*/, res];
                        }
                    });
                }); };
                var remoteInfo = mockItem === null || mockItem === void 0 ? void 0 : mockItem.getRemoteInfo(requestUrl);
                if (remoteInfo) {
                    params.method = remoteInfo.method || method;
                    me.setRequestHeadersForRemoteRequest(mockItem, params);
                    me.fetch(remoteInfo.url, params).then(function (fetchResponse) {
                        me.sendRemoteResult(fetchResponse, mockItem, requestInfo, resolve);
                    }).catch(reject);
                    return;
                }
                me.doMockRequest(mockItem, requestInfo, resolve).then(function (isBypassed) {
                    if (isBypassed) {
                        me.fetch(requestUrl, params).then(resolve).catch(reject);
                    }
                });
            });
        };
        return this;
    };
    /**
     * Set request headers for requests marked by remote config.
     * @param {AnyObject} fetchParams
     */
    FetchInterceptor.prototype.setRequestHeadersForRemoteRequest = function (mockItem, fetchParams) {
        if (Object.keys(mockItem.requestHeaders).length <= 0)
            return;
        if (typeof Headers === 'function' && fetchParams.headers instanceof Headers) {
            Object.entries(mockItem.requestHeaders).forEach(function (_a) {
                var key = _a[0], val = _a[1];
                fetchParams.headers.set(key, val);
            });
        }
        else {
            fetchParams.headers = __assign(__assign({}, (fetchParams.headers || {})), mockItem.requestHeaders);
        }
    };
    /**
     * Set remote result.
     * @param {FetchResponse} fetchResponse
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    FetchInterceptor.prototype.sendRemoteResult = function (fetchResponse, mockItem, requestInfo, resolve) {
        var _this = this;
        var headers = {};
        if (typeof Headers === 'function' && fetchResponse.headers instanceof Headers) {
            fetchResponse.headers.forEach(function (val, key) {
                headers[key.toLocaleLowerCase()] = val;
            });
        }
        fetchResponse.text().then(function (text) {
            var json = tryToParseJson(text);
            var remoteResponse = {
                status: fetchResponse.status,
                headers: headers,
                response: json || text,
                responseText: text,
                responseJson: json,
            };
            _this.doMockRequest(mockItem, requestInfo, resolve, remoteResponse);
        });
    };
    /**
     * Get original response
     * @param {string} requestUrl
     * @param {FetchRequest | AnyObject} params
     */
    FetchInterceptor.prototype.getOriginalResponse = function (requestUrl, params) {
        return __awaiter(this, void 0, void 0, function () {
            var status, headers, responseText, responseJson, responseBuffer, responseBlob, res, isBlobAvailable, _a, _b, _c, err_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        status = null;
                        headers = {};
                        responseText = null;
                        responseJson = null;
                        responseBuffer = null;
                        responseBlob = null;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 13, , 14]);
                        return [4 /*yield*/, this.fetch(requestUrl, params)];
                    case 2:
                        res = _d.sent();
                        status = res.status;
                        if (typeof Headers === 'function' && res.headers instanceof Headers) {
                            res.headers.forEach(function (val, key) { return (headers[key.toLocaleLowerCase()] = val); });
                        }
                        isBlobAvailable = typeof Blob === 'function'
                            && typeof Blob.prototype.text === 'function'
                            && typeof Blob.prototype.arrayBuffer === 'function'
                            && typeof Blob.prototype.slice === 'function'
                            && typeof Blob.prototype.stream === 'function';
                        if (!isBlobAvailable) return [3 /*break*/, 4];
                        return [4 /*yield*/, res.blob()];
                    case 3:
                        _a = _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = null;
                        _d.label = 5;
                    case 5:
                        responseBlob = _a;
                        if (!isBlobAvailable) return [3 /*break*/, 7];
                        return [4 /*yield*/, responseBlob.text()];
                    case 6:
                        _b = _d.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, res.text()];
                    case 8:
                        _b = _d.sent();
                        _d.label = 9;
                    case 9:
                        responseText = _b;
                        if (!isBlobAvailable) return [3 /*break*/, 11];
                        return [4 /*yield*/, responseBlob.arrayBuffer()];
                    case 10:
                        _c = _d.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        _c = null;
                        _d.label = 12;
                    case 12:
                        responseBuffer = _c;
                        responseJson = responseText === null ? null : tryToParseJson(responseText);
                        return [2 /*return*/, { status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: null }];
                    case 13:
                        err_1 = _d.sent();
                        return [2 /*return*/, { status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: err_1 }];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    FetchInterceptor.prototype.doMockRequest = function (mockItem, requestInfo, resolve, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var isBypassed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isBypassed = false;
                        if (!(mockItem.delay && mockItem.delay > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, sleep(+mockItem.delay)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.doMockResponse(mockItem, requestInfo, resolve, remoteResponse)];
                    case 2:
                        isBypassed = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.doMockResponse(mockItem, requestInfo, resolve, remoteResponse)];
                    case 4:
                        isBypassed = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, isBypassed];
                }
            });
        });
    };
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    FetchInterceptor.prototype.doMockResponse = function (mockItem, requestInfo, resolve, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var body, now, spent, statusCode, headers, transformed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mockItem.sendBody(requestInfo, remoteResponse)];
                    case 1:
                        body = _a.sent();
                        now = Date.now();
                        if (body instanceof bypass) {
                            if (remoteResponse) {
                                throw new Error('[http-request-mock] A request which is marked by @remote tag cannot be bypassed.');
                            }
                            return [2 /*return*/, true];
                        }
                        spent = (Date.now() - now) + (mockItem.delay || 0);
                        statusCode = mockItem.status;
                        headers = __assign(__assign(__assign({}, mockItem.headers), ((remoteResponse === null || remoteResponse === void 0 ? void 0 : remoteResponse.headers) || {})), { 'x-powered-by': 'http-request-mock' });
                        if (!mockItem.transformResponse) return [3 /*break*/, 3];
                        return [4 /*yield*/, mockItem.transformResponse(requestInfo, mockItem)];
                    case 2:
                        transformed = _a.sent();
                        if ('body' in transformed) {
                            body = transformed.body;
                        }
                        if ('headers' in transformed) {
                            headers = __assign(__assign({}, headers), transformed.headers);
                        }
                        if ('status' in transformed) {
                            statusCode = transformed.status;
                        }
                        _a.label = 3;
                    case 3:
                        this.mocker.sendResponseLog(spent, body, requestInfo, mockItem);
                        resolve(this.getFetchResponse(body, headers, statusCode, mockItem, requestInfo));
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Response
     * Format mock data.
     * @param {unknown} responseBody
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     */
    FetchInterceptor.prototype.getFetchResponse = function (responseBody, responseHeaders, responseStatus, mockItem, requestInfo) {
        var data = responseBody;
        var status = responseStatus;
        var statusText = HTTPStatusCodes[status] || '';
        var body = typeof Blob === 'function'
            ? new Blob([typeof data === 'string' ? data : JSON.stringify(data)])
            : data;
        var headers = typeof Headers === 'function'
            ? new Headers(__assign(__assign({}, responseHeaders), { 'x-powered-by': 'http-request-mock' }))
            : Object.entries(__assign(__assign({}, responseHeaders), { 'x-powered-by': 'http-request-mock' }));
        if (typeof Response === 'function') {
            var response_1 = new Response(body, { status: status, statusText: statusText, headers: headers });
            Object.defineProperty(response_1, 'url', { value: requestInfo.url });
            return response_1;
        }
        var response = {
            body: body,
            bodyUsed: false,
            headers: headers,
            ok: true,
            redirected: false,
            status: status,
            statusText: statusText,
            url: requestInfo.url,
            type: 'basic',
            // response data depends on prepared data
            json: function () { return Promise.resolve(data); },
            arrayBuffer: function () { return Promise.resolve(data); },
            blob: function () { return Promise.resolve(body); },
            formData: function () { return Promise.resolve(data); },
            text: function () { return Promise.resolve(typeof data === 'string' ? data : JSON.stringify(data)); },
            // other methods that may be used
            clone: function () { return response; },
            error: function () { return response; },
            redirect: function () { return response; },
        };
        return response;
    };
    return FetchInterceptor;
}(base));
/* harmony default export */ const fetch = (FetchInterceptor);

;// CONCATENATED MODULE: ./src/interceptor/wx-request.ts
var wx_request_extends = (undefined && undefined.__extends) || (function () {
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
var wx_request_assign = (undefined && undefined.__assign) || function () {
    wx_request_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return wx_request_assign.apply(this, arguments);
};
var wx_request_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var wx_request_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
/* eslint-disable @typescript-eslint/no-empty-function */



var WxRequestInterceptor = /** @class */ (function (_super) {
    wx_request_extends(WxRequestInterceptor, _super);
    function WxRequestInterceptor(mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var _this = _super.call(this, mocker, proxyServer) || this;
        if (WxRequestInterceptor.instance) {
            return WxRequestInterceptor.instance;
        }
        WxRequestInterceptor.instance = _this;
        // Note: this.global has no wx object
        _this.wxRequest = wx.request.bind(wx);
        _this.intercept();
        return _this;
    }
    /**
     * https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
     * Intercept wx.request object.
     */
    WxRequestInterceptor.prototype.intercept = function () {
        var _this = this;
        Object.defineProperty(wx, 'request', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function (wxRequestOpts) {
                if (!wxRequestOpts || !wxRequestOpts.url) {
                    return;
                }
                wxRequestOpts.url = _this.getFullRequestUrl(wxRequestOpts.url, wxRequestOpts.method);
                var mockItem = _this.matchMockRequest(wxRequestOpts.url, wxRequestOpts.method);
                var remoteInfo = mockItem === null || mockItem === void 0 ? void 0 : mockItem.getRemoteInfo(wxRequestOpts.url);
                var requestInfo = _this.getRequestInfo(wxRequestOpts);
                if (mockItem && remoteInfo) {
                    wxRequestOpts.url = remoteInfo.url;
                    wxRequestOpts.method = remoteInfo.method || wxRequestOpts.method;
                    if (Object.keys(mockItem.requestHeaders).length > 0) {
                        wxRequestOpts.header = wx_request_assign(wx_request_assign({}, (wxRequestOpts.header || {})), mockItem.requestHeaders);
                    }
                    return _this.sendRemoteResult(wxRequestOpts, mockItem, requestInfo);
                }
                if (/^get$/i.test(wxRequestOpts.method) && isObject(wxRequestOpts.data)) {
                    requestInfo.query = wx_request_assign(wx_request_assign({}, requestInfo.query), wxRequestOpts.data);
                }
                else {
                    requestInfo.body = wxRequestOpts.data;
                }
                requestInfo.doOriginalCall = function () { return wx_request_awaiter(_this, void 0, void 0, function () {
                    var res;
                    return wx_request_generator(this, function (_a) {
                        res = this.getOriginalResponse(wxRequestOpts);
                        requestInfo.doOriginalCall = undefined;
                        return [2 /*return*/, res];
                    });
                }); };
                if (mockItem) {
                    _this.doMockRequest(mockItem, requestInfo, wxRequestOpts).then(function (isBypassed) {
                        if (isBypassed) {
                            _this.wxRequest(wxRequestOpts); // fallback to original wx.request
                        }
                    });
                    return _this.getRequstTask();
                }
                else {
                    wxRequestOpts.url = wxRequestOpts.url;
                    return _this.wxRequest(wxRequestOpts); // fallback to original wx.request
                }
            }
        });
        return this;
    };
    WxRequestInterceptor.prototype.getRequstTask = function () {
        return {
            abort: function () { },
            onHeadersReceived: function () { },
            offHeadersReceived: function () { }
        };
    };
    /**
     * Set remote result.
     * @param {WxRequestOpts} wxRequestOpts
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     */
    WxRequestInterceptor.prototype.sendRemoteResult = function (wxRequestOpts, mockItem, requestInfo) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        // fallback to original wx.request
        this.wxRequest(wx_request_assign(wx_request_assign({}, wxRequestOpts), { success: function (wxResponse) {
                var remoteResponse = {
                    status: wxResponse.statusCode,
                    headers: wxResponse.header,
                    response: wxResponse.data,
                    responseText: typeof wxResponse.data === 'string' ? wxResponse.data : JSON.stringify(wxResponse.data),
                    responseJson: typeof wxResponse.data === 'string' ? tryToParseJson(wxResponse.data) : wxResponse.data
                };
                me.doMockRequest(mockItem, requestInfo, wxRequestOpts, remoteResponse);
            } }));
        return this.getRequstTask();
    };
    /**
     * Get original response
     * @param {WxRequestOpts} wxRequestOpts
     */
    WxRequestInterceptor.prototype.getOriginalResponse = function (wxRequestOpts) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.wxRequest(wx_request_assign(wx_request_assign({}, wxRequestOpts), { success: function (wxResponse) {
                    var data = wxResponse.data;
                    resolve({
                        status: wxResponse.statusCode,
                        headers: wxResponse.header,
                        responseText: typeof data === 'string' ? data : JSON.stringify(data),
                        responseJson: typeof data === 'string' ? tryToParseJson(data) : data,
                        responseBuffer: typeof ArrayBuffer === 'function' && (data instanceof ArrayBuffer)
                            ? data
                            : null,
                        // https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
                        // wx.request does not support Blob response data
                        responseBlob: null,
                        error: null,
                    });
                }, fail: function (err) {
                    resolve({
                        status: 0,
                        headers: {},
                        responseText: null,
                        responseJson: null,
                        responseBuffer: null,
                        responseBlob: null,
                        error: new Error("request error: ".concat(err.errMsg)),
                    });
                } }));
        });
    };
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {WxRequestOpts} wxRequestOpts
     */
    WxRequestInterceptor.prototype.doMockRequest = function (mockItem, requestInfo, wxRequestOpts, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return wx_request_awaiter(this, void 0, void 0, function () {
            var isBypassed;
            return wx_request_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isBypassed = false;
                        if (!(mockItem.delay && mockItem.delay > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, sleep(+mockItem.delay)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.doMockResponse(mockItem, requestInfo, wxRequestOpts, remoteResponse)];
                    case 2:
                        isBypassed = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.doMockResponse(mockItem, requestInfo, wxRequestOpts, remoteResponse)];
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
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {WxRequestOpts} wxRequestOpts
     */
    WxRequestInterceptor.prototype.doMockResponse = function (mockItem, requestInfo, wxRequestOpts, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return wx_request_awaiter(this, void 0, void 0, function () {
            var now, body, spent, wxResponse;
            return wx_request_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = Date.now();
                        return [4 /*yield*/, mockItem.sendBody(requestInfo, remoteResponse)];
                    case 1:
                        body = _a.sent();
                        if (body instanceof bypass) {
                            if (remoteResponse) {
                                throw new Error('[http-request-mock] A request which is marked by @remote tag cannot be bypassed.');
                            }
                            return [2 /*return*/, true];
                        }
                        spent = (Date.now() - now) + (mockItem.delay || 0);
                        wxResponse = this.getWxResponse(body, mockItem);
                        this.mocker.sendResponseLog(spent, body, requestInfo, mockItem);
                        this.sendResult(wxRequestOpts, wxResponse);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * Get WX mock response data.
     * @param {unknown} responseBody
     * @param {MockItem} mockItem
     */
    WxRequestInterceptor.prototype.getWxResponse = function (responseBody, mockItem) {
        var _a;
        // https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
        var setCookieHeader = [].concat((((_a = mockItem.headers) === null || _a === void 0 ? void 0 : _a['set-cookie']) || []));
        return {
            data: responseBody,
            statusCode: mockItem.status || 200,
            header: wx_request_assign(wx_request_assign({}, mockItem.headers), { 'x-powered-by': 'http-request-mock' }),
            cookies: setCookieHeader,
            profile: {},
        };
    };
    /**
     * Call some necessary callbacks if specified.
     * @param {WxRequestOpts} wxRequestOpts
     * @param {WxRequestOpts} response
     */
    WxRequestInterceptor.prototype.sendResult = function (wxRequestOpts, wxResponse) {
        if (typeof wxRequestOpts.success === 'function') {
            wxRequestOpts.success(wxResponse);
        }
        if (typeof wxRequestOpts.complete === 'function') {
            wxRequestOpts.complete(wxResponse);
        }
    };
    return WxRequestInterceptor;
}(base));
/* harmony default export */ const wx_request = (WxRequestInterceptor);

;// CONCATENATED MODULE: ./src/interceptor/xml-http-request.ts
var xml_http_request_extends = (undefined && undefined.__extends) || (function () {
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
var xml_http_request_assign = (undefined && undefined.__assign) || function () {
    xml_http_request_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return xml_http_request_assign.apply(this, arguments);
};
var xml_http_request_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var xml_http_request_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var XMLHttpRequestInterceptor = /** @class */ (function (_super) {
    xml_http_request_extends(XMLHttpRequestInterceptor, _super);
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
                            _this.requestInfo.doOriginalCall = function () { return xml_http_request_awaiter(_this, void 0, void 0, function () {
                                var res;
                                return xml_http_request_generator(this, function (_a) {
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
                            _this.requestInfo.body = tryToParseObject(body);
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
                    responseJson: tryToParseJson(newXhr.responseText)
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
                    responseJson = tryToParseJson(responseText);
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
        return xml_http_request_awaiter(this, void 0, void 0, function () {
            var isBypassed, mockItem;
            return xml_http_request_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isBypassed = false;
                        mockItem = xhr.mockItem;
                        if (!(mockItem.delay && mockItem.delay > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, sleep(+mockItem.delay)];
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
        return xml_http_request_awaiter(this, void 0, void 0, function () {
            var mockItem, requestInfo, now, body, _a, spent;
            return xml_http_request_generator(this, function (_b) {
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
                        if (body instanceof bypass) {
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
                        return Object.entries(xml_http_request_assign(xml_http_request_assign({}, _this.mockItem.headers), { 'x-powered-by': 'http-request-mock' }))
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
                    return HTTPStatusCodes[this.mockItem.status] || '';
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
}(base));
/* harmony default export */ const xml_http_request = (XMLHttpRequestInterceptor);
var NotResolved = /** @class */ (function () {
    function NotResolved() {
    }
    return NotResolved;
}());

;// CONCATENATED MODULE: ./src/mocker/mock-item.ts
var mock_item_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var mock_item_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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


var MockItem = /** @class */ (function () {
    /**
     * Format specified mock item.
     * @param {MockItemInfo} mockItem
     * @returns false | MockItemInfo
     */
    function MockItem(mockItem) {
        var _a;
        this.deProxy = false; // Use this option to make the mock use case run in the browser instead of nodejs.
        if (!mockItem.url || (typeof mockItem.url !== 'string' && !(mockItem.url instanceof RegExp))) {
            return;
        }
        this.url = mockItem.url;
        this.method = /^(get|post|put|patch|delete|head|any)$/i.test(mockItem.method || '')
            ? (_a = mockItem.method) === null || _a === void 0 ? void 0 : _a.toUpperCase()
            : 'ANY';
        var reqHeaders = mockItem.requestHeaders;
        var headers = mockItem.headers || mockItem.header;
        this.header = headers && typeof headers === 'object' ? headers : {};
        this.headers = headers && typeof headers === 'object' ? headers : {};
        this.requestHeaders = reqHeaders && typeof reqHeaders === 'object' ? reqHeaders : {};
        this.delay = mockItem.delay !== undefined && /^\d{0,15}$/.test(mockItem.delay + '') ? (+mockItem.delay) : 0;
        this.times = mockItem.times !== undefined && /^-?\d{0,15}$/.test(mockItem.times + '') ? +mockItem.times : Infinity;
        this.status = mockItem.status && /^[1-5][0-9][0-9]$/.test(mockItem.status + '') ? +mockItem.status : 200;
        this.disable = (mockItem.disable && /^(yes|true|1)$/.test(mockItem.disable) ? 'YES' : 'NO');
        this.setBody(mockItem);
        this.transformResponse = mockItem.transformResponse;
        var isUrlLiked = /^((get|post|put|patch|delete|head)\s+)?https?:\/\//i.test(mockItem.remote);
        var isDollarUrl = mockItem.remote === '$url';
        if (mockItem.remote && (isUrlLiked || isDollarUrl)) {
            this.remote = mockItem.remote;
        }
        else if (mockItem.remote) {
            throw new Error('Invalid @remote config. Valid @remote examples: http://x.com/, GET http://x.com, $url');
        }
        this.deProxy = !!mockItem.deProxy;
        this.key = "".concat(this.url, "-").concat(this.method);
    }
    MockItem.prototype.setBody = function (mockItem) {
        var body;
        if ('body' in mockItem) {
            body = mockItem.body;
        }
        else if ('response' in mockItem) {
            body = mockItem.response;
        }
        else {
            body = '';
        }
        this.body = body;
    };
    MockItem.prototype.bypass = function () {
        return new bypass;
    };
    MockItem.prototype.sendBody = function (requestInfo, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return mock_item_awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            return mock_item_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isPromise(this.body)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.body];
                    case 1:
                        data = _b.sent();
                        this.body = isImported(data) ? data.default : data;
                        _b.label = 2;
                    case 2:
                        if (!(typeof this.body === 'function')) return [3 /*break*/, 7];
                        if (!remoteResponse) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.body.bind(this)(remoteResponse, requestInfo, this)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.body.bind(this)(requestInfo, this)];
                    case 5:
                        _a = _b.sent();
                        _b.label = 6;
                    case 6:
                        body = _a;
                        return [3 /*break*/, 8];
                    case 7:
                        body = this.body;
                        _b.label = 8;
                    case 8: return [2 /*return*/, body];
                }
            });
        });
    };
    MockItem.prototype.getRemoteInfo = function (requestUrl) {
        if (!this.remote)
            return false;
        var arr = this.remote.split(/(\s)/);
        var method = '';
        var url = this.remote;
        if (/^(get|post|put|patch|delete|head)$/i.test(arr[0])) {
            method = arr[0];
            url = arr.slice(2).join('');
        }
        var query = getQuery(requestUrl);
        for (var key in query) {
            var queryString = Array.isArray(query[key]) ? query[key].join(',') : query[key];
            url = url.replace(new RegExp('\\$query\.' + key, 'g'), queryString);
        }
        url = url.replace(/\$query/g, queryObject2String(query));
        url = url === '$url' ? requestUrl : url;
        return { method: method, url: url };
    };
    return MockItem;
}());
/* harmony default export */ const mock_item = (MockItem);

;// CONCATENATED MODULE: ./src/mocker/mocker.ts
var mocker_assign = (undefined && undefined.__assign) || function () {
    mocker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return mocker_assign.apply(this, arguments);
};



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
        this.log = !isNodejs();
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
        if (!isObject(mockItemInfo)) {
            throw new Error('Invalid mock item, a valid mock item must be an object.');
        }
        var mockItem = new mock_item(mockItemInfo);
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
                "".concat(currentTime()),
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
                    headers: mocker_assign(mocker_assign({}, mockItem.headers), { 'x-powered-by': 'http-request-mock' }),
                    status: mockItem.status,
                    statusText: HTTPStatusCodes[mockItem.status] || ''
                }],
            // ['MockItem: ', mockItem]
        ];
        if (isNodejs()) { // less information for nodejs
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
/* harmony default export */ const mocker_mocker = (Mocker);

;// CONCATENATED MODULE: ./src/browser.pure.ts





var BrowserPureIndex = /** @class */ (function () {
    function BrowserPureIndex() {
    }
    /**
     * Auto detect request environment and setup request mock for wx.request, fetch and XHR.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setup = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_mocker(proxyServer);
        if (this.isEnabled && typeof wx !== 'undefined' && typeof wx.request === 'function') {
            wx_request.setup(mocker, proxyServer);
        }
        if (this.isEnabled && typeof window !== 'undefined' && typeof window.XMLHttpRequest === 'function') {
            xml_http_request.setup(mocker, proxyServer);
        }
        if (this.isEnabled && typeof window !== 'undefined' && typeof window.fetch === 'function') {
            fetch.setup(mocker, proxyServer);
        }
        return mocker;
    };
    /**
     * Setup request mock for wx.request.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForWx = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_mocker(proxyServer);
        this.isEnabled && wx_request.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Setup request mock for XMLHttpRequest.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForXhr = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_mocker(proxyServer);
        this.isEnabled && xml_http_request.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Setup request mock for fetch.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForFetch = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_mocker(proxyServer);
        this.isEnabled && fetch.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Enable mock function temporarily.
     * Not available in proxy mode.
     */
    BrowserPureIndex.enable = function () {
        this.isEnabled = true;
        return mocker_mocker.getInstance().enable();
    };
    /**
     * Disable mock function temporarily.
     * Not available in proxy mode.
     */
    BrowserPureIndex.disable = function () {
        this.isEnabled = false;
        return mocker_mocker.getInstance().disable();
    };
    /**
     * Enable verbose log.
     * Not available in proxy mode.
     */
    BrowserPureIndex.enableLog = function () {
        return mocker_mocker.getInstance().enableLog();
    };
    /**
     * Disable verbose log.
     * Not available in proxy mode.
     */
    BrowserPureIndex.disableLog = function () {
        return mocker_mocker.getInstance().disableLog();
    };
    BrowserPureIndex.isEnabled = true;
    BrowserPureIndex.default = BrowserPureIndex; // for backward compatibility
    return BrowserPureIndex;
}());
/* harmony default export */ const browser_pure = (BrowserPureIndex);

var __webpack_exports__Mocker = __webpack_exports__.P;
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__Mocker as Mocker, __webpack_exports__default as default };

//# sourceMappingURL=http-request-mock.pure.esm.mjs.map