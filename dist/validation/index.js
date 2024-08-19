"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertValidArray = exports.assertArray = exports.isValidArray = exports.isArray = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importStar(require("assert"));
const isArray = (arr) => Array.isArray(arr);
exports.isArray = isArray;
const isValidArray = (arr) => (0, exports.isArray)(arr) && !!arr?.length;
exports.isValidArray = isValidArray;
const assertArray = (arr, functionName, message) => assert_1.default.equal((0, exports.isArray)(arr), true, new assert_1.AssertionError({
    message: `ERROR - [${functionName}] - ${message}`,
    actual: arr,
}));
exports.assertArray = assertArray;
const assertValidArray = (arr, functionName, message) => assert_1.default.equal((0, exports.isValidArray)(arr), true, new assert_1.AssertionError({
    message: `ERROR - [${functionName}] - ${message}`,
    actual: arr,
}));
exports.assertValidArray = assertValidArray;
//# sourceMappingURL=index.js.map