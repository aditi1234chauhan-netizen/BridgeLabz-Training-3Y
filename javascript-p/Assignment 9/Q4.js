$(function(){
  const $banners = $(".banner");
  $("#hide").on("click", function(){ $banners.first().hide(); });
  $("#show").on("click", function(){ $banners.show(); });
  $("#up").on("click", function(){ $banners.slideUp(); });
  $("#down").on("click", function(){ $banners.slideDown(); });
  $("#fadeOut").on("click", function(){ $banners.fadeOut(); });
  $("#fadeIn").on("click", function(){ $banners.fadeIn(); });

  // Rotate the visible banner every five seconds using fade effects.
  let current = 0;
  $banners.hide().eq(0).show();
  setInterval(function(){
    $banners.eq(current).fadeOut(400, function(){
      current = (current + 1) % $banners.length;
      $banners.eq(current).fadeIn(400);
    });
  }, 5000);
});