/*eslint-disable*/
'use strict';
// NOTE: just different shit
function talk() {
  console.log(this.sound);
};
let animal = {
  talk
};
let cat = {
  sound: 'meow'
};
let dog = {
  sound: 'woof'
};
let bulldog = {
  howl: function() {
    console.log(this.sound.toUpperCase());
  }
};
Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog, animal);
Object.setPrototypeOf(bulldog, dog);
// cat.talk();
// dog.talk();
// bulldog.howl();

function Person(str) {
  this.str = str;
}
Person.prototype.talk = function(){
  console.log('my word: ', this.str);
}
var crock = new Person('hai');
crock.talk();
