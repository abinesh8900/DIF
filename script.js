const toggleMenu = document.querySelector("#toggle-menu");
const navBar = document.querySelector(".hidden");

const openMenu = function () {
  navBar.classList.toggle("hidden");
  toggleMenu.classList.toggle("fa-bars");
  toggleMenu.classList.toggle("fa-times");
};

toggleMenu.addEventListener("click", openMenu);
