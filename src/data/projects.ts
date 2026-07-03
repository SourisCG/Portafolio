export type ProjectStatus = 'stable' | 'beta' | 'wip' | 'learning';

export type ProjectTag = 'java' | 'javafx' | 'rust' | 'typescript' | 'node' | 'web' | 'tooling' | 'cli' | 'discord';

export type ProjectLink = {
  label: 'repo' | 'release' | 'demo';
  url: string;
};

export type LocalizedProject = {
  problem: string;
  approach: string;
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  status: ProjectStatus;
  tags: ProjectTag[];
  featured?: boolean;
  language: string[];
  repo: string;
  links: ProjectLink[];
  i18n: {
    en: { tagline: string; description: string } & LocalizedProject;
    es: { tagline: string; description: string } & LocalizedProject;
  };
};

export const projects: Project[] = [
  {
    slug: 'java-visualizer',
    name: 'JavaVisualizer',
    year: '2026',
    status: 'stable',
    tags: ['java', 'javafx', 'tooling'],
    featured: true,
    language: ['Java', 'JavaFX', 'Gradle'],
    repo: 'https://github.com/SourisCG/JavaVisualizer',
    links: [
      { label: 'repo', url: 'https://github.com/SourisCG/JavaVisualizer' },
      {
        label: 'release',
        url: 'https://github.com/SourisCG/JavaVisualizer/releases/latest',
      },
    ],
    i18n: {
      en: {
        tagline: 'Live preview & hot reload for JavaFX FXML and CSSFX.',
        description:
          'A desktop tool that reloads your JavaFX FXML and CSS files on save, without recompiling. Built with JavaFX itself, packaged as MSI/EXE for Windows, DMG for macOS and .deb/.rpm for Linux.',
        problem:
          'Iterating on JavaFX UIs means full recompiles and app restarts for every CSS or FXML tweak — which kills flow.',
        approach:
          'I built a JavaFX app that watches your project files, swaps the scene root on FXML change and re-applies stylesheets on CSS change. Cross-platform installers via jpackage + GitHub Actions.',
      },
      es: {
        tagline: 'Live preview y hot reload para FXML y CSS de JavaFX.',
        description:
          'Una herramienta de escritorio que recarga tus archivos FXML y CSS de JavaFX al guardar, sin recompilar. Hecha con JavaFX, empaquetada como MSI/EXE para Windows, DMG para macOS y .deb/.rpm para Linux.',
        problem:
          'Iterar sobre UIs JavaFX significa recompilar y reiniciar la app por cada cambio de CSS o FXML — mata el flujo.',
        approach:
          'Construí una app JavaFX que vigila los archivos del proyecto, intercambia el scene root al cambiar el FXML y reaplica los stylesheets al cambiar el CSS. Instaladores multiplataforma con jpackage + GitHub Actions.',
      },
    },
  },
  {
    slug: 'cssfx',
    name: 'CSSFX',
    year: '2026',
    status: 'stable',
    tags: ['typescript', 'javafx', 'tooling'],
    featured: true,
    language: ['TypeScript', 'VS Code API'],
    repo: 'https://github.com/SourisCG/CSSFX',
    links: [
      { label: 'repo', url: 'https://github.com/SourisCG/CSSFX' },
      {
        label: 'release',
        url: 'https://github.com/SourisCG/CSSFX/releases',
      },
    ],
    i18n: {
      en: {
        tagline: 'IntelliSense for JavaFX CSS in VS Code.',
        description:
          'A VS Code extension that gives proper autocomplete, hover docs and validation for the 155+ -fx-* CSS properties used by JavaFX, with smart value suggestions, color decorators and formatting.',
        problem:
          "Generic CSS completions in VS Code suggest properties that JavaFX doesn't even support, and hide the ones that do.",
        approach:
          'I shipped a language server that ships JavaFX-specific property metadata, color decorators, hover info and a linter, packaged as a VSIX.',
      },
      es: {
        tagline: 'IntelliSense para CSS de JavaFX en VS Code.',
        description:
          'Una extensión para VS Code que da autocompletado, docs en hover y validación reales para las 155+ propiedades -fx-* de JavaFX, con sugerencias de valores, decoradores de color y formateo.',
        problem:
          'El autocompletado genérico de CSS en VS Code sugiere propiedades que JavaFX ni soporta y esconde las que sí.',
        approach:
          'Hice un language server con metadatos específicos de JavaFX, decoradores de color, hover info y linter, empaquetado como VSIX.',
      },
    },
  },
  {
    slug: 'fxcompleter',
    name: 'FXCompleter',
    year: '2026',
    status: 'beta',
    tags: ['typescript', 'javafx', 'tooling'],
    featured: true,
    language: ['TypeScript', 'VS Code API'],
    repo: 'https://github.com/SourisCG/FXCompleter',
    links: [{ label: 'repo', url: 'https://github.com/SourisCG/FXCompleter' }],
    i18n: {
      en: {
        tagline: 'FXML autocomplete, auto-imports and validation for VS Code.',
        description:
          'Companion to CSSFX: full FXML IntelliSense with auto-import insertion, unused import detection, controller support and CSS property completions inside style attributes.',
        problem:
          'Writing FXML by hand is error-prone: missing imports, typo-ed class names, dead controllers. A good editor would catch all of that.',
        approach:
          'I built a VS Code language server that parses FXML, suggests components and attributes, inserts <?import?> directives automatically and jumps to controller methods via # references.',
      },
      es: {
        tagline: 'Autocompletado de FXML, auto-imports y validación para VS Code.',
        description:
          'Complemento de CSSFX: IntelliSense completo para FXML con inserción automática de imports, detección de imports sin usar, soporte de controllers y autocompletado de CSS dentro de atributos style.',
        problem:
          'Escribir FXML a mano es propenso a errores: imports faltantes, clases mal escritas, controllers muertos. Un buen editor atrapa todo eso.',
        approach:
          'Construí un language server para VS Code que parsea FXML, sugiere componentes y atributos, inserta directivas <?import?> automáticamente y salta a métodos del controller con referencias #.',
      },
    },
  },
  {
    slug: 'sourisdw',
    name: 'SourisDW',
    year: '2026',
    status: 'stable',
    tags: ['rust', 'cli'],
    featured: true,
    language: ['Rust'],
    repo: 'https://github.com/SourisCG/SourisDW',
    links: [
      { label: 'repo', url: 'https://github.com/SourisCG/SourisDW' },
      { label: 'release', url: 'https://github.com/SourisCG/SourisDW/releases/latest' },
    ],
    i18n: {
      en: {
        tagline: 'Cross-platform CLI/TUI downloader for YouTube & Spotify.',
        description:
          'A Rust CLI + TUI that downloads audio/video from YouTube and Spotify, embeds metadata and artwork, and ships with prebuilt binaries for Linux/macOS/Windows (musl, glibc, ARM64).',
        problem:
          'Most downloaders are platform-locked, hard to script, or pull in heavy runtimes. I wanted something I could call from any language via subprocess + JSON.',
        approach:
          'I designed a library + CLI + TUI trio. yt-dlp/ffmpeg/deno are auto-downloaded at runtime. A JSON progress stream makes it easy to drive from Python, Node, Java, Go or C#.',
      },
      es: {
        tagline: 'CLI/TUI multiplataforma para descargar de YouTube y Spotify.',
        description:
          'Un CLI + TUI en Rust que descarga audio/video de YouTube y Spotify, embebe metadatos y carátulas, y se distribuye con binarios precompilados para Linux/macOS/Windows (musl, glibc, ARM64).',
        problem:
          'La mayoría de los descargadores están atados a una plataforma, son difíciles de scriptear o traen runtimes pesados. Quería algo que pudiera llamar desde cualquier lenguaje vía subprocess + JSON.',
        approach:
          'Diseñé un trío library + CLI + TUI. yt-dlp/ffmpeg/deno se descargan automáticamente al ejecutar. Un stream de progreso en JSON permite controlarlo desde Python, Node, Java, Go o C#.',
      },
    },
  },
  {
    slug: 'souris-alarm',
    name: 'SourisAlarm',
    year: '2026',
    status: 'learning',
    tags: ['java', 'javafx'],
    language: ['Java', 'JavaFX', 'Maven'],
    repo: 'https://github.com/SourisCG/SourisAlarm',
    links: [{ label: 'repo', url: 'https://github.com/SourisCG/SourisAlarm' }],
    i18n: {
      en: {
        tagline: 'Minimalist JavaFX desktop alarm clock.',
        description:
          'A small desktop alarm app with light/dark themes, system tray support, persistent alarms, custom wallpapers with blur and 12h/24h clock. Built to learn JavaFX layout and persistence.',
        problem:
          "Most Java alarm apps I found looked like 2005 enterprise software. I wanted a minimal JavaFX app that doesn't burn my retina.",
        approach:
          'Used JavaFX with CSS, persisted alarms to a local file, and added system tray support so it lives quietly in the background. Audio via JavaFX MediaPlayer.',
      },
      es: {
        tagline: 'Reloj despertador minimalista en JavaFX.',
        description:
          'Una app de escritorio con temas claro/oscuro, soporte de system tray, alarmas persistentes, fondos personalizables con blur y reloj 12h/24h. Hecha para aprender layout y persistencia en JavaFX.',
        problem:
          'Las apps de alarmas en Java que encontré parecían software empresarial de 2005. Quería una app JavaFX minimalista que no me quemara la retina.',
        approach:
          'Usé JavaFX con CSS, persistí las alarmas en un archivo local y agregué soporte de system tray para que viva en segundo plano. Audio con JavaFX MediaPlayer.',
      },
    },
  },
  {
    slug: 'souris-tts-player',
    name: 'SourisTTSPlayer',
    year: '2026',
    status: 'stable',
    tags: ['node', 'discord'],
    language: ['JavaScript', 'Node.js', 'Discord.js'],
    repo: 'https://github.com/SourisCG/SourisTTSPlayer',
    links: [{ label: 'repo', url: 'https://github.com/SourisCG/SourisTTSPlayer' }],
    i18n: {
      en: {
        tagline: 'High-quality TTS + music Discord bot.',
        description:
          'Discord.js v14 bot that speaks with ElevenLabs neural voices, plays YouTube/Spotify tracks, and streams audio in RAM for low-latency playback.',
        problem:
          'Most TTS bots on Discord sound robotic. I wanted a bot that uses real neural voices and a separate music volume control.',
        approach:
          'Wired ElevenLabs streaming into @discordjs/voice with FFmpeg as the encoder. Buffers audio in memory to avoid temp files. Music volume is independent from TTS volume.',
      },
      es: {
        tagline: 'Bot de Discord con TTS de alta calidad y música.',
        description:
          'Bot con Discord.js v14 que habla con voces neuronales de ElevenLabs, reproduce tracks de YouTube/Spotify y streamea audio en RAM para baja latencia.',
        problem:
          'La mayoría de los bots de TTS en Discord suenan robóticos. Quería un bot con voces neuronales reales y volumen de música independiente.',
        approach:
          'Conecté el streaming de ElevenLabs a @discordjs/voice con FFmpeg como encoder. Buffers de audio en memoria para evitar archivos temporales. Volumen de música independiente del volumen de TTS.',
      },
    },
  },
  {
    slug: 'botdealer',
    name: 'BotDealer',
    year: '2026',
    status: 'wip',
    tags: ['java', 'javafx', 'discord'],
    language: ['Java', 'Spring Boot', 'JPA', 'JavaFX', 'JDA'],
    repo: 'https://github.com/SourisCG/BotDealer',
    links: [{ label: 'repo', url: 'https://github.com/SourisCG/BotDealer' }],
    i18n: {
      en: {
        tagline: 'Spring Boot + JPA + JavaFX manager for a Discord bot.',
        description:
          'A work-in-progress Java app: Spring Boot service layer + H2/JPA persistence, JDA bot integration, and a JavaFX/FXML desktop UI to manage users, wallets and tokens.',
        problem:
          "It's awkward to administer a Discord bot from chat or a database client. I wanted a small desktop panel for it.",
        approach:
          'Layered Java app (model / repository / service / ui) with Spring Boot for the backend, H2 in file mode for storage, and JavaFX for the admin panel. README coming soon.',
      },
      es: {
        tagline: 'Manager de un bot de Discord con Spring Boot + JPA + JavaFX.',
        description:
          'Una app Java en desarrollo: capa de servicio con Spring Boot + persistencia H2/JPA, integración con JDA y UI de escritorio en JavaFX/FXML para manejar usuarios, wallets y tokens.',
        problem:
          'Es incómodo administrar un bot de Discord desde el chat o un cliente de base de datos. Quería un panel de escritorio pequeño para eso.',
        approach:
          'App Java por capas (model / repository / service / ui) con Spring Boot en el backend, H2 en modo archivo para almacenamiento, y JavaFX para el panel de admin. README próximamente.',
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const allTags: ProjectTag[] = [
  'java',
  'javafx',
  'typescript',
  'rust',
  'node',
  'tooling',
  'cli',
  'discord',
  'web',
];
