import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Grant Ships Rule Book",
  description: "An Evolutionary Grants Game",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/rocketgrad3.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/misc/about" },
      { text: "How To Play", link: "/how-to-play/" },
      { text: "App", link: "https://app.grantships.fun" },
    ],

    sidebar: [
      {
        text: "About Grant Ships",
        link: "/about/about",
        items: [
          {
            text: "Overview",
            link: "/about/overview",
          },
          {
            text: "Pilot Funding Round",
            link: "/about/beta",
          },
          {
            text: "Voting",
            link: "/about/voting",
          },
        ],
      },
      {
        text: "How To Play",
        link: "/how-to-play/",
        items: [
          {
            text: "Voters",
            link: "how-to-play/as-a-dao-mem",
          },
          { text: "Grant Ship Operators", link: "how-to-play/as-a-gs-op" },
          { text: "Project Managers", link: "how-to-play/as-a-project" },
          { text: "Game Facilitators", link: "how-to-play/as-a-faci" },
        ],
      },
      {
        text: "How To Get Involved",
        link: "/how-to-get-involved/",
        items: [
          {
            text: "Apply to Operate a Ship",
            link: "how-to-get-involved/apply",
          },
          {
            text: "Apply for a Grant",
            link: "how-to-get-involved/project",
          },
          {
            text: "Grant Ship Operator Training Program",
            link: "how-to-get-involved/operatortraining",
          },
        ],
      },
      {
        text: "FAQ",
        link: "/faqs/grantShipsFAQ",
      },
      {
        text: "Misc",
        link: "/misc/",
        items: [
          { text: "Team", link: "/misc/team" },
          { text: "Grant Ships Links", link: "/misc/links" },
          { text: "Hats Protocol", link: "/misc/hats" },
          { text: "Compliance Policy", link: "/misc/compliance" },
          { text: "Making an Attestation", link: "/misc/attestation" },
        ],
      },
      {
        text: "Sample Tools",
        link: "/tools/",
        items: [
          { text: "DAOhaus", link: "/tools/daohaus" },
          { text: "Gitcoin Grant Stack", link: "/tools/grantStack" },
          { text: "Jokerace", link: "tools/jokerace" },
        ],
      },
      {
        text: "Technical",
        link: "/tech/",
        items: [
          { text: "Whitepaper", link: "/tech/whitepaper" },
          { text: "Request Registry Contract", link: "/tech/RegistryReadme" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/daomasons" },
      { icon: "x", link: "https://twitter.com/grantships" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present DAO Masons",
    },
  },
});
