import Bypass from '../common/bypass';
import { Disable, Header, HttpVerb, MockItemInfo, RequestInfo } from '../types';
import { RemoteResponse, TransformFunction } from './../types';
export default class MockItem {
    url: RegExp | string;
    regexp: Array<string>;
    method: HttpVerb;
    requestHeaders: Header;
    header: Header;
    headers: Header;
    delay: number;
    body: unknown;
    response: unknown;
    remote: string;
    status: number;
    disable: Disable;
    times: number;
    key: string;
    deProxy: boolean;
    doOriginalRequest: Function;
    transformResponse?: TransformFunction;
    /**
     * Format specified mock item.
     * @param {MockItemInfo} mockItem
     * @returns false | MockItemInfo
     */
    constructor(mockItem: MockItemInfo);
    private setBody;
    bypass(): Bypass;
    sendBody(requestInfo: RequestInfo, remoteResponse?: RemoteResponse | null): Promise<any>;
    getRemoteInfo(requestUrl: string): false | Record<string, string>;
}
