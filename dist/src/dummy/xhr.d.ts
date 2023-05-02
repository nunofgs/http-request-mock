export default class dummyXMLHttpRequest {
    'http-request-mock': true;
    requestArgs: (string | boolean | null)[];
    reqHeaders: Record<string, string>;
    _responseHeaders: Record<string, string | string[] | undefined>;
    _responseBody: unknown;
    onerror: unknown;
    responseType: string;
    _readyState: number;
    _status: number;
    _statusText: string;
    open(method: string, url: string, async?: boolean, user?: string | null, password?: string | null): void;
    send(body: unknown): void;
    /**
     * The XMLHttpRequest.abort() method aborts the request if it has already been sent.
     * When a request is aborted, its readyState is changed to XMLHttpRequest.UNSENT (0)
     * and the request's status code is set to 0.
     */
    abort(): void;
    setRequestHeader(header: string, value: string): void;
    private sendResult;
    private event;
    getAllResponseHeaders(): string;
    getResponseHeader(key: string): string | string[] | null | undefined;
    get readyState(): number;
    get status(): number;
    get statusText(): string;
    get response(): any;
    get responseText(): string;
    get responseURL(): string | boolean | null;
    get responseXML(): null;
}
