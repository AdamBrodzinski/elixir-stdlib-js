import { assert } from 'chai';
import { Enum } from '../src';

const assertEq = assert.deepEqual;
const test = it;

describe('Enum', () => {
  describe('at', () => {
    it('should return the value at the given index', () => {
      const expected = 5;
      const actual = Enum.at([2, 6, 4, 2, 5, 8, 9, 7, 2, 3], 4);
      assertEq(expected, actual);
    });

    it('should return the reveresed-indexed value if the index is negative', () => {
      const expected = 7;
      const actual = Enum.at([2, 6, 4, 2, 5, 8, 9, 7, 2, 3], -3);
      assertEq(expected, actual);
    });

    it('should return null if the index value is greater than the array length', () => {
      const expected = null;
      const actual = Enum.at([4, 7, 3, 56, 3, 5, 3], 10);
      assertEq(expected, actual);
    });

    it('should return null if the index value is less than the array length * -1', () => {
      const expected = null;
      const actual = Enum.at([4, 7, 3, 56, 3, 5, 3], -10);
      assertEq(expected, actual);
    });

    it('should return undefined if that is the actual value at the index specified', () => {
      const expected = undefined;
      const actual = Enum.at([5, 2, undefined, 7, 3, 5], 2);
      assertEq(expected, actual);
    });
  });

  describe('map', () => {
    it('should return a new array with the mapped elements', () => {
      const expected = [2, 4, 6];
      const actual = Enum.map([1, 2, 3], (x) => 2 * x);
      assertEq(expected, actual);
    });

    it('should not mutate the source array', () => {
      const expected = [1, 2, 3];
      const actual = [1, 2, 3];
      Enum.map(actual, (x) => {
        x = 2 * x;
        return x;
      });
      assertEq(expected, actual);
    });

    it('should handle an empty array', () => {
      const expected = [];
      const actual = Enum.map([], (x) => 2 * x);
      assertEq(expected, actual);
    });
  });
});
