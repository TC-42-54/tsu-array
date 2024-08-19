"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInString = exports.toBase64 = void 0;
const toBase64 = (value) => Buffer.from(value).toString("base64");
exports.toBase64 = toBase64;
const isInString = (str, toFind) => str.indexOf(toFind) >= 0;
exports.isInString = isInString;
//# sourceMappingURL=index.js.map