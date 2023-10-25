// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mazen Knowledgebase',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://mazenhost.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mazen Ltd.', // Usually your GitHub org/username.
  projectName: 'knowledgebase mazen', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        metadata: [{name: 'og:site_name', content: 'MazenHost KnowledgeBase'},
          {name: 'og:description', content: 'Learn more about Minecraft Hosting, Game Hosting, VPS and MazenHost with our docs.'},
          {name: 'keywords', content: 'minecraft, minecraft hosting, minecraft server motd, server icon minecraft, datapack minecraft, plugins, plugin minecraft, whitelist setup minecraft, fix lag minecraft, optimize server, vanilla'}],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
      },
      //TODO: add algolia search when the knowledge base is ready, because it requires to open source it and have it with a legit domain

      /* This key is safe to be exposed here, it only sends info. */
      // algolia: {
      //   apiKey: "4f1dcbb1f3e77881e08271b52e7b0722",
      //   appId: 'O5WV7LRP6W',
      //   indexName: "mazen-knowledge",
      //   contextualSearch: true,
      //   searchParameters: {},
      // },
      navbar: {
        title: 'Mazen Knowledgebase',
        logo: {
          alt: 'MazenHost Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright ${new Date().getFullYear()} © Docusaurus × Mazen Ltd. Company registered in Bulgaria (Sofia) | VAT BG206086969`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
