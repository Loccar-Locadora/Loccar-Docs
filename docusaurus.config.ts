const config = {
  title: 'Loccar Locadora',
  tagline: 'Documentação oficial do projeto',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment config
  url: 'https://loccar-locadora.github.io',
  baseUrl: '/Loccar-Docs/',
  
  // GitHub deployment config
  organizationName: 'Loccar-Locadora',
  projectName: 'Loccar-Docs',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // i18n config
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Loccar Locadora',
        items: [
          { to: '/docs/user-stories', label: 'User Stories', position: 'left' },
          { to: '/docs/backlog', label: 'Backlog', position: 'left' },
          { to: '/docs/architecture', label: 'Arquitetura', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Locadora Online`,
      },
    }),
};

module.exports = config;