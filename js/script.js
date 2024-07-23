//******** Loading */

document.addEventListener("DOMContentLoaded", function() {
  // Masquer le loader et afficher le contenu une fois le DOM chargé
  const overlayLoader = document.getElementById("overlayLoader");
  const body = document.body;

  setTimeout(() => {
  // Ajouter la classe "loaded" au body
  body.classList.add("loaded");
  // Masquer le loader
  overlayLoader.style.display = "none";
  }, 3000);

  
});



const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
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
      if(entry.target.id == "workContainerTitle"){
        entry.target.classList.add("tracking-in-expand-fwd-top");
        entry.target.children[1].children[0].classList.add('pulsate-fwd');
      }
      if(entry.target.id == "workContainerContent"){
       
       entry.target.classList.add('show');
        
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
       
       entry.target.classList.add("tracking-in-expand-fwd-bottom");
        setTimeout(() =>{
          entry.target.children[0].classList.add('pulsate-fwd');
        },800)
       
      }
     
      
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
