'use strict';
let x = 'foo';//локальная переменная
const variable = 'initial variable';//константа
if(true) {
  let x = 'bar';
}
console.log(x);
//деструктуризация
let array = [1,2,3,4,5];
let [a, b] = array; //1, 2
let [, , , d]//4

//spread
let [x, ...rest] = array;//x = 1, rest = [все остальное]

let me = {
  name: 'vasya',
  age: 20,
  gender: 'male',
  city: 'DC'
};

let { name, city } = me; //name: vasya, city: DC
let { name: myName, city: myCity = 'Muhosransk'} = me; //myName: vasya
//arrow functions

let inc = x => x+1;
//let inc = function(x) {return x+1}
console.log(inc(2));
let sum = (a, b) => a + b;
let func = () => {
  let name = 'katya';
  return `Hello ${name}`;
}

let x = [1,2,3,4,5,6];
let twiceX = x.map( el => el*2);
