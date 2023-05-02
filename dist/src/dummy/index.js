"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __importDefault(require("../interceptor/base"));
var fetch_1 = __importDefault(require("./fetch"));
var wx_request_1 = __importDefault(require("./wx-request"));
var xhr_1 = __importDefault(require("./xhr"));
var Dummy = /** @class */ (function () {
    function Dummy() {
    }
    /**
     * Initialize a dummy 'fetch' object if 'fetch' is not existent in the context.
     */
    Dummy.initDummyFetchForUnitTest = function () {
        var global = base_1.default.getGlobal();
        if (!global.fetch) {
            global.fetch = fetch_1.default;
        }
    };
    /**
     * Initialize a dummy 'wx.request' object if 'wx.request' is not existent in the context.
     */
    Dummy.initDummyWxRequestForUnitTest = function () {
        var global = base_1.default.getGlobal();
        global.wx = global.wx || {};
        if (!global.wx.request) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            global.wx.request = wx_request_1.default.bind(global.wx);
        }
    };
    /**
     * Initialize a dummy 'XMLHttpRequest' object if 'XMLHttpRequest' is not existent in the context.
     */
    Dummy.initDummyXHRForUnitTest = function () {
        var global = base_1.default.getGlobal();
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        global.XMLHttpRequest = global.XMLHttpRequest || xhr_1.default;
    };
    return Dummy;
}());
exports.default = Dummy;
//# sourceMappingURL=index.js.map