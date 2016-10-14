(function() {
  var $ = function(selector) {
    if( !(this instanceof $) ) {
      return new $(selector);
    }
    var elements;
    if (typeof selector === 'string') {
      elements = document.querySelectorAll(selector);
    } else {
      elements = selector;
    }
    for (var i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    this.length = elements.length;
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

  var getText = function(el) {
    var txt = '';
    $.each(el.childNodes, function(i, childNode) {
      if (childNode.nodeType === Node.TEXT_NODE) {
        txt += childNode.nodeValue;
      } else if (childNode.nodeType === Node.ELEMENT_NODE) {
        txt += getText(childNode);
      }
    });
    return txt;
  };

  var traverser = function(cb) {
    return function() {
      var elements = [];
      var args = arguments;
      $.each(this, function(i, el) {
        var ret = cb.apply(el, args);
        if (ret && isArrayLike(ret)) {
          [].push.apply(elements, ret);
        } else if (ret) {
          elements.push(ret);
        }
      });
      return $(elements);
    };
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
    }
  });
  /*****/
  //html manipulations
  /*****/
  $.extend($.prototype, {
    html: function(newHtml) {
      if (arguments.length) {
        $.each(this, function(e, el) {
          el.innerHTML = newHtml;
        });
        return this;
      } else {
        return this[0] && this[0].innerHTML;
      }
    },
    val: function(newVal) {
      if (arguments.length) {
        $.each(this, function(e, el) {
          el.value = newVal;
        });
        return this;
      } else {
        return this[0] && this[0].value;
      }
    },
    text: function(newText) {
      if (arguments.length) {
        this.html('');
        return $.each(this, function(i, el) {
          el.innerHTML = '';
          var text = document.createTextNode(newText);
          el.appendChild(text);
        });
      } else {
        return this[0] && getText(this[0]);
      }
    },
    find: function(selector) {
      var elements = [];
      $.each(this, function(i, el) {
        var els = el.querySelectorAll(selector);
        [].push.apply(elements, els);
      });
      return $(elements);
    },
    next: traverser(function() {
      var current = this.nextSibling;
      while (current && current.nodeType !== 1) {
        current = current.nextSibling;
      }
      if (current) {
        return current;
      }
    }),
    prev: traverser(function() {
      var current = this.previousSibling;
      while (current && current.nodeType !== 1) {
        current = current.previousSibling;
      }
      if (current) {
        return current;
      }
    }),
    parent: traverser(function() {
      return this.parentNode;
    }),
    children: traverser(function() {
      return this.children;
    }),
    attr: function(attr,value) {
      if (arguments.length > 1) {
        return $.each(this, function(i, el) {
          el.setAttribute(attr, value);
        });
      } else {
        return this[0] && this[0].getAttribute(attr);
      }
    },
    css: function(css, value) {
      if (arguments.length > 1) {
        return $.each(this, function(i, el) {
          el.style[css] = value;
        });
      } else {
        return this[0] &&
          document.defaultView.getComputedStyle(this[0])
          .getPropertyValue(css);
      }
    },
    width: function() {
      var clientWidth = this[0].clientWidth;
      var leftPad = this.css("padding-left");
      var rightPad = this.css("padding-right");
      return clientWidth - parseInt(leftPad) - parseInt(rightPad);
    },
    offset: function() {
      var offset = this[0].getBoundingClientRect();
      return {
        top: offset.top + window.pageYOffset,
        left: offset.left + window.pageXOffset
      };
    },
    show: function() {
      this.css('display', 'none');
    },
    hide: function() {
      this.css('display', '');
    },
    /*****/
    //html manipulations
    /*****/
    // NOTE: holy shit
  });
});
