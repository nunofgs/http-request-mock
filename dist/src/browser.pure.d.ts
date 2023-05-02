import Mocker from './mocker/mocker';
export type { HttpVerb, Method, MockItemExt, MockItemInfo, RequestInfo } from './types';
export { Mocker };
export default class BrowserPureIndex {
    protected static isEnabled: boolean;
    /**
     * Auto detect request environment and setup request mock for wx.request, fetch and XHR.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    static setup(proxyServer?: string): Mocker;
    /**
     * Setup request mock for wx.request.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    static setupForWx(proxyServer?: string): Mocker;
    /**
     * Setup request mock for XMLHttpRequest.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    static setupForXhr(proxyServer?: string): Mocker;
    /**
     * Setup request mock for fetch.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    static setupForFetch(proxyServer?: string): Mocker;
    /**
     * Enable mock function temporarily.
     * Not available in proxy mode.
     */
    static enable(): Mocker;
    /**
     * Disable mock function temporarily.
     * Not available in proxy mode.
     */
    static disable(): Mocker;
    /**
     * Enable verbose log.
     * Not available in proxy mode.
     */
    static enableLog(): Mocker;
    /**
     * Disable verbose log.
     * Not available in proxy mode.
     */
    static disableLog(): Mocker;
    static default: typeof BrowserPureIndex;
}
