(function() {

  var $ = function(selector) {
    if( !(this instanceof $) ) {
      return new $(selector);
    }

    var elements = document.querySelectorAll(selector);
    // NOTE: bad way
    for (var i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    this.length = elements.length;
    //NOTE: good way
    //Array.prototype.push.call(this, elements);
  };
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
        return fn.apply(context, arguments);
      };
    },
    // NOTE: holy shit
    //DOM methods
    find: function() {

    }
  });
  /*****/
  //html manipulations
  /*****/
  $.extend($.prototype, {
    html: function(newHtml) {
      if(arguments.length) {
        $.each(this, function(e, el) {
          el.innerHTML = newHtml;
        });
        return this;
      } else {
        return this[0] && this[0].innerHTML;
      }
    },
    val: function(newVal) {
      if(arguments.length) {
        $.each(this, function(e, el) {
          el.value = newVal;
        });
        return this;
      } else {
        return this[0] && this[0].value;
      }
    },
    text: function(newText) {
      if(arguments.length) {
        return $.each(this, function(i, el) {
          el.innerHTML = '';
          var text = document.createTextNode(newText);
          el.appendChild(text);
        });
      }
    },
    find: function(selector) {

    },
    next: function() {

    },
    prev: function() {

    },
    parent: function() {

    },
    children: function() {

    },
    attr: function() {

    },
    css: function() {

    },
    width: function() {

    },
    offset: function() {

    },
    hide: function() {

    },
  });
});
