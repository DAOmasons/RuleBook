import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Grant Ships Rule Book",
  description: "An Evolutionary Grants Game",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'How To Play',
        items: [
          { text: 'As A Facilitator', link: '/markdown-examples' },
          { text: 'As A Grantee', link: '/api-examples' }
        ]
      },
      {
        text: 'FAQs',
        items: [
          { text: 'Reasoning', link: '/markdown-examples' },
          { text: 'Grant Ships FAQs', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
