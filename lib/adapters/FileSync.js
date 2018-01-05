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
var Base = require('./Base');

var readFile = fs.readFileSync;
var writeFile = fs.writeFileSync;

var FileSync = function (_Base) {
  (0, _inherits3.default)(FileSync, _Base);

  function FileSync() {
    (0, _classCallCheck3.default)(this, FileSync);
    return (0, _possibleConstructorReturn3.default)(this, (FileSync.__proto__ || (0, _getPrototypeOf2.default)(FileSync)).apply(this, arguments));
  }

  (0, _createClass3.default)(FileSync, [{
    key: 'read',
    value: function read() {
      if (fs.existsSync(this.source)) {
        try {
          var data = readFile(this.source, 'utf-8').trim();

          return data ? this.deserialize(data) : this.defaultValue;
        } catch (e) {
          if (e instanceof SyntaxError) {
            e.message = 'Malformed JSON in file: ' + this.source + '\n' + e.message;
          }
          throw e;
        }
      } else {
        writeFile(this.source, this.serialize(this.defaultValue));
        return this.defaultValue;
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      return writeFile(this.source, this.serialize(data));
    }
  }]);
  return FileSync;
}(Base);

module.exports = FileSync;