"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var tokens = {
  generateAccessToken: function generateAccessToken(content) {
    return _jsonwebtoken["default"].sign(content, process.env.ACCESS_TOKEN_HASH, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE
    });
  },
  generateRefreshToken: function generateRefreshToken(content) {
    return _jsonwebtoken["default"].sign(content, process.env.REFRESH_TOKEN_HASH);
  },
  validateAccessToken: function validateAccessToken(token) {
    return _jsonwebtoken["default"].verify(token, process.env.ACCESS_TOKEN_HASH);
  }
};
var _default = tokens;
exports["default"] = _default;