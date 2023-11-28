const hamburgerButton=document.querySelector('.nav-toggler');

const navigation=document.querySelector("nav");

// ecoute de l'événement sur le bouton
hamburgerButton.addEventListener("click", toggleNav);


// fonction d'écoute
function toggleNav(){
    hamburgerButton.classList.toggle("active");
    // ajout de la classe "active"
    navigation.classList.toggle("active");
}


