// 1. Function that takes a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. Function that returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    return "Hello from the named function!";
  }
  return namedFunction;
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    return "Hello from the anonymous function!";
  };
}
