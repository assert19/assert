// console.assert does not halt :(
// Also, on failure, we may wish to do some custom action or show some custom error.

/**
 * Note: it is only needed to use 'await assert' if msgFn is async.
 * @param {boolean} x
 * @param {(()=>string)|(()=>void)} [msgFn]
 */
export async function assert(x, msgFn) {
  if (x) {
    return;
  }
  let s = "Assert failed.";
  console.error(s);
  if (msgFn) {
    var msgFnReturnValue = await msgFn();
    if (typeof msgFnReturnValue === "string") {
      s += " " + msgFnReturnValue;
      console.error(msgFnReturnValue);
    }
  }

  //in case the dev console is open, useful to halt to inspect stack variables
  debugger;

  throw new Error(s);
}
