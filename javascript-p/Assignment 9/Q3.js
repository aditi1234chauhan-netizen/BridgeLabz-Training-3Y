$(function(){
  $(".question").on("click", function(){ $(this).next(".answer").slideToggle(); });
  $(".question").hover(function(){ $(this).css("color","#1769aa"); },
                       function(){ $(this).css("color",""); });
  // Double-clicking any question closes every answer.
  $(".question").on("dblclick", function(){ $(".answer").slideUp(); });
  $(".answer input").on("focus", function(){ $(this).closest(".faq").find(".question").css("background","#fff0b3"); });
  $(".answer input").on("blur", function(){ $(this).closest(".faq").find(".question").css("background",""); });
});