const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const largeImage = document.getElementById("largeImage");
gallery.addEventListener("click", event => {
  if (event.target.tagName !== "IMG") return;
  largeImage.src = event.target.src.replace("/300/200", "/900/600");
  largeImage.alt = event.target.alt;
  modal.hidden = false;
});
modal.addEventListener("click", () => modal.hidden = true);
document.querySelector(".modal-content").addEventListener("click", event => {
  // Prevent clicks inside the modal from bubbling to the backdrop.
  event.stopPropagation();
});
document.getElementById("closeButton").addEventListener("click", () => modal.hidden = true);
