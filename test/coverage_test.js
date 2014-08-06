var assert = require("assert"),
  blanket = require('blanket'),
  somecode = require('../src/somecode');

describe ('Array', function(){
  describe ('#tested', function(){
    it ('should be tested', function(){
      assert.equals(2, somecode.tested());
    });
  });
});

