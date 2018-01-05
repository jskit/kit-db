'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = require('./Base');

var LocalStorage = function (_Base) {
  (0, _inherits3.default)(LocalStorage, _Base);

  function LocalStorage() {
    (0, _classCallCheck3.default)(this, LocalStorage);
    return (0, _possibleConstructorReturn3.default)(this, (LocalStorage.__proto__ || (0, _getPrototypeOf2.default)(LocalStorage)).apply(this, arguments));
  }

  (0, _createClass3.default)(LocalStorage, [{
    key: 'read',
    value: function read() {
      var data = localStorage.getItem(this.source);
      if (data) {
        return this.deserialize(data);
      } else {
        localStorage.setItem(this.source, this.serialize(this.defaultValue));
        return this.defaultValue;
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.source, this.serialize(data));
    }
  }]);
  return LocalStorage;
}(Base);

module.exports = LocalStorage;