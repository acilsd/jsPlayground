/*eslint-disable*/
'use strict';

function insertSort(arr) {
  const box = [].concat(arr);
  for (let i = 1; i < box.length; i++) {
    for (let j = 0; j < i; j++) {
      if (box[i] < box[j]) {
        const insert = box.splice(i, 1);
        box.splice(j, 0, insert[0]);
      }
    };
  };
  return box;
};

const nums = [1,6,0,2,10,4,7,2];

console.log(insertSort(nums));
