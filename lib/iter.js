"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function iter(n) {
  var current = 0;
  var next = 1;

  for (var i = 0; i < n; i++) {
    var swap = current;
    current = next;
    next = swap + next;
  }
  return current;
}

exports.default = iter;
module.exports = exports["default"];