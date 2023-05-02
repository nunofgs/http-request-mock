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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var net_1 = require("net");
var util_1 = require("util");
var bypass_1 = __importDefault(require("../../common/bypass"));
var request_1 = __importStar(require("../../common/request"));
var utils_1 = require("../../common/utils");
var config_1 = require("../../config");
/**
 * ClientRequest constructor
 * @param {string} url
 * @param {object} options options of http.get, https.get, http.request or https.request method.
 * @param {function} callback callback of http.get, https.get, http.request or https.request method.
 */
function ClientRequest(url, options, callback) {
    var _this = this;
    // http.OutgoingMessage serves as the parent class of http.ClientRequest and http.ServerResponse.
    // It is an abstract of outgoing message from the perspective of the participants of HTTP transaction.
    http_1.default.OutgoingMessage.call(this);
    this.requestBody = Buffer.alloc(0);
    this.url = url;
    this.options = options;
    this.callback = callback;
    this.nativeInstance = null;
    /**
     * Initialize socket & response object
     */
    this.init = function () {
        var _a, _b;
        var _c = [_this.options, _this.callback], options = _c[0], callback = _c[1];
        _this.method = options.method || 'GET';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _this.path = options.path || '/';
        // The optional callback parameter will be added as
        // a one-time listener for the 'response' event.
        if (callback) {
            _this.once('response', callback);
        }
        // outgoingMessage.headersSent
        if (!_this.headersSent && options.headers) {
            for (var key in options.headers) {
                _this.setHeader(key, options.headers[key]);
            }
        }
        // make an empty socket
        _this.socket = new net_1.Socket();
        _this.connection = _this.socket; // for compatibility
        if (/^https/i.test(_this.url)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            _this.socket.authorized = true;
        }
        if (options.timeout) {
            _this.setTimeout(options.timeout);
            _this.socket.setTimeout(options.timeout);
        }
        if (((_a = options.headers) === null || _a === void 0 ? void 0 : _a.expect) === '100-continue') {
            _this.emit('continue');
        }
        _this.response = new http_1.default.IncomingMessage(_this.socket);
        _this.emit('socket', _this.socket);
        (_b = _this.socket) === null || _b === void 0 ? void 0 : _b.emit('connect');
    };
    this.init();
    /**
     * Set mock item resolver. 'mockItemResolver' will be used in end method.`
     * @param {Promise<MockItem>} mockItemResolver
     */
    this.setMockItemResolver = function (mockItemResolver) {
        _this.mockItemResolver = mockItemResolver;
        return _this;
    };
    this.setOriginalRequestInfo = function (getOrRequest, nativeReqestMethod, nativeRequestArgs) {
        _this.nativeReqestName = getOrRequest; // get or request
        _this.nativeReqestMethod = nativeReqestMethod;
        _this.nativeRequestArgs = nativeRequestArgs;
    };
    /**
     * Destroy the request. Optionally emit an 'error' event, and emit a 'close' event.
     * Calling this will cause remaining data in the response to be dropped and the socket to be destroyed.
     */
    this.destroy = function () {
        if (_this.aborted || _this.destroyed)
            return _this;
        _this.aborted = true;
        _this.destroyed = true;
        _this.response.emit('close', __assign(__assign({}, new Error()), { code: 'aborted' }));
        // socket.destroy()
        _this.emit('abort');
        return _this;
    };
    /**
     * We keep abort method for compatibility.
     * 'abort' has been Deprecated; Use request.destroy() instead.
     */
    this.abort = function () {
        _this.destroy();
        return _this;
    };
    /**
     * Send error event to the request.
     * @param {string} msg
     */
    this.sendError = function (msg) {
        process.nextTick(function () {
            _this.emit('error', new Error(msg));
        });
    };
    /**
     * Sends a chunk of the body. This method can be called multiple times.
     * Simulation: request.write(chunk[, encoding][, callback])
     * @param {string | Buffer} chunk
     * @param {unknown[]} args
     */
    this.write = function (chunk) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof chunk !== 'string' && !Buffer.isBuffer(chunk)) {
            _this.sendError('The first argument must be of type string or an instance of Buffer.');
            return false;
        }
        var callback = typeof args[1] === 'function' ? args[1] : args[2];
        if (_this.aborted || _this.destroyed) {
            _this.sendError('The request has been aborted.');
        }
        else {
            if (chunk.length) {
                var buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
                _this.requestBody = Buffer.concat([_this.requestBody, buf]);
            }
            // The callback argument is optional and will be called when this
            // chunk of data is flushed, but only if the chunk is non-empty.
            if (chunk.length && typeof callback === 'function') {
                callback();
            }
        }
        setTimeout(function () { return _this.emit('drain'); }, 1);
        return false;
    };
    /**
     * https://nodejs.org/api/http.html#http_request_end_data_encodingcallback
     *
     * Finishes sending the request. If any parts of the body are unsent, it will flush them to the stream.
     * Simulation: request.end([data[, encoding]][, callback])
     * @param {unknown[]} args
     */
    this.end = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = _this.getEndArguments(args), data = _a[0], encoding = _a[1], callback = _a[2];
        // If data is specified, it is equivalent to calling
        // request.write(data, encoding) followed by request.end(callback).
        if (data) {
            _this.write(data, encoding);
            _this.end(callback);
            return _this;
        }
        if (!_this.response.complete) {
            _this.sendResponseResult.apply(_this, __spreadArray([callback], args, false));
            return _this;
        }
        _this.sendEndingEvent(callback);
        return _this;
    };
    /**
     * It awaits mock item resolver & set response result.
     */
    this.sendResponseResult = function (endCallback) {
        var endArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            endArgs[_i - 1] = arguments[_i];
        }
        var now = Date.now();
        _this.mockItemResolver(function (mockItem, mocker) { return __awaiter(_this, void 0, void 0, function () {
            var method, requestInfo, remoteResponse, remoteInfo, _a, body, json, response, err_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        method = this.options.method || 'GET';
                        requestInfo = {
                            url: this.url,
                            method: method,
                            query: (0, utils_1.getQuery)(this.url),
                            headers: this.getRequestHeaders(),
                            body: method === 'GET' ? undefined : this.bufferToString(this.requestBody)
                        };
                        requestInfo.doOriginalCall = function () { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getOriginalResponse()];
                                    case 1:
                                        res = _a.sent();
                                        requestInfo.doOriginalCall = undefined;
                                        return [2 /*return*/, res];
                                }
                            });
                        }); };
                        remoteResponse = null;
                        remoteInfo = mockItem === null || mockItem === void 0 ? void 0 : mockItem.getRemoteInfo(url);
                        if (!remoteInfo) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, request_1.default)({
                                url: remoteInfo.url,
                                method: remoteInfo.method || this.options.method || 'GET',
                                headers: __assign(__assign({}, requestInfo.headers), mockItem.requestHeaders),
                                body: this.requestBody
                            })];
                    case 2:
                        _a = _b.sent(), body = _a.body, json = _a.json, response = _a.response;
                        remoteResponse = {
                            status: response.statusCode,
                            headers: response.headers,
                            response: json || body,
                            responseText: body,
                            responseJson: json,
                        };
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        this.sendError('Get remote result error: ' + err_1.message);
                        return [2 /*return*/, false];
                    case 4:
                        mockItem.sendBody(requestInfo, remoteResponse).then(function (responseBody) { return __awaiter(_this, void 0, void 0, function () {
                            var statusCode, headers, transformed, spent;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        statusCode = mockItem.status;
                                        headers = __assign(__assign(__assign({}, mockItem.headers), ((remoteResponse === null || remoteResponse === void 0 ? void 0 : remoteResponse.headers) || {})), { 'x-powered-by': 'http-request-mock' });
                                        if (!mockItem.transformResponse) return [3 /*break*/, 2];
                                        return [4 /*yield*/, mockItem.transformResponse(requestInfo, mockItem)];
                                    case 1:
                                        transformed = _a.sent();
                                        if ('body' in transformed) {
                                            responseBody = transformed.body;
                                        }
                                        if ('headers' in transformed) {
                                            headers = __assign(__assign({}, headers), transformed.headers);
                                        }
                                        if ('status' in transformed) {
                                            statusCode = transformed.status;
                                        }
                                        _a.label = 2;
                                    case 2:
                                        if (responseBody instanceof bypass_1.default) {
                                            if (remoteResponse) {
                                                throw new Error('[http-request-mock] A request which is marked by @remote tag cannot be bypassed.');
                                            }
                                            return [2 /*return*/, this.fallbackToNativeRequest.apply(this, endArgs)];
                                        }
                                        spent = Date.now() - now;
                                        mocker.sendResponseLog(spent, responseBody, requestInfo, mockItem);
                                        this.response.statusCode = statusCode;
                                        this.response.statusMessage = config_1.HTTPStatusCodes[this.response.statusCode] || '',
                                            this.response.headers = headers;
                                        this.response.rawHeaders = Object.entries(this.response.headers).reduce(function (res, item) {
                                            return res.concat(item);
                                        }, []);
                                        // push: The "chunk" argument must be of type string or an instance of Buffer or Uint8Array.
                                        if (typeof responseBody === 'string'
                                            || (responseBody instanceof Buffer)
                                            || (responseBody instanceof ArrayBuffer)
                                            || (responseBody instanceof SharedArrayBuffer)
                                            || (responseBody instanceof Uint8Array)) {
                                            this.response.push(Buffer.from(responseBody));
                                        }
                                        else {
                                            this.response.push(JSON.stringify(responseBody));
                                        }
                                        this.sendEndingEvent(endCallback);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Send completed event.
     */
    this.sendEndingEvent = function (callback) {
        if (typeof callback === 'function') {
            callback();
        }
        _this.finished = true; // We keep the finish property for compatibility.
        _this.emit('finish');
        _this.emit('response', _this.response);
        // The message.complete property will be true if a complete
        // HTTP message has been received and successfully parsed.
        _this.response.push(null);
        _this.response.complete = true;
        return _this;
    };
    this.fallbackToNativeRequest = function () {
        var _a;
        var endArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            endArgs[_i] = arguments[_i];
        }
        _this.nativeInstance = _this.nativeReqestMethod.apply(_this, _this.nativeRequestArgs);
        Object.entries(_this.getHeaders()).forEach(function (entry) {
            if (entry[1] !== null && entry[1] !== undefined) {
                _this.nativeInstance && _this.nativeInstance.setHeader(entry[0], entry[1]);
            }
        });
        if (_this.requestBody.length) {
            _this.nativeInstance && _this.nativeInstance.write(_this.requestBody);
        }
        if (_this.nativeInstance) {
            _this.nativeInstance.on('connect', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.emit.apply(_this, __spreadArray(['connect'], args, false));
            });
            _this.nativeInstance.on('finish', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.emit.apply(_this, __spreadArray(['finish'], args, false));
            });
            _this.nativeInstance.on('abort', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.emit.apply(_this, __spreadArray(['abort'], args, false));
            });
            _this.nativeInstance.on('error', function (error) { return _this.emit('error', error); });
            _this.nativeInstance.on('information', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.emit.apply(_this, __spreadArray(['information'], args, false));
            });
            _this.nativeInstance.on('response', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.emit.apply(_this, __spreadArray(['response'], args, false));
            });
            _this.nativeInstance.on('timeout', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.emit.apply(_this, __spreadArray(['timeout'], args, false));
            });
            (_a = _this.nativeInstance).end.apply(_a, endArgs);
        }
        return _this.nativeInstance;
    };
    this.getOriginalResponse = function () {
        var callback = _this.nativeRequestArgs[_this.nativeRequestArgs.length - 1];
        var defaultResponse = {
            status: null,
            headers: {},
            responseText: null,
            responseJson: null,
            responseBuffer: null,
            responseBlob: null,
            error: null,
        };
        return new Promise(function (resolve) {
            var newCallback = function (res) {
                (0, request_1.parseResponseBody)(res).then(function (data) {
                    resolve(data);
                }).catch(function (err) {
                    resolve(__assign(__assign({}, defaultResponse), { error: err }));
                });
                if (typeof callback === 'function') {
                    callback(res);
                }
            };
            var callbackIndex = typeof callback === 'function'
                ? _this.nativeRequestArgs.length - 1
                : _this.nativeRequestArgs.length;
            _this.nativeRequestArgs[callbackIndex] = newCallback;
            // do original call
            var req = _this.nativeReqestMethod.apply(_this, _this.nativeRequestArgs);
            req.on('error', function (err) {
                resolve(__assign(__assign({}, defaultResponse), { error: err }));
            });
            if (_this.nativeReqestName = 'get') {
                req.end();
            }
        });
    };
    /**
     * https://nodejs.org/api/http.html#http_request_end_data_encodingcallback
     *
     * Get arguments of end method.
     * @param {unknown[]} args [data[, encoding]][, callback]
     * @returns
     */
    this.getEndArguments = function (args) {
        var data;
        var encoding;
        var callback;
        if (args.length === 3) {
            data = args[0], encoding = args[1], callback = args[2];
        }
        else if (args.length === 2) {
            data = args[0], encoding = args[1];
        }
        else if (args.length === 1) {
            data = typeof args[0] === 'function' ? undefined : args[0];
            callback = typeof args[0] === 'function' ? args[0] : undefined;
        }
        return [data, encoding, callback];
    };
    /**
     * Convert a buffer to a string.
     * @param {Buffer} buffer
     */
    this.bufferToString = function (buffer) {
        var str = buffer.toString('utf8');
        return Buffer.from(str).equals(buffer) ? str : buffer.toString('hex');
    };
    /**
     * Get request headers.
     */
    this.getRequestHeaders = function () {
        return Object.entries(__assign(__assign({}, _this.getHeaders()), _this.options.headers)).reduce(function (res, _a) {
            var key = _a[0], val = _a[1];
            if (val !== undefined && val !== null) {
                res[key.toLowerCase()] = Array.isArray(val)
                    ? val.join('; ')
                    : (val + '');
            }
            return res;
        }, {});
    };
}
// Note: 'class extends' is not work here.
// It'll trigger a default socket connection that we don't expect.
(0, util_1.inherits)(ClientRequest, http_1.default.ClientRequest);
exports.default = ClientRequest;
//# sourceMappingURL=client-request.js.map