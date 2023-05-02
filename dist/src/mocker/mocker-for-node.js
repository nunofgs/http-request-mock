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
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var comment_js_1 = require("../../tool/lib/comment.js");
var utils_1 = require("../common/utils");
var mocker_1 = __importDefault(require("./mocker"));
// Note: do not move the function below to another file, as
// different files may affect the depth of error stacks.
var getCallerFile = function () {
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
};
var MockerForNode = /** @class */ (function (_super) {
    __extends(MockerForNode, _super);
    function MockerForNode(proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        return _super.call(this, proxyServer) || this;
    }
    /**
      * Note: this method is only for a nodejs environment.
      * Use a mock file & add it to global mock data configuration.
      * @param {string} file
      * @param {boolean} returnTags
      */
    MockerForNode.prototype.use = function (file, returnTags) {
        if (returnTags === void 0) { returnTags = false; }
        var absoluteFile = file;
        if (!path_1.default.isAbsolute(file)) {
            var callerFile = getCallerFile();
            if (!callerFile) {
                throw new Error('Expected "file" to be a absolute path.');
            }
            absoluteFile = path_1.default.resolve(callerFile, '..', file);
        }
        if (!fs_1.default.existsSync(absoluteFile)) {
            throw new Error("".concat(absoluteFile, " does not exist."));
        }
        var tags = (0, comment_js_1.parseCommentTags)(absoluteFile);
        // To avoid "Critical dependency: the request of a dependency is an expression" error
        tags.body = require(absoluteFile);
        tags.body = (0, utils_1.isImported)(tags.body) ? tags.body.default : tags.body;
        return returnTags ? tags : this.mock(tags);
    };
    return MockerForNode;
}(mocker_1.default));
exports.default = MockerForNode;
//# sourceMappingURL=mocker-for-node.js.map