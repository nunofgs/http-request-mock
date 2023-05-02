export namespace chinese {
    export { words };
    export { firstNames };
    export { lastNames };
    export { cities };
    export { area };
}
declare const words: string[];
declare const firstNames: string[];
declare const lastNames: string[];
declare namespace cities {
    const 河北省: string;
    const 山西省: string;
    const 内蒙古自治区: string;
    const 辽宁省: string;
    const 吉林省: string;
    const 黑龙江省: string;
    const 江苏省: string;
    const 浙江省: string;
    const 安徽省: string;
    const 福建省: string;
    const 江西省: string;
    const 山东省: string;
    const 河南省: string;
    const 湖北省: string;
    const 湖南省: string;
    const 广东省: string;
    const 广西壮族自治区: string;
    const 海南省: string;
    const 四川省: string;
    const 贵州省: string;
    const 云南省: string;
    const 陕西省: string;
    const 甘肃省: string;
    const 青海省: string;
    const 西藏自治区: string;
    const 宁夏回族自治区: string;
    const 新疆维吾尔自治区: string;
}
declare const area: string[];
/**
 * Return a random integer.
 * @param {number} min
 * @param {number} max
 */
export declare function rand(min?: number, max?: number): number;
/**
 * Return a random integer.
 * @param {number} min
 * @param {number} max
 */
export declare function rand(min?: number, max?: number): number;
/**
 * Create an array containing a range of elements
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 */
export declare function range(start?: number, stop?: number, step?: number): number[];
/**
 * Create an array containing a range of elements
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 */
export declare function range(start?: number, stop?: number, step?: number): number[];
/**
 * The default likelihood of success (returning true) is 50%. Can optionally specify the likelihood in percent.
 * chance.bool({likelihood: 30}): In this case only a 30% likelihood of true, and a 70% likelihood of false.
 */
export declare function bool(): boolean;
/**
 * The default likelihood of success (returning true) is 50%. Can optionally specify the likelihood in percent.
 * chance.bool({likelihood: 30}): In this case only a 30% likelihood of true, and a 70% likelihood of false.
 */
export declare function bool(): boolean;
/**
 * By default it will return a string with random character from the specified pool.
 * @param {string} pool
 */
export declare function char(pool?: string): string;
/**
 * By default it will return a string with random character from the specified pool.
 * @param {string} pool
 */
export declare function char(pool?: string): string;
/**
 * Return a random string. By default it will return a string with random length of 5-20 characters
 * and will contain any of the following characters.
 * @param {number} min
 * @param {number} max
 * @param {string} pool
 */
export declare function string(min?: number, max?: number, pool?: string): string;
/**
 * Return a random string. By default it will return a string with random length of 5-20 characters
 * and will contain any of the following characters.
 * @param {number} min
 * @param {number} max
 * @param {string} pool
 */
export declare function string(min?: number, max?: number, pool?: string): string;
/**
 * Return a random floating point number. By default it will return a fixed number of at most 2 digits after the decimal.
 * @param {number} min
 * @param {number} max
 * @param {number} fraction
 */
export declare function float(min?: number, max?: number, fraction?: number): number;
/**
 * Return a random floating point number. By default it will return a fixed number of at most 2 digits after the decimal.
 * @param {number} min
 * @param {number} max
 * @param {number} fraction
 */
export declare function float(min?: number, max?: number, fraction?: number): number;
/**
 * Return a random integer. range: -9007199254740991 to 9007199254740991
 * @param {number} min
 * @param {number} max
 */
export declare function integer(min?: number, max?: number): number;
/**
 * Return a random integer. range: -9007199254740991 to 9007199254740991
 * @param {number} min
 * @param {number} max
 */
export declare function integer(min?: number, max?: number): number;
/**
 * Return a random sentence populated by semi-pronounceable random (nonsense) words.
 * Default is a sentence with a random number of words from 12 to 18.
 * @param {boolean} cn
 */
