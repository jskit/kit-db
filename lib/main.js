'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lodash = require('lodash');
var isPromise = require('is-promise');

module.exports = function (adapter) {
  if ((typeof adapter === 'undefined' ? 'undefined' : (0, _typeof3.default)(adapter)) !== 'object') {
    throw new Error('An adapter must be provided, see https://github.com/typicode/lowdb/#usage');
  }

  var _ = lodash.runInContext();
  var db = _.chain({});

  _.prototype.write = _.wrap(_.prototype.value, function (func) {
    var funcRes = func.apply(this);
    return db.write(funcRes);
  });

  function plant(state) {
    db.__wrapped__ = state;
    return db;
  }

  db._ = _;

  db.read = function () {
    var r = adapter.read();
    return isPromise(r) ? r.then(plant) : plant(r);
  };

  db.write = function (returnValue) {
    var w = adapter.write(db.getState());
    return isPromise(w) ? w.then(function () {
      return returnValue;
    }) : returnValue;
  };

  db.getState = function () {
    return db.__wrapped__;
  };

  db.setState = function (state) {
    return plant(state);
  };

  return db.read();
};