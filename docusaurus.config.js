// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require("prism-react-renderer");
const ArchivedVersions = require("./archivedVersions.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  title: "Rahat - Aid Token Distribution",
  tagline:
    "Supporting vulnerable communities with a simple and efficient relief distribution platform.",
  url: "https://docs.rahat.io",
  baseUrl: "/",
  projectName: "rahat-documentation", // Usually your repo name.
  organizationName: "rahataid", // Usually your GitHub org/user name.
  onBrokenLinks: "warn", // Changed from "throw" to "warn" to help during development
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  plugins: [

      [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dev',
        path: 'dev-docs',
        routeBasePath: 'dev-docs',
        sidebarPath: require.resolve('./sidebars-dev.js'),
        editUrl: "https://github.com/rahataid/rahat-documentation/blob/dev",
        showLastUpdateTime: true
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'user',
        path: 'user-docs',
        routeBasePath: 'user-docs',
        sidebarPath: require.resolve('./sidebars-user.js'),
        editUrl: "https://github.com/rahataid/rahat-documentation/blob/dev",
        showLastUpdateTime: true
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/rahataid/rahat-documentation/blob/dev",
          showLastUpdateTime: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Next',
              banner: 'unreleased'
            },
          },
        },
        
        blog: {
          path: "blog",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Rahat Logo",
          src: "/img/rahat_logo.png",
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction/Welcome',
            position: 'left',
            label: 'Old Docs',
          },
                   {
            type: 'doc',
            docsPluginId: 'dev',
            docId: 'Introduction/Welcome',
            position: 'left',
            label: 'Developer Docs',
          },
          {
            type: 'doc',
            docsPluginId: 'user',
            docId: 'Introduction/Welcome',
            position: 'left',
            label: 'User Guide',
          },
          { to: "blog", label: "Releases", position: "right" },
          {
            to: "/help",
            position: "right",
            label: "Help",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            docsPluginId: "default",  // This makes it only work with the default plugin (developer docs)
          },
          // Removed locale dropdown since we only have English for now
          {
            href: "https://github.com/rahataid?tab=repositories",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/Introduction/Welcome",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github Discussion",
                href: "https://github.com/orgs/rahataid/discussionsb",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/rahataid",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://rahat.esatya.io/blogs/",
              },
              {
                label: "GitHub",
                href: "https://github.com/rahataid?tab=repositories",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rahat. A part of Rumsan Company. Designed by Rumsan | <a href="https://assets.rumsan.net/rumsan-group/rumsan-privacy-policy.pdf" target="_blank">Privacy Policy</a> | `,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      // algolia: {
      //   indexName: "jest-v2",
      //   apiKey: "833906d7486e4059359fa58823c4ef56",
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
