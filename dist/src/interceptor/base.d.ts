/// <reference types="node" />
import MockItem from '../mocker/mock-item';
import Mocker from '../mocker/mocker';
import { HttpVerb, RequestInfo } from '../types';
import InterceptorFetch from './fetch';
import InterceptorNode from './node/http-and-https';
import InterceptorWxRequest from './wx-request';
import InterceptorXhr from './xml-http-request';
export default class BaseInterceptor {
    protected mocker: Mocker;
    protected proxyServer: string;
    protected proxyMode: string;
    protected global: Record<string, any>;
    constructor(mocker: Mocker, proxyServer?: string);
    /**
     * Setup request mocker.
     * @param {Mocker} mocker
     */
    static setup(mocker: Mocker, proxyServer?: string): InterceptorWxRequest | InterceptorFetch | InterceptorXhr | InterceptorNode;
    /**
     * return global variable
     */
    static getGlobal(): (Window & typeof globalThis) | (NodeJS.Global & typeof globalThis);
    /**
     * Check whether the specified request url matches a defined mock item.
     * If a match is found, return mock meta information, otherwise a null is returned.
     * @param {string} reqUrl
     * @param {string} reqMethod
     */
    protected matchMockRequest(reqUrl: string, reqMethod: HttpVerb | undefined): MockItem | null;
    getRequestInfo(requestInfo: RequestInfo): RequestInfo;
    /**
     * Get full request url.
     * @param {string} url
     */
    getFullRequestUrl(url: string, method: HttpVerb): string;
    /**
     * Return a proxy url if in a proxy mode otherwise return the original url.
     * @param {string} url
     */
    checkProxyUrl(url: string, method: HttpVerb): string;
    getMiddlewareHost(): string;
}
