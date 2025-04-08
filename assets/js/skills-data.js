/**
 * Données structurées des compétences pour le portfolio
 * Format: Structure organisée en catégories et compétences associées
 * size : normal, wide, tall
 */
const skillsData = [
    {
        id: "backend",
        name: "Développement Backend",
        icon: "server",
        description: "Développement backend avec Python et frameworks associés",
        size: "wide",
        skills: [
            {
                id: "python-oop",
                name: "Python / POO",
                icon: "pypackage",
                description:
                    "Conception et développement orienté objet en Python",
                githubLinks: [
                    {
                        title: "Gestionnaire de relation client Epic Events en MVC - CLI",
                        url: "https://github.com/AdeVedA/EpicEventsCRM--OCR_Mission11",
                    },
                    {
                        title: "API RESTful sécurisée pour la gestion collaborative de projets et le suivi des problèmes techniques",
                        url: "https://github.com/AdeVedA/SoftDeskAPI--OCR_Mission9/",
                    },
                ],
            },
            {
                id: "django",
                name: "Django (MVP)",
                icon: "django",
                customIcon: true,
                description:
                    "Développement web avec le framework Django suivant le pattern MVP",
                githubLinks: [
                    {
                        title: "Réseau social de critique littéraire - Web App Django",
                        url: "https://github.com/AdeVedA/LITRevu--OCR_Mission8",
                    },
                ],
            },
            {
                id: "flask",
                name: "Flask",
                icon: "flask",
                customIcon: true,
                description:
                    "Applications web légères avec le micro-framework Flask",
                githubLinks: [
                    {
                        title: "Plateforme de réservation pour des compétitions - Web App Flask",
                        url: "https://github.com/AdeVedA/Python_Testing/tree/QA",
                    },
                ],
            },
            {
                id: "restful",
                name: "RESTful API",
                icon: "api",
                customIcon: true,
                description: "Conception et implémentation d'APIs RESTful",
                githubLinks: [
                    {
                        title: "API RESTful sécurisée pour la gestion collaborative de projets et le suivi des problèmes techniques",
                        url: "https://github.com/AdeVedA/SoftDeskAPI--OCR_Mission9/",
                    },
                ],
            },
            {
                id: "terminal",
                name: "Applications Terminal (MVC)",
                icon: "terminal",
                description:
                    "Applications en ligne de commande suivant le pattern MVC",
                githubLinks: [
                    {
                        title: "Gestionnaire de relation client Epic Events en MVC - CLI",
                        url: "https://github.com/AdeVedA/EpicEventsCRM--OCR_Mission11",
                    },
                    {
                        title: "Gestionnaire de tournois d'échecs en MVC - CLI",
                        url: "https://github.com/AdeVedA/ChessTourOperator--OCR_Mission3",
                    },
                ],
            },
        ],
    },
    {
        id: "frontend",
        name: "Développement Frontend",
        icon: "layout",
        description: "Développement frontend et interfaces utilisateur",
        size: "normal",
        skills: [
            {
                id: "html",
                name: "HTML",
                icon: "html5",
                customIcon: true,
                description: "Structure des applications web",
                githubLinks: [
                    {
                        title: "Consultation de catalogue de films, Web App responsive html/css/js à partir de patron Figma",
                        url: "https://github.com/AdeVedA/JustStreamIt--OCR_Mission5/",
                    },
                    {
                        title: "Réseau social de critique littéraire - Web App Django",
                        url: "https://github.com/AdeVedA/LITRevu--OCR_Mission8",
                    },
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12",
                    },
                ],
            },
            {
                id: "css",
                name: "CSS",
                icon: "css",
                customIcon: true,
                description: "Style des applications web",
                githubLinks: [
                    {
                        title: "Consultation de catalogue de films, Web App responsive html/css/js à partir de patron Figma",
                        url: "https://github.com/AdeVedA/JustStreamIt--OCR_Mission5/",
                    },
                    {
                        title: "Réseau social de critique littéraire - Web App Django",
                        url: "https://github.com/AdeVedA/LITRevu--OCR_Mission8",
                    },
                ],
            },
            {
                id: "javascript",
                name: "JavaScript",
                icon: "javascript",
                customIcon: true,
                description: "Programmation côté client et animations",
                githubLinks: [
                    {
                        title: "Consultation de catalogue de films, Web App responsive html/css/js à partir de patron Figma",
                        url: "https://github.com/AdeVedA/JustStreamIt--OCR_Mission5/",
                    },
                    {
                        title: "Réseau social de critique littéraire - Web App Django",
                        url: "https://github.com/AdeVedA/LITRevu--OCR_Mission8",
                    },
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12",
                    },
                ],
            },
            {
                id: "bootstrap",
                name: "Bootstrap",
                icon: "bootstrap",
                customIcon: true,
                description: "Interfaces responsives avec Bootstrap",
                githubLinks: [
                    {
                        title: "Réseau social de critique littéraire - Web App Django",
                        url: "https://github.com/AdeVedA/LITRevu--OCR_Mission8",
                    },
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12",
                    },
                ],
            },
            {
                id: "responsive",
                name: "Design Responsive",
                icon: "responsive",
                description: "Interfaces adaptatives pour tous les appareils",
                githubLinks: [
                    {
                        title: "Consultation de catalogue de films, Web App responsive html/css/js à partir de patron Figma",
                        url: "https://github.com/AdeVedA/JustStreamIt--OCR_Mission5/",
                    },
                    {
                        title: "Réseau social de critique littéraire - Web App Django",
                        url: "https://github.com/AdeVedA/LITRevu--OCR_Mission8",
                    },
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12",
                    },
                ],
            },
        ],
    },
    {
        id: "databases",
        name: "Gestion de Bases de Données",
        icon: "database",
        description: "Gestion et optimisation des bases de données",
        size: "normal",
        skills: [
            {
                id: "sqlite",
                name: "SQLite & Django ORM",
                icon: "sqlite",
                customIcon: true,
                description:
                    "Bases de données embarquées avec SQLite et ORM Django",
                githubLinks: [
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12",
                    },
                    {
                        title: "API RESTful sécurisée pour la gestion collaborative de projets et le suivi des problèmes techniques",
                        url: "https://github.com/AdeVedA/SoftDeskAPI--OCR_Mission9",
                    },
                ],
            },
            {
                id: "postgresql",
                name: "PostgreSQL & SQLAlchemy",
                icon: "postgresql",
                customIcon: true,
                description:
                    "Bases de données relationnelles avec PostgreSQL et SQLAlchemy",
                githubLinks: [
                    {
                        title: "Gestionnaire de relation client Epic Events en MVC - CLI",
                        url: "https://github.com/AdeVedA/EpicEventsCRM--OCR_Mission11",
                    },
                ],
            },
            {
                id: "migrations",
                name: "Remodélisation & Migrations",
                icon: "DBmigration",
                customIcon: true,
                description:
                    "Gestion des migrations et modélisation des données",
                githubLinks: [
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12/tree/main/oc_lettings_site/migrations",
                    },
                ],
            },
        ],
    },
    {
        id: "devops",
        name: "DevOps",
        icon: "devops",
        description: "Intégration continue, déploiement et conteneurisation",
        size: "normal",
        skills: [
            {
                id: "cicd",
                name: "Workflow CI/CD",
                icon: "githubactions",
                description:
                    "Intégration et déploiement continu avec GitHub Actions",
                githubLinks: [
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12/blob/main/.github/workflows/main.yml",
                    },
                ],
            },
            {
                id: "git",
                name: "Git",
                icon: "git",
                customIcon: true,
                description:
                    "Gestion de versions sur repository (commit, push, branch, merge etc...)",
                githubLinks: [
                    {
                        title: "Utilisation de git a minima pour tous mes projets visibles sur github",
                        url: "https://github.com/AdeVedA?tab=repositories",
                    },
                ],
            },
            {
                id: "tests",
                name: "Tests (unittest, pytest)",
                icon: "test",
                customIcon: true,
                description: "Tests unitaires et d'intégration avec pytest",
                githubLinks: [
                    {
                        title: "Plateforme de réservation pour des compétitions - Web App Flask",
                        url: "https://github.com/AdeVedA/Python_Testing/tree/QA",
                    },
                    {
                        title: "Gestionnaire de relation client Epic Events en MVC - CLI",
                        url: "https://github.com/AdeVedA/EpicEventsCRM--OCR_Mission11/tree/main/tests",
                    },
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12",
                    },
                ],
            },
            {
                id: "docker",
                name: "Docker, DockerHub",
                icon: "docker",
                customIcon: true,
                description: "Conteneurisation des applications avec Docker",
                githubLinks: [
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12/blob/main/Dockerfile",
                    },
                ],
            },
            {
                id: "monitoring",
                name: "Sentry (Monitoring d'erreurs)",
                icon: "sentry",
                customIcon: true,
                description: "Surveillance et gestion des erreurs avec Sentry",
                githubLinks: [
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://github.com/AdeVedA/OCLettings--OCR_Mission12/blob/main/oc_lettings_site/settings.py",
                    },
                    {
                        title: "Gestionnaire de relation client Epic Events en MVC - CLI",
                        url: "https://github.com/AdeVedA/EpicEventsCRM--OCR_Mission11/blob/main/main.py",
                    },
                ],
            },
        ],
    },
    {
        id: "algorithms",
        name: "Algorithmes",
        icon: "code",
        description:
            "Algorithmes de traitement, d'optimisation et d'aide à la décision",
        size: "normal",
        skills: [
            {
                id: "musical",
                name: "Pour la théorie musicale",
                icon: "music",
                description:
                    "Chaînes d'algorithmes de nommage de tous les accords possibles à partir d'un paquet de 3 à 7 notes",
                githubLinks: [
                    {
                        title: "Résultat opérationnel du nommage sur le site Harmotone",
                        url: "https://harmotone.net",
                    },
                ],
            },
            {
                id: "financial",
                name: "Pour la finance, avec optimisation BigO",
                icon: "trending-up",
                description:
                    "Algorithmes d'aide à la décision financière - Bruteforce récursifs et glouton optimisé",
                githubLinks: [
                    {
                        title: "Algorithme bruteforce récursif pour la décision d'investissements financiers",
                        url: "https://github.com/AdeVedA/AlgoInvestor--OCR_Mission6/blob/main/bruteforce.py",
                    },
                    {
                        title: "Algorithme glouton optimisé pour la décision d'investissements financiers",
                        url: "https://github.com/AdeVedA/AlgoInvestor--OCR_Mission6/blob/main/optimized.py",
                    },
                ],
            },
            {
                id: "data-structures",
                name: "Structures de Données",
                icon: "layers",
                description:
                    "Implémentation efficace des structures de données en Python",
                githubLinks: [
                    {
                        title: "Scraping ETL de librairie en ligne",
                        url: "https://github.com/AdeVedA/BScraper--Ocr_Mission1",
                    },
                ],
            },
            {
                id: "data-analysis",
                name: "Analyse de Données",
                icon: "bar-chart",
                description:
                    "Analyse et visualisation de données avec matplotlib",
                githubLinks: [
                    {
                        title: "Usage de matplotlib pour les schémas du readme",
                        url: "https://github.com/AdeVedA/AlgoInvestor--OCR_Mission6/",
                    },
                ],
            },
        ],
    },
    {
        id: "misc",
        name: "Autres Compétences",
        icon: "plus-circle",
        description: "Autres compétences et outils",
        size: "wide",
        skills: [
            {
                id: "prototyping",
                name: "Prototypage & Design",
                icon: "figma",
                customIcon: true,
                description: "Conception et prototypage de design logiciel",
                githubLinks: [
                    {
                        title: "Conception de l’interface-utilisateur, des fonctionnalités et participation à la modélisation des données avec le développeur",
                        url: "https://harmotone.net",
                    },
                    {
                        title: "Consultation de catalogue de films, Web App responsive html/css/js à partir de patron Figma",
                        url: "https://github.com/AdeVedA/JustStreamIt--OCR_Mission5/",
                    },
                    {
                        title: "Réseau social de critique littéraire - Web App Django",
                        url: "https://github.com/AdeVedA/LITRevu--OCR_Mission8",
                    },
                ],
            },
            {
                id: "rgpd",
                name: "RGPD & Sécurité",
                icon: "shield",
                description: "Conformité RGPD et bonnes pratiques de sécurité",
                githubLinks: [
                    {
                        title: "API RESTful sécurisée pour la gestion collaborative de projets et le suivi des problèmes techniques",
                        url: "https://github.com/AdeVedA/SoftDeskAPI--OCR_Mission9",
                    },
                    {
                        title: "Gestionnaire de relation client Epic Events en MVC - CLI",
                        url: "https://github.com/AdeVedA/EpicEventsCRM--OCR_Mission11/blob/main/main.py",
                    },
                ],
            },
            {
                id: "documentation",
                name: "Documentation avec Sphinx sur ReadTheDocs",
                icon: "book",
                description:
                    "Documentation automatisée avec Sphinx, deploiement sur ReadTheDocs",
                githubLinks: [
                    {
                        title: "Plateforme de locations, Web App Django avec CI/CD, Docker, deployé sur Render, documenté sur ReadTheDocs",
                        url: "https://oclettings-ocr-mission12.readthedocs.io/fr/latest/index.html",
                    },
                ],
            },
            {
                id: "code-quality",
                name: "Qualité Code (flake8, black, isort...)",
                icon: "check-circle",
                description:
                    "Analyse statique et formatage PEP8 du code avec Flake8, Black...",
                githubLinks: [
                    {
                        title: "La plupart des projets sur mon repository bénéficie du linting Flake8 et du formattage Black",
                        url: "https://github.com/AdeVedA?tab=repositories",
                    },
                ],
            },
            {
                id: "jwt",
                name: "Authentification",
                icon: "key",
                description:
                    "Implémentation de l'authentification avec JSON Web Tokens, bcrypt",
                githubLinks: [
                    {
                        title: "JSON Web Token - API RESTful sécurisée pour la gestion collaborative de projets et le suivi des problèmes techniques",
                        url: "https://github.com/AdeVedA/SoftDeskAPI--OCR_Mission9/",
                    },
                    {
                        title: "bcrypt - Gestionnaire de relation client Epic Events en MVC - CLI",
                        url: "https://github.com/AdeVedA/EpicEventsCRM--OCR_Mission11/blob/main/models/models.py",
                    },
                ],
            },
        ],
    },
];
