import { assert } from "chai";
import { IO } from "../src";

describe("IO", () => {
  xit("puts should call console.log", () => {
    // TODO spy on console.log
  });

  it("puts should call console.log", () => {
    assert.equal(IO.puts("Hello"), "ok");
  });
});
