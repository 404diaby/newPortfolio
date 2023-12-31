//******** Loading */
const loader = document.querySelector(".overlayLoader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});


const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      if(entry.target.id == "overlayLateralFollow"){
        entry.target.classList.add('bounce-in-top');
        entry.target.classList.remove('hidden');
      }
      if(entry.target.id == "nav"){
        entry.target.classList.add('tracking-in-expand-fwd-top');
      }
      if(entry.target.id == "home__container"){
        entry.target.classList.add('tracking-in-expand-fwd-bottom');
        setTimeout(() =>{
          entry.target.children[3].classList.add('pulsate-fwd');
        },800)
      }
      if(entry.target.id == "work__container__contentFirst"){
        entry.target.classList.add("tracking-in-expand-fwd-top");
        entry.target.children[1].children[0].classList.add('pulsate-fwd');
      }
      if(entry.target.id == "work__container__contentSecond__row__item"){
        entry.target.classList.add("show");
      }
      if(entry.target.id == "aboutMe__container__contentFirst"){
        entry.target.classList.add("show");
        entry.target.children[1].children[0].classList.add('pulsate-fwd');
      }
      if(entry.target.id == "aboutMe__container__contentSecond"){
        entry.target.classList.add("show");
      }
      if(entry.target.id == "aboutMe__container__contentThird"){
        entry.target.classList.add("tracking-in-expand-fwd-top");
      }
      if(entry.target.id == "aboutMe__container__contentFourth__container__item"){
        entry.target.classList.add("show");
      }
      if(entry.target.id == "aboutMe__container__contentFifth"){
        entry.target.classList.add("tracking-in-expand-fwd-top");
        setTimeout(() =>{
          console.log(entry.target.children[1].children[0]);
        },800)
      }
      if(entry.target.id == "aboutMe__container__contentSixth"){
        entry.target.classList.add("tracking-in-expand-fwd-bottom");
        
        setTimeout(() =>{
          console.log(entry.target.children[0].children[0].classList.add("shake-horizontal"));
        },800)
      }
      
      
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
