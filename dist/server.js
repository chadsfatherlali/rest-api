"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var port = process.env.PORT || 8080;
var host = '0.0.0.0';

_app["default"].listen(port, host, function () {
  console.log("Server start listening at http://localhost:".concat(port));
});