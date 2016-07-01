/* global arguments */
/* eslint no-console: 0 */

export default {
  // puts(any) :: "ok"
  puts() {
    console.log.apply(console, arguments);
    return "ok";
  },
};
