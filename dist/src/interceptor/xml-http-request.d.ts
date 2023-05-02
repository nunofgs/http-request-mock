import Mocker from '../mocker/mocker';
import Base from './base';
export default class XMLHttpRequestInterceptor extends Base {
    private static instance;
    private xhr;
    constructor(mocker: Mocker, proxyServer?: string);
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
     * Logic of intercepting XMLHttpRequest object.
     */
    private intercept;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
     * Logic of intercepting XMLHttpRequest.open method.
     */
    private interceptOpen;
    /**
     * Logic of intercepting XMLHttpRequest.send method.
     */
    private interceptSend;
    /**
     * Set remote result.
     * @param {XMLHttpRequestInstance} xhr
     * @param {Record<string, string>} remoteInfo
     */
    private sendRemoteResult;
    /**
     * Get original response
     * @param {XMLHttpRequestInstance} xhr
     */
    private getOriginalResponse;
    /**
     * Make mock request.
     * @param {XMLHttpRequestInstance} xhr
     * @param {RemoteResponse | null} remoteResponse
     */
    private doMockRequest;
    /**
     * Make mock response.
     * @param {XMLHttpRequestInstance} xhr
     * @param {RemoteResponse | null} remoteResponse
     */
    private doMockResponse;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#event_handlers
     * Call some necessary callbacks if specified. Trigger some necessary events.
     * 'onreadystatechange' as a property of the XMLHttpRequest instance is supported in all browsers.
     * Since then, a number of additional on* event handler properties have been implemented in various
     * browsers (onload, onerror, onprogress, etc.). See Using XMLHttpRequest. More recent browsers,
     * including Firefox, also support listening to the XMLHttpRequest events via standard addEventListener() APIs
     * in addition to setting on* properties to a handler function.
     * @param {XMLHttpRequest} xhr
     */
    private sendResult;
    private event;
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
     * Logic of intercepting XMLHttpRequest.getAllResponseHeaders method.
     */
    private interceptGetAllResponseHeaders;
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getResponseHeader
     * Logic of intercepting XMLHttpRequest.getResponseHeader method.
     */
    private interceptGetResponseHeader;
    /**
     * Logic of intercepting XMLHttpRequest.interceptSetRequestHeader method.
     */
    private interceptSetRequestHeader;
    /**
     * Get getter function by key.
     * @param {string} key
     */
    private getGetter;
    /**
     * Logic of intercepting XMLHttpRequest.readyState getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
     */
    private interceptReadyState;
    /**
     * Logic of intercepting XMLHttpRequest.status getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status
     */
    private interceptStatus;
    /**
     * Logic of intercepting XMLHttpRequest.statusText getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/statusText
     */
    private interceptStatusText;
    /**
     * Logic of intercepting XMLHttpRequest.responseText getter.
     */
    private interceptResponseText;
    /**
     * Logic of intercepting XMLHttpRequest.response getter.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
     * When setting responseType to a particular value, the author should make
     * sure that the server is actually sending a response compatible with that
     * format. If the server returns data that is not compatible with the
     * responseType that was set, the value of response will be null.
     */
    private interceptResponse;
    /**
     * Logic of intercepting XMLHttpRequest.responseURL getter.
     */
    private interceptResponseURL;
    /**
     * Logic of intercepting XMLHttpRequest.responseXML getter.
     */
    private interceptResponseXML;
}
