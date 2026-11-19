// jqOld refers to jQuery 1.12.4; $ refers to jQuery 3.7.1.
(function($1, $2){
  // Version 1 rotates the carousel and highlights its active widget.
  $(function(){
    var $widgets = $1("#carousel .widget"), index = 0;
    function activate(){ $widgets.removeClass("active").eq(index).addClass("active"); }
    activate();
    setInterval(function(){ index = (index + 1) % $widgets.length; activate(); }, 3000);
  });

  // Version 2 controls the notification modal and hover tooltip.
  $2(function(){
    $2("#notify").on("click", function(){ $2("#modal").fadeIn(); });
    $2("#close").on("click", function(){ $2("#modal").fadeOut(); });
    $2(".tip").on("mouseenter", function(){
      $2(this).attr("data-tip", $2(this).attr("title")).attr("title", "Dashboard help");
    }).on("mouseleave", function(){
      $2(this).attr("title", $2(this).attr("data-tip")).removeAttr("data-tip");
    });
  });
})(jqOld, jQuery);
