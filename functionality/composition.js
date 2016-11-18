/*eslint no-console: 0*/
//function to function to function
// NOTE: before composition
function sum(x, y) {
  return x + y;
}
function mult(x, y) {
  return x * y;
}
var z = mult(3, 4);
z = sum(z , 5);
console.log(z); //17

// NOTE: after composition
var cp = sum ( mult(3, 4), 5);
console.log(cp);
// NOTE: manual composition

function multiSum(x, y, z) {
  return sum ( mult(x, y), z);
}
console.log(multiSum(3, 4, 5));

// NOTE: more complx one
function composer(f1, f2) {
  return function cp() {
    var args = [].slice.call(arguments);
    return f2(
      f1(args.shift(), args.shift()),
      args.shift()
    );
  };
}
var composeMultSum = composer(mult, sum);
console.log(composeMultSum(3, 4, 5));
