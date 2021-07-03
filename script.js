const toggleMenu = document.querySelector("#toggle-menu");
const navBar = document.querySelector(".hidden");
const removeHeroContent = document.querySelector(".hero");
const headerMobi = document.querySelector(".nav-holder");

const openMenu = function () {
  navBar.classList.toggle("hidden");
  toggleMenu.classList.toggle("fa-bars");
  toggleMenu.classList.toggle("fa-times");
  removeHeroContent.classList.toggle("hidden");
  headerMobi.classList.toggle("header__mobi");
};

toggleMenu.addEventListener("click", openMenu);
