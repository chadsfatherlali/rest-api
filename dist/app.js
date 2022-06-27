"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/users/index"));

var _db = _interopRequireDefault(require("./db"));

_db["default"].init().then(function () {
  return 'OK::DB';
})["catch"](function () {
  return 'KO::DB';
});

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use('/api', (0, _index["default"])(_db["default"].models));
app.get('/health', function (req, res) {
  res.send('OK');
});
var _default = app;
exports["default"] = _default;