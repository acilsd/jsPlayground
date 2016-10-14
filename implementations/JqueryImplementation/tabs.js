(function() {
  var tabPanel = function($li) {
    var selector = $li.find('a').attr('href');
    return $(selector);
  };

  $.fn.tabs = function() {
    $.each(this, function(i, ul) {
      var $ul = $([ul]);
      var $active;
      $.each($ul.children(), function(i, li) {
        var $li = $([li]);
        if (i == 0 ) {
          $active = $li;
        } else {
          var $div = tabPanel($li);
          $div.hide();
        }
      });
      $ul.children().bind('click', function(e) {
        e.preventDefault();
        tabPanel($active).hide();
        $active = $([this]);
        tabPanel($active).show();
      });
    });
  };

})();

$('#breeds').tabs();
