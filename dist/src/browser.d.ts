import BrowserPureIndex from './browser.pure';
import Mocker from './mocker/mocker';
export type { HttpVerb, Method, MockItemExt, MockItemInfo, RequestInfo } from './types';
export { Mocker };
/**
 * The same as BrowserPureIndex, but with "faker" and "cache" plugins.
 */
export default class BrowserIndex extends BrowserPureIndex {
    static faker: {
        chinese: {
            words: string[];
            firstNames: string[];
            lastNames: string[];
            cities: {
                河北省: string;
                山西省: string;
                内蒙古自治区: string;
                辽宁省: string;
                吉林省: string;
                黑龙江省: string;
                江苏省: string;
                浙江省: string;
                安徽省: string;
                福建省: string;
                江西省: string;
                山东省: string;
                河南省: string;
                湖北省: string;
                湖南省: string;
                广东省: string;
                广西壮族自治区: string;
                海南省: string;
                四川省: string;
                贵州省: string;
                云南省: string;
                陕西省: string;
                甘肃省: string;
                青海省: string;
                西藏自治区: string;
                宁夏回族自治区: string;
                新疆维吾尔自治区: string;
            };
            area: string[];
        };
        rand(min?: number, max?: number): number;
        range(start?: number, stop?: number, step?: number): number[];
        bool(): boolean;
        char(pool?: string): string;
        string(min?: number, max?: number, pool?: string): string;
        float(min?: number, max?: number, fraction?: number): number;
        integer(min?: number, max?: number): number;
        sentence(cn?: boolean): string;
        text(cn?: boolean): string;
        word(cn?: boolean): string;
        name(cn?: boolean): string;
        firstName(cn?: boolean): string;
        lastName(cn?: boolean): string;
        gender(pool?: string[]): any;
        province(cn?: boolean): string;
        city(cn?: boolean): string;
        street(cn?: boolean): string;
        address(cn?: boolean): string;
        avatar(size?: number): string;
        image(size?: string, type?: string): string;
        email(provider?: string, suffix?: string): string;
        ip(): string;
        phone(format?: string): string;
        format(format: string): string;
        url(): string;
        guid(): string;
        datetime(timestamp: number, dateFormat?: string, timeFormat?: string): string;
        date(timestamp: number, format?: string): string;
        time(timestamp: number, format?: string): string;
        bytes(str?: string): ArrayBuffer | number[];
        pick(arr: any[], quantity?: number): any;
        incrementId(group?: string, base?: number): number;
        rotate(arr: any[], group?: string): any;
        readonly shadow: any;
    };
    static cache: (cacheKey: string, mockData: any) => any;
    static default: typeof BrowserIndex;
}
