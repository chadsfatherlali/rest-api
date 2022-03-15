"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  name: String
});
var Users = (0, _mongoose.model)('Users', userSchema);
var _default = Users;
exports["default"] = _default;