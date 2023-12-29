const mainMenu = document.querySelector("#nav__mainMenu");
const closeMenu = document.querySelector("#nav__mainMenu__closeMenu");
const openMenu = document.querySelector("#nav__openMenu");
const menu_items = document.querySelectorAll("nav__mainMenu__links");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
  mainMenu.style.display = "none";
}
