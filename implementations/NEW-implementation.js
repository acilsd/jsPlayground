/*eslint-disable*/
var Person = function(name) {
  this.name = name;
};

Person.prototype.speak = function() {
  console.log('hello ' + this.name);
};


NEW = function(constructor) {
  //create new obj
  var obj = {};
  //set proto to constr' prototype
  obj.__proto__ = constructor.prototype;
  //invoke constructor with new obj as context
  var args = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, args.slice(1));

  return obj;
}

INSTANCEOF = function(object, constructor) {
  if(object.__proto__ === constructor.prototype) {
    console.log(true);
    return true;
  } else if(object.__proto__) {
    return INSTANCEOF(object.__proto__, constructor)
  } else {
    console.log(false);
    return false;
  }
}

var person = NEW( Person, ['Justin'] );
//equals to var person = new Person('Justin')
person.speak();
INSTANCEOF( person, Person );
//true
