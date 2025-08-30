module.exports = {
  title: 'Loccar Locadora',
  tagline: 'Documentação oficial do projeto',
  url: 'https://seuusuario.github.io',
  baseUrl: '/my-project-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'seuusuario', // seu usuário do GitHub
  projectName: 'my-project-docs', // nome do repositório
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
