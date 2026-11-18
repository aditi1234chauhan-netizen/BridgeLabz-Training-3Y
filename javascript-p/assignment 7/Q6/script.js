const searchInput = document.getElementById("searchInput");
const rows = [...document.querySelectorAll("#studentRows tr")];
const noResults = document.getElementById("noResults");
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;
  rows.forEach(row => {
    const matches = row.textContent.toLowerCase().includes(searchText);
    row.hidden = !matches;
    if (matches) visibleCount++;
  });
  noResults.hidden = visibleCount !== 0;
});
