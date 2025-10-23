/**
 * Données structurées des compétences pour le portfolio
  Format: Structure organisée en catégories et compétences (skills) associées
  size : normal, wide, tall
 */
const skillsData = [
    {
        id: "backend",
        name: "Développement Backend",
        icon: "server",
        description: "Développement backend avec Python et frameworks associés",
        size: "normal",
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
                id: "workers",
                name: "Thread Management",
                icon: "thread",
                description:
                    "Gestion des threads Qt et Python pour le streaming LLM, le rendu Markdown et les tâches asynchrones",
                githubLinks: [
                    {
                        title: "Thread manager : enregistrer/démarrer/stopper/unregister les threads Qt et Python",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/thread_manager.py",
                    },
                    {
                        title: "LLM worker",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/llm_worker.py",
                    },
                    {
                        title: "Render worker",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/render_worker.py",
                    },
                    {
                        title: "Token counting thread avec lock pour éviter la concurrence",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/context_parser.py",
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
                id: "PyQt6",
                name: "PyQt6",
                icon: "Qt",
                customIcon: true,
                description:
                    "Interface desktop : fenêtre (MainWindow...), panneaux (Toolbar, SessionPanel, ChatPanel, ContextPanel, ConfigPanel...), thèmes dynamiques et divers widgets UI",
                githubLinks: [
                    {
                        title: "MainWindow (gui/gui.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/gui.py",
                    },
                    {
                        title: "Toolbar (gui/toolbar.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/toolbar.py",
                    },
                    {
                        title: "Session panel (gui/session_panel.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/session_panel.py",
                    },
                    {
                        title: "Chat panel (gui/chat_panel.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/chat_panel.py",
                    },
                    {
                        title: "Context panel - Gestion de contexte OFF/Full/RAG (gui/context_parser_panel.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/context_parser_panel.py",
                    },
                    {
                        title: "Config panel (gui/config_panel.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/config_panel.py",
                    },
                    {
                        title: "Theme manager (core/theme/theme_manager.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/theme/theme_manager.py",
                    },
                    {
                        title: "Widgets pour spinners, boite de dialogue de configuration et de validation... (gui/widgets/…)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/gui/widgets",
                    },
                ],
            },
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
                id: "sqlalchemy",
                name: "SQLAlchemy ORM",
                icon: "sqlalchemy",
                customIcon: true,
                description:
                    "Modélisation ORM (Session, Message, Folder, PromptConfig, LLMProperties) avec persistance SQLite",
                githubLinks: [
                    {
                        title: "Modèles ORM (core/models.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/models.py",
                    },
                    {
                        title: "Gestion des sessions (core/session_manager.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/session_manager.py",
                    },
                    {
                        title: "Gestion des prompts (core/prompt_manager.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/prompt_manager.py",
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
        id: "LLM",
        name: "Modèles de Langage & IA",
        icon: "brain",
        description:
            "Intégration de modèles locaux Ollama via LangChain, configuration des prompts et des hyper-paramètres, RAG",
        size: "tall",
        skills: [
            {
                id: "ollama",
                name: "Ollama API (LLM local), ",
                icon: "ollama",
                customIcon: true,
                description:
                    "Serveur d'inférence local qui expose une API REST pour les modèles de langage, permettant la récupération des métadonnées du modèle (temperature, max-tokens, …) & l'initialisation du serveur et instanciation du LLM avec la configuration demandée",
                githubLinks: [
                    {
                        title: "Propriétés LLM (core/llm_properties.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/llm_properties.py",
                    },
                    {
                        title: "Gestion du LLM (core/llm_manager.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/llm_manager.py",
                    },
                    {
                        title: "Installation et premiers modèles",
                        url: "https://github.com/AdeVedA/AInterfAI#installation",
                    },
                ],
            },
            {
                id: "langchain",
                name: "LangChain",
                icon: "langchain",
                customIcon: true,
                description:
                    "Bibliothèque qui orchestre les appels aux LLM, le RAG et les chaînes de prompts",
                githubLinks: [
                    {
                        title: "Initialisation du serveur Ollama et instanciation de LLM avec langChain_ollama.OllamaLLM dans core/llm_manager.py",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/llm_manager.py",
                    },
                ],
            },
            {
                id: "prompt-engineering",
                name: "Prompt Engineering",
                icon: "terminal",
                customIcon: true,
                description:
                    "Création, sauvegarde et chargement de rôles / prompts (français & anglais)",
                githubLinks: [
                    {
                        title: "Fichier de prompts par défaut",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/prompt_config_defaults_fr.json",
                    },
                    {
                        title: "Gestion des configurations des prompts par défaut",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/prompt_config_manager.py",
                    },
                    {
                        title: "Assemblage avec Langchain de prompt system et de l'historique de session pour requête normale ou RAG",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/prompt_manager.py",
                    },
                ],
            },
            {
                id: "rag-qdrant",
                name: "RAG - Qdrant (base vecteur)",
                icon: "qdrant",
                customIcon: true,
                description:
                    "Base de vecteurs Qdrant + intégration LangChain-qdrant pour la recherche sémantique",
                githubLinks: [
                    {
                        title: "Handler RAG (core/rag/handler.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/rag/handler.py",
                    },
                    {
                        title: "Configuration Qdrant (core/rag/config.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/rag/config.py",
                    },
                ],
            },
            {
                id: "rag-embedding",
                name: "RAG - Embedding Model",
                icon: "embed",
                customIcon: true,
                description:
                    "LangChain-ollama OllamaEmbeddings (nomic-embed-text:latest) pour transformer les documents en vecteurs",
                githubLinks: [
                    {
                        title: "Embedding via LangChain-ollama",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/rag/config.py#L10",
                    },
                ],
            },
            {
                id: "rag-extraction",
                name: "RAG - Extraction de texte",
                icon: "text",
                description:
                    "Modules python-docx, python-pptx, pdfminer.six, striprtf, etc. pour lire les formats supportés",
                githubLinks: [
                    {
                        title: "File loaders (core/rag/file_loader.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/rag/file_loader.py",
                    },
                ],
            },
            {
                id: "rag-indexation",
                name: "RAG - Indexation & Recherche",
                icon: "index",
                description:
                    "Création d'index, mise à jour et récupération des chunks via Qdrant",
                githubLinks: [
                    {
                        title: "Indexer (core/rag/indexer.py)",
                        url: "https://github.com/AdeVedA/AInterfAI/blob/main/core/rag/indexer.py",
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
                        title: "Conception de l'interface-utilisateur, des fonctionnalités et participation à la modélisation des données avec le développeur",
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
                id: "musical",
                name: "Algorithmes & théorie musicale",
                icon: "music",
                description:
                    "Chaînes d'algorithmes de nommage de tous les accords possibles à partir d'un paquet de 3 à 7 notes",
                githubLinks: [
                    {
                        title: "Résultat opérationnel de l'algorithme de nommage sur le site Harmotone",
                        url: "https://harmotone.net",
                    },
                ],
            },
            {
                id: "financial",
                name: "Algorithmes pour la finance, avec optimisation BigO",
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
                name: "Analyse et Structures de Données",
                icon: "layers",
                description:
                    "Implémentation, analyse et visualisation des structures de données en Python",
                githubLinks: [
                    {
                        title: "structuration de données en Python pour un scraping ETL de librairie en ligne",
                        url: "https://github.com/AdeVedA/BScraper--Ocr_Mission1",
                    },
                    {
                        title: "Analyse et visualisation de données avec matplotlib pour les schémas du readme",
                        url: "https://github.com/AdeVedA/AlgoInvestor--OCR_Mission6/",
                    },
                ],
            },
            {
                id: "jwt",
                name: "Authentification & Sécurité",
                icon: "key",
                description:
                    "Implémentation de l'authentification avec JSON Web Tokens, et bonnes pratiques de sécurité avec bcrypt",
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
            {
                id: "api_client",
                name: "API Clients",
                icon: "bruno",
                description: "Clients API utilisés",
                githubLinks: [
                    {
                        title: "Bruno & Postman - API RESTful sécurisée pour la gestion collaborative de projets et le suivi des problèmes techniques",
                        url: "https://github.com/AdeVedA/SoftDeskAPI--OCR_Mission9",
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
                id: "rgpd",
                name: "RGPD",
                icon: "shield",
                description: "Conformité RGPD",
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
        ],
    },
];
