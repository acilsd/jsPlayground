'use strict';
object
var point = new Object();

point.x = 10;
point.y = 15;

console.log(point.x);
//array
var a = new Array();
var b = Array(1, 2, 3, 4, 5, 6);
var c = Array(10);
console.log(a, b, c);

function Point(x, y) {
  this.x = x;
  this.y = y;
}

var p = new Point(10,20);
p.z = 30;
console.log(p);

var Friend = function(mood) {
  this.mood = mood;
  if(mood === 'nice') {
    this.talk = function() {
      console.log('Hello, im feelin good');
    };
  } else if (mood === 'bad') {
    this.talk = function() {
      console.log('FUCK YOU!');
    };
  } else {
    this.talk = function() {
      console.log('Hm...');
    };
  }
}
var firendMood = 'bad';
var David = new Friend(firendMood);
David.talk();

function Point(x,y) {
  this.x = x;
  this.y = y;

  this.print = function() {
    console.log(this.x + ', ' + this.y);
  };
};
Point.MaxPointCount = 100;
Point.getOrigin = function() {
  return new Point(0, 0);
};
var p1 = new Point(100, 200);
p1.print();
var p2 = new Point(200, 300);
p2.print();

Point.MaxPointCount = 1000;
Point.getOrigin().print();
//////
// Prototypes
function Rectangle(w, h) {
  this.width = w;
  this.height = h;
  // this.getArea = function() {
  //   return this.width * this.height;
  // };
}
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
Rectangle.prototype.name = 'RECTANGLE';

var rect = new Rectangle(100, 50);
var rect1 = new Rectangle(200,10);
rect1.name = 'TEST';
console.log(rect.getArea());
console.log(rect.name);
console.log(rect1.name);
