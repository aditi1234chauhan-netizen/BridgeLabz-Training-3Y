$(function(){
  // A manager's direct reports are the employee elements after the manager in the same team.
  $(".manager").on("click", function(){
    $(this).siblings(".employee").addClass("highlight");
    $(this).siblings(".employee").not(".manager").addClass("highlight");
  });
  $(".employee").hover(function(){ $(this).children(".contact").show(); },
                       function(){ $(this).children(".contact").hide(); });
  $(".deptTitle").on("click", function(){
    // children() selects the direct team container; find() reaches all its members.
    $(this).parent().children(".team").children(".employee").toggleClass("highlight");
  });
  $("#random").on("click", function(){
    const $people = $(".employee").not(".manager");
    const $chosen = $people.eq(Math.floor(Math.random()*$people.length));
    $chosen.addClass("highlight").siblings(".employee").addClass("highlight");
  });
  $("#collapse").on("click", function(){
    // parent() locates each department and find() locates all employee rows.
    $(".team").each(function(){ $(this).parent().find(".employee").toggle(); });
  });
});