import { projects, services, skills } from "@/lib/data";

export type Locale = "fr-CA" | "en";

type ProjectId = (typeof projects)[number]["id"];
type ServiceId = (typeof services)[number]["id"];
type SkillCategory = (typeof skills)[number]["category"];
type SkillName = (typeof skills)[number]["skills"][number];

export type Messages = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    label: string;
    toolkit: string;
    projects: string;
    contact: string;
    availability: string;
    language: string;
    french: string;
    english: string;
  };
  hero: {
    eyebrow: string;
    introduction: string;
    projectsLink: string;
    contactLink: string;
    availabilityLabel: string;
    availability: string;
    scroll: string;
  };
  infrastructure: {
    label: string;
    online: string;
    edge: string;
    traffic: string;
    core: string;
    application: string;
    data: string;
    network: string;
    observe: string;
    design: string;
    build: string;
  };
  toolkit: {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    prompt: string;
    categories: Record<SkillCategory, string>;
    notes: Record<SkillCategory, string>;
    details: Record<SkillName, string>;
    capability: string;
    activeLayer: string;
    footer: string;
    skillsIndexed: string;
  };
  work: {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    introduction: string;
    caseStudy: string;
    studio: string;
    source: string;
    live: string;
    progress: string;
    technologies: string;
    automation: string;
    virtualization: string;
    dashboard: string;
    dashboardLive: string;
    dashboardMetric: string;
    serviceHealth: string;
    healthy: string;
    lastDeploy: string;
    twoMinutesAgo: string;
  };
  projects: Record<ProjectId, { title: string; description: string }>;
  services: {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    offerings: Record<ServiceId, { title: string; description: string; capabilities: readonly string[] }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    introduction: string;
    email: string;
    formHeading: string;
    required: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    submit: string;
    formNote: string;
    trimValidation: string;
    missingConfiguration: string;
    sendingFeedback: string;
    success: string;
    submissionError: string;
    genericError: string;
    directEmail: string;
  };
  footer: {
    description: string;
    backToTop: string;
    home: string;
  };
};

