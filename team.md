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
    avatar: 'https://i.imgur.com/9GPXxLy.jpg',
    name: 'DAO Masons',
    title: 'Bespoke Web3 solutions. Inspired by game design.',
    links: [
      { icon: 'github', link: 'https://github.com/daomasons' },
      { icon: 'x', link: 'https://twitter.com/daomasons' },
      { icon: 'discord', link: 'https://discord.gg/QNGH4Uxa8A'},
    ]
  },
  {
    avatar: 'https://i.imgur.com/ox1dfYO.png',
    name: 'Chris (boiler)',
    title: 'Project Manager',
    links: [
      { icon: 'github', link: 'https://github.com/boilerrat' },
      { icon: 'x', link: 'https://twitter.com/boilerrat' },
    ]
  },
    {
    avatar: 'https://i.imgur.com/f0d756c.png',
    name: 'Jord',
    title: 'Engineer Lead',
    links: [
      { icon: 'github', link: 'https://github.com/jordanlesich' },
      { icon: 'x', link: 'https://twitter.com/JordanLesich' },
    ]
  },
    {
    avatar: 'https://i.imgur.com/fr7EFLd.png',
    name: 'Matt (UI369)',
    title: 'Product Manager',
    links: [
      { icon: 'github', link: 'https://github.com/boilerrat' },
      { icon: 'x', link: 'https://github.com/UI369' },
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
      Meet DAO Masons, the team that developed Grant Ships!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>