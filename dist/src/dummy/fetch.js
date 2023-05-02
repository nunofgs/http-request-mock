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
var config_1 = require("../config");
function dummyFetch(input, init) {
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
    return (0, request_1.default)({
        url: url,
        method: params.method,
        headers: params.headers,
        body: params.body
    }).then(function (res) {
        return getResponse(url, res.body, res.response);
    });
}
exports.default = dummyFetch;
function getResponse(url, responseBody, responseObject) {
    var data = responseBody;
    var status = responseObject.statusCode || 200;
    var statusText = config_1.HTTPStatusCodes[status] || '';
    var responseObjectHeaders = responseObject.headers;
    var headers = typeof Headers === 'function'
        ? new Headers(__assign(__assign({}, responseObjectHeaders), { 'x-powered-by': 'http-request-mock' }))
        : __assign(__assign({}, responseObjectHeaders), { 'x-powered-by': 'http-request-mock' });
    var isBlobAvailable = typeof Blob === 'function'
        && typeof Blob.prototype.text === 'function'
        && typeof Blob.prototype.arrayBuffer === 'function'
        && typeof Blob.prototype.slice === 'function'
        && typeof Blob.prototype.stream === 'function';
    var body = isBlobAvailable
        ? new Blob([typeof data === 'string' ? data : JSON.stringify(data)])
        : data;
    if (typeof Response === 'function') {
        var response_1 = new Response(body, { status: status, statusText: statusText, headers: headers });
        Object.defineProperty(response_1, 'url', { value: url });
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
        url: url,
        type: 'basic',
        // response data depends on prepared data
        json: function () { return Promise.resolve((0, utils_1.tryToParseJson)(data)); },
        arrayBuffer: function () {
            if ((0, utils_1.isArrayBuffer)(data)) {
                return Promise.resolve(data);
            }
            return Promise.resolve((0, utils_1.str2arrayBuffer)(typeof data === 'string' ? data : JSON.stringify(data)));
        },
        blob: function () { return Promise.resolve(body); },
        formData: function () { return Promise.resolve(data); },
        text: function () { return Promise.resolve(typeof data === 'string' ? data : JSON.stringify(data)); },
        // other methods that may be used
        clone: function () { return response; },
        error: function () { return response; },
        redirect: function () { return response; },
    };
    return response;
}
//# sourceMappingURL=fetch.js.map