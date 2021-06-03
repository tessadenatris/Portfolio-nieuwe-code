
function navSlide() {
  const burger = document.querySelector(".burgermenu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
    
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) { // loopt door alle plaatjes van de array
    slides[i].style.display = "none"; // zorgt dat alle plaatjes niet zichtbaar zijn 
  }
  slideIndex++; 
  if (slideIndex > slides.length) {slideIndex = 1} //gaat terug naar eerste item in array als je over de lengte van de array gaat   
  
  slides[slideIndex-1].style.display = "block"; //laat 1 item van de array zien 
                                                               
  setTimeout(showSlides, 5200); // Change image every seconds
}

