import { Query } from '../types';
/**
 * Get query parameters from the specified request url.
 * https://www.sitepoint.com/get-url-parameters-with-javascript/
 *
 * @param {string} reqUrl
 */
export declare function getQuery(reqUrl: string): Query;
/**
 * Convert query object to search string.
 * @param {object} queryObj
 */
export declare function queryObject2String(queryObj: Query): string;
/**
 * Check whether or not the specified obj is an object.
 * @param {unknown} obj
 */
export declare function isObject(obj: unknown): boolean;
/**
 * Try to convert an object like string to an object.
 * @param {unknown} body
 */
export declare function tryToParseObject(body: unknown): any;
/**
 * Try to parse a JSON string
 * @param {unknown} body
 */
export declare function tryToParseJson(str: string, defaultVal?: null): any;
/**
 * Sleep the specified number of milliseconds.
 * @param {number} ms
 */
export declare function sleep(ms: number): Promise<unknown>;
/**
 * Convert string to arraybuffer.
 * @param {string} str
 */
export declare function str2arrayBuffer(str: string): ArrayBuffer | null;
/**
 * Whether or not the specified data is arraybuffer.
 * @param {unknown} data
 */
export declare function isArrayBuffer(data: unknown): boolean;
/**
 * Get current date.
 */
export declare function currentDate(): string;
/**
 * Get current time.
 */
export declare function currentTime(): string;
/**
 * Get current datetime.
 */
export declare function currentDatetime(): string;
/**
 * Check current environment: nodejs or not.
 * Note: arrow function is required.
 */
export declare function isNodejs(): boolean;
/**
 * Check if an object is a Promise
 */
export declare function isPromise(object: unknown): boolean;
/**
 * Check if an object is imported.
 */
export declare function isImported(obj: unknown): unknown;
/**
 * Get caller file from error stack
 */
export declare function getCallerFile(): string | undefined;
