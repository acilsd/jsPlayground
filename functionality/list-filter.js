'use strict';
/*eslint no-console: 0*/

const odder = (val) => {
  return val % 2 == 1;
};

const filtrator = (arr, fn) => {
  const accum = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      accum.push(arr[i]);
    }
  }
  return accum;
};

const numArr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filtrator(numArr, odder));

console.log(filtrator(numArr, (val) => val % 2 == 0));
