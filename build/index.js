"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testFunc = void 0;
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
function testFunc(num) {
    return num * 5;
}
exports.testFunc = testFunc;
exports.default = {
    app: app,
    testFunc: testFunc,
};
