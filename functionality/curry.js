'use strict';
/*eslint-disable*/

partial(fn, arg1, arg2)(arg3, arg4);

curry(fn)(arg1)(arg2)(arg3)(arg4);

function curry(fn, ...args) {

  return function(arg) {

    const allArgs = args.concat(arg);

    if (allArgs.length >= fn.length) {

      return fn(...allArgs);
    } else {

      return curry(fn, ...allArgs);
    }
  };
}

const log = (logger, level, massage) => logger(`${level}: ${message}`);

const clientLogger = curry(log)(console.log);

const clientLoggerWarning = clientLogger('WARNING');
const clientLoggerError = clientLogger('ERROR');

clientLoggerWarning('test');

const serverLogger = curry(log)(print);

const serverLoggerWarning = serverLogger('WARNING');

serverLoggerWarning('shit');
