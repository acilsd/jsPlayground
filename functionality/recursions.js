'use strict';
/*eslint no-console: 0*/
// NOTE:
//
//
//
function sumarizer() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(sumarizer(3, 5, 6, 7, 8));

function sumarizerRecursive() {
  const args = [].slice.call(arguments);
  if (args.length <= 2) {
    return args[0] + args[1];
  }
  return (
    args[0] + sumarizerRecursive.apply(null, args.slice(1))
  );
}

console.log(sumarizerRecursive(3, 5, 6, 7, 8));

const es6RecursiveSum = (...args) => {
  if (args.length <= 2) { return args[0] + args[1]; }
  return (
    args[0] + es6RecursiveSum(...args.slice(1))
  );
};

console.log(es6RecursiveSum(3, 5, 6, 7, 8));

const recursiveMult = (...args) => {
  if (args.length === 0) { return 0; }
  if (args.length <= 1) { return args[0]; }
  if (args.length <= 2) { return args[0] * args[1]; }
  return (
    args[0] * recursiveMult(...args.slice(1))
  );
};

console.log(recursiveMult(2, 5, 6));
