$(function(){
  // Select a greeting based on the visitor's local time.
  const hour = new Date().getHours();
  let message = hour < 12 ? "Good Morning!" : hour < 17 ? "Good Afternoon!" : "Good Evening!";
  $("#greeting").text(message);

  const quotes = [
    "Believe in yourself and keep moving forward.",
    "Small steps every day lead to big results.",
    "Your effort today builds your success tomorrow.",
    "Stay curious, work hard, and never stop learning.",
    "Every new day is a fresh opportunity."
  ];
  $("#change").on("click", function(){
    $("#greeting").text(quotes[Math.floor(Math.random()*quotes.length)]);
  });
  $("#toggle").on("click", function(){ $("#welcome").toggle(); });
  $("#greeting").on("click", function(){ alert("Thanks for visiting our website!"); });
});