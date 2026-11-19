$(function(){
  // Clicking a product highlights it and checks its stock data attribute.
  $(".product").on("click", function(e){
    if($(e.target).hasClass("heart")) return;
    $(this).toggleClass("selected");
    if($(this).attr("data-stock")==="no") alert("Sorry, this product is currently out of stock.");
  });
  $(".product").hover(function(){ $(this).find(".details").stop(true,true).slideDown(150); },
                      function(){ $(this).find(".details").stop(true,true).slideUp(150); });
  $(".heart").on("click", function(e){
    e.stopPropagation();
    $(this).toggleClass("liked").text($(this).hasClass("liked") ? "♥" : "♡");
    $(this).closest(".product").toggleClass("selected");
  });
  // Discounted products are styled through the [data-discount] attribute selector in CSS.
});