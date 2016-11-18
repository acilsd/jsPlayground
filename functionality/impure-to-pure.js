'use strict';
// NOTE: turning impure function into pure by wrapping it into the pure one lel
function bar(x, y, z) {
  //now we are returning a new predictable result everytime
  function foo(x) {
    y = y * x;
    z = z * x;
    return [y,z];
  }
  return foo(x);
}

console.log(bar(10, 10, 10));

// // NOTE: ES6-ish curry style
const baz = (x, y) => z => [x * z, y * z];

console.log(baz(10, 10)(10));

// NOTE: and another example
/*nonpure:
  function foo(x) {
   y++;
   z = x * y;
}

var y = 5;
var z; //so we are changing z globally, taht a fckn side-effect

foo(20); //z = 120
foo(25); //z = 175
*/
//solution

function alfa(x, y) {
  var z;

  function beta(x) {
    y++;
    z = x * y;
    return [y, z];
  }

  return beta(x);
}

console.log(alfa ( 20, 5 ));
