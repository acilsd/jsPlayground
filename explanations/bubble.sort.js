/*eslint-disable*/
'use strict';

function bubbleSort(arr) {
  do {
    var flag = false;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        const bubble = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = bubble;
        flag = true;
      };
    };
  } while (flag);
  return arr;
};

console.log(bubbleSort([1,6,2,10,4,7,2]));
