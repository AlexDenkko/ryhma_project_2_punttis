// Select the hamburger menu and navigation menu elements
const hamburger = document.querySelector(".paska_hamburger");
const navMenu = document.querySelector(".paska_nav_links_hamburger");

// Add click event listener to the hamburger menu
hamburger.addEventListener("click", () => {
  // Toggle the 'active' class on both the hamburger menu and navigation menu
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
