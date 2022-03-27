var assert = require('assert');
var expect = require("chai").expect;

describe('LEET ME', function () {
  describe('Two Sum', function () {
    const solution = (nums, target) => {
      for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }
    };

    it('1', function () {
      const nums = [2,7,11,15], target = 9;
      const result = solution(nums, target);
      expect(result).to.deep.equal([0, 1]);
    });

    it('2', function () {
      const nums = [3,2,4], target = 6;
      const result = solution(nums, target);
      expect(result).to.deep.equal([1, 2]);
    });

    it('3', function () {
      const nums = [3,3], target = 6;
      const result = solution(nums, target);
      expect(result).to.deep.equal([0, 1]);
    });
  });
});