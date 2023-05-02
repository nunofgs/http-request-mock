/// <reference types="node" />
import { IncomingMessage } from 'http';
import { URL } from 'url';
import { AnyObject, OriginalResponse } from './../types';
/**
 * In nodejs environment, by default for XMLHttpRequest, fetch and wx.request, http-request-mock
 * does a fallback request by simply using http/https native request module, which encodes the
 * response body with utf8. It may not meet your requirement in some complex applications.
 * So, you can use another third fake (XMLHttpRequest, fetch, wx.request)request library
 * instead before calling setupForUnitTest method if you had some problems with the fallback request.
 *
 * @param {string} url
 * @param {string} method
 * @param {object} headers
 * @param {any} body
 * @param {object} opts
 */
export default function request(requestConfig: {
    url: string | URL;
    method: string;
    headers?: Record<string, string>;
    body?: unknown;
    opts?: Record<string, string>;
}): Promise<{
    body: string;
    json: AnyObject;
    response: IncomingMessage;
}>;
export declare function parseResponseBody(response: IncomingMessage): Promise<OriginalResponse>;
