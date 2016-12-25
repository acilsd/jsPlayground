'use strict';
/*eslint no-console: 0*/
// NOTE: list composition aka reduce

const composer = (arr, fn, int) => {
  let total = int;
  for (let i = 0; i < arr.length; i++) {
    total = fn(total, arr[i]);
  }
  return total;
};

const ourArr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(composer(ourArr, (x, y) => x * y, 1));

// NOTE: compose data (like the length of the videos)
//div data-time='5:35'

const nodeList = Array.from(document.quesySelectorAll('something that we need'));

const seconds = nodeList
  .map(node => node.dataset.time) //all time nodes
  .map(timeCode => { //converting
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
