import _ from "lodash/core";

export default {
  // Returns the char at the position of the given utf8 string.
  // If position is greater than string length, then it returns nil.
  // at(t, integer) :: string | null
  at(str, position) {
    const isNegative = Math.sign(position) === -1;

    if (position >= str.length) {
      return null;
    }
    else if (isNegative) {
      return str.charAt(str.length - Math.abs(position)) || null;
    }
    return str.charAt(position);
  },
};
