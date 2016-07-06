import _ from "lodash/core";
import capitalize from "lodash/capitalize";

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

  // Converts the first character in the given string to
  // uppercase and the remainder to lowercase.
  // capitalize(string) :: string
  capitalize,

  // Checks if string contains any of the given contents.
  // contents can be either a single string or a list of strings.
  // contains(string, [string] | string) :: boolean
  contains(str, pat) {
    let patterns;
    if (_.isArray(pat)) {
      patterns = pat;
    }
    else {
      patterns = [pat];
    }

    const results = patterns.map(pattern => {
      const result = str.match(pattern);
      return result !== null;
    });

    return results.indexOf(true) >= 0;
  },
};
