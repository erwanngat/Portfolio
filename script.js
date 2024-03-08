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
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Lancement de la version 2022.2.3 d'IntelliJ IDEA :</h4><br/><p> Elle corrige plusieurs bugs importants, notamment un problème qui rendait l'IDE instable lors de l'ouverture de projets avec des fichiers Python.</p><br/><ul>Points clés de la mise à jour :<li>Correction de plusieurs bugs importants, dont un qui rendait l'IDE instable avec des fichiers Python</li><li>Amélioration de la stabilité et des performances</li><li>Correction de bugs mineurs</li></ul>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>L'Eclipse Foundation annonce une nouvelle cadence de publication logicielle pour Eclipse Theia :</h4><br/><p>Cette nouvelle cadence, appelée "Theia Community Release", regroupera trois mois de mises à jour Theia en une seule version.  La première version communautaire comprendra de nombreuses innovations, dont une nouvelle barre d'outils personnalisable, des améliorations de l'expérience utilisateur et une compatibilité accrue avec les extensions VS Code.</p>`;
            break;
        case "decembre22":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Décembre 2022</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Annonce de la nouvelle version de Visual Studio Code :</h4><br/><ul>Cette nouvelle version inclut de nombreuses fonctionnalités et améliorations, notamment :<br/></ul><li>Meilleure prise en charge du langage de programmation Python</li><li>Nouvelles fonctionnalités pour le développement web</li><li>Amélioration de l'interface utilisateur</li>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Lancement de la version 1.0 de Fleet :</h4><br/><p>Fleet est un nouvel IDE open source développé par JetBrains. Fleet est conçu pour être léger et extensible, et il est disponible sur plusieurs plateformes, notamment Windows, macOS et Linux.</p>`;
            break;
        case "mars23":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Mars 2023</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Lancement de la version 2023.1 d'IntelliJ IDEA :</h4><br/><ul>Cette nouvelle version inclut de nombreuses fonctionnalités et améliorations, notamment :</ul><li>Meilleure prise en charge du langage de programmation Java 20</li><li>Amélioration de l'intégration avec les outils Git:</li><li>Nouvelles fonctionnalités d'IA pour la complétion de code et la refactorisation:</li>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Google a annoncé la sortie de la version bêta d'Android Studio 4.0 :</h4><br/><p>Cette nouvelle version inclut une interface utilisateur remaniée, de nouvelles fonctionnalités pour le développement Kotlin et une meilleure prise en charge des appareils pliables.</p>`;
            break;
            case "juin23":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Juin 2023</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Nouvelle version NetBeans IDE 19 est disponible :</h4><br/><ul>Cette version de NetBeans inclut un certain nombre de corrections de bogues et d'améliorations, notamment :</ul><li>Java : Amélioration de la complétion de code, meilleure gestion des projets modulaires et prise en charge du dernier JDK.</li><li>PHP : Amélioration de l'analyse et du formatage du code, et meilleur support de Composer.</li><li>Entreprise : Prise en charge améliorée de Jakarta EE et GlassFish.</li>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Lancement de la version 1.19 de Fleet :</h4><br/><p>Il s’agit d’une mise à jour spéciale, car en plus d’améliorer des fonctionnalités existantes, elle apporte une nouveauté majeure. Fleet comprend maintenant une assistance générée par IA ! Cette implémentation initiale inclut plusieurs nouvelles fonctionnalités alimentées par IA, via l’API OpenAI.</p>`;
            break;
        case "septembre23":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Septembre 2023</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Sortie de la version IntelliJ IDEA 2023.2.2 :</h4><br/><p>Cette mise à jour corrige des bogues dans IntelliJ IDEA 2023.2. Elle résout plusieurs problèmes, notamment la possibilité de désactiver la section "Récent" dans la fenêtre contextuelle "Branches", le correctif du raccourci Shift+Enter, la résolution de la baisse de performance avec les tables Markdown et la prévention du blocage de l'IDE au démarrage. Elle prend également en charge les dernières mises à jour de Java 21.</p>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Nouvelle version VS Code 1.83 :</h4><br/><ul>Voici quelques-unes des principales nouveautés :</ul><li>Améliorations de l'accessibilité - Prise en charge du lecteur d'écran pour les commentaires de pull request.</li><li>Aperçu : GitHub Copilot - Génération de tests basée sur le framework actuel et les conventions du projet.</li><li>Mises à jour du débogueur Python - Configurez l'option d'entrer dans le système/la bibliothèque ou uniquement votre code.</li>`;
            break;
        case "novembre23":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Novembre 2023</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Prise en charge de Kotlin dans Fleet :</h4><br/><p>Kotlin est directement pris en charge dans Fleet, ce qui rend son utilisation non seulement simple et productive, mais aussi agréable. Fleet offre aux développeurs Kotlin une expérience optimale. Si vous devez rapidement examiner un projet, analyser sa structure et effectuer des modifications ciblées, vous pouvez utiliser Fleet en tant qu’éditeur. Mais il peut aussi être utilisé comme un IDE à part entière lorsque vous avez besoin de fonctionnalités plus avancées.</p>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Intellij IDE mise a jour assistant IA :</h4><br/><p>JetBrains a publié de nouvelles fonctionnalités pour son assistant IA, un outil de développement qui utilise des modèles de langage volumineux pour faciliter les tâches de codage. Ces fonctionnalités incluent la saisie automatique de code, la génération de tests et la traduction de code vers différents langages de programmation.</p>`;
            break;
        case "janvier24":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés Janvier 2024</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>L'IDE ZED devient open source</h4><br/><p>Zed un nouvel IDE ultra performant deviens open source. Cette décision permettra à tous les développeurs d'accéder et de modifier librement le code, ce qui contribuera à la création d'un outil encore plus performant et adapté aux besoins de la communauté.</p>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Nouveautés Janvier 2024</h4><br/>`;
            break;
        case "fevrier24":
            title.innerHTML = `<h3 style="text-align: center; font-size:200%;">Nouveautés février 2024</h3>`;
            contenu1.innerHTML = `<h4 style='font-size: 120%;'>Nouvelle version VS Code 1.87</h4><br/><p>La mise à jour de février 2024 de Visual Studio Code apporte des fonctionnalités inédites. En voici quelques-unes : dictez du code directement dans l'éditeur, gérez les suggestions contextuelles pour plusieurs curseurs, obtenez des suggestions de renommage grâce à Copilot, prévisualisez les refactorisations sur plusieurs fichiers, profitez d'améliorations pour les suggestions d'importation Python et bénéficiez de la prise en charge de la dictée vocale multilingue.</p>`;
            contenu2.innerHTML = `<h4 style='font-size: 120%;'>Nouvelle version NetBeans IDE 21 est disponible :</h4><br/><p>Apache NetBeans 21 est sorti et se concentre sur l'amélioration de la prise en charge de Gradle et Maven, du développement Java et du protocole LSP (Language Server Protocol).</p>`;
            break;
    }
  });
});