/**
 * Script principal du portfolio
 * Gère l'affichage dynamique des compétences, animations et interactions
 */

document.addEventListener("DOMContentLoaded", function () {
    // Initialisation
    initTypewriter();
    renderSkillsGrid();
    initScrollAnimation();
    initTooltips();
    initCustomTooltips();
    // Gestion de modale pour les compétences
    setupSkillModals();
});

/**
 * Animation de texte "typewriter" sur la page d'accueil
 * Affiche séquentiellement différentes technologies avec un style "prompting"
 */
function initTypewriter() {
    const textElement = document.querySelector(".dynamic-text");
    const technologies = [
        "Python",
        "Django",
        "Django REST framework",
        "des équipes hétérogènes",
        "plaisir & curiosité d'apprendre",
    ];
    let techIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentTech = technologies[techIndex];

        if (isDeleting) {
            // Suppression de caractères
            textElement.textContent = currentTech.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40; // Plus rapide pour supprimer
        } else {
            // Ajout de caractères
            textElement.textContent = currentTech.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Plus lent pour écrire
        }

        // Gestion du cycle d'écriture/suppression
        if (!isDeleting && charIndex === currentTech.length) {
            // Pause à la fin de l'écriture
            isDeleting = true;
            typingSpeed = 1000; // Pause avant suppression
        } else if (isDeleting && charIndex === 0) {
            // Changement de mot après suppression
            isDeleting = false;
            techIndex = (techIndex + 1) % technologies.length;
        }

        setTimeout(type, typingSpeed);
    }

    // Démarrer l'animation
    setTimeout(type, 1000);
}

/**
 * Génère dynamiquement la grille de compétences à partir de skillsData
 * Utilise des SVG depuis assets/img/icons
 */
function renderSkillsGrid() {
    const skillsGrid = document.getElementById("skills-grid");

    // Vider le conteneur (si déjà des éléments)
    skillsGrid.innerHTML = "";

    // Créer un élément pour chaque catégorie de compétence
    skillsData.forEach((category) => {
        // Créer la carte de catégorie
        const categoryElement = document.createElement("div");
        categoryElement.className = `skill-category ${category.size}`;
        categoryElement.id = `category-${category.id}`;

        // Définir la classe CSS en fonction de la taille
        if (category.size === "wide") {
            categoryElement.classList.add("wide");
        } else if (category.size === "tall") {
            categoryElement.classList.add("tall");
        }

        // Générer l'icône SVG pour la catégorie
        let iconHtml = "";
        if (category.icon) {
            // Utiliser SVG depuis le dossier assets/img/icons
            iconHtml = `<img src="assets/img/icons/${category.icon}.svg" alt="${category.name}" class="category-icon">`;
        }

        // Contenu HTML de la carte
        categoryElement.innerHTML = `
            <div class="skill-header">
                <div class="skill-icon">${iconHtml}</div>
                <h3>${category.name}</h3>
            </div>
            <div class="skill-description">${category.description}</div>
            <div class="skill-items" id="skills-${category.id}"></div>
            <div class="skill-background">
                <img src="assets/img/icons/${category.icon}.svg" alt="${category.name}" class="category-background-icon">
            </div>
        `;

        skillsGrid.appendChild(categoryElement);

        // Ajouter les compétences individuelles
        const skillItemsContainer = document.getElementById(
            `skills-${category.id}`
        );

        category.skills.forEach((skill) => {
            const skillItem = document.createElement("div");
            skillItem.className = "skill-item";
            skillItem.setAttribute("data-bs-toggle", "modal");
            skillItem.setAttribute("data-bs-target", "#skillModal");
            skillItem.setAttribute("data-skill-id", skill.id);
            skillItem.setAttribute("data-skill-name", skill.name);
            skillItem.setAttribute("data-skill-description", skill.description);

            // Générer l'icône SVG pour la compétence
            let skillIconHtml = "";
            // Utiliser SVG depuis le dossier assets/img/icons
            skillIconHtml = `<img src="assets/img/icons/${skill.icon}.svg" alt="${skill.name}" class="skill-item-icon">`;

            skillItem.innerHTML = `
                ${skillIconHtml}
                <span>${skill.name}</span>
            `;

            skillItemsContainer.appendChild(skillItem);
        });
    });
}

/**
 * Configure les modals pour afficher les détails des compétences et liens GitHub
 */
