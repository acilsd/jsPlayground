// var MyClass = function() {
//   //закрытый метод
//   var privateMethod = function() {
//     console.log('private!');
//   };
//   //публичный
//   this.publicMethod = function() {
//     console.log('public!');
//     privateMethod();
//   };
// };
// var obj = new MyClass();
// obj.publicMethod();
//obj.privateMethod(); //error
//obj['privateMethod']; //norm

/*НАСЛЕДОВАНИЕ*/
function Human(name) {
  this.name = name;
  this.talk = function() {
    console.log('Hello, my name is ' + this.name);
  }
}
function Student(name) {
  this.name = name;
  this.school = 'CBS school';
}
function Worker(name) {
  this.name = name;
  this.speciality = 'Bydlokoder';
}

var human = new Human('John');
// human.talk();
Student.prototype = human;
Worker.prototype = human;

var Alex = new Student('Alex');
var Andrew = new Worker('Andrew');
Alex.talk();
Andrew.talk();
