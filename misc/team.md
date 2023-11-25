---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/daomasonslogo250.jpg',
    name: 'DAO Masons',
    title: 'Bespoke Web3 Solutions',
    links: [
      { icon: 'github', link: 'https://github.com/daomasons' },
      { icon: 'x', link: 'https://twitter.com/daomasons' },
      { icon: 'discord', link: 'https://discord.gg/QNGH4Uxa8A'}
    ]
  },
  {
    avatar: '/boiler.png',
    name: 'Chris (boiler)',
    title: 'Project Manager',
    links: [
      { icon: 'github', link: 'https://github.com/boilerrat' },
      { icon: 'x', link: 'https://twitter.com/boilerrat' }
    ]
  },
  {
    avatar: '/jord.png',
    name: 'Jord',
    title: 'Lead Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/jordanlesich' },
      { icon: 'x', link: 'https://twitter.com/JordanLesich' }
    ]
  },
  {
    avatar: '/ui.png',
    name: 'Matt (UI269)',
    title: 'Product Manager',
    links: [
      { icon: 'github', link: 'https://github.com/UI369' },
      { icon: 'x', link: 'https://twitter.com/UI_369' }
    ]
  },      
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Meet DAO Masons, the DAO that developed Grant Ships!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
