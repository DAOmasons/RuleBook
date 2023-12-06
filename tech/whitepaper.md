# Grant Ships Whitepaper

`Vol 1.2`
`Nov 19 2023`

## Abstract

Grant Ships is an evolutionary grants game designed to incentivize and streamline the allocation of community funding within the Arbitrum ecosystem. This document aims to provide a comprehensive understanding of the game mechanics, structural setup, and technical aspects of Grant Ships.

## Table of Contents

[[toc]]

---

## Introduction

The concept of decentralized governance has evolved rapidly, leading to innovative frameworks for community engagement and resource allocation. One such advancement is Grant Ships, a game designed to improve the effectiveness and inclusivity of decentralized governance. This whitepaper outlines the architecture, core features, and unique mechanics that make Grant Ships a pioneering approach to decentralized grant allocation.

This paper will take you through the reason Grant Ships was created, the tools that are used to play the game and who plays the game. At time of writing, Grant Ships is still being developed on the implementation side and this document will take you through our development roadmap as well as our implementation plan.

## Purpose

The overarching goal of Grant Ships is to create a self-sustaining, community-driven plurality of grant allocation systems that operates without the need for centralized control. By incorporating gamification elements, the project aims to promote a more inclusive governance model while enhancing awareness of various initiatives within the Arbitrum ecosystem. The long-term vision is to establish a system so efficient that it can run autonomously, guided only by community inputs.

## Web3 Grants

Web3 has consistently recognized the value and importance of grant programs, as evidenced by its enduring tradition of offering these programs to bolster the open web’s legion of enthusiastic contributors: these include open-source developers, researchers, and thought leaders. These grants have been vital in keeping the innovative spirit of open source vibrant, fostering collaboration over competition, and providing pivotal onboarding tools for expanding ecosystems.

Grants programs have always been intrinsic to the web3 community, exemplifying how blockchain protocols actively solicit project proposals that augment their ecosystems. This can range from intricate technical enhancements to community-driven content such as podcasts and newsletters. The primary aim remains constant: to fortify web3, making it more resilient, collaborative, and capable of inspiring other protocols. Notable among these grants programs are the Uniswap Grants Program, which commenced following a policy proposal in 2020 advocating for recurring grants as a growth catalyst; Gitcoin Grants, which introduced the world to Quadratic Voting whith matching pools which have had a huge impact in the growth of the ecosystem, and grant DAOs such as Meta Cartel which consists of web3 enthuiasts who choose to pool some funds and support projects through grants.

Grant Ships' designers have watched and been closely involved in the space over the last few years. We have touched on many of the points that work in the grant landscape and have made improvements in order to find the project that offer the highest impact for the Arbitrum ecosystem and DAO.

## Grant Ships Genesis

