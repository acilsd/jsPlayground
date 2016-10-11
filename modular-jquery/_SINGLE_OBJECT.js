(function() {
  var people = {
    people: [],

    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },

    cacheDom: function() {
      this.$div = $('#somediv');
      this.$button = this.$div.find('button');
      this.$input = this.$div.find('input');
      this.template = this.$div.find('#template').html();
      //blahblah селектим элементы короч
    },

    bindEvents: function() {
      //байндим ивенты
      this.$button.on('click', this.addPerson.bind(this));
      this.$SOME_ELEMENT.delegate('del.button', 'click', this.deletePerson.bind(this));
    },

    addPerson: function() {
      this.people.push(this.$input.val());
      this.render();
    },

    deletePerson: function(e) {
      var $remove = $(e.target).closest('li');
      var i = this.$CONTAINER.find('li').index($remove);

      this.people.splice(i, 1);
      this.render();
    },

    render: function() {
      //rendering html
      var data = {
        people: this.people
      };
      this.$div.find('ul').html(Mustache.render(template, data));
    }
  };

  people.init();
})()
