'use strict';

var assert = require('assert');
require('chai');
var plusOne = require('./test');


describe('plusOne', function() {
  describe('Calling plusOne', function() {
    it('should return the sum of integers after adding 1 to each', function() {
      assert.equal( 14, plusOne([1,2,3,4]) );
    });
  });
});
