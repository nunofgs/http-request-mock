"use strict";
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
        return new bypass_1.default;
    };
    MockItem.prototype.sendBody = function (requestInfo, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(0, utils_1.isPromise)(this.body)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.body];
                    case 1:
                        data = _b.sent();
                        this.body = (0, utils_1.isImported)(data) ? data.default : data;
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
        var query = (0, utils_1.getQuery)(requestUrl);
        for (var key in query) {
            var queryString = Array.isArray(query[key]) ? query[key].join(',') : query[key];
            url = url.replace(new RegExp('\\$query\.' + key, 'g'), queryString);
        }
        url = url.replace(/\$query/g, (0, utils_1.queryObject2String)(query));
        url = url === '$url' ? requestUrl : url;
        return { method: method, url: url };
    };
    return MockItem;
}());
exports.default = MockItem;
//# sourceMappingURL=mock-item.js.map