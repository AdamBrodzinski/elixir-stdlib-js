import { assert } from "chai";
import { String } from "../src";
const assertEq = assert.deepEqual;
const test = global.it;

describe("String", () => {
  describe("at", () => {
    test("returns first character using 0 pos", () => {
      const expected = "e";
      const actual = String.at("elixir", 0);
      assertEq(expected, actual);
    });

    test("returns second character using 1 pos", () => {
      const expected = "l";
      const actual = String.at("elixir", 1);
      assertEq(expected, actual);
    });

    test("returns null if position is out of range in positive space", () => {
      const expected = null;
      const actual = String.at("elixir", 6);
      assertEq(expected, actual);
    });

    test("returns last character using -1 pos", () => {
      const expected = "r";
      const actual = String.at("elixir", -1);
      assertEq(expected, actual);
    });

    test("returns null if position is out of range in negative space", () => {
      const expected = null;
      const actual = String.at("elixir", -7);
      assertEq(expected, actual);
    });
  });
});
