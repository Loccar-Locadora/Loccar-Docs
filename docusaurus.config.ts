module.exports = {
  title: 'Loccar Locadora',
  tagline: 'Documentação oficial do projeto',
  url: 'https://loccar-locadora.github.io', // Nome da organização
  baseUrl: '/Loccar-Docs/', // Nome exato do repositório (com maiúsculas)
  favicon: 'img/favicon.ico',
  organizationName: 'Loccar-Locadora', // Nome da organização GitHub
  projectName: 'Loccar-Docs', // Nome exato do repositório
  
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
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};