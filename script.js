function agrandirImage(image) {
    var imageAgrandie = document.getElementById("imageAgrandie");
    var imageAgrandieSource = document.getElementById("imageAgrandieSource");

    // Afficher l'image agrandie
    imageAgrandie.style.display = "block";
    imageAgrandieSource.src = image.src;
}

function fermerImage() {
    var imageAgrandie = document.getElementById("imageAgrandie");

    // Cacher l'image agrandie
    imageAgrandie.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Ajouter un écouteur d'événements sur le clic de l'icône du menu
    mobileMenuIcon.addEventListener('click', function() {
        // Vérifier si la classe 'active' est déjà présente
        const isActive = navLinks.classList.contains('active');

        // Si la classe 'active' est présente, la retirer ; sinon, l'ajouter
        if (isActive) {
            navLinks.classList.remove('active');
        } else {
            navLinks.classList.add('active');
        }
    });
});
