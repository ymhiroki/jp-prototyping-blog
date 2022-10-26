// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const isProd = process.env.NODE_ENV === 'production';

// Jekyll 時代の path を redirect する
// `/blog/*` が index されたら or ドメインが設定されたら削除して良い
const redirects = [
  {
    from: '/jekyll-cloudwatch-rum',
    to: '/blog/jekyll-cloudwatch-rum',
  },
  {
    from: '/cdk-static-website',
    to: '/blog/cdk-static-website',
  },
  {
    from: '/simple-nft-marketplace',
    to: '/blog/simple-nft-marketplace',
  },
  {
    from: '/cloudwatch-rum-stats',
    to: '/blog/cloudwatch-rum-stats',
  },
  {
    from: '/closed-serverless-app',
    to: '/blog/closed-serverless-app',
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prototyping Blog',
  tagline: 'AWS JP Prototyping チームが日々の知見を蓄積するブログです',
  url: 'https://aws-samples.github.io',
  baseUrl: '/jp-prototyping-blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aws-samples', // Usually your GitHub org/user name.
  projectName: 'jp-prototyping-blog', // Usually your repo name.

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          editUrl:
          'https://github.com/aws-samples/jp-prototyping-blog/edit/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ['en', 'ja'],
      },
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Prototyping Blog',
      logo: {
        alt: 'Prototyping Blog Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/blog',
          position: 'left',
          label: 'Blog',
        },
        {
          to: '/about-team',
          position: 'left',
          label: 'Team',
        },
        {
          href: 'https://github.com/aws-samples/jp-prototyping-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contents',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About Team',
              to: '/about-team',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  scripts: [
    isProd ? '/jp-prototyping-blog/js/rum-prod.js' : '/jp-prototyping-blog/js/rum-dev.js',
  ],

  // Jekyll からの移行対応
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      }
    ]
  ],
};

module.exports = config;
