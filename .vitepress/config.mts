import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Grant Ships Rule Book",
  description: "An Evolutionary Grants Game",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/rocketgrad.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'How To Play', link: '/how-to-play/' }
    ],

    sidebar: [
      {
        text: 'How To Play',
        link: '/how-to-play/',
        items: [
          { text: 'As A DAO Member', link: 'how-to-play/as-a-dao-mem' },
          { text: 'As A Grant Ship Operator', link: 'how-to-play/as-a-gs-op' },
          { text: 'As A Grantee', link: 'how-to-play/as-a-grantee' },
          { text: 'As A Facilitator', link: 'how-to-play/as-a-faci' }
        ]
      },
      {
        text: 'FAQs',
        link: '/faqs/',
        items: [
          { text: 'Reasoning', link: '/faqs/reasoning' },
          { text: 'Grant Ships FAQs', link: '/faqs/grantShipsFAQ' }
        ]
      },
      {
        text: 'Misc',
        link: '/misc/',
        items: [
          { text: 'Team', link: '/misc/team' },
          { text: 'Whitepaper', link: '/misc/whitepaper' },
          { text: 'Sample Tools', link: '/tools/',
            items: [
              { text: 'DAOhaus', link: '/tools/daohaus'},
          ]}
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/daomasons' },
      { icon: 'x', link: 'https://twitter.com/grantships'}
    ]
  }
})
