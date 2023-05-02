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
/* eslint-disable @typescript-eslint/ban-types */
var bypass_1 = __importDefault(require("../common/bypass"));
var utils_1 = require("../common/utils");
var config_1 = require("../config");
var base_1 = __importDefault(require("./base"));
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
            var json = (0, utils_1.tryToParseJson)(text);
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
                        responseJson = responseText === null ? null : (0, utils_1.tryToParseJson)(responseText);
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
                        return [4 /*yield*/, (0, utils_1.sleep)(+mockItem.delay)];
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
                        if (body instanceof bypass_1.default) {
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
        var statusText = config_1.HTTPStatusCodes[status] || '';
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
}(base_1.default));
exports.default = FetchInterceptor;
//# sourceMappingURL=fetch.js.map