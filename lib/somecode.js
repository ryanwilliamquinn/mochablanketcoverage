'use strict';
var mod = module.exports = {};

mod.untested = function () {
  var some, vars;

  some = 2;
  vars = 3;
  if (vars < some) {
    return 2;
  }
  return some * vars;
};

mod.tested = function () {
  var other, stuff;
  other = 9;
  stuff = 21;
  return parseInt(stuff / other);
};