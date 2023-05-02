import MockItem from '../mocker/mock-item';
import Mocker from '../mocker/mocker';
import { RequestInfo } from '../types';
import Base from './base';
export default class FetchInterceptor extends Base {
    private static instance;
    private fetch;
    constructor(mocker: Mocker, proxyServer?: string);
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     * Intercept fetch object.
     */
    private intercept;
    /**
     * Set request headers for requests marked by remote config.
     * @param {AnyObject} fetchParams
     */
    private setRequestHeadersForRemoteRequest;
    /**
     * Set remote result.
     * @param {FetchResponse} fetchResponse
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    private sendRemoteResult;
    /**
     * Get original response
     * @param {string} requestUrl
     * @param {FetchRequest | AnyObject} params
     */
    private getOriginalResponse;
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    private doMockRequest;
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    private doMockResponse;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Response
     * Format mock data.
     * @param {unknown} responseBody
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     */
    getFetchResponse(responseBody: unknown, responseHeaders: Record<string, string>, responseStatus: number, mockItem: MockItem, requestInfo: RequestInfo): Response | {
        body: unknown;
        bodyUsed: boolean;
        headers: Headers | [string, string][];
        ok: boolean;
        redirected: boolean;
        status: number;
        statusText: string;
        url: string;
        type: string;
        json: () => Promise<unknown>;
        arrayBuffer: () => Promise<unknown>;
        blob: () => Promise<unknown>;
        formData: () => Promise<unknown>;
        text: () => Promise<string>;
        clone: () => any;
        error: () => any;
        redirect: () => any;
    };
}
