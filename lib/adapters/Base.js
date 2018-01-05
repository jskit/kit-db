'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringify = require('./_stringify');

var Base = function Base(source) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === undefined ? {} : _ref$defaultValue,
      _ref$serialize = _ref.serialize,
      serialize = _ref$serialize === undefined ? stringify : _ref$serialize,
      _ref$deserialize = _ref.deserialize,
      deserialize = _ref$deserialize === undefined ? JSON.parse : _ref$deserialize;

  (0, _classCallCheck3.default)(this, Base);

  this.source = source;
  this.defaultValue = defaultValue;
  this.serialize = serialize;
  this.deserialize = deserialize;
};

module.exports = Base;