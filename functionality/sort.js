'use strict';
/*eslint no-console: 0*/

const arr = [
  'The Plot in you',
  'The Devul Wears Prada',
  'The Bled',
  'A Skylit Drive',
  'Anywhere but Here',    
  'An hero :3',
  'The Midway State',
  'The Capital of Russia',
  'An Old Dog'
];

const stripArt = (item) => item.replace(/^(a |the |an)/i, '').trim();

const sorted = arr.sort((a, b) => stripArt(a) > stripArt(b));

console.log(sorted);
