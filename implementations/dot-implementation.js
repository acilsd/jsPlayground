/*eslint-disable*/

//DOT implementation (obj.property)
var DOT = function(obj, prop) {
  if(obj.hasOwnProperty(prop)) {
    return obj[prop];
  } else if(obj.__proto__) {
    return DOT(obj.__proto__, prop);
  }
};

var Person = function(name) {
  this.name = name;
};
Person.prototype.isPerson = true;
Person.prototype.speak = function(to) {
  console.log('Hello, ' + to + ' , my name is ' + this.name);
}

var man = new Person('Smith');

console.log(DOT(man, 'name')); // man.name = smith
console.log(DOT(man, 'isPerson')); //true

//invoking function (obj.method)
var DOTCALL = function(obj, prop, args) {
  var f = DOT(obj, prop);
  if(f) {
    return f.apply(obj, args);
  }
};

console.log(DOTCALL(man, 'speak', ['Justin'])); //man.speak = Hello, smith

////
var NEW = function(constructor, args) {

};

var INSTANCEOF = function(obj, constructor) {

};