export declare function sentence(cn?: boolean): string;
/**
 * Return a random sentence populated by semi-pronounceable random (nonsense) words.
 * Default is a sentence with a random number of words from 12 to 18.
 * @param {boolean} cn
 */
export declare function sentence(cn?: boolean): string;
/**
 * Return a random text words.
 * Default is a sentence with a random number of words from 2 to 8.
 * @param {boolean} cn
 */
export declare function text(cn?: boolean): string;
/**
 * Return a random text words.
 * Default is a sentence with a random number of words from 2 to 8.
 * @param {boolean} cn
 */
export declare function text(cn?: boolean): string;
/**
 * Return a semi-pronounceable random (nonsense) word.
 * @param {boolean} cn
 */
export declare function word(cn?: boolean): string;
/**
 * Return a semi-pronounceable random (nonsense) word.
 * @param {boolean} cn
 */
export declare function word(cn?: boolean): string;
/**
 * Generate a random user name.
 * @param {boolean} cn
 */
export declare function name(cn?: boolean): string;
/**
 * Generate a random user name.
 * @param {boolean} cn
 */
export declare function name(cn?: boolean): string;
/**
 * Generate a random first name.
 * @param {boolean} cn
 */
export declare function firstName(cn?: boolean): string;
/**
 * Generate a random first name.
 * @param {boolean} cn
 */
export declare function firstName(cn?: boolean): string;
/**
 * Generate a random last name.
 * @param {boolean} cn
 */
export declare function lastName(cn?: boolean): string;
/**
 * Generate a random last name.
 * @param {boolean} cn
 */
export declare function lastName(cn?: boolean): string;
/**
 * Generate a random gender.
 * @param {string[]} pool
 */
export declare function gender(pool?: string[]): any;
/**
 * Generate a random gender.
 * @param {string[]} pool
 */
export declare function gender(pool?: string[]): any;
/**
 * Return a random province.
 * @param {boolean} cn
 */
export declare function province(cn?: boolean): string;
/**
 * Return a random province.
 * @param {boolean} cn
 */
export declare function province(cn?: boolean): string;
/**
 * Return a random city.
 * @param {boolean} cn
 */
export declare function city(cn?: boolean): string;
/**
 * Return a random city.
 * @param {boolean} cn
 */
export declare function city(cn?: boolean): string;
/**
 * Return a random street.
 * @param {boolean} cn
 */
export declare function street(cn?: boolean): string;
/**
 * Return a random street.
 * @param {boolean} cn
 */
export declare function street(cn?: boolean): string;
/**
 * Return a random address.
 * @param {boolean} cn
 */
export declare function address(cn?: boolean): string;
/**
 * Return a random address.
 * @param {boolean} cn
 */
export declare function address(cn?: boolean): string;
/**
 * Return a random avatar.
 * @param {number} size
 */
export declare function avatar(size?: number): string;
/**
 * Return a random avatar.
 * @param {number} size
 */
export declare function avatar(size?: number): string;
/**
 * Return a random image.
 * @param {string} size default to 640x480
 * @param {string} type default to any
 */
export declare function image(size?: string, type?: string): string;
/**
 * Return a random image.
 * @param {string} size default to 640x480
 * @param {string} type default to any
 */
export declare function image(size?: string, type?: string): string;
/**
 * Return a random email with a random domain.
 * @param {string} provider
 * @param {string} suffix
 */
export declare function email(provider?: string, suffix?: string): string;
/**
 * Return a random email with a random domain.
 * @param {string} provider
 * @param {string} suffix
 */
export declare function email(provider?: string, suffix?: string): string;
/**
 * Return a random IP Address.
 */
export declare function ip(): string;
/**
 * Return a random IP Address.
 */
export declare function ip(): string;
/**
 * Generate a random phone.
 * @param {string} format
 */
export declare function phone(format?: string): string;
/**
 * Generate a random phone.
 * @param {string} format
 */
