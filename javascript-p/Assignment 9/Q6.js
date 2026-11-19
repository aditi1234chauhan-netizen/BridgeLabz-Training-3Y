$(function(){
  let notificationsEnabled = false;
  function showMessage(text){ $("#message").text(text); }
  function topicClick(){
    $(this).toggleClass("active");
    showMessage($(this).hasClass("active") ? "Subscribed to " + $(this).text() : "Unsubscribed from " + $(this).text());
  }
  // Attach the same click handler to existing and dynamically added topics.
  $(".topic").on("click", topicClick);
  $("#add").on("click", function(){
    const name = $("#newTopic").val().trim();
    if(!name){ showMessage("Please enter a topic."); return; }
    const $newButton = $("<button>", {class:"topic", text:name});
    $("#topics").append($newButton);
    $newButton.on("click", topicClick); // .on() attaches an event to the new element.
    $("#newTopic").val("");
    showMessage("New topic added.");
  });
  $("#remove").on("click", function(){
    const $last = $(".topic").last();
    if($last.length){ $last.off("click", topicClick).remove(); showMessage("Last topic removed."); }
  });
  // A delegated subscription control demonstrates enabling/disabling notifications.
  $("<button>", {id:"subscribe", text:"Subscribe to Notifications"}).insertAfter("#remove");
  $("<button>", {id:"unsubscribe", text:"Unsubscribe"}).insertAfter("#subscribe");
  $("#subscribe").on("click", function(){ notificationsEnabled=true; showMessage("Notifications enabled."); });
  $("#unsubscribe").on("click", function(){ notificationsEnabled=false; showMessage("Notifications disabled."); });
});