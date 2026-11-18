const message = document.getElementById("message");
const counter = document.getElementById("counter");
function updateCounter() {
  const remaining = 100 - message.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.className = remaining === 0 ? "limit" : remaining <= 20 ? "warning" : "";
}
message.addEventListener("input", updateCounter);
// maxlength prevents extra input; preventDefault is also used for attempted typing at the limit.
message.addEventListener("keydown", event => {
  const editingKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
  if (message.value.length >= 100 && !editingKeys.includes(event.key) &&
      event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
    event.preventDefault();
  }
});
document.getElementById("resetButton").addEventListener("click", () => {
  message.value = "";
  updateCounter();
});
updateCounter();
