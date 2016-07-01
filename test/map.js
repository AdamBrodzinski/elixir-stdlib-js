import { assert } from "chai";
import { Map } from "../src";
const assertEq = assert.deepEqual;

describe("Map", () => {
  describe("delete", () => {
    it(".delete should remove they key passed in", () => {
      const expected = {b: 2};
      const actual = Map.delete({a: 1, b: 2}, "a");
      assertEq(expected, actual);
    });

    it(".delete should not mutate object passsed in", () => {
      const originalMap = {a: 1, b: 2};
      Map.delete(originalMap, "b");
      assertEq(originalMap, {a: 1, b: 2});
    });

    it(".delete should leave object unchanged if no keys are found", () => {
      const originalMap = {a: 1, b: 2};
      const returnedMap = Map.delete(originalMap, "c");
      assert.isTrue(originalMap === returnedMap);
    });
  });
});
