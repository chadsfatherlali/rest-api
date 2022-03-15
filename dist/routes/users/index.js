"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var users = _express["default"].Router();

var usersRoutes = function usersRoutes(models) {
  users.get('/users', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                console.log(models);
                res.json({
                  dev: 1
                });
              } catch (error) {
                res.status(400).json(error);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  /* users.post('/users', async (req, res) => {
    try {
      const result = await models.userModel.create(req.body)
        res.json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  })
    users.post('/users/login', async (req, res) => {
    try {
      const result = await models.userModel.findOne({
        where: {
          email: req.body.email,
        },
      })
        if (bcrypt.compareSync(req.body.password, result.password)) {
        const dataToken = { id: result.id }
        const accessToken = tokens.generateAccessToken(dataToken)
        const refreshToken = tokens.generateRefreshToken(dataToken)
          res.setHeader('Set-Cookie', cookie.serialize('session-auth', accessToken, {
          httpOnly: true,
          sameSite: 'strict',
        }))
          res.json({
          accessToken,
          refreshToken,
        })
      } else {
        res.status(400).json({
          name: 'EMAIL_OR_PASS_INCORRECT',
          message: 'Your email/password is incorrect',
        })
      }
    } catch (error) {
      res.status(400).json(error)
    }
  }) */

  return users;
};

var _default = usersRoutes;
exports["default"] = _default;