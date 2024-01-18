const mainMenu = document.querySelector("#nav__mainMenu");
const closeMenu = document.querySelector("#nav__mainMenu__closeMenu");
const openMenu = document.querySelector("#nav__openMenu");
const menu_items = document.querySelectorAll(".nav__mainMenu__links");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);



mainMenu.style.top = `-${screen.height}px`;
// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", close); 
    
});
console.log(menu_items)
function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.transition = "top 1s ease";
 mainMenu.style.top = "0px";
}
function close() {
 
 mainMenu.style.top = `-${screen.height}px`;

}
