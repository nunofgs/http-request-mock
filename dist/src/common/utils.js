"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallerFile = exports.isImported = exports.isPromise = exports.isNodejs = exports.currentDatetime = exports.currentTime = exports.currentDate = exports.isArrayBuffer = exports.str2arrayBuffer = exports.sleep = exports.tryToParseJson = exports.tryToParseObject = exports.isObject = exports.queryObject2String = exports.getQuery = void 0;
/**
 * Get query parameters from the specified request url.
 * https://www.sitepoint.com/get-url-parameters-with-javascript/
 *
 * @param {string} reqUrl
 */
function getQuery(reqUrl) {
    var _a;
    // no protocol, domain, path and hash tag
    var query = (reqUrl || '').replace(/^.*?\?/g, '').replace(/#.*$/g, '');
    var obj = {};
    if (query) {
        var parts = query.split('&');
        for (var i = 0; i < parts.length; i++) {
            var _b = parts[i].split('='), key = _b[0], _c = _b[1], val = _c === void 0 ? '' : _c;
            // for keys which ends with square brackets, such as list[] or list[1]
            if (key.match(/\[(\d+)?\]$/)) {
                var field = key.replace(/\[(\d+)?\]/, '');
                obj[field] = obj[field] || [];
                if (key.match(/\[\d+\]$/)) {
                    // set array index, if it's an indexed array e.g. list[2]
                    obj[field][Number((_a = /\[(\d+)\]/.exec(key)) === null || _a === void 0 ? void 0 : _a[1])] = val;
                }
                else {
                    obj[field].push(val);
                }
            }
            else {
                if (key in obj) {
                    obj[key] = [].concat(obj[key], val);
                }
                else {
                    obj[key] = val;
                }
            }
        }
    }
    return obj;
}
exports.getQuery = getQuery;
/**
 * Convert query object to search string.
 * @param {object} queryObj
 */
function queryObject2String(queryObj) {
    var str = [];
    for (var key in queryObj) {
        if (Array.isArray(queryObj[key])) {
            for (var _i = 0, _a = queryObj[key]; _i < _a.length; _i++) {
                var val = _a[_i];
                str.push(key + '=' + val);
            }
        }
        else {
            str.push(key + '=' + queryObj[key]);
        }
    }
    return str.join('&');
}
exports.queryObject2String = queryObject2String;
/**
 * Check whether or not the specified obj is an object.
 * @param {unknown} obj
 */
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
exports.isObject = isObject;
/**
 * Try to convert an object like string to an object.
 * @param {unknown} body
 */
function tryToParseObject(body) {
    var isObjLiked = typeof body === 'string' && body[0] === '{' && body[body.length - 1] === '}';
    var isArrLiked = typeof body === 'string' && body[0] === '[' && body[body.length - 1] === ']';
    if (!isObjLiked && !isArrLiked) {
        return body;
    }
    try {
        return JSON.parse(body);
    }
    catch (e) {
        return body;
    }
}
exports.tryToParseObject = tryToParseObject;
/**
 * Try to parse a JSON string
 * @param {unknown} body
 */
function tryToParseJson(str, defaultVal) {
    if (defaultVal === void 0) { defaultVal = null; }
    try {
        return JSON.parse(String(str));
    }
    catch (e) {
        return defaultVal;
    }
}
exports.tryToParseJson = tryToParseJson;
/**
 * Sleep the specified number of milliseconds.
 * @param {number} ms
 */
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.sleep = sleep;
/**
 * Convert string to arraybuffer.
 * @param {string} str
 */
function str2arrayBuffer(str) {
    if (typeof TextEncoder === 'function') {
        return new TextEncoder().encode(str);
    }
    if (typeof ArrayBuffer === 'function') {
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    return null;
}
exports.str2arrayBuffer = str2arrayBuffer;
/**
 * Whether or not the specified data is arraybuffer.
 * @param {unknown} data
 */
function isArrayBuffer(data) {
    if (typeof ArrayBuffer === 'function' && data instanceof ArrayBuffer) {
        return true;
    }
    if (typeof Int32Array === 'function' && (data instanceof Int32Array)) {
        return true;
    }
    if (typeof Int16Array === 'function' && (data instanceof Int16Array)) {
        return true;
    }
    if (typeof Int8Array === 'function' && (data instanceof Int8Array)) {
        return true;
    }
    return false;
}
exports.isArrayBuffer = isArrayBuffer;
/**
 * Get current date.
 */
function currentDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(year), "-").concat(two(month), "-").concat(two(date));
}
exports.currentDate = currentDate;
/**
 * Get current time.
 */
function currentTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(hour), ":").concat(two(minute), ":").concat(two(second));
}
exports.currentTime = currentTime;
/**
 * Get current datetime.
 */
function currentDatetime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(year), "-").concat(two(month), "-").concat(two(date), " ").concat(two(hour), ":").concat(two(minute), ":").concat(two(second));
}
exports.currentDatetime = currentDatetime;
/**
 * Check current environment: nodejs or not.
 * Note: arrow function is required.
 */
function isNodejs() {
    return (typeof process !== 'undefined')
        && (Object.prototype.toString.call(process) === '[object process]')
        && (!!(process.versions && process.versions.node));
}
exports.isNodejs = isNodejs;
/**
 * Check if an object is a Promise
 */
function isPromise(object) {
    if (Promise && Promise.resolve) {
        return Promise.resolve(object) === object;
    }
    else {
        throw new Error('Promise not supported in your environment');
    }
}
exports.isPromise = isPromise;
/**
 * Check if an object is imported.
 */
function isImported(obj) {
    return obj && typeof obj === 'object' && Object.keys(obj).length === 1 && ('default' in obj);
}
exports.isImported = isImported;
/**
 * Get caller file from error stack
 */
function getCallerFile() {
    var oldPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) { return stack; };
    var stack = new Error().stack;
    Error.prepareStackTrace = oldPrepareStackTrace;
    if (stack !== null && typeof stack === 'object') {
        for (var i = 0; i < 50; i++) {
            var file = stack[i] ? stack[i].getFileName() : undefined;
            var next = stack[i + 1] ? stack[i + 1].getFileName() : undefined;
            if (file !== next && file === __filename) {
                return next;
            }
        }
    }
}
exports.getCallerFile = getCallerFile;
//# sourceMappingURL=utils.js.map