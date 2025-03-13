// animations.js

// Animation au défilement (scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Ajoute la classe "show" pour déclencher l'animation
      } else {
        entry.target.classList.remove("show"); // Retire la classe si l'élément n'est plus visible
      }
    });
  });
  
  // Sélectionne tous les éléments à animer (sauf le carrousel)
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  
  // Animation au survol des images
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.style.transform = "scale(1.1)"; // Agrandit l'image
      image.style.transition = "transform 0.3s ease";
    });
  
    image.addEventListener("mouseleave", () => {
      image.style.transform = "scale(1)"; // Remet l'image à sa taille normale
    });
  });
  
  // Animation au survol du texte du menu
  const menuLinks = document.querySelectorAll("nav ul li a");
  menuLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#4c1bff"; // Change la couleur du texte
      link.style.transform = "translateY(-5px)"; // Déplace légèrement le texte vers le haut
      link.style.transition = "color 0.3s ease, transform 0.3s ease";
    });
  
    link.addEventListener("mouseleave", () => {
      link.style.color = "white"; // Remet la couleur d'origine
      link.style.transform = "translateY(0)"; // Remet le texte à sa position d'origine
    });
  });