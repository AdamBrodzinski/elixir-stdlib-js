import { assert } from "chai";
import { Map } from "../src";
const assertEq = assert.deepEqual;
const test = it;

describe("Map", () => {
  describe("delete", () => {
    test("should remove they key passed in", () => {
      const expected = {b: 2};
      const actual = Map.delete({a: 1, b: 2}, "a");
      assertEq(expected, actual);
    });

    test("should not mutate object passsed in", () => {
      const originalMap = {a: 1, b: 2};
      Map.delete(originalMap, "b");
      assertEq(originalMap, {a: 1, b: 2});
    });

    test("should leave object unchanged if no keys are found", () => {
      const originalMap = {a: 1, b: 2};
      const returnedMap = Map.delete(originalMap, "c");
      assert.isTrue(originalMap === returnedMap);
    });
  });

  describe("drop", () => {
    test("should remove they key passed in", () => {
      const expected = {a: 1, c: 3};
      const actual = Map.drop({a: 1, b: 2, c: 3}, ["b", "d"]);
      assertEq(expected, actual);
    });

    test("should not mutate object passsed in", () => {
      const originalMap = {a: 1, b: 2};
      Map.delete(originalMap, ["b"]);
      assertEq(originalMap, {a: 1, b: 2});
    });
  });

  describe("equal", () => {
    test("should return true if objects have same contents", () => {
      const actual = Map.equal({a: 1, b: 2}, {b: 2, a: 1});
      assert.isTrue(actual);
    });

    test("should return false if objects do not have same contents", () => {
      const actual = Map.equal({a: 1, b: 2}, {b: 1, a: 2});
      assert.isFalse(actual);
    });
  });

  describe("get", () => {
    test("return nil if no default value is passed", () => {
      const expected = null;
      const actual = Map.get({a: 1}, "b");
      assertEq(expected, actual);
    });

    test("return value", () => {
      const expected = 1;
      const actual = Map.get({a: 1}, "a");
      assertEq(expected, actual);
    });

    test("return default value when key is not found", () => {
      const expected = 3;
      const actual = Map.get({a: 1}, "b", 3);
      assertEq(expected, actual);
    });
  });

  describe("hasKey", () => {
    test("should return true if object has key", () => {
      const actual = Map.hasKey({a: 1}, "a");
      assert.isTrue(actual);
    });

    test("should return false if object does not have key", () => {
      const actual = Map.hasKey({a: 1}, "b");
      assert.isFalse(actual);
    });
  });

  describe("keys", () => {
    test("returns all the keys of an object", () => {
      const expected = ["a", "b"];
      const actual = Map.keys({a: 1, b: 2});
      assertEq(expected, actual);
    });

    test("returns empty array if object has no keys", () => {
      const expected = [];
      const actual = Map.keys({});
      assertEq(expected, actual);
    });
  });

  describe("merge/2", () => {
    test("merge keys from second map into first map", () => {
      const expected = {a: 1, b: 2, d: 4};
      const actual = Map.merge({a: 1, b: 2}, {d: 4});
      assertEq(expected, actual);
    });

    test("override existing keys on map1", () => {
      const expected = {a: 3, b: 2, d: 4};
      const actual = Map.merge({a: 1, b: 2}, {a: 3, d: 4});
      assertEq(expected, actual);
    });

    test("should not mutate original maps", () => {
      const map1 = {a: 1, b: 2};
      const map2 = {a: 3, d: 4};
      Map.merge(map1, map2);
      assertEq(map1, {a: 1, b: 2});
      assertEq(map2, {a: 3, d: 4});
    });
  });

  describe("new", () => {
    test("return an empty map with no arguments", () => {
      const expected = {};
      const actual = Map.new();
      assertEq(expected, actual);
    });

    test("create a map from list of key/value tuples", () => {
      const expected = {a: 1, b: 2};
      const actual = Map.new([["a", 1], ["b", 2]]);
      assertEq(expected, actual);
    });

    test("throw error if a list is not used as an arg for Map.new/1", () => {
      try {
        Map.new(2);
      }
      catch (e) {
        const msg = "arg must be a list of tuples (array [['a', 1], ['b', 2]])";
        assertEq(e.message, msg);
      }
    });
  });

  describe("pop", () => {
    test("should return value and object", () => {
      const expected = Map.pop({a: 1}, "a");
      const actual = [1, {}];
      assertEq(expected, actual);
    });

    test("should return null if key not found and no default value passed in", () => {
      const expected = Map.pop({a: 1}, "b");
      const actual = [null, {a: 1}];
      assertEq(expected, actual);
    });

    test("should return default value and object", () => {
      const expected = Map.pop({a: 1}, "b", 3);
      const actual = [3, {a: 1}];
      assertEq(expected, actual);
    });

    test("should not mutate orginal map", () => {
      const map = {a: 1};
      Map.pop(map, "a");
      assertEq(map, {a: 1});
    });
  });

  describe("put", () => {
    test("put value into object if key doesnt exist", () => {
      const expected = Map.put({a: 1}, "b", 2);
      const actual = {a: 1, b: 2};
      assertEq(expected, actual);
    });

    test("should override default value if key exists", () => {
      const expected = Map.put({a: 1, b: 2}, "a", 3);
      const actual = {a: 3, b: 2};
      assertEq(expected, actual);
    });

    test("should not mutate orginal map", () => {
      const map = {a: 1};
      Map.put(map, "b", 2);
      assertEq(map, {a: 1});
    });
  });


  describe("putNew", () => {
    test("put value into object if key doesnt exist", () => {
      const expected = Map.put({a: 1}, "b", 2);
      const actual = {b: 2, a: 1};
      assertEq(expected, actual);
    });

    test("should not override default value if key exists", () => {
      const expected = Map.putNew({a: 1, b: 2}, "a", 3);
      const actual = {a: 1, b: 2};
      assertEq(expected, actual);
    });

    test("should not mutate orginal map", () => {
      const map = {a: 1};
      Map.putNew(map, "b", 2);
      assertEq(map, {a: 1});
    });
  });

  describe("split", () => {
    test("split into two lists", () => {
      const expected = Map.split({a: 1, b: 2, c: 3}, ["a", "c", "e"]);
      const actual = [{a: 1, c: 3}, {b: 2}];
      assertEq(expected, actual);
    });

    test("should not mutate orginal map", () => {
      const map = {a: 1, b: 2, c: 3};
      Map.split(map, "b", 2);
      assertEq(map, {a: 1, b: 2, c: 3});
    });
  });

  describe("take", () => {
    test("take keys and return in a new map", () => {
      const expected = Map.take({a: 1, b: 2, c: 3}, ["a", "c", "e"]);
      const actual = {a: 1, c: 3};
      assertEq(expected, actual);
    });

    test("should not mutate orginal map", () => {
      const map = {a: 1, b: 2, c: 3};
      Map.take({a: 1, b: 2, c: 3}, ["a", "c", "e"]);
      assertEq(map, {a: 1, b: 2, c: 3});
    });
  });

  describe("toList", () => {
    test("convert map to list of tuples", () => {
      const expected = Map.toList({a: 1, b: 2});
      const actual = [["a", 1], ["b", 2]];
      assertEq(expected, actual);
    });

    test("should not mutate orginal map", () => {
      const map = {a: 1, b: 2};
      Map.toList(map);
      assertEq(map, {a: 1, b: 2});
    });
  });

  describe("update", () => {
    test("update key with given function", () => {
      const expected = Map.update({a: 1}, "a", (val) => val * 2);
      const actual = {a: 2};
      assertEq(expected, actual);
    });

    test("should not mutate orginal map", () => {
      const map = {a: 1};
      Map.update(map, "a", (val) => val * 2);
      assertEq(map, {a: 1});
    });
  });
});
