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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResponseBody = void 0;
var follow_redirects_1 = require("follow-redirects");
var zlib = __importStar(require("zlib"));
var utils_1 = require("./utils");
/**
 * In nodejs environment, by default for XMLHttpRequest, fetch and wx.request, http-request-mock
 * does a fallback request by simply using http/https native request module, which encodes the
 * response body with utf8. It may not meet your requirement in some complex applications.
 * So, you can use another third fake (XMLHttpRequest, fetch, wx.request)request library
 * instead before calling setupForUnitTest method if you had some problems with the fallback request.
 *
 * @param {string} url
 * @param {string} method
 * @param {object} headers
 * @param {any} body
 * @param {object} opts
 */
function request(requestConfig) {
    var url = requestConfig.url, method = requestConfig.method, _a = requestConfig.headers, headers = _a === void 0 ? {} : _a, body = requestConfig.body, _b = requestConfig.opts, opts = _b === void 0 ? {} : _b;
    return new Promise(function (resolve, reject) {
        var isHttps = isHttpsUrl(url);
        var reqOpts = __assign({ useNativeModule: true, method: (method || 'GET').toUpperCase(), headers: headers || {} }, opts);
        var requestMethod = (isHttps ? follow_redirects_1.https : follow_redirects_1.http).request;
        var req = requestMethod(url, reqOpts, function (response) {
            getResponseBody(response).then(function (_a) {
                var body = _a.body, json = _a.json;
                resolve({ body: body, json: json, response: response });
            }).catch(function (err) {
                req.emit('error', err);
            });
        });
        req.on('error', function (err) {
            reject(err);
        });
        if (body) {
            if (typeof body === 'string'
                || (body instanceof Buffer)
                || (body instanceof ArrayBuffer)
                || (body instanceof SharedArrayBuffer)
                || (body instanceof Uint8Array)) {
                req.write(Buffer.from(body));
            }
            else {
                req.write(Buffer.from(JSON.stringify(body)));
            }
        }
        req.end();
    });
}
exports.default = request;
function isHttpsUrl(url) {
    if (typeof url === 'string') {
        return /^https:/i.test(url);
    }
    if (url && (url.href || url.protocol)) {
        return /^https:/i.test(url.href) || String(url.protocol).toLowerCase() === 'https:';
    }
    return false;
}
function getResponseBody(response) {
    return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, parseResponseBody(response)];
                case 1:
                    data = _a.sent();
                    if (data.error) {
                        throw data.error;
                    }
                    return [2 /*return*/, { body: data.responseText, json: data.responseJson }];
                case 2:
                    err_1 = _a.sent();
                    throw new Error("getResponseBody error: ".concat(err_1.message));
                case 3: return [2 /*return*/];
            }
        });
    });
}
function parseResponseBody(response) {
    var stream;
    if (['gzip', 'compress', 'deflate'].includes(response.headers['content-encoding'] || '')) {
        stream = response.pipe(zlib.createGunzip());
    }
    else if ('br' === response.headers['content-encoding']) {
        stream = response.pipe(zlib.createBrotliDecompress());
    }
    else {
        stream = response;
    }
    return new Promise(function (resolve) {
        stream.once('error', function (error) {
            stream.removeAllListeners();
            resolve({
                status: null,
                headers: {},
                responseText: null,
                responseJson: null,
                responseBuffer: null,
                responseBlob: null,
                error: error,
            });
        });
        var buf = [];
        stream.on('data', function (chunk) { return buf.push(chunk); });
        stream.once('end', function () {
            var type = (response.headers['content-type'] || '').replace(/^application\//, '').replace(/;.*/, '');
            var responseText = Buffer.concat(buf).toString();
            var responseJson = (0, utils_1.tryToParseJson)(responseText, null);
            var responseBuffer = (0, utils_1.str2arrayBuffer)(responseText);
            var responseBlob = typeof Blob === 'function' ? new Blob([responseText], { type: type }) : null;
            resolve({
                status: response.statusCode || null,
                headers: response.headers,
                responseText: responseText,
                responseJson: responseJson,
                responseBuffer: responseBuffer,
                responseBlob: responseBlob,
                error: null,
            });
            stream.removeAllListeners();
        });
    });
}
exports.parseResponseBody = parseResponseBody;
//# sourceMappingURL=request.js.map