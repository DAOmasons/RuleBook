import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Grant Ships Rule Book',
  description: 'An Evolutionary Grants Framework',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/rocketgrad3.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/misc/about' },
      { text: 'How To Play', link: '/how-to-play/' },
      { text: 'App', link: 'https://app.grantships.fun' },
    ],

    sidebar: [
      {
        text: 'About Grant Ships',
        link: '/about/about',
      },
      {
        text: 'GG23',
        link: '/about/gg23',
      },
      {
        text: 'How To Play',
        link: '/how-to-play/',
        items: [
          {
            text: 'Voters',
            link: 'how-to-play/as-a-voter',
          },
          { text: 'Grant Ship Operators', link: 'how-to-play/as-a-gs-op' },
          { text: 'Project Owners', link: 'how-to-play/as-a-project' },
          { text: 'Game Facilitators', link: 'how-to-play/as-a-faci' },
        ],
      },
      {
        text: 'How To Get Involved',
        link: '/how-to-get-involved/',
        items: [
          {
            text: 'Start a Grant Ships Round',
            link: 'how-to-get-involved/apply',
          },
          {
            text: 'Apply for a Grant',
            link: 'how-to-get-involved/project',
          },
        ],
      },
      {
        text: 'Misc',
        link: '/misc/',
        items: [
          { text: 'Team', link: '/misc/team' },
          { text: 'Grant Ships Links', link: '/misc/links' },
          { text: 'Hats Protocol', link: '/misc/hats' },
          { text: 'Allo Protocol', link: '/misc/allo' },
        ],
      },
      {
        text: 'Technical',
        link: '/tech/',
        items: [
          { text: 'Whitepaper', link: '/tech/whitepaper' },
          { text: 'Github', link: 'https://github.com/DAOmasons' },
        ],
      },
      {
        text: 'History',
        link: '/history/overview',
        items: [
          {
            text: 'Pilot Funding Round',
            link: '/history/pilot',
          },
          {
            text: 'Pilot Vote',
            link: '/history/voting',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/daomasons' },
      { icon: 'x', link: 'https://twitter.com/grantships' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present DAO Masons',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import './custom/custom.css';`,
        },
      },
    },
  },
});
