/**
 * Extract meta information from comments in the specified file.
 * Meta information includes: @url, @method, @disable, @delay, @status and so on.
 * @param {string} file
 */
export function parseCommentTags(file: string): {
    headers: {} | undefined;
    requestHeaders: {} | undefined;
    method: any;
    delay: any;
    times: any;
    status: any;
    disable: any;
    remote: any;
    deProxy: any;
    regexp: RegExp | string[];
    url: any;
};
/**
 * Parse the first comment block of specified file and return meta tags.
 * @param {string} file
 */
export function getFileCommentTags(file: string): {
    tag: string;
    info: string;
}[];
/**
 * Whether or not 'str' is a RegExp object like string.
 * @param {string} str
 */
export function isRegExp(str: string): false | "/" | "#";
/**
 * Whether or not 'str' is a RegExp object like string.
 * @param {string} str
 * @param {boolean} returnRegStrWithOpts
 */
export function str2RegExp(str: string, returnRegStrWithOpts?: boolean): RegExp | string[];
