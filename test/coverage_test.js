var should = require('should'),
  somecode = require('../lib/somecode');


describe ('Messing with test coverage', function(){
  describe ('somecode tests', function(){
    it ('should run a test', function () {
      somecode.tested().should.equal(2);
    });

  });
});

