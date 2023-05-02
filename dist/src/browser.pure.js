"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mocker = void 0;
var fetch_1 = __importDefault(require("./interceptor/fetch"));
var wx_request_1 = __importDefault(require("./interceptor/wx-request"));
var xml_http_request_1 = __importDefault(require("./interceptor/xml-http-request"));
var mocker_1 = __importDefault(require("./mocker/mocker"));
exports.Mocker = mocker_1.default;
var BrowserPureIndex = /** @class */ (function () {
    function BrowserPureIndex() {
    }
    /**
     * Auto detect request environment and setup request mock for wx.request, fetch and XHR.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setup = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_1.default(proxyServer);
        if (this.isEnabled && typeof wx !== 'undefined' && typeof wx.request === 'function') {
            wx_request_1.default.setup(mocker, proxyServer);
        }
        if (this.isEnabled && typeof window !== 'undefined' && typeof window.XMLHttpRequest === 'function') {
            xml_http_request_1.default.setup(mocker, proxyServer);
        }
        if (this.isEnabled && typeof window !== 'undefined' && typeof window.fetch === 'function') {
            fetch_1.default.setup(mocker, proxyServer);
        }
        return mocker;
    };
    /**
     * Setup request mock for wx.request.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForWx = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_1.default(proxyServer);
        this.isEnabled && wx_request_1.default.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Setup request mock for XMLHttpRequest.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForXhr = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_1.default(proxyServer);
        this.isEnabled && xml_http_request_1.default.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Setup request mock for fetch.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForFetch = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_1.default(proxyServer);
        this.isEnabled && fetch_1.default.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Enable mock function temporarily.
     * Not available in proxy mode.
     */
    BrowserPureIndex.enable = function () {
        this.isEnabled = true;
        return mocker_1.default.getInstance().enable();
    };
    /**
     * Disable mock function temporarily.
     * Not available in proxy mode.
     */
    BrowserPureIndex.disable = function () {
        this.isEnabled = false;
        return mocker_1.default.getInstance().disable();
    };
    /**
     * Enable verbose log.
     * Not available in proxy mode.
     */
    BrowserPureIndex.enableLog = function () {
        return mocker_1.default.getInstance().enableLog();
    };
    /**
     * Disable verbose log.
     * Not available in proxy mode.
     */
    BrowserPureIndex.disableLog = function () {
        return mocker_1.default.getInstance().disableLog();
    };
    BrowserPureIndex.isEnabled = true;
    BrowserPureIndex.default = BrowserPureIndex; // for backward compatibility
    return BrowserPureIndex;
}());
exports.default = BrowserPureIndex;
//# sourceMappingURL=browser.pure.js.map