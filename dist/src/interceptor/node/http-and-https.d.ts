import Mocker from '../../mocker/mocker';
import Base from '../base';
export default class NodeHttpAndHttpsRequestInterceptor extends Base {
    private static instance;
    private httpRequest;
    private httpsRequest;
    private httpGet;
    private httpsGet;
    constructor(mocker: Mocker, proxyServer?: string);
    /**
     * Setup request mocker for unit test.
     * @param {Mocker} mocker
     */
    static setupForUnitTest(mocker: Mocker): NodeHttpAndHttpsRequestInterceptor;
    /**
     * https://nodejs.org/api/http.html#http_request_end_data_encoding_callback
     * https://nodejs.org/api/https.html#https_https_request_options_callback
     *
     * Intercept http.get, https.get, http.request, https.request.
     */
    private intercept;
    /**
     * Logic of intercepting http.request and https.request method.
     */
    private inteceptRequestMethod;
    /**
     * https://nodejs.org/api/http.html#http_http_get_url_options_callback
     * Logic of intercepting http.get and https.get method.
     *
     * Since most requests are GET requests without bodies, Node.js provides this convenience method.
     * The only difference between this method and http.request() is that it sets the method to GET
     * and calls req.end() automatically. The callback must take care to consume the response data
     * for reasons stated in http.ClientRequest section.
     */
    private inteceptGetMethod;
    private doRquest;
    /**
     * Get instance of ClientRequest.
     * @param args Arguments of http.get, https.get, http.request or https.request
     */
    private getClientRequest;
    /**
     * Make mock request.
     * @param {ClientRequest} clientRequest
     * @param {MockItem} mockItem
     */
    private doMockRequest;
    /**
     * Make mock request.
     * @param {ClientRequest} clientRequest
     * @param {MockItem} mockItem
     */
    private doMockResponse;
    /**
     * Parse and get normalized arguments of http.get, https.get, http.request or https.request method.
     * http.request(options[, callback])#
     * http.request(url[, options][, callback])
     * @param {any[]} args arguments of http.get, https.get, http.request or https.request
     */
    private getRequestOpts;
    private isUrlObject;
}
