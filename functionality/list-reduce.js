'use strict';
/*eslint no-console: 0*/
// NOTE: list composition aka reduce

const composer = (arr, fn, int) => {
  let total = int;
  for (let i = 0; i < arr.length; i++) {
    total = fn(total, arr[i]);
  }
  return total;
};

const ourArr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(composer(ourArr, (x, y) => x * y, 1));


// NOTE: not a reduce im just too lazy to make a new file

const nummer = (val) => () => val;

const adder = (val1, val2) => {
  return val1 + val2;
};

const fnAdder = (fn, fn1) => {
  return adder(fn(), fn1());
};



console.log(fnAdder(nummer(2), nummer(2)));
