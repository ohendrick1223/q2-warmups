'use strict';

var assert = require('assert');
require('chai');
var twoSum = require('./jan5');


// describe('Array', function() {
//   it('should take two arguments', function() {
//       var parameters = [arr, target];
//       assert.equal(parameters, parameters.length = 1);
//   });

  // it('should find two values that sum to the target value', function() {
  //
  //   assert.equal('actual', 'expected', 'optl message');
  // });
  //
  // it('should return the indices of the found values', function() {
  //
  //   assert.equal('actual', 'expected', 'optl message');
  // });
  //
  // it('should return answer in an array', function() {
  //
  //   assert.equal('actual', 'expected', 'optl message');
  // });
// });

describe('twoSum', function() {
  describe('Calling twoSum', function() {
    it('should return the correct indices when given an array', function() {
      assert.equal([5,6], twoSum([1, 2, 3, 4, 5, 6, 7], 13));
    });
  });
});
