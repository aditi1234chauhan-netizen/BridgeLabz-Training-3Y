$(function(){
  const $courses = $("#courses li");
  $("#search").on("keyup", function(){
    const term = $(this).val().toLowerCase();
    let count = 0;
    $courses.each(function(){
      const original = $(this).text();
      const found = original.toLowerCase().includes(term);
      $(this).toggle(found);
      $(this).removeClass("match");
      if(found){
        count++;
        if(term) $(this).css("background-color","#fff0a8");
        else $(this).css("background-color","");
      } else $(this).css("background-color","");
    });
    $("#count").text("Matched courses: " + count);
  });
  $("#clear").on("click", function(){
    $("#search").val("");
    $courses.show().css("background-color","");
    $("#count").text("Showing " + $courses.length + " courses");
  });
});