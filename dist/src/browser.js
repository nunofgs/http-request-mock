"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mocker = void 0;
var cache_js_1 = __importDefault(require("../tool/plugin/cache.js"));
var faker_js_1 = __importDefault(require("../tool/plugin/faker.js"));
var browser_pure_1 = __importDefault(require("./browser.pure"));
var mocker_1 = __importDefault(require("./mocker/mocker"));
exports.Mocker = mocker_1.default;
/**
 * The same as BrowserPureIndex, but with "faker" and "cache" plugins.
 */
var BrowserIndex = /** @class */ (function (_super) {
    __extends(BrowserIndex, _super);
    function BrowserIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserIndex.faker = faker_js_1.default;
    BrowserIndex.cache = cache_js_1.default;
    BrowserIndex.default = BrowserIndex; // for backward compatibility
    return BrowserIndex;
}(browser_pure_1.default));
exports.default = BrowserIndex;
//# sourceMappingURL=browser.js.map