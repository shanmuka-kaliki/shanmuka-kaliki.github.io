// Update the dark mode toggle function
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  // Toggle icon visibility
  document.querySelector(".dark-mode-sun").classList.toggle("hidden");
  document.querySelector(".dark-mode-moon").classList.toggle("hidden");
  // Save preference to localStorage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Apply saved preference on page load
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    document.querySelector(".dark-mode-sun").classList.remove("hidden");
    document.querySelector(".dark-mode-moon").classList.add("hidden");
  }
});
