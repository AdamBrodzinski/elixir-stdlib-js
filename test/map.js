import { assert } from "chai";
import { Map } from "../src";
const assertEq = assert.deepEqual;

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
});
