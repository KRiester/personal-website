export type Bilingual<T = string> = { en: T; de: T };

export const siteConfig = {
  name: "Kilian Riester",
  title: {
    en: "Strategy \u00b7 AI \u00b7 Consulting",
    de: "Strategie \u00b7 KI \u00b7 Beratung",
  } as Bilingual,
  email: "riesterkilian@gmail.com",
  linkedin: "https://www.linkedin.com/in/kilian-riester/",
  github: "https://github.com/KRiester",
};

export const heroData = {
  explore: { en: "Explore", de: "Entdecken" } as Bilingual,
};

export const aboutData = {
  label: { en: "About", de: "\u00dcber mich" } as Bilingual,
  headline: {
    en: "Bridging strategy, technology, and business at a global scale.",
    de: "Strategie, Technologie und Business verbinden \u2014 auf globaler Ebene.",
  } as Bilingual,
  description: {
    en: "Executive Assistant to the CCO at Allianz, working at the intersection of corporate strategy, AI innovation, and customer-centric transformation. With experience across global consulting, entrepreneurship, and data analytics spanning 70+ countries, I turn complexity into clarity and ideas into impact.",
    de: "Executive Assistant des CCO bei Allianz, an der Schnittstelle von Unternehmensstrategie, KI-Innovation und kundenzentrierter Transformation. Mit Erfahrung in globalem Consulting, Unternehmertum und Datenanalyse in \u00fcber 70 L\u00e4ndern verwandle ich Komplexit\u00e4t in Klarheit und Ideen in Wirkung.",
  } as Bilingual,
  highlights: [
    {
      en: "Allianz \u2014 Executive Assistant to CCO",
      de: "Allianz \u2014 Executive Assistant des CCO",
    },
    {
      en: "Hult International Business School \u2014 Distinction",
      de: "Hult International Business School \u2014 Distinction",
    },
    {
      en: "Founder \u2014 Kilian Riester Consulting",
      de: "Gr\u00fcnder \u2014 Kilian Riester Consulting",
    },
    {
      en: "Global impact across 70+ countries",
      de: "Globaler Impact in \u00fcber 70 L\u00e4ndern",
    },
  ] as Bilingual[],
};

export const experienceLabels = {
  label: { en: "Experience", de: "Erfahrung" } as Bilingual,
  heading: { en: "Where I\u2019ve worked", de: "Stationen" } as Bilingual,
  educationHeading: { en: "Education", de: "Ausbildung" } as Bilingual,
  certificationsHeading: {
    en: "Certifications",
    de: "Zertifikate",
  } as Bilingual,
};

export const experienceData = [
  {
    role: {
      en: "Executive Assistant to CCO",
      de: "Executive Assistant des CCO",
    } as Bilingual,
    company: "Allianz",
    location: {
      en: "Munich, Germany",
      de: "M\u00fcnchen, Deutschland",
    } as Bilingual,
    period: {
      en: "Dec 2023 \u2014 Present",
      de: "Dez 2023 \u2014 Heute",
    } as Bilingual,
    description: {
      en: "Supporting C-level decision-making and driving cross-functional strategic initiatives. Building AI-powered frameworks, co-leading global customer programs, and creating impactful executive communications.",
      de: "Unterst\u00fctzung von C-Level-Entscheidungen und Steuerung funktions\u00fcbergreifender strategischer Initiativen. Entwicklung KI-gest\u00fctzter Frameworks, Co-Leitung globaler Kundenprogramme und Erstellung wirkungsvoller Executive Communications.",
    } as Bilingual,
  },
  {
    role: {
      en: "Founder / Consultant",
      de: "Gr\u00fcnder / Berater",
    } as Bilingual,
    company: "Kilian Riester Consulting eU",
    location: { en: "Berlin & Graz", de: "Berlin & Graz" } as Bilingual,
    period: {
      en: "May 2021 \u2014 Dec 2023",
      de: "Mai 2021 \u2014 Dez 2023",
    } as Bilingual,
    description: {
      en: "Built and led an independent consulting practice. Delivered competitive strategy, market analysis, and go-to-market strategies for clients across MedTech, architecture, and design industries.",
      de: "Aufbau und Leitung einer unabh\u00e4ngigen Beratungspraxis. Wettbewerbsstrategie, Marktanalyse und Go-to-Market-Strategien f\u00fcr Kunden in MedTech, Architektur und Design.",
    } as Bilingual,
  },
  {
    role: {
      en: "Consultant \u2014 Data Privacy & IT Security",
      de: "Berater \u2014 Datenschutz & IT-Sicherheit",
    } as Bilingual,
    company: "VMCON OG",
    location: {
      en: "Graz, Austria",
      de: "Graz, \u00d6sterreich",
    } as Bilingual,
    period: {
      en: "Oct 2019 \u2014 Oct 2022",
      de: "Okt 2019 \u2014 Okt 2022",
    } as Bilingual,
    description: {
      en: "Delivered GDPR compliance solutions for 30+ clients across industries. Built lasting client relationships through technical documentation and process optimization.",
      de: "DSGVO-Compliance-L\u00f6sungen f\u00fcr \u00fcber 30 Kunden branchen\u00fcbergreifend. Langfristige Kundenbeziehungen durch technische Dokumentation und Prozessoptimierung.",
    } as Bilingual,
  },
];

