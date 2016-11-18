'use strict';
/*eslint no-console: 0*/
//basic
const y = 3;
//y++; //fail
// NOTE: in fact, all primitives in JS ARE immutable. const deals nothing with immutability;
const z = [4, 5, 6];
//z = 10;//fail
z[0] = 'lol'; //not fail

const w = Object.freeze([4, 5, 6]);
//w[0] = 10;//fail NOTE: ONLY IN STRICT MODE
//
// NOTE: mutatin input data is bad
//
function doubleThemMutable(list) {
  for (let i = 0; i < list.length; i++) {
    list[i] = list[i] * 2;
  }
}

const arr = [3, 4, 5];
doubleThemMutable(arr);
console.log(arr);//[6, 8, 10]
//that's it; very simple purification-immutabilitation by creating a new copy of array
// NOTE: not usin map or smthg cuz we are at low ground atm
function doubleThemImmutable(list) {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList[i] = list[i] * 2;
  }
  return newList;
}
const arr2 = [3, 4, 5];
const arr3 = doubleThemImmutable(arr2);
console.log(arr2); //not mutated, hue hue hue
console.log(arr3); //doubled
