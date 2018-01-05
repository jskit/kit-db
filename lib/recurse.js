"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function recurse(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recurse(n - 1) + recurse(n - 2);
}

exports.default = recurse;
module.exports = exports["default"];