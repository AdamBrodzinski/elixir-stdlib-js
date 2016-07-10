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

  describe("capitalize", () => {
    test("should capitalize the first letter of a word", () => {
      const expected = "Abcd";
      const actual = String.capitalize("abCd");
      assertEq(expected, actual);
    });

    test("should capitalize words with accent symbols", () => {
      const expected = "Olá";
      const actual = String.capitalize("olá");
      assertEq(expected, actual);
    });
  });

  describe("contains", () => {
    test("string contains part of the arg passed in", () => {
      const expected = true;
      const actual = String.contains("elixir of life", "of");
      assertEq(expected, actual);
    });

    test("string does not contain part of the arg passed in", () => {
      const expected = false;
      const actual = String.contains("elixir of life", "bar");
      assertEq(expected, actual);
    });

    test("string has one of the patterns passed in", () => {
      const expected = true;
      const actual = String.contains("elixir of life", ["life", "death"]);
      assertEq(expected, actual);
    });

    test("string does not have one of the patterns passed in", () => {
      const expected = false;
      const actual = String.contains("elixir of life", ["death", "mercury"]);
      assertEq(expected, actual);
    });
  });

  describe("downcase", () => {
    test("converts all characters in the given string to lowercase", () => {
      const expected = "abcd";
      const actual = String.downcase("ABCD");
      assertEq(expected, actual);
    });

    test("converts all characters in the given string to lowercase", () => {
      const expected = "ab 123 xpto";
      const actual = String.downcase("AB 123 XPTO");
      assertEq(expected, actual);
    });
  });
});
