// @flow
import _ from "lodash/core";
import capitalize from "lodash/capitalize";
import repeat from "lodash/repeat";

export default {
  // Returns the char at the position of the given utf8 string.
  // If position is greater than string length, then it returns nil.
  // at(t, integer) :: string | null
  at(str: string, position: number): ?string {
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
  contains(str: string, patterns: Array<string> | string): boolean {
    if (_.isString(patterns)) {
      return do_contains(str, [patterns]);
    } else {
      return do_contains(str, patterns);
    }
  },

  // Converts all characters in the given string to lowercase.
  // downcase(string) :: string
  downcase(str: string): string {
    return str.toLowerCase();
  },

  // Returns a string subject duplicated n times.
  // duplicate(string, non_neg_integer) :: string
  duplicate: repeat,
};

function do_contains(str: string, patterns: Array<string>): boolean {
  const results = patterns.map(pattern => {
    const result = str.match(pattern);
    return result !== null;
  });

  return results.indexOf(true) >= 0;
}
