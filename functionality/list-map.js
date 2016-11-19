'use strict';
/*eslint no-console: 0*/

// NOTE: a VARY basic filter implementation
//no checkers, no bindings etc

const doubler = (num) => num * 2;

const ourOwnMapper = (arr, fn) => {
  let accum = [];
  for (let i = 0; i < arr.length; i++) {
    accum[i] = fn(arr[i]);
  }
  return accum;
};

const ourArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(ourOwnMapper(ourArr, doubler));
//or like this
console.log(ourOwnMapper(ourArr, (num) => num * 3));
