const themeButtons = document.querySelectorAll("[data-theme-choice]");
themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedTheme = button.dataset.themeChoice;
    // setAttribute applies the theme and stores the selected theme on the body.
    document.body.setAttribute("data-theme", selectedTheme);
    document.body.setAttribute("data-current-theme", selectedTheme);
    document.getElementById("currentTheme").textContent =
      `Current theme: ${selectedTheme.charAt(0).toUpperCase()}${selectedTheme.slice(1)}`;
  });
});
