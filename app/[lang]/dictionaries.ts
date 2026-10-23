import type { Locale } from "../../i18n/locales";

export type PortfolioCopy = {
  metadata: { title: string; description: string };
  navigation: {
    about: string;
    experience: string;
    work: string;
    stack: string;
    education: string;
    contact: string;
    language: string;
  };
  ui: {
    skipToContent: string;
    primaryNavigation: string;
    professionalExperience: string;
    brandHome: string;
  };
  hero: {
    name: string;
    eyebrow: string;
    title: string;
    summary: string;
    primaryAction: string;
    secondaryAction: string;
    experienceLabel: string;
    mobileLabel: string;
    focusLabel: string;
    focusValue: string;
    diagram: {
      alternativeText: string;
      panelTitle: string;
      status: string;
      core: string;
      structure: string;
      quality: string;
      qualityValue: string;
      delivery: string;
      deliveryValue: string;
      flow: string;
      coordinate: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph: string;
    principlesTitle: string;
    principles: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    role: string;
    company: string;
    summary: string;
    specialtyLabel: string;
    responsibilities: string[];
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    professionalLabel: string;
    contextLabel: string;
    contributionLabel: string;
    cases: { title: string; summary: string; contribution: string }[];
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: { title: string; skills: string[] }[];
  };
  education: {
    eyebrow: string;
    title: string;
    entries: { qualification: string; institution: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    summary: string;
    linksLabel: string;
    links: { linkedin: string; github: string; email: string };
  };
  footer: { note: string; backToTop: string };
};

export const dictionaries = {
  en: {
    metadata: {
      title: "Guilherme S.",
      description:
        "Mobile software engineer focused on Flutter, Dart, and reliable product experiences.",
    },
    navigation: {
      about: "About",
      experience: "Experience",
      work: "Selected work",
      stack: "Stack",
      education: "Education",
      contact: "Contact",
      language: "Language",
    },
    ui: {
      skipToContent: "Skip to content",
      primaryNavigation: "Primary navigation",
      professionalExperience: "Professional experience",
      brandHome: "Guilherme S., back to top",
    },
    hero: {
      name: "Guilherme S.",
      eyebrow: "FLUTTER · DART · MOBILE APPLICATIONS",
      title: "Mobile Software Engineer",
      summary:
        "I build mobile product features with Flutter and Dart, balancing clear architecture, useful tests, and the details that make software dependable.",
      primaryAction: "Explore my work",
      secondaryAction: "About me",
      experienceLabel: "Software development",
      mobileLabel: "Focused on mobile",
      focusLabel: "Current focus",
      focusValue: "Mobile product engineering",
      diagram: {
        alternativeText: "A map of my mobile engineering toolkit",
        panelTitle: "ENGINEERING / 01",
        status: "SYSTEMS THINKING",
        core: "CORE / 01",
        structure: "STRUCTURE",
        quality: "QUALITY",
        qualityValue: "Testing",
        delivery: "DELIVERY",
        deliveryValue: "Release",
        flow: "FEATURE → RELEASE",
        coordinate: "DART / 001",
      },
    },
    about: {
      eyebrow: "01 / ABOUT",
      title: "Good software is a team practice.",
      paragraph:
        "With around four years in software development and more than two years specializing in mobile, I work across feature delivery, business rules, technical discussions, code reviews, and release validation. I care about code that is understandable, testable, and useful to the people who rely on it.",
      principlesTitle: "How I work",
      principles: [
        "Make complexity easier to reason about",
        "Treat testing as part of building",
        "Share context and improve things together",
      ],
    },
    experience: {
      eyebrow: "02 / EXPERIENCE",
      title: "Professional experience",
      role: "Mobile Software Engineer",
      company: "XP Inc.",
      summary:
        "Building and improving mobile capabilities with a focus on maintainability, quality, and dependable delivery.",
      specialtyLabel: "MOBILE / SOFTWARE",
      responsibilities: [
        "Develop mobile features and implement product business rules.",
        "Contribute to technical discussions, code reviews, and automated tests.",
        "Troubleshoot build issues, analyze CI/CD pipeline failures, and validate release candidates for my module.",
      ],
    },
    work: {
      eyebrow: "03 / SELECTED WORK",
      title: "Professional work, responsibly told.",
      intro:
        "A few examples of the problems I have worked on. Details are generalized to respect confidentiality; these are professional contributions, not personal projects.",
      professionalLabel: "PROFESSIONAL CASE STUDY",
      contextLabel: "Context & approach",
      contributionLabel: "Technical contribution",
      cases: [
        {
          title: "A product module, built from scratch",
          summary:
            "Independently developed a product module from the ground up, from feature implementation through release-candidate validation for that module.",
          contribution:
            "Worked with business rules, technical discussions, code reviews, and automated tests throughout delivery.",
        },
        {
          title: "Campaign updates without an app release",
          summary:
            "Developed a reusable promotional banner managed remotely through Adobe tooling, so campaign content could change without code changes or a new app release.",
          contribution:
            "Included impression and click tracking to support campaign measurement and analytics dashboards.",
        },
        {
          title: "Clearer signals for incident investigation",
          summary:
            "Collaborated with other developers to standardize logging and improve error traceability in mobile software.",
          contribution:
            "Used Dynatrace as part of the observability work supporting incident investigations.",
        },
      ],
    },
    stack: {
      eyebrow: "04 / TOOLKIT",
      title: "Tools for building and shipping.",
      groups: [
        {
          title: "Mobile",
          skills: ["Flutter", "Dart", "BLoC / Cubit", "Kotlin basics", "Swift basics"],
        },
        {
          title: "Engineering",
          skills: ["Clean Architecture", "SOLID", "Object-oriented programming", "Dependency injection"],
        },
        {
          title: "Quality & delivery",
          skills: ["Unit, widget & integration tests", "REST APIs", "Git & GitHub", "Azure DevOps", "CI/CD troubleshooting"],
        },
        {
          title: "Observability & foundations",
          skills: ["Dynatrace", "Logging", "Backend foundations", "Database foundations"],
        },
      ],
    },
    education: {
      eyebrow: "05 / EDUCATION",
      title: "Education",
      entries: [
        {
          qualification: "Systems Analysis and Development",
          institution: "FIAP",
        },
        {
          qualification: "Technical Diploma in Information Technology",
          institution: "ETEC",
        },
      ],
    },
    contact: {
      eyebrow: "06 / CONTACT",
      title: "Let’s talk about building better mobile software.",
      summary:
        "I welcome thoughtful conversations about Flutter, mobile engineering, and building dependable product experiences.",
      linksLabel: "Find me on",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "Email" },
    },
    footer: {
      note: "Mobile software engineering · Flutter & Dart",
      backToTop: "Back to top ↑",
    },
  },
  pt: {
    metadata: {
      title: "Guilherme S.",
      description:
        "Engenheiro de software mobile com foco em Flutter, Dart e experiências de produto confiáveis.",
    },
    navigation: {
      about: "Sobre",
      experience: "Experiência",
      work: "Trabalhos",
      stack: "Tecnologias",
      education: "Formação",
      contact: "Contato",
      language: "Idioma",
    },
    ui: {
      skipToContent: "Pular para o conteúdo",
      primaryNavigation: "Navegação principal",
      professionalExperience: "Experiência profissional",
      brandHome: "Guilherme S., voltar ao início",
    },
    hero: {
      name: "Guilherme S.",
      eyebrow: "FLUTTER · DART · APLICATIVOS MOBILE",
      title: "Engenheiro de Software Mobile",
      summary:
        "Desenvolvo funcionalidades para produtos mobile com Flutter e Dart, equilibrando arquitetura clara, testes úteis e os detalhes que tornam o software confiável.",
      primaryAction: "Conheça meu trabalho",
      secondaryAction: "Sobre mim",
      experienceLabel: "Desenvolvimento de software",
      mobileLabel: "Foco em mobile",
      focusLabel: "Foco atual",
      focusValue: "Engenharia de produtos mobile",
      diagram: {
        alternativeText: "Mapa das minhas ferramentas de engenharia mobile",
        panelTitle: "ENGENHARIA / 01",
        status: "VISÃO DE SISTEMAS",
        core: "NÚCLEO / 01",
        structure: "ESTRUTURA",
        quality: "QUALIDADE",
        qualityValue: "Testes",
        delivery: "ENTREGA",
        deliveryValue: "Release",
        flow: "FUNCIONALIDADE → RELEASE",
        coordinate: "DART / 001",
      },
    },
    about: {
      eyebrow: "01 / SOBRE",
      title: "Software de qualidade se constrói em equipe.",
      paragraph:
        "Com aproximadamente quatro anos em desenvolvimento de software e mais de dois anos de especialização em mobile, atuo na entrega de funcionalidades, regras de negócio, discussões técnicas, revisões de código e validação de releases. Valorizo código compreensível, testável e útil para as pessoas que dependem dele.",
      principlesTitle: "Como trabalho",
      principles: [
        "Tornar a complexidade mais fácil de entender",
        "Tratar testes como parte da construção",
        "Compartilhar contexto e evoluir em conjunto",
      ],
    },
    experience: {
      eyebrow: "02 / EXPERIÊNCIA",
      title: "Experiência profissional",
      role: "Engenheiro de Software Mobile",
      company: "XP Inc.",
      summary:
        "Desenvolvimento e evolução de funcionalidades mobile com foco em manutenção, qualidade e entregas confiáveis.",
      specialtyLabel: "MOBILE / SOFTWARE",
      responsibilities: [
        "Desenvolvimento de funcionalidades mobile e implementação de regras de negócio.",
        "Participação em discussões técnicas, revisões de código e testes automatizados.",
        "Análise de problemas de build e pipelines de CI/CD, além da validação de release candidates do meu módulo.",
      ],
    },
    work: {
      eyebrow: "03 / TRABALHOS SELECIONADOS",
      title: "Trabalho profissional, apresentado com responsabilidade.",
      intro:
        "Alguns exemplos de problemas em que atuei. Os detalhes são generalizados para respeitar a confidencialidade; são contribuições profissionais, não projetos pessoais.",
      professionalLabel: "ESTUDO DE CASO PROFISSIONAL",
      contextLabel: "Contexto e abordagem",
      contributionLabel: "Contribuição técnica",
      cases: [
        {
          title: "Um módulo de produto desenvolvido do zero",
          summary:
            "Desenvolvi de forma independente um módulo de produto, da implementação das funcionalidades à validação de release candidate do próprio módulo.",
          contribution:
            "Atuei com regras de negócio, discussões técnicas, revisões de código e testes automatizados ao longo da entrega.",
        },
        {
          title: "Campanhas atualizadas sem nova versão do app",
          summary:
            "Desenvolvi um componente reutilizável de banner promocional, gerenciado remotamente por ferramentas Adobe, permitindo atualizar campanhas sem mudanças de código ou uma nova versão do app.",
          contribution:
            "Incluí rastreamento de impressões e cliques para apoiar a mensuração das campanhas e dashboards analíticos.",
        },
        {
          title: "Mais contexto para investigar incidentes",
          summary:
            "Colaborei com outros desenvolvedores para padronizar logs e melhorar a rastreabilidade de erros em software mobile.",
          contribution:
            "Dynatrace fez parte do trabalho de observabilidade que apoiava as investigações de incidentes.",
        },
      ],
    },
    stack: {
      eyebrow: "04 / FERRAMENTAS",
      title: "Ferramentas para construir e entregar.",
      groups: [
        {
          title: "Mobile",
          skills: ["Flutter", "Dart", "BLoC / Cubit", "Noções de Kotlin", "Noções de Swift"],
        },
        {
          title: "Engenharia",
          skills: ["Clean Architecture", "SOLID", "Programação orientada a objetos", "Injeção de dependência"],
        },
        {
          title: "Qualidade e entrega",
          skills: ["Testes unitários, de widget e integração", "APIs REST", "Git e GitHub", "Azure DevOps", "Análise de CI/CD"],
        },
        {
          title: "Observabilidade e fundamentos",
          skills: ["Dynatrace", "Logging", "Fundamentos de backend", "Fundamentos de banco de dados"],
        },
      ],
    },
    education: {
      eyebrow: "05 / FORMAÇÃO",
      title: "Formação acadêmica",
      entries: [
        {
          qualification: "Análise e Desenvolvimento de Sistemas",
          institution: "FIAP",
        },
        {
          qualification: "Técnico em Informática",
          institution: "ETEC",
        },
      ],
    },
    contact: {
      eyebrow: "06 / CONTATO",
      title: "Vamos conversar sobre como construir software mobile melhor.",
      summary:
        "Estou aberto a conversas sobre Flutter, engenharia mobile e a construção de experiências de produto confiáveis.",
      linksLabel: "Me encontre em",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "E-mail" },
    },
    footer: {
      note: "Engenharia de software mobile · Flutter e Dart",
      backToTop: "Voltar ao início ↑",
    },
  },
  de: {
    metadata: {
      title: "Guilherme S.",
      description:
        "Mobile-Softwareentwickler mit Schwerpunkt auf Flutter, Dart und zuverlässigen Produkterlebnissen.",
    },
    navigation: {
      about: "Profil",
      experience: "Erfahrung",
      work: "Ausgewählte Arbeit",
      stack: "Technologien",
      education: "Ausbildung",
      contact: "Kontakt",
      language: "Sprache",
    },
    ui: {
      skipToContent: "Zum Inhalt springen",
      primaryNavigation: "Hauptnavigation",
      professionalExperience: "Berufserfahrung",
      brandHome: "Guilherme S., zurück nach oben",
    },
    hero: {
      name: "Guilherme S.",
      eyebrow: "FLUTTER · DART · MOBILE ANWENDUNGEN",
      title: "Mobile-Software\u00ADentwickler",
      summary:
        "Ich entwickle mobile Produktfunktionen mit Flutter und Dart und verbinde klare Architektur mit sinnvollen Tests und den Details, die Software zuverlässig machen.",
      primaryAction: "Meine Arbeit ansehen",
      secondaryAction: "Über mich",
      experienceLabel: "Softwareentwicklung",
      mobileLabel: "Schwerpunkt Mobile",
      focusLabel: "Schwerpunkt",
      focusValue: "Entwicklung mobiler Produkte",
      diagram: {
        alternativeText: "Übersicht meiner Werkzeuge für mobile Softwareentwicklung",
        panelTitle: "ENTWICKLUNG / 01",
        status: "SYSTEMDENKEN",
        core: "KERN / 01",
        structure: "STRUKTUR",
        quality: "QUALITÄT",
        qualityValue: "Tests",
        delivery: "AUSLIEFERUNG",
        deliveryValue: "Release",
        flow: "FUNKTION → RELEASE",
        coordinate: "DART / 001",
      },
    },
    about: {
      eyebrow: "01 / PROFIL",
      title: "Gute Software entsteht im Team.",
      paragraph:
        "Mit rund vier Jahren Erfahrung in der Softwareentwicklung und mehr als zwei Jahren Spezialisierung auf Mobile arbeite ich an Funktionen, Geschäftslogik, technischen Abstimmungen, Code-Reviews und Release-Validierung. Mir ist wichtig, dass Code verständlich, testbar und für die Menschen nützlich ist, die sich darauf verlassen.",
      principlesTitle: "Meine Arbeitsweise",
      principles: [
        "Komplexität verständlicher machen",
        "Tests als Teil der Entwicklung betrachten",
        "Wissen teilen und gemeinsam verbessern",
      ],
    },
    experience: {
      eyebrow: "02 / ERFAHRUNG",
      title: "Berufserfahrung",
      role: "Mobile-Softwareentwickler",
      company: "XP Inc.",
      summary:
        "Entwicklung und Verbesserung mobiler Funktionen mit Fokus auf Wartbarkeit, Qualität und zuverlässige Auslieferung.",
      specialtyLabel: "MOBILE / SOFTWARE",
      responsibilities: [
        "Entwicklung mobiler Funktionen und Umsetzung fachlicher Geschäftsregeln.",
        "Mitwirkung an technischen Abstimmungen, Code-Reviews und automatisierten Tests.",
        "Analyse von Build-Problemen und CI/CD-Pipelines sowie Validierung von Release Candidates für mein Modul.",
      ],
    },
    work: {
      eyebrow: "03 / AUSGEWÄHLTE ARBEIT",
      title: "Berufliche Beiträge, verantwortungsvoll beschrieben.",
      intro:
        "Einige Beispiele für Aufgaben, an denen ich gearbeitet habe. Die Details sind zum Schutz vertraulicher Informationen verallgemeinert; es handelt sich um berufliche Beiträge, nicht um persönliche Projekte.",
      professionalLabel: "BERUFLICHE FALLSTUDIE",
      contextLabel: "Kontext und Ansatz",
      contributionLabel: "Technischer Beitrag",
      cases: [
        {
          title: "Ein Produktmodul von Grund auf entwickelt",
          summary:
            "Ein Produktmodul eigenständig von Grund auf entwickelt, von der Implementierung bis zur Validierung des Release Candidates für dieses Modul.",
          contribution:
            "Während der Umsetzung arbeitete ich mit Geschäftsregeln, technischen Abstimmungen, Code-Reviews und automatisierten Tests.",
        },
        {
          title: "Kampagnen ohne App-Release aktualisieren",
          summary:
            "Eine wiederverwendbare Werbebanner-Komponente entwickelt, die über Adobe-Tools remote verwaltet wird. Kampagneninhalte lassen sich so ohne Codeänderung oder neues App-Release anpassen.",
          contribution:
            "Erfasst wurden Impressionen und Klicks, um die Kampagnenmessung und Analyse-Dashboards zu unterstützen.",
        },
        {
          title: "Mehr Kontext bei der Untersuchung von Vorfällen",
          summary:
            "Gemeinsam mit anderen Entwicklern die Protokollierung vereinheitlicht und die Rückverfolgbarkeit von Fehlern in mobiler Software verbessert.",
          contribution:
            "Dynatrace war Teil der Observability-Arbeit zur Unterstützung von Vorfalluntersuchungen.",
        },
      ],
    },
    stack: {
      eyebrow: "04 / WERKZEUGE",
      title: "Werkzeuge zum Entwickeln und Ausliefern.",
      groups: [
        {
          title: "Mobile",
          skills: ["Flutter", "Dart", "BLoC / Cubit", "Kotlin-Grundlagen", "Swift-Grundlagen"],
        },
        {
          title: "Softwareentwicklung",
          skills: ["Clean Architecture", "SOLID", "Objektorientierte Programmierung", "Dependency Injection"],
        },
        {
          title: "Qualität und Auslieferung",
          skills: ["Unit-, Widget- und Integrationstests", "REST-APIs", "Git und GitHub", "Azure DevOps", "CI/CD-Fehleranalyse"],
        },
        {
          title: "Observability und Grundlagen",
          skills: ["Dynatrace", "Logging", "Backend-Grundlagen", "Datenbank-Grundlagen"],
        },
      ],
    },
    education: {
      eyebrow: "05 / AUSBILDUNG",
      title: "Ausbildung",
      entries: [
        {
          qualification: "Systemanalyse und Anwendungsentwicklung",
          institution: "FIAP",
        },
        {
          qualification: "Technisches Diplom in Informationstechnologie",
          institution: "ETEC",
        },
      ],
    },
    contact: {
      eyebrow: "06 / KONTAKT",
      title: "Lassen Sie uns über bessere mobile Software sprechen.",
      summary:
        "Ich freue mich auf den fachlichen Austausch über Flutter, mobile Softwareentwicklung und zuverlässige Produkterlebnisse.",
      linksLabel: "Sie finden mich auf",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "E-Mail" },
    },
    footer: {
      note: "Mobile-Softwareentwicklung · Flutter und Dart",
      backToTop: "Zurück nach oben ↑",
    },
  },
} satisfies Record<Locale, PortfolioCopy>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}