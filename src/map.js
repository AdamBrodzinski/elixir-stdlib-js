import _ from "lodash/core";
import set from "lodash/set";
import omit from "lodash/omit";


export default {
  // Deletes the entries in map for a specific key.
  // delete(object, string) :: object
  delete(obj, key) {
    if (typeof obj[key] === "undefined") {
      return obj;
    }
    return omit(obj, key);
  },

  // Deleted the given keys from map.
  // delete(object, [string]) :: object
  drop(obj, keyList) {
    return omit(obj, keyList);
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

  // Merges two maps into one.
  // All keys in map2 will be added to map1, overriding any existing one.
  // merge(map, map) :: map
  merge(map1, map2) {
    return _.extend({}, map1, map2);
  },

  new(list) {
    if (arguments.length === 0) {
      return {};
    }
    else if (arguments.length > 0 && _.isArray(list)) {
      return _.chain(list)
        // destructure tuple and return new object from key/val
        .map(([key, val]) => ({[key]: val}))
        .reduce((map1, map2) => _.extend(map1, map2), {})
        .value();
    }
    const msg = "arg must be a list of tuples (array [['a', 1], ['b', 2]])";
    throw new Error(msg);
  },

  // Returns and removes the value associated with key in map.
  // optional default value can be passed in if key not found
  // pop(map, key, value) :: [value, map]
  pop(map, key, value = null) {
    if (typeof map[key] === "undefined") {
      return [value, omit(map, key)];
    }
    return [map[key], omit(map, key)];
  },

  // Puts the given value under key. Adds key if not present
  // put(map, key, value) :: map
  put(map, key, value) {
    return set({...map}, key, value);
  },

  // Puts the given value under key unless the entry key already exists.
  // put(map, key, value) :: map
  putNew(map, key, value) {
    if (typeof map[key] !== "undefined") {
      return map;
    }
    return set({...map}, key, value);
  },

  // Takes all entries corresponding to the given keys and extracts them into a separate map.
  // Returns a tuple with the new map and the old map with removed keys.
  // Keys for which there are no entries in map are ignored.
  // split(map, [key]) :: [map, map]
  split(map, keys) {
    return [_.pick(map, keys), omit(map, keys)];
  },

  // Takes all entries corresponding to the given keys and returns them in a new map.
  // take(map, [keys]) :: map
  take: _.pick,

  // Converts map to a list of tuples
  // to_list(map) :: [[key, value]]
  toList(map) {
    const keys = _.keys(map);
    const vals = _.values(map);
    const result = [];

    for (let i = 0; i < keys.length; i++) {
      result.push([keys[i], vals[i]]);
    }
    return result;
  },
};
