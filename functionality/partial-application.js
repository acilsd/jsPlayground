'use strict';
/*eslint no-console: 0*/

function callMe(...args) { console.log(args); }

const partialCall = callMe.bind(null, 1, 2, 3, 4);

//partialCall(5, 6, 7, 8); //1, 2, 3, 4, 5, 6, 7, 8


const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));



//pratice
function handler(msg, e) {
  console.log(msg + e.target.value);
}

const partialHandler = partial(handler, 'message');

const someDomeNode = document.querySelector('input');

someDomeNode.addEventListener('change', partialHandler, false);


//more

//<input onChange={comp(partial(emit, ACTION), Lens.from('target, 'value))} />
