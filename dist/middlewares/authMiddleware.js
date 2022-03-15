"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tokens = _interopRequireDefault(require("../helpers/tokens"));

var authMiddleware = function authMiddleware(req, res, next) {
  if (req.headers.authorization) {
    try {
      var token = req.headers.authorization.split(' ')[1];

      var verifiedTokenData = _tokens["default"].validateAccessToken(token);

      req.user = verifiedTokenData;
      next();
    } catch (err) {
      res.status(401).json(err);
    }
  } else {
    res.status(401).json({
      name: 'NULL_TOKEN_NOT_ALLOWED',
      message: 'You should provide a authorization token'
    });
  }
};

var _default = authMiddleware;
exports["default"] = _default;