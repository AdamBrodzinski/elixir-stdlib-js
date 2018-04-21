// @flow
import _ from 'lodash';

export default {
  // Finds the element at the given index (zero-based).
  // Returns default if index is out of bounds.
  // A negative index can be passed, which means the enumerable is enumerated once
  // and the index is counted from the end (e.g. -1 finds the last element).
  at(array: Array<any>, index: number, defaultValue: any = null): any {
    const { length } = array;
    if (index < length && index >= length * -1) {
      return _.nth(array, index);
    } else {
      return defaultValue;
    }
  },

  // Returns an array where each item is the result of invoking func on each
  // corresponding item of array.
  map(array: Array<any>, func: Function): Array<any> {
    return array.map(func);
  },
};
