"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTest = createTest;
exports.createEmploye = createEmploye;
exports.getEmployes = getEmployes;
exports.getOneEmploye = getOneEmploye;
exports.deleteEmploye = deleteEmploye;
exports.updateEmploye = updateEmploye;

var _Employes = require("../models/Employes");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createTest(_x, _x2) {
  return _createTest.apply(this, arguments);
}

function _createTest() {
  _createTest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);
            res.send('received');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createTest.apply(this, arguments);
}

function createEmploye(_x3, _x4) {
  return _createEmploye.apply(this, arguments);
}

function _createEmploye() {
  _createEmploye = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, id, fullname, cargo, isboss, idjefe, newEmploye;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, fullname = _req$body.fullname, cargo = _req$body.cargo, isboss = _req$body.isboss, idjefe = _req$body.idjefe;
            _context2.prev = 1;
            _context2.next = 4;
            return _Employes.Employes.create({
              id: id,
              fullname: fullname,
              cargo: cargo,
              isboss: isboss,
              idjefe: idjefe
            }, {
              fields: ['id', 'fullname', 'cargo', 'isboss', 'idjefe']
            });

          case 4:
            newEmploye = _context2.sent;

            if (!newEmploye) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Employe create successfull',
              data: newEmploye
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Algo salio mal :(',
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createEmploye.apply(this, arguments);
}

function getEmployes(_x5, _x6) {
  return _getEmployes.apply(this, arguments);
}

function _getEmployes() {
  _getEmployes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var employes;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Employes.Employes.findAll();

          case 3:
            employes = _context3.sent;
            res.json({
              data: employes
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getEmployes.apply(this, arguments);
}

function getOneEmploye(_x7, _x8) {
  return _getOneEmploye.apply(this, arguments);
}

function _getOneEmploye() {
  _getOneEmploye = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, employe;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Employes.Employes.findOne({
              where: {
                id: id
              }
            });

          case 4:
            employe = _context4.sent;
            res.json({
              data: employe
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getOneEmploye.apply(this, arguments);
}

function deleteEmploye(_x9, _x10) {
  return _deleteEmploye.apply(this, arguments);
}

function _deleteEmploye() {
  _deleteEmploye = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Employes.Employes.destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              massage: 'Employe deleted successfull',
              count: deleteRowCount
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _deleteEmploye.apply(this, arguments);
}

function updateEmploye(_x11, _x12) {
  return _updateEmploye.apply(this, arguments);
}

function _updateEmploye() {
  _updateEmploye = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body2, fullname, cargo, isboss, idjefe, employes;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, fullname = _req$body2.fullname, cargo = _req$body2.cargo, isboss = _req$body2.isboss, idjefe = _req$body2.idjefe;
            _context7.next = 5;
            return _Employes.Employes.findAll({
              attributes: ['id', 'fullname', 'cargo', 'isboss', 'idjefe'],
              where: {
                id: id
              }
            });

          case 5:
            employes = _context7.sent;

            if (employes.length > 0) {
              employes.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(employe) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return employe.update({
                            fullname: fullname,
                            cargo: cargo,
                            isboss: isboss,
                            idjefe: idjefe
                          });

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context7.abrupt("return", res.json({
              message: 'employe update succesfull',
              data: employes
            }));

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return _updateEmploye.apply(this, arguments);
}