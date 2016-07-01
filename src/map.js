import _ from "lodash";

export default {
  // Deletes the entries in map for a specific key.
  // delete(Object, String) :: Object
  delete(obj, key) {
    if (typeof obj[key] === "undefined") {
      return obj;
    }
    return _.omit(obj, key);
  },
};
