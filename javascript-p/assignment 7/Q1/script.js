const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
document.getElementById("addButton").addEventListener("click", addProduct);
productInput.addEventListener("keydown", event => {
  if (event.key === "Enter") addProduct();
});
function addProduct() {
  const name = productInput.value.trim();
  if (!name) return;
  const item = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.dataset.action = "edit";
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.action = "delete";
  item.append(nameSpan, editButton, deleteButton);
  productList.appendChild(item);
  productInput.value = "";
}
// Event delegation: one listener handles every Edit and Delete button.
productList.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  const item = button.parentElement;
  if (button.dataset.action === "delete") item.remove();
  if (button.dataset.action === "edit") startEditing(item);
});
function startEditing(item) {
  if (item.querySelector("input")) return;
  const span = item.querySelector("span");
  const input = document.createElement("input");
  input.value = span.textContent;
  span.replaceWith(input);
  input.focus();
  input.select();
  const save = () => {
    if (!input.isConnected) return;
    const updated = document.createElement("span");
    updated.textContent = input.value.trim() || span.textContent;
    input.replaceWith(updated);
  };
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") save();
    if (event.key === "Escape") { input.value = span.textContent; save(); }
  });
  // Clicking outside the edited item automatically saves the edit.
  document.addEventListener("click", function outsideClick(event) {
    if (!item.contains(event.target)) {
      save();
      document.removeEventListener("click", outsideClick);
    }
  });
  input.addEventListener("blur", save, { once: true });
}
