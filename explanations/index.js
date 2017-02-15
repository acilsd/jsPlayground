'use strict';


// Dynamic: compilaction and execution happen together
// Weaky typed: type associated with value, not variable (var a = 1, 'one' etc)
// prototype-based
// with first-class functions

 // TODO: 2. DATA TYPES AND OPERATORS


 // undefinded: undefinded;
 // null: null;
 // boolean: true/false;
 // String: 'something';
 // Number: 15;
 // Object: { key: 'value'};
 // Arrat: [1, 2, 3, ,,,];
 // Date: new Date();
 // RegExp: /.*/gi;
 // Function: function(){}

//TODO: 3. References

//var str = 'string';
//сначала в памяти вызывается call.object (global.object)
//в скоуп передается значение и тип переменной, записиывается в память (adress allocation)
//затем в памяти создается указатель var str
//на этом этапе переменная андефайнед
//после этого указатель перемещается на зарезервированную ранее ячейку памяти
// эй, 'str' указывает на вот эту вот хуйню

//var obj = {txt: 'hi'}
//call.object
//в памяти создается пустой объект
//... все тоже самое
//затем значение ключа - как переменная

// TODO: 4. TYPEOF

//undefinde: 'undefined'
//null: 'object'
//boolean: 'boolean'
//number: 'number'
//string: 'string'
//function: 'function'
//array: 'array' - cuz array is a high-level object abstraction, it inherits from object:
//['a', 'b', 'c'] = {0: 'a', 1: 'b', 2: 'c', length: 3, __proto__: {slice: function(){} __proto__:{ toString: function() etc} }
//object: 'object'
//NaN: 'number'

// TODO: 5. EQUALIZER
// примитивы: сравниваются указатели в памяти по значениям comparison by value
//объекты: сравниваются указатели по ссылке. два пустых объекта всегда будут разными, т.к. указывают на разные объекты в памяти
