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