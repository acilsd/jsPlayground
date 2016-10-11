(function() {
  //our own jquery object
  var $ = function(selector) {};
  //extend method implementation
  $.extend = function(target, object) {
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        target[prop] = object[prop];
      }
    }
    return target;
  };

  //static methods
  //check if something looks like array (like collections or whatev)
  var isArrayLike = function(obj) {
    if (typeof obj.length === 'number') {
      if (obj.length === 0) { return true; }

      else if (obj.length > 0) {
        return (obj.length -1) in obj;
      }
    }
    return false;
  };

  $.extend($, {
  //isArray method implementation
  //check if it is a true array
    isArray: function(target) {
      return Object.prototype.toString.call(target) === '[object Array]';
    },
  //each method implementation
    each: function(collection, cb) {
      var i;
      var len = collection.length;
      var value;
      if (isArrayLike(collection)) {
        for (i = 0; i < len; i++) {
          value = collection[i];
          cb.call(value, i, value);
        }
      } else {
        for (var prop in collection) {
          if (collection.hasOwnProperty(prop)) {
            value = collection[prop];
            cb.call(value, prop, value);
          }
        }
      }
      return collection;
    },
    //makearray method implementation
    //convert an arrayLike object into a true JS array
    makeArray: function(arr) {
      var array = [];
      $.each(arr, function(i, val) {
        array.push(val);
      });
      return array;
    },
    //proxy method implementation
    proxy: function(fn, context) {
      return function() {
        fn.apply(context, arguments);
      };
    }
  });
});
