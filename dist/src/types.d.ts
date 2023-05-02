/// <reference types="node" />
import http from 'http';
import MockItem from './mocker/mock-item';
export declare enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    HEAD = "HEAD",
    ANY = "ANY"
}
export declare enum Disable {
    YES = "YES",
    NO = "NO"
}
export interface AnyObject {
    [key: string]: unknown;
}
export interface Query {
    [key: string]: string | string[];
}
export interface Header {
    [key: string]: string;
}
export interface MockItemInfo {
    url?: RegExp | string;
    method?: HttpVerb;
    requestHeaders?: Header;
    header?: Header;
    headers?: Header;
    delay?: number;
    body?: unknown;
    response?: unknown;
    remote?: string;
    status?: number;
    disable?: 'YES' | 'NO';
    times?: number;
    deProxy?: boolean;
    transformResponse?: TransformFunction;
}
export interface MockItemExt {
    requestHeaders?: Header;
    header?: Header;
    headers?: Header;
    disable?: Disable;
    delay?: number;
    times?: number;
    status?: number;
}
export interface MockConfigData {
    [key: string]: MockItem;
}
export interface RequestInfo {
    url: string;
    method: HttpVerb;
    query?: object;
    headers?: object;
    header?: object;
    body?: unknown;
    rawBody?: unknown;
    doOriginalCall?: () => Promise<OriginalResponse>;
}
export interface OriginalResponse {
    status: number | null;
    headers: Record<string, string | string[]>;
    responseText: string | null;
    responseJson: unknown | null;
    responseBuffer: ArrayBuffer | null;
    responseBlob: Blob | null;
    error: Error | null;
}
export interface RemoteResponse {
    status: number;
    headers: Record<string, string | string[] | undefined>;
    response: unknown;
    responseText: string;
    responseJson: AnyObject;
}
export interface XMLHttpRequestInstance extends XMLHttpRequest {
    bypassMock: boolean;
    isMockRequest: string;
    mockItem: MockItem;
    mockResponse: unknown;
    requestInfo: RequestInfo;
    requestArgs: (HttpVerb | string | boolean | null)[];
}
export interface WxObject {
    request: Function;
}
export interface WxRequestOpts {
    url: string;
    method: HttpVerb;
    data: Record<string, string>;
    header: Record<string, string>;
    dataType: string;
    responseType: string;
    success: Function;
    fail: Function;
    complete: Function;
}
export interface WxRequestTask {
    abort: Function;
    onHeadersReceived: (callback: Function) => unknown;
    offHeadersReceived: (callback: Function) => unknown;
}
export interface WxResponse {
    data: unknown;
    statusCode: number;
    header: Record<string, string>;
    cookies: string[];
    profile: Record<string, unknown>;
}
export interface ClientRequestType extends http.ClientRequest {
    nativeInstance: null | http.ClientRequest;
    nativeReqestName: 'get' | 'request';
    nativeReqestMethod: Function;
    nativeRequestArgs: unknown[];
    response: http.IncomingMessage;
    requestBody: Buffer;
    mockItemResolver: Function;
    url: string;
    options: ClientRequestOptions;
    method: string;
    callback: ((...args: unknown[]) => unknown) | undefined;
    remoteUrl: string | undefined;
    init: Function;
    setOriginalRequestInfo: Function;
    setMockItemResolver: Function;
    sendResponseResult: Function;
    sendEndingEvent: Function;
    sendError: Function;
    getEndArguments: Function;
    getRequestHeaders: Function;
    bufferToString: Function;
    fallbackToNativeRequest: Function;
    getOriginalResponse: Function;
}
export interface NodeRequestOpts {
    isNodeRequestOpts: true;
    url: string;
    options: Record<string, string>;
    callback: Function;
}
export interface ClientRequestOptions {
    method: string;
    path: string;
    headers: Record<string, string>;
    timeout: number;
}
export interface DynamicImported {
    default?: unknown;
}
export interface FetchRequest {
    url: string;
    method: string;
    headers: Record<string, string>;
    body: unknown;
}
export interface FetchResponse {
    body: unknown;
    bodyUsed: boolean;
    headers: Headers;
    ok: boolean;
    redirected: false;
    status: number;
    statusText: string;
    url: string;
    type: string;
    json: () => Promise<AnyObject>;
    arrayBuffer: () => Promise<ArrayBuffer>;
    blob: () => Promise<unknown>;
    formData: () => Promise<unknown>;
    text: () => Promise<string>;
    clone: () => FetchResponse;
    error: () => FetchResponse;
    redirect: () => FetchResponse;
}
export declare type HttpVerb = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'ANY' | 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'any';
export declare type Logs = Array<number | string | Record<string, any> | Logs[]>;
export declare type TransformFunction = (requestInfo: RequestInfo, mockItem: MockItem) => {
    body: unknown;
    headers: Headers;
    status: number;
};