export const educationData = [
  {
    institution: {
      en: "Hult International Business School",
      de: "Hult International Business School",
    } as Bilingual,
    degree: {
      en: "Master of International Business",
      de: "Master of International Business",
    } as Bilingual,
    period: { en: "2022 \u2014 2023", de: "2022 \u2014 2023" } as Bilingual,
    note: {
      en: "Graduated with Distinction \u2014 Dubai, New York, Boston",
      de: "Abschluss mit Distinction \u2014 Dubai, New York, Boston",
    } as Bilingual,
  },
  {
    institution: {
      en: "University of Graz",
      de: "Karl-Franzens-Universit\u00e4t Graz",
    } as Bilingual,
    degree: {
      en: "Bachelor of Science in Economics",
      de: "Bachelor of Science in Volkswirtschaftslehre",
    } as Bilingual,
    period: {
      en: "Graduated 2022",
      de: "Abschluss 2022",
    } as Bilingual,
    note: {
      en: "Behavioral Economics & Finance",
      de: "Verhaltens\u00f6konomik & Finanzwirtschaft",
    } as Bilingual,
  },
];

export const certificationsData = [
  "Harvard Global M&A Case Competition",
  "Google Data Analytics Professional",
  "Google Online Marketing Fundamentals",
];

export const focusData = {
  label: { en: "Focus", de: "Fokus" } as Bilingual,
  heading: { en: "What I do", de: "Was ich mache" } as Bilingual,
  areas: [
    {
      title: {
        en: "Strategic Advisory",
        de: "Strategische Beratung",
      } as Bilingual,
      description: {
        en: "Supporting board-level decision-making and driving strategic initiatives across global business lines.",
        de: "Unterst\u00fctzung von Vorstandsentscheidungen und Steuerung strategischer Initiativen \u00fcber globale Gesch\u00e4ftsbereiche.",
      } as Bilingual,
      tags: {
        en: ["Strategy", "C-Level", "Transformation"],
        de: ["Strategie", "C-Level", "Transformation"],
      } as Bilingual<string[]>,
    },
    {
      title: { en: "AI & Innovation", de: "KI & Innovation" } as Bilingual,
      description: {
        en: "Building AI-powered tools and frameworks that drive strategic prioritization and operational efficiency.",
        de: "Entwicklung KI-gest\u00fctzter Tools und Frameworks f\u00fcr strategische Priorisierung und operative Effizienz.",
      } as Bilingual,
      tags: {
        en: ["AI", "Automation", "Product"],
        de: ["KI", "Automatisierung", "Produkt"],
      } as Bilingual<string[]>,
    },
    {
      title: {
        en: "Global Customer Strategy",
        de: "Globale Kundenstrategie",
      } as Bilingual,
      description: {
        en: "Developing and scaling customer-centric frameworks that drive measurable market outperformance.",
        de: "Entwicklung und Skalierung kundenzentrierter Frameworks mit messbarer Marktoutperformance.",
      } as Bilingual,
      tags: {
        en: ["Customer", "Global", "KPIs"],
        de: ["Kunde", "Global", "KPIs"],
      } as Bilingual<string[]>,
    },
    {
      title: {
        en: "Executive Communication",
        de: "Executive Communication",
      } as Bilingual,
      description: {
        en: "Creating decision-grade presentations and keynotes with immersive storytelling for C-level stakeholders.",
        de: "Erstellung entscheidungsreifer Pr\u00e4sentationen und Keynotes mit immersivem Storytelling f\u00fcr C-Level-Stakeholder.",
      } as Bilingual,
      tags: {
        en: ["Storytelling", "Presentations", "Impact"],
        de: ["Storytelling", "Pr\u00e4sentationen", "Impact"],
      } as Bilingual<string[]>,
    },
  ],
};

export const contactData = {
  label: { en: "Contact", de: "Kontakt" } as Bilingual,
  heading: { en: "Let\u2019s connect", de: "Lass uns vernetzen" } as Bilingual,
  subheading: {
    en: "Open for conversations about strategy, innovation, and new opportunities.",
    de: "Offen f\u00fcr Gespr\u00e4che \u00fcber Strategie, Innovation und neue M\u00f6glichkeiten.",
  } as Bilingual,
};

export const navItems = [
  { label: { en: "About", de: "\u00dcber mich" } as Bilingual, href: "#about" },
  { label: { en: "Experience", de: "Erfahrung" } as Bilingual, href: "#experience" },
  { label: { en: "Focus", de: "Fokus" } as Bilingual, href: "#focus" },
  { label: { en: "Contact", de: "Kontakt" } as Bilingual, href: "#contact" },
];
