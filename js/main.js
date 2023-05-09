const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();  

window.addEventListener('load', () => {
  const loader = document.querySelector('.loading');
  setTimeout(() => {
      loader.remove();
  }, 1000); // odebrání elementu s načítáním po 1 sek
});

const scrollToSection1Btn = document.getElementById("scrollToSection1");
const section1 = document.getElementById("section1");

scrollToSection1Btn.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" });
});


// Galerie
const slides = document.querySelector('.slides'); // Odkaz na kontejner s obrázky galerie
const images = document.querySelectorAll('.slides img'); // Odkaz na všechny obrázky v galerii
const prevBtn = document.querySelector('.prev'); // Odkaz na tlačítko pro předchozí snímek
const nextBtn = document.querySelector('.next'); // Odkaz na tlačítko pro následující snímek
const dots = document.querySelectorAll('.dot'); // Odkaz na všechny tečky galerie

let slideIndex = 0; // Index aktuálního snímku

updateSlide(); // Nastavení počátečního zobrazení galerie

// Přidání posluchačů událostí na tlačítka pro předchozí a následující snímek
prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

// Funkce pro zobrazení předchozího snímku
function showPreviousSlide() {
  slideIndex = slideIndex === 0 ? images.length - 1 : slideIndex - 1;
  updateSlide();
}

// Funkce pro zobrazení následujícího snímku
function showNextSlide() {
  slideIndex = slideIndex === images.length - 1 ? 0 : slideIndex + 1;
  updateSlide();
}

// Přidání posluchačů událostí na tečky pro přepínání snímků galerie
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    updateSlide();
  });
});

// Automatické přepínání snímků každých 10 sekund
setInterval(() => {
  slideIndex = slideIndex === images.length - 1 ? 0 : slideIndex + 1;
  updateSlide();
}, 10000);

// Funkce pro aktualizaci zobrazení galerie a aktivní tečky
function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 20}%)`;
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

//galerie

