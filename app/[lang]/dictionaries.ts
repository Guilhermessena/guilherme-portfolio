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
    contactAction: string;
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
      coreDetail: string;
      structureDetail: string;
      qualityDetail: string;
      deliveryDetail: string;
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
    openDetailsLabel: string;
    closeDialogLabel: string;
    problemLabel: string;
    approachLabel: string;
    architectureLabel: string;
    technologyLabel: string;
    technologyFallback: string;
    cases: {
      title: string;
      summary: string;
      problem: string;
      approach: string;
      architecture: string;
      contribution: string;
      technologies: string[];
    }[];
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
      contactAction: "Get in touch",
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
        coreDetail: "Build mobile product features with Flutter and Dart.",
        structureDetail: "Organize features with BLoC / Cubit.",
        qualityDetail: "Use tests as part of dependable delivery.",
        deliveryDetail: "Validate changes and prepare releases.",
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
      openDetailsLabel: "Open case details",
      closeDialogLabel: "Close case details",
      problemLabel: "Problem",
      approachLabel: "Technical approach",
      architectureLabel: "Architecture & decisions",
      technologyLabel: "Technologies",
      technologyFallback: "Specific technologies are not attributed to this case in the public description.",
      cases: [
        {
          title: "A product module, built from scratch",
          summary:
            "Independently developed a product module from the ground up, from feature implementation through release-candidate validation for that module.",
          problem: "A product module needed to be developed from the ground up.",
          approach:
            "Independently delivered module features and validated its release candidate.",
          architecture:
            "Business rules, technical discussions, code reviews, and automated tests informed delivery. Internal architecture details are not shared.",
          contribution:
            "Worked with business rules, technical discussions, code reviews, and automated tests throughout delivery.",
          technologies: [],
        },
        {
          title: "Campaign updates without an app release",
          summary:
            "Developed a reusable promotional banner managed remotely through Adobe tooling, so campaign content could change without code changes or a new app release.",
          problem:
            "Campaign content needed to change without code changes or a new mobile app release.",
          approach:
            "Built a reusable promotional banner managed remotely through Adobe tooling, with impression and click tracking.",
          architecture:
            "Campaign content was managed remotely through a reusable banner component. Further internal architecture details are not shared.",
          contribution:
            "Included impression and click tracking to support campaign measurement and analytics dashboards.",
          technologies: ["Adobe tooling"],
        },
        {
          title: "Clearer signals for incident investigation",
          summary:
            "Collaborated with other developers to standardize logging and improve error traceability in mobile software.",
          problem:
            "Incident investigations needed clearer error context and traceability.",
          approach:
            "Collaborated with other developers to standardize logging and improve error traceability.",
          architecture:
            "Logging was standardized as part of the observability work. Further internal architecture details are not shared.",
          contribution:
            "Used Dynatrace as part of the observability work supporting incident investigations.",
          technologies: ["Dynatrace", "Logging"],
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
      title: "Get in touch",
      summary:
        "Recruiters, companies, and fellow professionals are welcome to get in touch to discuss career opportunities, software development, and projects.",
      linksLabel: "Find me on",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "Send an email" },
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
      contactAction: "Entre em contato",
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
        coreDetail: "Desenvolva funcionalidades de produto mobile com Flutter e Dart.",
        structureDetail: "Organize funcionalidades com BLoC / Cubit.",
        qualityDetail: "Use testes como parte de entregas confiáveis.",
        deliveryDetail: "Valide mudanças e prepare releases.",
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
      openDetailsLabel: "Abrir detalhes do caso",
      closeDialogLabel: "Fechar detalhes do caso",
      problemLabel: "Problema",
      approachLabel: "Abordagem técnica",
      architectureLabel: "Arquitetura e decisões",
      technologyLabel: "Tecnologias",
      technologyFallback: "Tecnologias específicas não são atribuídas publicamente a este caso.",
      cases: [
        {
          title: "Um módulo de produto desenvolvido do zero",
          summary:
            "Desenvolvi de forma independente um módulo de produto, da implementação das funcionalidades à validação de release candidate do próprio módulo.",
          problem: "Um módulo de produto precisava ser desenvolvido do zero.",
          approach:
            "Desenvolvi as funcionalidades do módulo de forma independente e validei seu release candidate.",
          architecture:
            "Regras de negócio, discussões técnicas, revisões de código e testes automatizados orientaram a entrega. Detalhes da arquitetura interna não são divulgados.",
          contribution:
            "Atuei com regras de negócio, discussões técnicas, revisões de código e testes automatizados ao longo da entrega.",
          technologies: [],
        },
        {
          title: "Campanhas atualizadas sem nova versão do app",
          summary:
            "Desenvolvi um componente reutilizável de banner promocional, gerenciado remotamente por ferramentas Adobe, permitindo atualizar campanhas sem mudanças de código ou uma nova versão do app.",
          problem:
            "O conteúdo das campanhas precisava mudar sem alterações no código ou uma nova versão do app mobile.",
          approach:
            "Desenvolvi um banner promocional reutilizável, gerenciado remotamente por ferramentas Adobe, com rastreamento de impressões e cliques.",
          architecture:
            "O conteúdo das campanhas era gerenciado remotamente por um componente reutilizável de banner. Outros detalhes da arquitetura interna não são divulgados.",
          contribution:
            "Incluí rastreamento de impressões e cliques para apoiar a mensuração das campanhas e dashboards analíticos.",
          technologies: ["Ferramentas Adobe"],
        },
        {
          title: "Mais contexto para investigar incidentes",
          summary:
            "Colaborei com outros desenvolvedores para padronizar logs e melhorar a rastreabilidade de erros em software mobile.",
          problem:
            "As investigações de incidentes precisavam de mais contexto e rastreabilidade de erros.",
          approach:
            "Colaborei com outros desenvolvedores para padronizar logs e melhorar a rastreabilidade de erros.",
          architecture:
            "A padronização de logs fez parte do trabalho de observabilidade. Outros detalhes da arquitetura interna não são divulgados.",
          contribution:
            "Dynatrace fez parte do trabalho de observabilidade que apoiava as investigações de incidentes.",
          technologies: ["Dynatrace", "Logging"],
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
      title: "Entre em contato",
      summary:
        "Recrutadores, empresas e profissionais são bem-vindos para conversar sobre oportunidades, desenvolvimento de software e projetos.",
      linksLabel: "Me encontre em",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "Enviar e-mail" },
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
      contactAction: "Kontakt aufnehmen",
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
        coreDetail: "Mobile Produktfunktionen mit Flutter und Dart entwickeln.",
        structureDetail: "Funktionen mit BLoC / Cubit strukturieren.",
        qualityDetail: "Tests als Teil zuverlässiger Auslieferung einsetzen.",
        deliveryDetail: "Änderungen validieren und Releases vorbereiten.",
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
      openDetailsLabel: "Falldetails öffnen",
      closeDialogLabel: "Falldetails schließen",
      problemLabel: "Problem",
      approachLabel: "Technischer Ansatz",
      architectureLabel: "Architektur und Entscheidungen",
      technologyLabel: "Technologien",
      technologyFallback: "Konkrete Technologien werden in der öffentlichen Beschreibung diesem Fall nicht zugeordnet.",
      cases: [
        {
          title: "Ein Produktmodul von Grund auf entwickelt",
          summary:
            "Ein Produktmodul eigenständig von Grund auf entwickelt, von der Implementierung bis zur Validierung des Release Candidates für dieses Modul.",
          problem: "Ein Produktmodul musste von Grund auf entwickelt werden.",
          approach:
            "Modulfunktionen eigenständig umgesetzt und den Release Candidate validiert.",
          architecture:
            "Geschäftsregeln, technische Abstimmungen, Code-Reviews und automatisierte Tests prägten die Umsetzung. Interne Architekturdetails werden nicht veröffentlicht.",
          contribution:
            "Während der Umsetzung arbeitete ich mit Geschäftsregeln, technischen Abstimmungen, Code-Reviews und automatisierten Tests.",
          technologies: [],
        },
        {
          title: "Kampagnen ohne App-Release aktualisieren",
          summary:
            "Eine wiederverwendbare Werbebanner-Komponente entwickelt, die über Adobe-Tools remote verwaltet wird. Kampagneninhalte lassen sich so ohne Codeänderung oder neues App-Release anpassen.",
          problem:
            "Kampagneninhalte sollten ohne Codeänderungen oder ein neues Mobile-App-Release geändert werden können.",
          approach:
            "Eine wiederverwendbare Werbebanner-Komponente mit Remote-Verwaltung über Adobe-Tools und Impression- sowie Klickmessung entwickelt.",
          architecture:
            "Die Kampagneninhalte wurden remote über eine wiederverwendbare Banner-Komponente verwaltet. Weitere interne Architekturdetails werden nicht veröffentlicht.",
          contribution:
            "Erfasst wurden Impressionen und Klicks, um die Kampagnenmessung und Analyse-Dashboards zu unterstützen.",
          technologies: ["Adobe-Tools"],
        },
        {
          title: "Mehr Kontext bei der Untersuchung von Vorfällen",
          summary:
            "Gemeinsam mit anderen Entwicklern die Protokollierung vereinheitlicht und die Rückverfolgbarkeit von Fehlern in mobiler Software verbessert.",
          problem:
            "Bei der Untersuchung von Vorfällen waren mehr Fehlerkontext und Rückverfolgbarkeit erforderlich.",
          approach:
            "Gemeinsam mit anderen Entwicklern die Protokollierung vereinheitlicht und die Rückverfolgbarkeit von Fehlern verbessert.",
          architecture:
            "Die Standardisierung der Protokollierung war Teil der Observability-Arbeit. Weitere interne Architekturdetails werden nicht veröffentlicht.",
          contribution:
            "Dynatrace war Teil der Observability-Arbeit zur Unterstützung von Vorfalluntersuchungen.",
          technologies: ["Dynatrace", "Logging"],
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
      title: "Kontakt aufnehmen",
      summary:
        "Recruiter, Unternehmen und Fachleute können mich gerne kontaktieren, um über berufliche Möglichkeiten, Softwareentwicklung und Projekte zu sprechen.",
      linksLabel: "Sie finden mich auf",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "E-Mail senden" },
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