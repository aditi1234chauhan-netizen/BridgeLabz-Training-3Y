const form = document.getElementById("detailsForm");
const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password")
};
const errorElements = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  password: document.getElementById("passwordError")
};
function getError(field) {
  const value = fields[field].value.trim();
  if (!value) return "This field is required.";
  if (field === "email" && !value.includes("@")) return "Email must contain @.";
  if (field === "password" && value.length < 6) return "Password must be at least 6 characters.";
  return "";
}
function validateField(field) {
  const errorMessage = getError(field);
  errorElements[field].textContent = errorMessage;
  return !errorMessage;
}
// Live validation: clear an error as soon as the field becomes valid.
Object.keys(fields).forEach(field => {
  fields[field].addEventListener("input", () => {
    validateField(field);
    document.getElementById("success").textContent = "";
  });
});
form.addEventListener("submit", event => {
  let formIsValid = true;
  Object.keys(fields).forEach(field => {
    if (!validateField(field)) formIsValid = false;
  });
  if (!formIsValid) {
    event.preventDefault();
    return;
  }
  event.preventDefault(); // Keep this demonstration on the page.
  document.getElementById("success").textContent = "Form Submitted Successfully";
});
