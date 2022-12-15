"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('main page');
});
app.use('/api', index_1.default);
app.listen(PORT, function () {
    console.log("Running on port ".concat(PORT));
});
exports.default = {
    app: app
};
