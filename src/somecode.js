'use strict';

var mod = {};

mod.untested = function () {
  var some, vars;

  some = 2;
  vars = 3;
  return some * vars;
}

mod.tested = function () {
 var other, stuff;

 other = 9;
 stuff = 21;
 return stuff / other;
}


module.exports = mod;