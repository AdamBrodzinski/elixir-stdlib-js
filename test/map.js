import { assert } from "chai";
import { Map } from "../src";
const assertEq = assert.deepEqual;
const test = it;

describe("Map", () => {
  describe("delete", () => {
    it("should remove they key passed in", () => {
      const expected = {b: 2};
      const actual = Map.delete({a: 1, b: 2}, "a");
      assertEq(expected, actual);
    });

    it("should not mutate object passsed in", () => {
      const originalMap = {a: 1, b: 2};
      Map.delete(originalMap, "b");
      assertEq(originalMap, {a: 1, b: 2});
    });

    it("should leave object unchanged if no keys are found", () => {
      const originalMap = {a: 1, b: 2};
      const returnedMap = Map.delete(originalMap, "c");
      assert.isTrue(originalMap === returnedMap);
    });
  });

  describe("drop", () => {
    it("should remove they key passed in", () => {
      const expected = {a: 1, c: 3};
      const actual = Map.drop({a: 1, b: 2, c: 3}, ["b", "d"]);
      assertEq(expected, actual);
    });

    it("should not mutate object passsed in", () => {
      const originalMap = {a: 1, b: 2};
      Map.delete(originalMap, ["b"]);
      assertEq(originalMap, {a: 1, b: 2});
    });
  });

  describe("equal", () => {
    it("should return true if objects have same contents", () => {
      const actual = Map.equal({a: 1, b: 2}, {b: 2, a: 1});
      assert.isTrue(actual);
    });

    it("should return false if objects do not have same contents", () => {
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
});
