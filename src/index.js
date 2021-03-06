import _ from "lodash";

export { default as lodash } from "lodash/core";
export { default as IO } from "./io";
export { default as Map } from "./map";
export { default as String } from "./string";
export { default as Enum } from "./enum";
export const pipe = _.chain; // match Elixir terminology


// ---- Lodash Mixins ----


_.mixin({
  // mixin IO.inspect for convenience
  inspect(arg1: any): any {
    console.log(arg1);
    return arg1;
  },

  // similar to `thru` but this allows users to
  // use function with more than one argument
  // example:
  //   pipe("555 222-000)
  //   .run(stripChars, "-")
  //   .run(IO.inspect)
  //   .run(stripChars, " ")
  //   .value()
  //
  run(firstParam: any, func: (...any) => any, ...restParams: any): any {
    return func(firstParam, ...restParams);
  },
});
