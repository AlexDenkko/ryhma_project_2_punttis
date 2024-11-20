const hamburger = document.querySelector(".paska_hamburger");
const navMenu = document.querySelector(".paska_nav_links_hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});