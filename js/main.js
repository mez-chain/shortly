// Hamburger button
const hamburgerBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024 && menu.className !== "hidden") {
    menu.classList.add("hidden");
    hamburgerBtn.classList.remove("open");
  }
});
