import _ from "lodash";

export default {
  // Deletes the entries in map for a specific key.
  // delete(object, string) :: object
  delete(obj, key) {
    if (typeof obj[key] === "undefined") {
      return obj;
    }
    return _.omit(obj, key);
  },

  // Deleted the given keys from map.
  // delete(object, [string]) :: object
  drop(obj, keyList) {
    return _.omit(obj, keyList);
  },

  // Two maps are considered to be equal if they contain
  // the same keys and those keys contain the same values.
  // equal(object, object) :: boolean
  equal(obj1, obj2) {
    return _.isEqual(obj1, obj2);
  },

  // Gets the value for a specific key. If key does not exist,
  // return the default value (null if no default value).
  // get(map, key, value|null) :: value
  get(map, key, value = null) {
    if (typeof map[key] === "undefined") {
      return value;
    }
    return map[key];
  },

  // Returns whether a given key exists in the given map.
  // hasKey(map, key) :: boolean
  hasKey(map, key) {
    return typeof map[key] !== "undefined";
  },

  // Returns all keys from a map.
  // keys(map) :: [key]
  keys: _.keys,

};
