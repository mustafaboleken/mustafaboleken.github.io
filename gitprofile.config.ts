// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mustafaboleken', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Mustafa BOLEKEN',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'mustafa-boleken',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '@mustafa.boleken.antmedia',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://mustafaboleken.github.io',
    phone: '',
    email: 'mustafaboleken@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1viOfPaD3jCBDqv6VjXVcDMYirTi7Swxl/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Spring Boot',
    'FFmpeg',
    'WebRTC',
    'Live Streaming',
    'JavaScript',
    'React',
    'Python',
    'PostgreSQL',
    'Rust',
    'Git',
    'Docker'
  ],
  experiences: [
      {
        company: 'Ant Media',
        position: 'Software Engineer',
        from: 'September 2021',
        to: 'Present',
        companyLink: 'https://antmedia.io/',
      },
      {
        company: 'Assistbox',
        position: 'Software Engineer',
        from: 'July 2021',
        to: 'July 2022',
        companyLink: 'https://assistbox.io/',
      },
      {
          company: 'Temas Medya',
          position: 'Software Engineer',
          from: 'Sept 2020',
          to: 'July 2021',
      },
      {
          company: 'Pythium Teknoloji',
          position: 'Mobile Application Developer',
          from: 'Oct 2020',
          to: 'Jan 2021',
      },
      {
          company: 'Seras',
          position: 'Software Engineer',
          from: 'Jun 2020',
          to: 'Sept 2020',
          companyLink: 'http://www.serasyazilim.com/',
      }
  ],
  certifications: [
    {
      name: 'Python for Data Science and AI',
      body: 'Coursera Credential ID NWTPFKBHPLQC',
      year: 'Oct 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/NWTPFKBHPLQC'
    },
    {
        name: 'Tools for Data Science',
        body: 'Coursera Credential ID L25CBZ6UNR6F',
        year: 'Oct 2020',
        link: 'https://www.coursera.org/account/accomplishments/certificate/L25CBZ6UNR6F'
    },
    {
        name: 'What is Data Science?',
        body: 'Coursera Credential ID 2F3E7XB3BNED',
        year: 'Oct 2020',
        link: 'https://www.coursera.org/account/accomplishments/certificate/2F3E7XB3BNED'
    }
  ],
  educations: [
    {
      institution: 'Cukurova University',
      degree: 'Bachelor\'s Degree, Computer Engineering',
      from: '2016',
      to: '2021',
    }
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@mustafa.boleken.antmedia', // to hide blog section, keep it empty
    limit: 6, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
