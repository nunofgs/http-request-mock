"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var comment_js_1 = require("../../tool/lib/comment.js");
var utils_1 = require("../common/utils");
var mocker_1 = __importDefault(require("./mocker"));
var Use = /** @class */ (function () {
    function Use() {
    }
    Use.init = function () {
        /**
        * Note: this method is only for a nodejs environment(test environment).
        * Use a mock file & add it to global mock data configuration.
        * @param {string} file
        * @param {boolean} returnTags
        */
        mocker_1.default.prototype.use = function use(file, returnTags) {
            if (returnTags === void 0) { returnTags = false; }
            var absoluteFile = file;
            if (!path_1.default.isAbsolute(file)) {
                var callerFile = Use.getCallerFile();
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
    };
    Use.getCallerFile = function () {
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
    return Use;
}());
exports.default = Use;
//# sourceMappingURL=use.js.map