const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");
trackingBox.addEventListener("mousemove", event => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});
trackingBox.addEventListener("dblclick", event => {
  const rect = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "dot";
  // Convert screen coordinates into positions inside the tracking box.
  dot.style.left = `${event.clientX - rect.left}px`;
  dot.style.top = `${event.clientY - rect.top}px`;
  trackingBox.appendChild(dot);
});
