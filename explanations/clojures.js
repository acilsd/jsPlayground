/*eslint-disable*/
// var sum = function(x, y) {
//   return ++x + ++y.val;
// };
// var a = 1;
// var b = {val: 2};
//
// var c = sum(a, b);
// console.log(a, b, c); //1 3 5 ?????

//sum => function => prototype object
//a => 1
//b => object => val=> 2
//calling sum function => new call abject created, containing all arguments
//x => a => 1; передается значение y => b => object => val => 2; передается по ссылке
//увеличивается икс (2, а остается прежним), увеличивается у (3, вал = 3)
//ТЛДР: примиитвы передаются по значению, объекты - по ссылке

// var a = {};
//
// for(var i = 0; i < 3; i++) {
//   console.log(i);
//   a[i] = function() {console.log(i);}
//   console.log(a);
// }
// a[0](); //3
// a[1](); //3
// a[2](); //3


//
//
//clojures
var counter = function() {
  var count = 0;

  return function() {
    //var count = 0;
    return ++count;
  }
}

var c1 = counter();
console.log(c1());
console.log(c1());
console.log(c1());
var c2 = counter();
console.log(c2());
console.log(c1());
console.log(c1());

// counter => function
// new call object => count => 0
// returning function <=> c1
// running c1 => new call object => c1 => ++count
