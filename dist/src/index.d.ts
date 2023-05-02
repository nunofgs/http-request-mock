import Browser from './browser';
import Mocker from './mocker/mocker-for-node';
export type { HttpVerb, Method, MockItemExt, MockItemInfo, RequestInfo } from './types';
export { Mocker };
export default class Index extends Browser {
    /**
     * Auto detect request environment and setup request mock for wx.request, fetch and XHR.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    static setup(proxyServer?: string): Mocker;
    /**
     * Setup request mock for node http/https request.
     * For http.get, https.get, http.request, https.request in nodejs environment
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    static setupForNode(proxyServer?: string): Mocker;
    /**
     * Setup request mock for unit test.
     * @param {string} type
     */
    static setupForUnitTest(type: 'wx' | 'xhr' | 'fetch' | 'node' | 'all'): Mocker;
    static default: typeof Index;
}
