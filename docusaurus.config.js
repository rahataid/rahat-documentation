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
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  // plugins: [
  //   [
  //     "docusaurus-plugin-openapi",
  //     {
  //       id: "rahat-core",
  //       path: require.resolve("./openApi/rahat-core.json"),
  //       routeBasePath: "api/rahat-core",
  //     },
  //   ],
  // ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/rahataid/rahat-documentation/blob/dev",
          showLastUpdateTime: true,
          versions: {
            current: {
              label: 'Next',
              path: 'next',
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
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          {
            to: "api/rahat-core",
            activeBasePath: "api",
            label: "API",
            position: "right",
          },
          { to: "blog", label: "Releases", position: "right" },
          {
            to: "/help",
            position: "right",
            label: "Help",
          },

          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: "/versions",
                label: "All versions",
              },
            ],
          },
          { type: "localeDropdown", position: "right" },
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
                label: "Tutorial",
                to: "/docs/intro",
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
