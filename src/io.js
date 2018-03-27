// @flow
export default {
  // puts(any) :: "ok"
  puts(): string {
    console.log.apply(console, arguments);
    return "ok";
  },

  // useful for printing out the contents in a pipeline
  //
  // example
  // _.chain([1, 2])
  //   .map(x => x * 2)
  //   .thru(IO.inspect)
  //   .map(x => x * 2)
  //   .thru(IO.inspect)
  //   .value();
  //
  // "[2, 4]"  (console.logs)
  // "[6, 8]"
  // >> [6,8]
  //
  // puts(any) :: any
  inspect(arg1: any): any {
    console.log(arg1);
    return arg1;
  },
};
