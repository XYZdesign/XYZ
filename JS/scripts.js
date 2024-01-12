function toggleMenu() {
  const menu = document.querySelector(".menu__links");
  const icon = document.querySelector(".dropdown__icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}