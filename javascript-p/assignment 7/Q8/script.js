const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");
dropdownButton.addEventListener("click", () => {
  options.hidden = !options.hidden;
  dropdownButton.setAttribute("aria-expanded", String(!options.hidden));
});
options.addEventListener("click", event => {
  if (event.target.tagName !== "BUTTON") return;
  dropdownButton.textContent = event.target.textContent;
  options.hidden = true;
  dropdownButton.setAttribute("aria-expanded", "false");
});
// Capturing phase: detect outside clicks before they reach their target.
document.addEventListener("click", event => {
  if (!dropdown.contains(event.target)) {
    options.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
  }
}, true);
