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

const elements = document.querySelectorAll("li");

elements.forEach((element) => {
  element.addEventListener("click", () => {
    const mois = element.getAttribute("data-mois");
    const contenu = document.getElementById("contenu");
    
    switch (mois) {
        case "octobre22":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Octobre 2022</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Lancement de la version 2023 d'IntelliJ IDEA :</h4><br/><ul>Cette nouvelle version inclut de nombreuses fonctionnalités et améliorations, notamment :</ul><li>Meilleure prise en charge du langage de programmation Java 18</li><li>Amélioration de l'intégration avec les outils Git</li><li>Nouvelles fonctionnalités d'IA pour la complétion de code et la refactorisation</li>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Acquisition de l'IDE JetBrains par Google :</h4><br/><p>Google a annoncé en octobre 2022 l'acquisition de l'IDE JetBrains. Cette acquisition permettra à Google d'intégrer les technologies de JetBrains dans ses propres outils de développement, tels que Google Cloud Platform et Android Studio.</p>`;
            break;
        case "decembre22":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Décembre 2022</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Annonce de la nouvelle version de Visual Studio Code:</h4><br/><ul>Cette nouvelle version inclut de nombreuses fonctionnalités et améliorations, notamment :</ul><li>Meilleure prise en charge du langage de programmation Python</li><li>Nouvelles fonctionnalités pour le développement web</li><li>Amélioration de l'interface utilisateur</li>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Lancement de la version 1.0 de Fleet:</h4><br/><p>Fleet est un nouvel IDE open source développé par JetBrains. Fleet est conçu pour être léger et extensible, et il est disponible sur plusieurs plateformes, notamment Windows, macOS et Linux.</p>`;
            break;
        case "mars23":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Mars 2023</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Lancement de la version 2023.1 d'IntelliJ IDEA:</h4><br/><ul>Cette nouvelle version inclut de nombreuses fonctionnalités et améliorations, notamment :</ul><li>Meilleure prise en charge du langage de programmation Java 20:</li><li>Amélioration de l'intégration avec les outils Git:</li><li>Nouvelles fonctionnalités d'IA pour la complétion de code et la refactorisation:</li>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Lancement de la version 1.1 de Fleet:</h4><br/><p>Fleet est un nouvel IDE open source développé par JetBrains. Cette nouvelle version inclut des améliorations de performance, une meilleure prise en charge des plugins et de nouveaux langages de programmation pris en charge, tels que Go et Rust.</p>`;
            break;
        case "juin23":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Juin 2023</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Mars 2023</h4><br/>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Juin 2023</h4><br/>`;
            break;
        case "septembre23":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Septembre 2023</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Mars 2023</h4><br/>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Septembre 2023</h4><br/>`;
            break;
        case "novembre23":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Novembre 2023</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Mars 2023</h4><br/>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Novembre 2023</h4><br/>`;
            break;
        case "janvier24":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Janvier 2024</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Mars 2023</h4><br/>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Janvier 2024</h4><br/>`;
            break;
        case "mars24":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Mars 2024</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Mars 2023</h4><br/>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Mars 2024</h4><br/>`;
            break;
    }
  });
});