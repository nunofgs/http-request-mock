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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mocker = void 0;
var browser_1 = __importDefault(require("./browser"));
var utils_1 = require("./common/utils");
var dummy_1 = __importDefault(require("./dummy"));
var http_and_https_1 = __importDefault(require("./interceptor/node/http-and-https"));
var mocker_for_node_1 = __importDefault(require("./mocker/mocker-for-node"));
exports.Mocker = mocker_for_node_1.default;
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Auto detect request environment and setup request mock for wx.request, fetch and XHR.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    Index.setup = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_for_node_1.default(proxyServer);
        browser_1.default.setup(proxyServer);
        // for http.get, https.get, http.request, https.request in node environment
        if (this.isEnabled && (0, utils_1.isNodejs)()) {
            // use require here to avoid static analysis
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            http_and_https_1.default.setup(mocker, proxyServer);
        }
        return mocker;
    };
    /**
     * Setup request mock for node http/https request.
     * For http.get, https.get, http.request, https.request in nodejs environment
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    Index.setupForNode = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_for_node_1.default(proxyServer);
        // use require here to avoid static analysis
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        this.isEnabled && http_and_https_1.default.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Setup request mock for unit test.
     * @param {string} type
     */
    Index.setupForUnitTest = function (type) {
        if (!(0, utils_1.isNodejs)()) {
            throw new Error('"setupForUnitTest" is only for nodejs environment.');
        }
        if (!['wx', 'xhr', 'fetch', 'node', 'all'].includes(type)) {
            throw new Error('Invalid type, valid types are "wx", "xhr", "fetch", "node" and "all".');
        }
        var mocker = new mocker_for_node_1.default();
        if (type === 'wx' || type === 'all') {
            dummy_1.default.initDummyWxRequestForUnitTest();
            this.setupForWx();
        }
        if (type === 'xhr' || type === 'all') {
            dummy_1.default.initDummyXHRForUnitTest();
            this.setupForXhr();
        }
        if (type === 'fetch' || type === 'all') {
            dummy_1.default.initDummyFetchForUnitTest();
            this.setupForFetch();
        }
        if (type === 'node' || type === 'all') {
            this.setupForNode();
        }
        return mocker;
    };
    Index.default = Index; // for backward compatibility
    return Index;
}(browser_1.default));
exports.default = Index;
//# sourceMappingURL=index.js.map
module.exports = Index;
module.exports = Index;