Grant Ships began with a request from Disruption Joe to enter a [Jokerace](https://jokerace.xyz/contest/arbitrumone/0xc1AD5102A357049f3e698248731e6A86f0F3a73d) in which Grant Ships was able to take home first prize. This eventually led to the opportunity to build out Grant Ships and beta test it on with an initial grants round.

## How The Game Works

This section describes the basic flow of the game. The rest of the document will flesh this section out in greater technical detail as to how this process is executed.

The game begins during the Season 1 pre-season. During this time initial facilitators and ships will be formed. A call will go out to fill these positions, with final decision on team formation being decided via DAO governance.

Potential ship operators will be given opportunity to make their case as to why they will be able to effectively provide impactful grant distribution. Winning ship operators will be given the opportunity to design a grant program of their own, using tools of their choice.

When the season begins, the total amount allocated to Grant Ships will be evenly distributed to each Ships allocation pool. These funds will remain in the pool until grants are awarded.

As Ships start awarding grants, the ships operators will enter recipients metadata and funding total on chain. Facilitators will then review the funding request as a final security check before calling the distribute function, which will distribute the requested funds from the ships allocation pool.

As facilitators are so closely involved in the final distribution of funds, they are able to see if there are any problems during funding distributions. If there are minor problems the facilitators may issue warnings, which are correctable errors and should not effect the Grant Ships impact scores.

If there are numerous problems or problems so egregious that the facilitator feels funding for the ship should be stopped, the facilitator may issue a red card. If they do so, they will pause calling reject all further funding requests from the pool.

The facilitators will then call an emergency vote, in which case they will present all available evidence as to why all further allocations to the pool are to end and the ship's right to distribute grants is revoked.

Upon distribution of funds, the Grant Ship operators will receive an onchain attestation clarifying the transaction. At the end of the season the DAO will be given the opportunity to take part in an Impact signalling session in which the DAO will apply impact scores on each grant awarded during the season. These scores will be added to the metadata of the issued attestation.

Once all of the impact is tallied, an impact per dollar awarded score will be established for each ship. The facilitators will then use this score and prepare a report for the DAO to consider the performance of each Ship in relation to impact.

During the next season, as ship funding allocation is being considered, the allocations will favour the ships that have provided the most impact. Very low impact scores could even result in a total reduction of funding and thereby consider the ship out of service. This can either open the door for new operators to take over the ship or for an entirely new ship to form and start building their own reputation.

It may also be the case (and in fact ideally will be the case) that new ships are formed. Higher performing ships may end up with a lower allocation than previous seasons if this is the case. What is important, is that ship will receive a higher percentage of available funding for all of the ships.

## Tools

The following are the tools used to integrate with the game and the reason we use them. The Grant

### Allo Protocol

- [ ] TODO

### Push Protocol

- [ ] TODO

## Players

The game involves multiple actors including Delegated Arbitrum Voters, Grant Ships, and Grant Recipients and Game Facilitators. Each actor plays a unique role.

### Delegated Arbitrum Voters

- Vote to elect Grant Ship Facilitators
- Vote to elect Grant Ship Operators
- Take part in Impact Signals
- Votes on distribution proposals prepared by facilitators.

### Game Facilitators

- Create an Allo Profile
- Create a pool with **GrantShips** strategy.
- Select team to operate a ship by calling `allocate()`
- Can pull a ships funding by calling `withdraw`
- Reviews milestone metadata, can reject a milestone by calling `_rejectMilestone`
- Distributes funds, in sequence by calling `distribute()`, which calls `_distribute`
- `distribute()` sends funds to the ship
  **need to get it to the project not the ship**
- Issues Yellow Cards
- Issue Red Cards
- Prepares Season End Report
- Prepares distribution proposal for subsequent season

### Grant Ships Crew

- calls `submitUpcomingMilestone` to add a `Milestone` to the pool.
- adds projects as recipients
- Issues hypercerts

### Grant Recipients

The Game is designed minimize any design limitations on Grant Ships and as such, very little is to be said about who are most likely the most important part of this design. As such, each ship will, as part of their design, attempt to provide grants to projects or individuals that are able to provide impact to the Arbitrum ecosystem.

It is therefore incumbent upon recipients to ensure they projects they are applying to have funded fall within the areas of impact most desired by the DAO.

## Game Process

### Vote Modifier Module

## Technical Architecture

- [ ] TODO

## Legal & KYC Concerns

The following players in the game will be required to KYC.

- All facilitators, as they will hold the most responsibilty in the game.
- Ships captains, there must be one active ship member that has gone through KYC. This person will be considered the ship captain. A ship may choose to elect more than one captain, as long as they have also gone through KYC. The captain will be the person given responsibilty to add projects to the registry along with the required metadata.
- Grant recipients must have one member of their team perform KYC and this person will hold the address that funds will be distributed to. A multisig safe would be fine, as long as the KYC'd individual is a signer on the safe.

## Funding

Funding for Grant Ships, including funding for Grant distributions, comes from funds distributed to Plurality Labs, by Arbitrum DAO. Pluarality has a mandate to build a "Pluarality" of grants programs for the Arbitrum ecosystem. Grant Ships is one of these programs and as such has been indiretly funded by Arbitrum DAO.

## Team

- [ ] TODO

## Roadmap

- **June 2023** (check the dates) Entered and Won Jokerace to build a Grants program.
- **Sept 2023** Began discussions with Pluarilty Labs to build out Grant Ships
- **Oct 2023** Began prework and creted formal project proposal.
- **November 2023** (Present) Funding to build game is approved and building begins.
- **Novmember - Decemer 2023** Milestone 1 of building
  - Technical Treatment
  - Wireframes
  - Initial Archtecture
  - Hype Site
  - Marketing Plan
  - Social Media established
  - Whitepaper published
- **December - January 2024** Milestone 2
  - Dashboard MVP development
  - Rulebook completion
  - Marketing Plan initiated
    - Spaces
    - Podcasts
    - Publishing
    - Recruitment of Grant Ship Operators
- **January - February Milestone 3**
  - Completion of Grant Ships Dashboard app MVP
  - Training Grant Ships
    - Grant Ship operators will recieve training in all the tools they are required to interact with in the game.
  - Grant Ships design their ships.
  - KYC for ship opeator
  - KYC for facilitators
  - Beta Season marketing campaign
- **February - March Milestone 4**
  - Beta Season
    - Funds allocated equally to three inital Grant Ships
    - Grant Ships execute their distribution plans.
    - Recipients entered into registery after al requirements met (eg KYC, milestone plans, reporting plans, etc.)
    - Funds distributed to projects.
    - Hypercerts Issued
- **March - April 2024**
  - Impact Signalling session.
    - Impact scores assigned to hypercerts
  - Facilitators prepare and publish season report detailing projects that recieved funding and the impact they have had for Arbitrum. This report will also detailthe impact each ship provided as a result of the grants they awarded.
  - Grant Ships improvment report.
    - Grant Ships developers will prepare a report for areas of improvement for the game.
- **April - June 2024**
  - Grant Ships Improvement and Alpha release
  - Proposal to Fund Alpha Season
- **July - Aug 2024**
  - Season Alpha Season (repeats many tasks found in beta season roadmap)
- **September - October**
  - Final Development and Improvment cycle
- **November - December 2024**
  - Season 1 preseason
- **January - February 2025**
  - Season one
  - After this, with the project fully established and tested we anticpate a season can have a complete turnaround in a 3 month cycle, enabling the DAO to hold a Grants round every quarter.

## Conclusion

- [ ] TODO

## Technical References

### Relevant Protocol Docs

- [Allo Docs](https://docs.allo.gitcoin.co/)

## Index
