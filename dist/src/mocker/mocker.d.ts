import { HttpVerb, Logs, MockConfigData, MockItemExt, MockItemInfo, RequestInfo } from '../types';
import MockItem from './mock-item';
export default class Mocker {
    protected static instance: Mocker;
    protected mockConfigData: MockConfigData;
    protected disabled: boolean;
    protected log: boolean;
    protected proxyServer: string;
    protected proxyMode: string;
    constructor(proxyServer?: string);
    static getInstance(): Mocker;
    /**
     * Set global mock data configuration.
     * @param {object} mockConfigData
     */
    setMockData(mockConfigData: MockConfigData): this;
    /**
     * Add an mock item to global mock data configuration.
     * @param {string} key
     * @param {MockItem} val
     */
    protected addMockItem(key: string, val: MockItem): this;
    /**
     * Reset global mock data configuration.
     */
    reset(): this;
    /**
     * Enable mock function temporarily.
     * Not available in proxy mode.
     */
    enable(): this;
    /**
     * Disable mock function temporarily.
     * Not available in proxy mode.
     */
    disable(): this;
    /**
     * Send a message to proxy server if in a proxy mode.
     * @param {string} msg
     */
    sendMsgToProxyServer(msg?: string): void;
    /**
     * Disable logs function temporarily.
     * Not available in proxy mode.
     */
    disableLog(): this;
    /**
     * Disable logs function temporarily.
     * Not available in proxy mode.
     */
    enableLog(): this;
    /**
     * Note: this method is only for a nodejs environment(test environment).
     * Use a mock file & add it to global mock data configuration.
     * @param {string} file
     */
    use(file: string): void;
    /**
     * Check specified mock item & add it to global mock data configuration.
     * @param {MockItem} mockItem
     * @returns false | MockItem
     */
    mock(mockItemInfo: MockItemInfo): false | MockItem;
    /**
     * Make a mock item that matches an HTTP GET request.
     * @param {RegExp | String} url
     * @param {unknown} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    get(url: RegExp | string, body: unknown, opts?: MockItemExt): this;
    /**
     * Make a mock item that matches an HTTP POST request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    post(url: RegExp | string, body: unknown, opts?: MockItemExt): this;
    /**
     * Make a mock item that matches an HTTP PUT request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    put(url: RegExp | string, body: unknown, opts?: MockItemExt): this;
    /**
     * Make a mock item that matches an HTTP PATCH request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    patch(url: RegExp | string, body: unknown, opts?: MockItemExt): this;
    /**
     * Make a mock item that matches an HTTP DELETE request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    delete(url: RegExp | string, body: unknown, opts?: MockItemExt): this;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
     * Warning: A response to a HEAD method should not have a body.
     * If it has one anyway, that body must be ignored, any representation
     * headers that might describe the erroneous body are instead assumed
     * to describe the response which a similar GET request would have received.
     *
     * Make a mock item that matches an HTTP HEAD request.
     * @param {RegExp | String} url
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    head(url: RegExp | string, opts?: MockItemExt): this;
    /**
     * Make a mock item that matches an HTTP GET, POST, PUT, PATCH, DELETE or HEAD request.
     * @param {RegExp | String} url
     * @param {unknown} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    any(url: RegExp | string, body: unknown, opts?: MockItemExt): this;
    /**
     * Check whether the specified request url matches a defined mock item.
     * If a match is found, return the matched mock item, otherwise a null is returned.
     * @param {string} reqUrl
     * @param {string} reqMethod
     * @return null | MockItem
     */
    matchMockItem(reqUrl: string, reqMethod: HttpVerb | undefined): MockItem | null;
    /**
     * Set group logs
     * @param {Logs[]} logs
     * @returns
     */
    groupLog(logs: Logs[]): void;
    sendResponseLog(spent: number, body: unknown, requestInfo: RequestInfo, mockItem: MockItem): void;
}