export declare function phone(format?: string): string;
/**
 * Generate a random string with specified format.
 * Meta chars:
 *    '#' for [0-9]
 *    '!' for [1-9]
 *    '@' for [a-zA-Z]
 *    '$' for [~!@#$%^&*()_+;'",<>/?\\-]
 *    '%' for [a-zA-Z~!@#$%^&*()_+;'",<>/?\\-]
 * Quantity chars:
 *    '*' for a random number from 0 to 10
 *    '+' for a random number from 1 to 10
 *    '?' for a random number from 0 to 1
 * @param {string} format
 */
export declare function format(format: string): string;
/**
 * Generate a random string with specified format.
 * Meta chars:
 *    '#' for [0-9]
 *    '!' for [1-9]
 *    '@' for [a-zA-Z]
 *    '$' for [~!@#$%^&*()_+;'",<>/?\\-]
 *    '%' for [a-zA-Z~!@#$%^&*()_+;'",<>/?\\-]
 * Quantity chars:
 *    '*' for a random number from 0 to 10
 *    '+' for a random number from 1 to 10
 *    '?' for a random number from 0 to 1
 * @param {string} format
 */
export declare function format(format: string): string;
/**
 * Return a random url.
 * @param {string | undefined} domain
 * @param {string} protocol
 */
export declare function url(): string;
/**
 * Return a random url.
 * @param {string | undefined} domain
 * @param {string} protocol
 */
export declare function url(): string;
/**
 * Return a random guid.
 */
export declare function guid(): string;
/**
 * Return a random guid.
 */
export declare function guid(): string;
/**
 * Return a random datetime.
 * @param {number} timestamp
 * @param {string} dateFormat
 * @param {string} timeFormat
 */
export declare function datetime(timestamp: number, dateFormat?: string, timeFormat?: string): string;
/**
 * Return a random datetime.
 * @param {number} timestamp
 * @param {string} dateFormat
 * @param {string} timeFormat
 */
export declare function datetime(timestamp: number, dateFormat?: string, timeFormat?: string): string;
/**
 * Return a random date.
 * @param {number} timestamp
 * @param {string} format default YYY-MM-DD
 */
export declare function date(timestamp: number, format?: string): string;
/**
 * Return a random date.
 * @param {number} timestamp
 * @param {string} format default YYY-MM-DD
 */
export declare function date(timestamp: number, format?: string): string;
/**
 * Return a random time.
 * @param {number} timestamp
 * @param {string} format default HH:mm:ss
 */
export declare function time(timestamp: number, format?: string): string;
/**
 * Return a random time.
 * @param {number} timestamp
 * @param {string} format default HH:mm:ss
 */
export declare function time(timestamp: number, format?: string): string;
/**
 * Return some bytes.
 * @param {string} str
 */
export declare function bytes(str?: string): number[] | ArrayBuffer;
/**
 * Return some bytes.
 * @param {string} str
 */
export declare function bytes(str?: string): number[] | ArrayBuffer;
/**
 * Given an array, pick some random elements.
 * @param {any[]} arr
 * @param {number} quantity
 */
export declare function pick(arr: any[], quantity?: number): any;
/**
 * Given an array, pick some random elements.
 * @param {any[]} arr
 * @param {number} quantity
 */
export declare function pick(arr: any[], quantity?: number): any;
/**
 * Return an auto-incremented id.
 * @param {string} group
 * @param {number} base
 */
export declare function incrementId(group?: string, base?: number): number;
/**
 * Return an auto-incremented id.
 * @param {string} group
 * @param {number} base
 */
export declare function incrementId(group?: string, base?: number): number;
/**
 * Given an array, returns a value from it in turn
 * @param {any[]} arr
 * @param {string} group
 */
export declare function rotate(arr: any[], group?: string): any;
/**
 * Given an array, returns a value from it in turn
 * @param {any[]} arr
 * @param {string} group
 */
export declare function rotate(arr: any[], group?: string): any;
export {};
