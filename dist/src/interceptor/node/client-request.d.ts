import { ClientRequestOptions, ClientRequestType } from '../../types';
/**
 * ClientRequest constructor
 * @param {string} url
 * @param {object} options options of http.get, https.get, http.request or https.request method.
 * @param {function} callback callback of http.get, https.get, http.request or https.request method.
 */
declare function ClientRequest(this: ClientRequestType, url: string, options: ClientRequestOptions, callback: undefined | ((...args: unknown[]) => unknown)): void;
export default ClientRequest;