function setupSkillModals() {
    const skillModal = document.getElementById("skillModal");
    const modalTitle = document.getElementById("skillModalTitle");
    const modalDescription = document.getElementById("skillModalDescription");
    const modalGithubLinks = document.getElementById("skillModalGithubLinks");

    // Quand une compétence est cliquée
    document.querySelectorAll(".skill-item").forEach((item) => {
        item.addEventListener("click", function () {
            const skillId = this.getAttribute("data-skill-id");
            const skillName = this.getAttribute("data-skill-name");
            const skillDescription = this.getAttribute(
                "data-skill-description"
            );

            // Mettre à jour le titre et la description
            modalTitle.textContent = skillName;
            modalDescription.textContent = skillDescription;

            // Trouver la compétence dans les données
            let skillData = null;

            // Parcourir toutes les catégories pour trouver la compétence
            for (const category of skillsData) {
                const skill = category.skills.find((s) => s.id === skillId);
                if (skill) {
                    skillData = skill;
                    break;
                }
            }

            // Mettre à jour les liens GitHub
            modalGithubLinks.innerHTML = "";

            if (
                skillData &&
                skillData.githubLinks &&
                skillData.githubLinks.length > 0
            ) {
                // Créer une liste de liens
                const linksList = document.createElement("ul");
                linksList.className = "github-links-list";

                skillData.githubLinks.forEach((link) => {
                    const listItem = document.createElement("li");
                    const linkElement = document.createElement("a");
                    linkElement.href = link.url;
                    linkElement.target = "_blank"; // Ouvrir dans un nouvel onglet
                    linkElement.innerHTML = `<i class="fab fa-github"></i> ${link.title}`;

                    listItem.appendChild(linkElement);
                    linksList.appendChild(listItem);
                });

                modalGithubLinks.appendChild(linksList);
            } else {
                // Aucun lien disponible
                modalGithubLinks.innerHTML =
                    "<p>Aucun projet GitHub lié à cette compétence.</p>";
            }
        });
    });
}

/**
 * Initialise les animations au défilement
 */
function initScrollAnimation() {
    // Animation des éléments au scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll(".skill-category");

        elements.forEach((element) => {
            const position = element.getBoundingClientRect();

            // Si l'élément est visible
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add("animate__animated", "animate__fadeInUp");
            }
        });
    };

    // Lancer l'animation au chargement et au scroll
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Appel initial pour les éléments déjà visibles
}

/**
 * Initialise les tooltips Bootstrap
 */
function initTooltips() {
    const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

/**
 * Initialise les infobulles personnalisées au survol
 */
function initCustomTooltips() {
    // Créer l'élément d'infobulle une seule fois
    const tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    document.body.appendChild(tooltip);

    // Compétences individuelles
    document.querySelectorAll(".skill-item").forEach((item) => {
        // Au survol, afficher l'infobulle
        item.addEventListener("mouseenter", function (e) {
            const skillName = this.getAttribute("data-skill-name");
            const skillDescription = this.getAttribute(
                "data-skill-description"
            );

            // Mise à jour du contenu
            tooltip.innerHTML = `
                <h4>${skillName}</h4>
                <p>${skillDescription}</p>
            `;

            // Positionner l'infobulle près de l'élément
            positionTooltip(tooltip, this, e);

            // Afficher l'infobulle
            tooltip.classList.add("show");
        });

        // Au mouvement de la souris, repositionner l'infobulle
        item.addEventListener("mousemove", function (e) {
            positionTooltip(tooltip, this, e);
        });

        // À la sortie, masquer l'infobulle
        item.addEventListener("mouseleave", function () {
            tooltip.classList.remove("show");
        });
    });

    // Catégories de compétences
    document.querySelectorAll(".skill-category").forEach((category) => {
        const header = category.querySelector(".skill-header");

        header.addEventListener("mouseenter", function (e) {
            const categoryId = category.id.replace("category-", "");
            const categoryData = skillsData.find(
                (cat) => cat.id === categoryId
            );

            if (categoryData) {
                tooltip.innerHTML = `
                    <h4>${categoryData.name}</h4>
                    <p>${categoryData.description}</p>
                `;

                positionTooltip(tooltip, this, e);
                tooltip.classList.add("show");
            }
        });

        header.addEventListener("mousemove", function (e) {
            positionTooltip(tooltip, this, e);
        });

        header.addEventListener("mouseleave", function () {
            tooltip.classList.remove("show");
        });
    });
}

/**
 * Positionne l'infobulle par rapport à l'élément et à la position de la souris
 */
function positionTooltip(tooltip, element, event) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

    // Position par défaut (au-dessus de l'élément)
    let top = rect.top + scrollTop - tooltip.offsetHeight - 10;
    let left =
        rect.left + scrollLeft + rect.width / 2 - tooltip.offsetWidth / 2;

    // Ajuster si sort de l'écran
    if (top < scrollTop) {
        // Placer en dessous si pas de place au-dessus
        top = rect.bottom + scrollTop + 10;
    }

    if (left < scrollLeft) {
        left = scrollLeft + 10;
    } else if (left + tooltip.offsetWidth > window.innerWidth + scrollLeft) {
        left = window.innerWidth + scrollLeft - tooltip.offsetWidth - 10;
    }

    // Appliquer les positions
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
}

/**
 * Animation pour la navbar lors du défilement
 */
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.padding = "0.5rem 0";
        navbar.style.backgroundColor = "rgba(26, 26, 46, 0.95)";
    } else {
        navbar.style.padding = "1rem 0";
        navbar.style.backgroundColor = "rgba(26, 26, 46, 0.9)";
    }
});
