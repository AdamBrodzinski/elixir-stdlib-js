import { assert } from "chai";
import { IO } from "../src";

describe("IO", () => {
  xit("puts should call console.log", () => {
    // TODO spy on console.log
  });

  it("puts should call console.log", () => {
    assert.equal(IO.puts("Hello"), "ok");
  });

  xit("inspect should call console.log and print first argument", () => {
    // TODO spy on console.log
  });

  it("inspect should return the argument after printing", () => {
    assert.equal(IO.inspect(3), 3);
  });
});
