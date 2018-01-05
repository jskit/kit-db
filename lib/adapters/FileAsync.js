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

var fs = require('graceful-fs');
var pify = require('pify');
var steno = require('steno');
var Base = require('./Base');

var readFile = pify(fs.readFile);
var writeFile = pify(steno.writeFile);

var FileAsync = function (_Base) {
  (0, _inherits3.default)(FileAsync, _Base);

  function FileAsync() {
    (0, _classCallCheck3.default)(this, FileAsync);
    return (0, _possibleConstructorReturn3.default)(this, (FileAsync.__proto__ || (0, _getPrototypeOf2.default)(FileAsync)).apply(this, arguments));
  }

  (0, _createClass3.default)(FileAsync, [{
    key: 'read',
    value: function read() {
      var _this2 = this;

      if (fs.existsSync(this.source)) {
        return readFile(this.source, 'utf-8').then(function (data) {
          var trimmed = data.trim();
          return trimmed ? _this2.deserialize(trimmed) : _this2.defaultValue;
        }).catch(function (e) {
          if (e instanceof SyntaxError) {
            e.message = 'Malformed JSON in file: ' + _this2.source + '\n' + e.message;
          }
          throw e;
        });
      } else {
        return writeFile(this.source, this.serialize(this.defaultValue)).then(function () {
          return _this2.defaultValue;
        });
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      return writeFile(this.source, this.serialize(data));
    }
  }]);
  return FileAsync;
}(Base);

module.exports = FileAsync;