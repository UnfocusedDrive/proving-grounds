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

    it('get value more than 1 occurance', function () {
      const values = ['a', 'b', 'b', 'c', 'c', 'c'];
      const getResult = values => {
        const counted = values.reduce((acc, value, i) => {
          acc[value] ? acc[value] += 1 : acc[value] = 1;
          return acc;
        }, {});

        return Object.keys(counted).filter(key => counted[key] > 1);
      };

      const result = getResult(values);
      expect(result).to.deep.equal(['b', 'c']);
    });
  });



  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});