/*eslint-disable*/
'use strict';

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var pivot = arr[arr.length -1];
  var left = [], right = [];
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i])
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}

const nums = [
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,
  1,6,0,2,10,16,1000,0,-10,4,7,2];

console.log(quickSort(nums));
