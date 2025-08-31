module.exports = {
  title: 'Loccar Locadora',
  tagline: 'Documentação oficial do projeto',
  url: 'https://loccar-locadora.github.io',
  baseUrl: '/Loccar-Docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'Loccar-Locadora',
  projectName: 'Loccar-Docs',
  
  // ADICIONE ESTAS LINHAS:
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  themeConfig: {
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
  },
  presets: [
    [
      'classic',
      {
        docs: { 
          sidebarPath: require.resolve('./sidebars.js'),
          // ADICIONE ESTA LINHA:
          routeBasePath: 'docs',
        },
        theme: { 
          customCss: require.resolve('./src/css/custom.css') 
        },
      },
    ],
  ],
};