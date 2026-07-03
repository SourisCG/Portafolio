export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

export const localeShort: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};

export type Translation = {
  site: {
    title: string;
    tagline: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    now: string;
    links: string;
    back: string;
  };
  hero: {
    greeting: string;
    intro: string;
    cta_projects: string;
    cta_links: string;
    badge: string;
  };
  about: {
    title: string;
    body: string;
    interests_title: string;
    interests: string[];
    focus_title: string;
    focus: string[];
  };
  projects: {
    title: string;
    intro: string;
    filter_all: string;
    featured: string;
    view_repo: string;
    view_release: string;
    view_demo: string;
    status: {
      stable: string;
      beta: string;
      wip: string;
      learning: string;
    };
    detail: {
      problem: string;
      approach: string;
      stack: string;
      status_label: string;
      links: string;
    };
  };
  now: {
    title: string;
    intro: string;
    items: { date: string; text: string }[];
  };
  links: {
    title: string;
    intro: string;
    find_me: string;
  };
  footer: {
    made_with: string;
    rights: string;
  };
};

export const translations: Record<Locale, Translation> = {
  en: {
    site: {
      title: 'SourisCG — Portfolio',
      tagline: 'Java-first desktop tools & dev utilities',
      description:
        'Portfolio of Sebastian Garcia, software engineering student. Java/JavaFX, developer tooling, CLI and small experiments with a retro web soul.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      now: 'Now',
      links: 'Links',
      back: 'Back',
    },
    hero: {
      greeting: "Hi, I'm Sebastian.",
      intro:
        'Software engineering student building Java-first desktop tools, developer utilities and small experiments — with a retro web soul.',
      cta_projects: 'See projects',
      cta_links: 'Find me online',
      badge: 'Currently learning more Spring Boot',
    },
    about: {
      title: 'About',
      body:
        "I'm a software engineering student who likes to build tools that solve real, small problems — mostly on the JVM, with JavaFX when I need a desktop UI. I care about clean APIs, friendly error messages and a little bit of pixel-art personality on the side.",
      interests_title: 'Things I enjoy',
      interests: [
        'Java 17+ and the JavaFX ecosystem',
        'Developer tooling (language servers, extensions, hot reload)',
        'CLI/TUI design and packaging releases for Linux/Windows/macOS',
        'Retro UI, pixel art and small creative experiments',
      ],
      focus_title: 'Right now I am focusing on',
      focus: [
        'Spring Boot 3/4 and REST APIs with JPA + PostgreSQL',
        'Polishing my JavaFX projects (theming, packaging, docs)',
        'Writing cleaner, more maintainable TypeScript',
      ],
    },
    projects: {
      title: 'Projects',
      intro:
        'A mix of Java desktop tools, developer utilities and the occasional Rust/Node detour. Click a card to read more.',
      filter_all: 'All',
      featured: 'Featured',
      view_repo: 'Repository',
      view_release: 'Latest release',
      view_demo: 'Live demo',
      status: {
        stable: 'Stable',
        beta: 'Beta',
        wip: 'Work in progress',
        learning: 'Learning project',
      },
      detail: {
        problem: 'Problem',
        approach: 'What I did',
        stack: 'Stack',
        status_label: 'Status',
        links: 'Links',
      },
    },
    now: {
      title: 'Now',
      intro: 'What I am doing these days. Updated when something interesting happens.',
      items: [
        {
          date: '2026-07',
          text: 'Building this portfolio with Astro and a retro/pixel aesthetic.',
        },
        {
          date: '2026-06',
          text: 'Released JavaVisualizer v1.2.0 with MSI/EXE installers for Windows and DMG for macOS.',
        },
        {
          date: '2026-05',
          text: 'Started working on CSSFX and FXCompleter to make JavaFX feel less painful in VS Code.',
        },
      ],
    },
    links: {
      title: 'Links',
      intro: 'Where to find me online. No DMs for hiring bots, please.',
      find_me: 'Find me on',
    },
    footer: {
      made_with: 'Hand-coded with Astro, CSS and a little bit of pixel dust.',
      rights: 'Sebastian Garcia. Built with care, not a single Tailwind class in sight.',
    },
  },
  es: {
    site: {
      title: 'SourisCG — Portafolio',
      tagline: 'Herramientas de escritorio en Java y utilidades para devs',
      description:
        'Portafolio de Sebastián García, estudiante de ingeniería de software. Java/JavaFX, tooling para desarrolladores, CLI y pequeños experimentos con alma retro web.',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      now: 'Ahora',
      links: 'Links',
      back: 'Volver',
    },
    hero: {
      greeting: 'Hola, soy Sebastian.',
      intro:
        'Estudiante de ingeniería de software creando herramientas de escritorio en Java, utilidades para devs y pequeños experimentos — con alma retro web.',
      cta_projects: 'Ver proyectos',
      cta_links: 'Encuéntrame en línea',
      badge: 'Actualmente aprendiendo más Spring Boot',
    },
    about: {
      title: 'Sobre mí',
      body:
        'Soy estudiante de ingeniería de software y me gusta construir herramientas que resuelven problemas pequeños pero reales — sobre todo en la JVM, con JavaFX cuando necesito una UI de escritorio. Me importan las APIs limpias, los mensajes de error amigables y un toque de personalidad pixel-art de vez en cuando.',
      interests_title: 'Cosas que disfruto',
      interests: [
        'Java 17+ y el ecosistema JavaFX',
        'Tooling para devs (language servers, extensiones, hot reload)',
        'Diseño de CLI/TUI y empaquetado para Linux/Windows/macOS',
        'UI retro, pixel art y pequeños experimentos creativos',
      ],
      focus_title: 'En qué estoy enfocado ahora',
      focus: [
        'Spring Boot 3/4 y APIs REST con JPA + PostgreSQL',
        'Pulir mis proyectos JavaFX (temas, empaquetado, docs)',
        'Escribir TypeScript más limpio y mantenible',
      ],
    },
    projects: {
      title: 'Proyectos',
      intro:
        'Una mezcla de herramientas de escritorio en Java, utilidades para devs y la ocasional escapada a Rust/Node. Haz clic en una tarjeta para saber más.',
      filter_all: 'Todos',
      featured: 'Destacado',
      view_repo: 'Repositorio',
      view_release: 'Última release',
      view_demo: 'Demo en vivo',
      status: {
        stable: 'Estable',
        beta: 'Beta',
        wip: 'En desarrollo',
        learning: 'Proyecto de aprendizaje',
      },
      detail: {
        problem: 'Problema',
        approach: 'Qué hice',
        stack: 'Stack',
        status_label: 'Estado',
        links: 'Links',
      },
    },
    now: {
      title: 'Ahora',
      intro: 'En qué ando últimamente. Actualizado cuando pasa algo interesante.',
      items: [
        {
          date: '2026-07',
          text: 'Construyendo este portafolio con Astro y una estética retro/pixel.',
        },
        {
          date: '2026-06',
          text: 'Lancé JavaVisualizer v1.2.0 con instaladores MSI/EXE para Windows y DMG para macOS.',
        },
        {
          date: '2026-05',
          text: 'Empecé a trabajar en CSSFX y FXCompleter para hacer JavaFX menos doloroso en VS Code.',
        },
      ],
    },
    links: {
      title: 'Links',
      intro: 'Dónde encontrarme en línea. No DM para bots de reclutamiento, por favor.',
      find_me: 'Encuéntrame en',
    },
    footer: {
      made_with: 'Hecho a mano con Astro, CSS y un poquito de polvo de pixels.',
      rights: 'Sebastián García. Construido con cariño, sin una sola clase de Tailwind.',
    },
  },
};
