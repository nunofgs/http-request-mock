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
/* eslint-disable @typescript-eslint/no-empty-function */
var bypass_1 = __importDefault(require("../common/bypass"));
var utils_1 = require("../common/utils");
var base_1 = __importDefault(require("./base"));
var WxRequestInterceptor = /** @class */ (function (_super) {
    __extends(WxRequestInterceptor, _super);
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
                        wxRequestOpts.header = __assign(__assign({}, (wxRequestOpts.header || {})), mockItem.requestHeaders);
                    }
                    return _this.sendRemoteResult(wxRequestOpts, mockItem, requestInfo);
                }
                if (/^get$/i.test(wxRequestOpts.method) && (0, utils_1.isObject)(wxRequestOpts.data)) {
                    requestInfo.query = __assign(__assign({}, requestInfo.query), wxRequestOpts.data);
                }
                else {
                    requestInfo.body = wxRequestOpts.data;
                }
                requestInfo.doOriginalCall = function () { return __awaiter(_this, void 0, void 0, function () {
                    var res;
                    return __generator(this, function (_a) {
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
        this.wxRequest(__assign(__assign({}, wxRequestOpts), { success: function (wxResponse) {
                var remoteResponse = {
                    status: wxResponse.statusCode,
                    headers: wxResponse.header,
                    response: wxResponse.data,
                    responseText: typeof wxResponse.data === 'string' ? wxResponse.data : JSON.stringify(wxResponse.data),
                    responseJson: typeof wxResponse.data === 'string' ? (0, utils_1.tryToParseJson)(wxResponse.data) : wxResponse.data
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
            _this.wxRequest(__assign(__assign({}, wxRequestOpts), { success: function (wxResponse) {
                    var data = wxResponse.data;
                    resolve({
                        status: wxResponse.statusCode,
                        headers: wxResponse.header,
                        responseText: typeof data === 'string' ? data : JSON.stringify(data),
                        responseJson: typeof data === 'string' ? (0, utils_1.tryToParseJson)(data) : data,
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
        return __awaiter(this, void 0, void 0, function () {
            var now, body, spent, wxResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = Date.now();
                        return [4 /*yield*/, mockItem.sendBody(requestInfo, remoteResponse)];
                    case 1:
                        body = _a.sent();
                        if (body instanceof bypass_1.default) {
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
            header: __assign(__assign({}, mockItem.headers), { 'x-powered-by': 'http-request-mock' }),
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
}(base_1.default));
exports.default = WxRequestInterceptor;
//# sourceMappingURL=wx-request.js.map