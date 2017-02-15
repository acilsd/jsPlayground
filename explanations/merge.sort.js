/*eslint-disable*/
'use strict';

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const total = arr.length;
  const middle = Math.floor(total / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const first = mergeSort(left);
  const second = mergeSort(right);

  return merge(first, second);
};

const merge = (left, right) => {
  const results = [];
  console.log(left, right);
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  while(left.length) {
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  }
  return results;
}

const nums = [
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,4,7,2];

const test = mergeSort(nums);
console.log(test);
