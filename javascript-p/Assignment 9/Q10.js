$(function(){
  function validEmail(value){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
  $("#register").on("submit", function(e){
    e.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim().toLowerCase();
    const password = $("#password").val();
    let valid = true;
    // Clear previous validation styles before checking again.
    $("input").removeClass("invalid");
    if(!name){ $("#name").addClass("invalid"); valid=false; }
    if(!validEmail(email)){ $("#email").addClass("invalid"); valid=false; }
    const savedEmails = JSON.parse(localStorage.getItem("registeredEmails") || "[]");
    if(validEmail(email) && savedEmails.includes(email)){ $("#email").addClass("invalid"); valid=false; }
    if(password.length < 8){ $("#password").addClass("invalid"); valid=false; }
    if(!valid){
      $("#result").css("color","red").text("Please correct the highlighted fields. Email must be valid and unique; password needs at least 8 characters.");
      return;
    }
    savedEmails.push(email);
    localStorage.setItem("registeredEmails", JSON.stringify(savedEmails));
    $("#result").css("color","green").text("Registration successful!");
    this.reset();
  });
});