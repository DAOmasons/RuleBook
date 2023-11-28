import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Grant Ships Rule Book",
  description: "An Evolutionary Grants Game",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/rocketgrad3.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'How To Play', link: '/how-to-play/' }
    ],

    sidebar: [
      {
        text: 'How To Play',
        link: '/how-to-play/',
        items: [
          { text: 'Delegated Arbitrum Voters', link: 'how-to-play/as-a-dao-mem' },
          { text: 'Grant Ship Operators', link: 'how-to-play/as-a-gs-op' },
          { text: 'Grantees', link: 'how-to-play/as-a-grantee' },
          { text: 'Game Facilitators', link: 'how-to-play/as-a-faci' }
        ]
      },
      {
        text: 'FAQ',
        link: '/faqs/grantShipsFAQ'
      },
      {
        text: 'Misc',
        link: '/misc/',
        items: [
          { text: 'Team', link: '/misc/team' },
          { text: 'Whitepaper', link: '/misc/whitepaper' },
          { text: 'Sample Tools', link: '/tools/',
            items: [
              { text: 'DAOhaus', link: '/tools/daohaus' },
              { text: 'Gitcoin Grant Stack', link: '/tools/grantStack' },
              { text: 'Jokerace', link: 'tools/jokerace' },
          ]}
        ]
      }    
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/daomasons' },
      { icon: 'x', link: 'https://twitter.com/grantships'}
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present DAO Masons'
    }
  }
})
