'use strict';
/*eslint no-console: 0*/
// NOTE: basic example
//everybody love this example :3
function counter() {
  let count = 0;
  return function() {
    return count++;
  };
}

const x = counter();
const y = counter();

// NOTE: now more FP pattern hue hue

function sumx(x) {
  return function(y) {
    return x + y;
  };
}
//now we are not mutating :3
const add = sumx(10);
console.log(add(3));

//exactly the same:
const add2 = sumx(3)(10);
console.log(add2);

// NOTE: a function that produces a function which remembers the 2 first args that were passed fo the parent function and always sums them

const sum = (num1, num2) => {
  return function() {
    const acc = num1 + num2;
    return acc;
  };
};
const randomVar = sum(3, 4);
console.log(randomVar());
console.log(randomVar());

// NOTE: ES6 style

const sumEs6 = (num1, num2) => () => num1 + num2;

const anotherRandomVar = sumEs6(3, 4);

console.log(anotherRandomVar());
console.log(anotherRandomVar());
