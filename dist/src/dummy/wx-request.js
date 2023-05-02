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
function dummyWxRequest(wxReqOpts) {
    var url = wxReqOpts.url, method = wxReqOpts.method, data = wxReqOpts.data, header = wxReqOpts.header, dataType = wxReqOpts.dataType, responseType = wxReqOpts.responseType, success = wxReqOpts.success, fail = wxReqOpts.fail, complete = wxReqOpts.complete;
    var body = (data && (method + '').toUpperCase() !== 'GET') ? data : null;
    (0, request_1.default)({
        url: url,
        method: method, headers: header,
        body: body
    }).then(function (res) {
        var _a;
        if (typeof success === 'function') {
            var data_1;
            if (dataType === 'json') {
                if (typeof res.body === 'object') {
                    data_1 = res.body;
                }
                else if (typeof res.body === 'string') {
                    try {
                        data_1 = JSON.parse(res.body);
                    }
                    catch (e) {
                        e.message = 'res.body is not a json-like string.';
                        throw e;
                    }
                }
            }
            else if (responseType === 'text') {
                data_1 = typeof res.body === 'string' ? res.body : JSON.stringify(res.body);
            }
            else if (responseType === 'arraybuffer') {
                data_1 = (0, utils_1.isArrayBuffer)(res.body)
                    ? res.body
                    : (0, utils_1.str2arrayBuffer)(typeof res.body === 'string' ? res.body : JSON.stringify(res.body));
            }
            success({
                data: data_1,
                statusCode: res.response.statusCode,
                header: __assign({}, res.response.headers),
                cookies: ((_a = res.response.headers) === null || _a === void 0 ? void 0 : _a['set-cookie']) || [],
                profile: {},
            });
        }
        if (typeof complete === 'function') {
            complete();
        }
    }).catch(function (err) {
        if (typeof fail === 'function') {
            fail(err);
        }
        if (typeof complete === 'function') {
            complete();
        }
    });
    return {
        abort: function () {
            // `abort` method is not supported in a fake environment.'
        }
    };
}
exports.default = dummyWxRequest;
//# sourceMappingURL=wx-request.js.map