export const messages = {
  "fr-CA": {
    metadata: {
      title: "Alexis Trudeau | Ingénierie systèmes et Web",
      description: "Ingénierie des systèmes, infrastructure et développement Web par Alexis Trudeau.",
    },
    navigation: {
      label: "Navigation principale",
      toolkit: "Expertises",
      projects: "Projets",
      contact: "Contact",
      availability: "Parlons-en",
      language: "Choisir la langue du site",
      french: "Afficher le site en français québécois",
      english: "Afficher le site en anglais",
    },
    hero: {
      eyebrow: "INGÉNIERIE SYSTÈMES / WEB",
      introduction: "Je conçois l’infrastructure qui fait rouler des produits fiables et les interfaces qu’on a plaisir à utiliser.",
      projectsLink: "Voir mes projets",
      contactLink: "Me contacter",
      availabilityLabel: "MODE DE TRAVAIL",
      availability: "Autonome · À distance",
      scroll: "DÉFILER POUR EXPLORER",
    },
    infrastructure: {
      label: "NOTES DE TERRAIN / 001",
      online: "SYSTÈMES EN LIGNE",
      edge: "PÉRIPHÉRIE / 01",
      traffic: "Trafic entrant",
      core: "CŒUR / 02",
      application: "Couche applicative",
      data: "DONNÉES",
      network: "RÉSEAU",
      observe: "OBSERVABILITÉ",
      design: "PRÉVOIR LES PANNES",
      build: "BÂTIR POUR ÉVOLUER",
    },
    toolkit: {
      eyebrow: "LA BOÎTE À OUTILS",
      title: "La curiosité en tête.",
      titleEmphasis: "Le concret en main.",
      prompt: "CHOISIR UNE COUCHE",
      categories: {
        "Systems & Infrastructure": "Systèmes et infrastructure",
        "Web Development": "Développement Web",
        "Network & Security": "Réseaux et sécurité",
        Virtualization: "Virtualisation",
      },
      notes: {
        "Systems & Infrastructure": "Des bases fiables, des opérations reproductibles.",
        "Web Development": "Des interfaces utiles, une architecture applicative claire.",
        "Network & Security": "Des frontières nettes, des connexions résilientes.",
        Virtualization: "Des environnements flexibles, des charges isolées.",
      },
      details: {
        "Linux administration": "Configurer, maintenir et dépanner des hôtes et services Linux.",
        "Infrastructure as code": "Gérer l’infrastructure avec une configuration versionnée et reproductible.",
        Docker: "Empaqueter et exécuter des applications dans des conteneurs reproductibles.",
        "CI/CD": "Automatiser les vérifications et les livraisons pour déployer en toute confiance.",
        TypeScript: "Modéliser les données et le comportement des applications avec des types statiques.",
        "Next.js": "Créer des applications React avec routage, rendu et export statique.",
        React: "Composer des interfaces à partir de composants réutilisables.",
        "Tailwind CSS": "Créer des interfaces adaptatives avec des classes utilitaires.",
        "REST APIs": "Concevoir et intégrer des services HTTP orientés ressources.",
        "TCP/IP": "Comprendre et dépanner les protocoles qui relient les systèmes.",
        DNS: "Configurer et diagnostiquer les noms de domaine et la découverte de services.",
        VLANs: "Segmenter le trafic réseau en réseaux logiques isolés.",
        Firewalls: "Appliquer des règles de trafic qui protègent les services et le réseau.",
        VPNs: "Relier des systèmes distants par des tunnels réseau chiffrés.",
        "Proxmox VE": "Gérer des machines virtuelles, du stockage et des grappes Proxmox VE.",
        KVM: "Exécuter des machines virtuelles accélérées par matériel sous Linux.",
        "Virtual machines": "Provisionner des environnements isolés pour les services et les essais.",
        "Storage planning": "Choisir une architecture de stockage selon la capacité, la redondance et la récupération.",
      },
      capability: "CAPACITÉ",
      activeLayer: "COUCHE ACTIVE",
      footer: "COMPOSABLE PAR CONCEPTION",
      skillsIndexed: "COMPÉTENCES RÉPERTORIÉES",
    },
    work: {
      eyebrow: "PROJETS CHOISIS",
      title: "Conçus pour fonctionner.",
      titleEmphasis: "Pensés pour durer.",
      introduction: "Quelques terrains de jeu qui me motivent, des systèmes jusqu’aux interfaces.",
      caseStudy: "ÉTUDE /",
      studio: "AT—LAB",
      source: "Code source",
      live: "Voir le site",
      progress: "ÉTUDE DE CAS À VENIR",
      technologies: "Technologies",
      automation: "PLANIFIER → DÉPLOYER → VÉRIFIER",
      virtualization: "ISOLER · INSTANTANÉ · RESTAURER",
      dashboard: "OPÉRATIONS / VUE D’ENSEMBLE",
      dashboardLive: "EN DIRECT",
      dashboardMetric: "DISPONIBILITÉ",
      serviceHealth: "ÉTAT DE L’API",
      healthy: "OPÉRATIONNELLE",
      lastDeploy: "DERNIER DÉPLOIEMENT",
      twoMinutesAgo: "IL Y A 2 MIN",
    },
    projects: {
      "infrastructure-automation": {
        title: "Automatisation d’infrastructure",
        description: "Une infrastructure reproductible pour déployer et maintenir des services Linux avec une configuration gérée comme du code.",
      },
      "virtualized-lab": {
        title: "Environnement de laboratoire virtualisé",
        description: "Un laboratoire virtuel segmenté pour isoler des charges de travail, tester des réseaux et exploiter des services.",
      },
      "operations-dashboard": {
        title: "Tableau de bord des opérations",
        description: "Une application Web adaptative qui réunit l’état des services et les données opérationnelles dans une interface claire.",
      },
    },
    services: {
      eyebrow: "CE QUE JE PEUX FAIRE",
      title: "Des systèmes solides",
      titleEmphasis: "ouvrent des possibilités.",
      offerings: {
        "systems-engineering": {
          title: "Ingénierie des systèmes",
          description: "Concevoir et améliorer une infrastructure Linux fiable pour les applications et les services internes.",
          capabilities: ["Planification d’infrastructure", "Déploiement et administration Linux", "Automatisation de configuration", "Surveillance et fiabilité"],
        },
        virtualization: {
          title: "Virtualisation et conception de labos",
          description: "Créer des environnements virtuels faciles à maintenir pour la production, le développement et les essais.",
          capabilities: ["Configuration d’hyperviseur", "Conception de machines virtuelles et de stockage", "Segmentation réseau", "Planification de sauvegarde et de récupération"],
        },
        "web-development": {
          title: "Développement Web complet",
          description: "Livrer des expériences Web accessibles et adaptatives, appuyées par une architecture applicative réfléchie.",
          capabilities: ["Applications TypeScript et React", "Sites Next.js et exports statiques", "Intégration d’API et de données", "Déploiement et optimisation des performances"],
        },
      },
    },
    contact: {
      eyebrow: "ON EN JASE?",
      title: "Un bon défi",
      introduction: "Tu bâtis quelque chose, tu démêles un problème ou tu veux rendre un système plus fiable? Raconte-moi ça.",
      email: "Courriel",
      formHeading: "M’ÉCRIRE",
      required: "TOUS LES CHAMPS SONT REQUIS",
      nameLabel: "Ton nom",
      namePlaceholder: "Nom",
      emailLabel: "Adresse courriel",
      emailPlaceholder: "toi@exemple.com",
      messageLabel: "Sur quoi travailles-tu?",
      messagePlaceholder: "Un peu de contexte, c’est toujours utile…",
      sending: "Envoi en cours…",
      submit: "Envoyer le message",
      formNote: "FORMULAIRE SANS SERVEUR · FORFAIT GRATUIT",
      trimValidation: "Entre ton nom et ton message avant l’envoi.",
      missingConfiguration: "Le formulaire n’est pas encore configuré. Écris-moi directement.",
      sendingFeedback: "Envoi de ton message en cours…",
      success: "Message envoyé. Merci de m’avoir écrit; je te répondrai bientôt.",
      submissionError: "Formspree n’a pas accepté ton message. Réessaie dans un instant.",
      genericError: "Un problème est survenu. Réessaie ou écris-moi directement.",
      directEmail: "M’écrire directement.",
    },
    footer: {
      description: "Des systèmes bien pensés. Des logiciels à échelle humaine.",
      backToTop: "RETOUR EN HAUT",
      home: "Accueil Alexis Trudeau",
    },
  },
  en: {
    metadata: {
      title: "Alexis Trudeau | Systems & Full-Stack Engineer",
      description: "Systems engineering, infrastructure, and full-stack development by Alexis Trudeau.",
    },
    navigation: {
      label: "Main navigation",
      toolkit: "Toolkit",
      projects: "Projects",
      contact: "Contact",
      availability: "Let’s talk",
      language: "Choose site language",
      french: "View the site in Quebec French",
      english: "View the site in English",
    },
    hero: {
      eyebrow: "SYSTEMS / WEB ENGINEERING",
      introduction: "I build the infrastructure behind reliable products, and the thoughtful interfaces people use every day.",
      projectsLink: "Explore selected work",
      contactLink: "Get in touch",
      availabilityLabel: "WORKING STYLE",
      availability: "Independent · Remote-friendly",
      scroll: "SCROLL TO EXPLORE",
    },
    infrastructure: {
      label: "FIELD NOTES / 001",
      online: "SYSTEMS ONLINE",
      edge: "EDGE / 01",
      traffic: "Traffic in",
      core: "CORE / 02",
      application: "Application layer",
      data: "DATA",
      network: "NETWORK",
      observe: "OBSERVE",
      design: "DESIGN FOR FAILURE",
      build: "BUILD FOR CHANGE",
    },
    toolkit: {
      eyebrow: "THE TOOLKIT",
      title: "Curious by nature.",
      titleEmphasis: "Practical by design.",
      prompt: "SELECT A LAYER",
      categories: {
        "Systems & Infrastructure": "Systems & Infrastructure",
        "Web Development": "Web Development",
        "Network & Security": "Network & Security",
        Virtualization: "Virtualization",
      },
      notes: {
        "Systems & Infrastructure": "Reliable foundations, repeatable operations.",
        "Web Development": "Useful interfaces, clean application architecture.",
        "Network & Security": "Clear boundaries, resilient connections.",
        Virtualization: "Flexible environments, isolated workloads.",
      },
      details: {
        "Linux administration": "Configure, maintain, and troubleshoot Linux hosts and services.",
        "Infrastructure as code": "Manage infrastructure through versioned, repeatable configuration.",
        Docker: "Package and run applications in reproducible containers.",
        "CI/CD": "Automate checks and delivery so changes ship reliably.",
        TypeScript: "Model application data and behavior with static types.",
        "Next.js": "Build React applications with routing, rendering, and static export.",
        React: "Create composable interfaces from reusable components.",
        "Tailwind CSS": "Build responsive interfaces with utility-first styling.",
        "REST APIs": "Design and integrate resource-oriented HTTP services.",
        "TCP/IP": "Understand and troubleshoot the protocols that connect systems.",
        DNS: "Configure and diagnose domain names and service discovery.",
        VLANs: "Segment network traffic into isolated logical networks.",
        Firewalls: "Apply traffic rules that protect services and network boundaries.",
        VPNs: "Connect remote systems through encrypted network tunnels.",
        "Proxmox VE": "Manage virtual machines, storage, and clusters on Proxmox VE.",
        KVM: "Run hardware-assisted virtual machines on Linux hosts.",
        "Virtual machines": "Provision isolated environments for services and testing.",
        "Storage planning": "Choose storage layouts with capacity, redundancy, and recovery in mind.",
      },
      capability: "CAPABILITY",
      activeLayer: "ACTIVE LAYER",
      footer: "COMPOSABLE BY DEFAULT",
      skillsIndexed: "SKILLS INDEXED",
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "Built to work.",
      titleEmphasis: "Made to last.",
      introduction: "A few directions I enjoy working in, from the systems layer to the interface people see.",
      caseStudy: "CASE /",
      studio: "AT—LAB",
      source: "Source",
      live: "Live site",
      progress: "CASE STUDY IN PROGRESS",
      technologies: "Technologies",
      automation: "PLAN → APPLY → VERIFY",
      virtualization: "ISOLATE · SNAPSHOT · RESTORE",
      dashboard: "OPS / OVERVIEW",
      dashboardLive: "LIVE",
      dashboardMetric: "UPTIME",
      serviceHealth: "API STATUS",
      healthy: "HEALTHY",
      lastDeploy: "LAST DEPLOY",
      twoMinutesAgo: "2M AGO",
    },
    projects: {
      "infrastructure-automation": {
        title: "Infrastructure Automation",
        description: "A repeatable infrastructure setup for deploying and maintaining Linux services with configuration managed as code.",
      },
      "virtualized-lab": {
        title: "Virtualized Lab Environment",
        description: "A segmented virtual lab for running isolated workloads, testing network designs, and practicing service operations.",
      },
      "operations-dashboard": {
        title: "Full-Stack Operations Dashboard",
        description: "A responsive web application that brings service status and operational data together in one interface.",
      },
    },
    services: {
      eyebrow: "HOW I CAN HELP",
      title: "Good systems make",
      titleEmphasis: "everything possible.",
      offerings: {
        "systems-engineering": {
          title: "Systems Engineering",
          description: "Design and improve dependable Linux infrastructure for applications and internal services.",
          capabilities: ["Infrastructure planning", "Linux deployment and administration", "Configuration automation", "Monitoring and reliability improvements"],
        },
        virtualization: {
          title: "Virtualization and Lab Design",
          description: "Build maintainable virtual environments for production workloads, development, and testing.",
          capabilities: ["Hypervisor setup", "Virtual machine and storage design", "Network segmentation", "Backup and recovery planning"],
        },
        "web-development": {
          title: "Full-Stack Web Development",
          description: "Deliver accessible, responsive web experiences backed by practical application architecture.",
          capabilities: ["TypeScript and React applications", "Next.js websites and static exports", "API and data integration", "Deployment and performance tuning"],
        },
      },
    },
    contact: {
      eyebrow: "START A CONVERSATION",
      title: "Have a good problem?",
      introduction: "Tell me what you’re building, untangling, or trying to make more reliable. I’d like to hear about it.",
      email: "Email",
      formHeading: "WRITE A NOTE",
      required: "ALL FIELDS REQUIRED",
      nameLabel: "Your name",
      namePlaceholder: "Name",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      messageLabel: "What are you working on?",
      messagePlaceholder: "A little context goes a long way...",
      sending: "Sending…",
      submit: "Send message",
      formNote: "SERVERLESS FORM · FREE TIER",
      trimValidation: "Please enter your name and a message before sending.",
      missingConfiguration: "The contact form is not configured yet. Please email me directly.",
      sendingFeedback: "Sending your message…",
      success: "Message sent. Thanks for reaching out; I’ll get back to you soon.",
      submissionError: "Formspree could not accept your message. Please try again.",
      genericError: "Something went wrong. Please try again or email me directly.",
      directEmail: "Email me directly.",
    },
    footer: {
      description: "Systems thinking. Human-scale software.",
      backToTop: "BACK TO TOP",
      home: "Alexis Trudeau home",
    },
  },
} satisfies Record<Locale, Messages>;