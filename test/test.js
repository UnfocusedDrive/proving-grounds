var assert = require('assert');
var expect = require("chai").expect;

describe('Array', function () {
  describe('Filters', function () {
    it('get unique values', function () {
      const values = ['a', 'b', 'b'];
      const getUnique = input => input.filter((value, index, arr) => arr.indexOf(value) === index);
      const result = getUnique(values);
      expect(result).to.deep.equal(['a', 'b']);
    });

    // now get only value more than 1
  });



  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});