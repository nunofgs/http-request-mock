import MockItem from '../mocker/mock-item';
import Mocker from '../mocker/mocker';
import { WxResponse } from '../types';
import Base from './base';
export default class WxRequestInterceptor extends Base {
    private static instance;
    private wxRequest;
    constructor(mocker: Mocker, proxyServer?: string);
    /**
     * https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
     * Intercept wx.request object.
     */
    private intercept;
    private getRequstTask;
    /**
     * Set remote result.
     * @param {WxRequestOpts} wxRequestOpts
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     */
    private sendRemoteResult;
    /**
     * Get original response
     * @param {WxRequestOpts} wxRequestOpts
     */
    private getOriginalResponse;
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {WxRequestOpts} wxRequestOpts
     */
    private doMockRequest;
    /**
     * Make mock response.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {WxRequestOpts} wxRequestOpts
     */
    private doMockResponse;
    /**
     * Get WX mock response data.
     * @param {unknown} responseBody
     * @param {MockItem} mockItem
     */
    getWxResponse(responseBody: unknown, mockItem: MockItem): WxResponse;
    /**
     * Call some necessary callbacks if specified.
     * @param {WxRequestOpts} wxRequestOpts
     * @param {WxRequestOpts} response
     */
    private sendResult;
}
