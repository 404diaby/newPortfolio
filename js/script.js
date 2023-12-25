//******** Loading */
const loader = document.querySelector(".overlayLoader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
