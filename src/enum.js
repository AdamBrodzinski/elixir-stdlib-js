// @flow
export default {
  // Finds the element at the given index (zero-based).
  // Returns default if index is out of bounds.
  // A negative index can be passed, which means the enumerable is enumerated once
  // and the index is counted from the end (e.g. -1 finds the last element).
  at(array: Array<any>, index: number, defaultValue: any = null): any {
    const { length } = array;
    if (index < 0) {
      const reverseIndex = length + index;
      if (reverseIndex > 0 && reverseIndex < length) {
        return array[reverseIndex];
      }
    } else if (index < length) {
      return array[index];
    }
    return defaultValue;
  },

  // Returns an array where each item is the result of invoking func on each
  // corresponding item of array.
  map(array: Array<any>, func: Function): Array<any> {
    return array.map(func);
  },
};
