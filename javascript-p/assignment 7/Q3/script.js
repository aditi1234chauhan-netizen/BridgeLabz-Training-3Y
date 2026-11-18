const steps = [...document.querySelectorAll(".step")];
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const error = document.getElementById("error");
const summary = document.getElementById("summary");
let currentStep = 0;
function showStep() {
  steps.forEach((step, index) => step.hidden = index !== currentStep);
  backButton.hidden = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
  error.textContent = "";
}
function validCurrentStep() {
  const input = steps[currentStep].querySelector("input");
  if (!input.checkValidity()) {
    input.reportValidity();
    return false;
  }
  return true;
}
nextButton.addEventListener("click", () => {
  if (!validCurrentStep()) return;
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    summary.innerHTML = `<h2>Form Summary</h2><p>Name: ${escapeHTML(name)}</p><p>Email: ${escapeHTML(email)}</p><p>Password: ••••••</p>`;
    document.getElementById("multiForm").hidden = true;
    summary.hidden = false;
  }
});
backButton.addEventListener("click", () => {
  if (currentStep > 0) currentStep--;
  showStep();
});
function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
showStep();
