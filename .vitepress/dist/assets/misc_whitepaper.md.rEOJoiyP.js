import{_ as e,o as a,c as t,R as i}from"./chunks/framework.XZNukU41.js";const g=JSON.parse('{"title":"Grant Ships Whitepaper","description":"","frontmatter":{},"headers":[],"relativePath":"misc/whitepaper.md","filePath":"misc/whitepaper.md"}'),o={name:"misc/whitepaper.md"},r=i(`<h1 id="grant-ships-whitepaper" tabindex="-1">Grant Ships Whitepaper <a class="header-anchor" href="#grant-ships-whitepaper" aria-label="Permalink to &quot;Grant Ships Whitepaper&quot;">​</a></h1><p><code>Vol 1.2</code><code>Nov 19 2023</code></p><h2 id="abstract" tabindex="-1">Abstract <a class="header-anchor" href="#abstract" aria-label="Permalink to &quot;Abstract&quot;">​</a></h2><p>Grant Ships is an evolutionary grants game designed to incentivize and streamline the allocation of community funding within the Arbitrum ecosystem. This document aims to provide a comprehensive understanding of the game mechanics, structural setup, and technical aspects of Grant Ships.</p><h2 id="table-of-contents" tabindex="-1">Table of Contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of Contents&quot;">​</a></h2><nav class="table-of-contents"><ul><li><a href="#abstract">Abstract</a></li><li><a href="#table-of-contents">Table of Contents</a></li><li><a href="#introduction">Introduction</a></li><li><a href="#purpose">Purpose</a></li><li><a href="#web3-grants">Web3 Grants</a></li><li><a href="#grant-ships-genesis">Grant Ships Genesis</a></li><li><a href="#how-the-game-works">How The Game Works</a></li><li><a href="#tools">Tools</a><ul><li><a href="#allo-protocol">Allo Protocol</a></li><li><a href="#push-protocol">Push Protocol</a></li></ul></li><li><a href="#players">Players</a><ul><li><a href="#delegated-arbitrum-voters">Delegated Arbitrum Voters</a></li><li><a href="#game-facilitators">Game Facilitators</a></li><li><a href="#grant-ships-crew">Grant Ships Crew</a></li><li><a href="#grant-recipients">Grant Recipients</a></li></ul></li><li><a href="#game-process">Game Process</a><ul><li><a href="#vote-modifier-module">Vote Modifier Module</a></li></ul></li><li><a href="#technical-architecture">Technical Architecture</a></li><li><a href="#legal-kyc-concerns">Legal &amp; KYC Concerns</a></li><li><a href="#funding">Funding</a></li><li><a href="#team">Team</a></li><li><a href="#roadmap">Roadmap</a></li><li><a href="#conclusion">Conclusion</a></li><li><a href="#technical-references">Technical References</a><ul><li><a href="#relevant-protocol-docs">Relevant Protocol Docs</a></li></ul></li><li><a href="#index">Index</a></li></ul></nav><hr><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>The concept of decentralized governance has evolved rapidly, leading to innovative frameworks for community engagement and resource allocation. One such advancement is Grant Ships, a game designed to improve the effectiveness and inclusivity of decentralized governance. This whitepaper outlines the architecture, core features, and unique mechanics that make Grant Ships a pioneering approach to decentralized grant allocation.</p><p>This paper will take you through the reason Grant Ships was created, the tools that are used to play the game and who plays the game. At time of writing, Grant Ships is still being developed on the implementation side and this document will take you through our development roadmap as well as our implementation plan.</p><h2 id="purpose" tabindex="-1">Purpose <a class="header-anchor" href="#purpose" aria-label="Permalink to &quot;Purpose&quot;">​</a></h2><p>The overarching goal of Grant Ships is to create a self-sustaining, community-driven plurality of grant allocation systems that operates without the need for centralized control. By incorporating gamification elements, the project aims to promote a more inclusive governance model while enhancing awareness of various initiatives within the Arbitrum ecosystem. The long-term vision is to establish a system so efficient that it can run autonomously, guided only by community inputs.</p><h2 id="web3-grants" tabindex="-1">Web3 Grants <a class="header-anchor" href="#web3-grants" aria-label="Permalink to &quot;Web3 Grants&quot;">​</a></h2><p>Web3 has consistently recognized the value and importance of grant programs, as evidenced by its enduring tradition of offering these programs to bolster the open web’s legion of enthusiastic contributors: these include open-source developers, researchers, and thought leaders. These grants have been vital in keeping the innovative spirit of open source vibrant, fostering collaboration over competition, and providing pivotal onboarding tools for expanding ecosystems.</p><p>Grants programs have always been intrinsic to the web3 community, exemplifying how blockchain protocols actively solicit project proposals that augment their ecosystems. This can range from intricate technical enhancements to community-driven content such as podcasts and newsletters. The primary aim remains constant: to fortify web3, making it more resilient, collaborative, and capable of inspiring other protocols. Notable among these grants programs are the Uniswap Grants Program, which commenced following a policy proposal in 2020 advocating for recurring grants as a growth catalyst; Gitcoin Grants, which introduced the world to Quadratic Voting whith matching pools which have had a huge impact in the growth of the ecosystem, and grant DAOs such as Meta Cartel which consists of web3 enthuiasts who choose to pool some funds and support projects through grants.</p><p>Grant Ships&#39; designers have watched and been closely involved in the space over the last few years. We have touched on many of the points that work in the grant landscape and have made improvements in order to find the project that offer the highest impact for the Arbitrum ecosystem and DAO.</p><h2 id="grant-ships-genesis" tabindex="-1">Grant Ships Genesis <a class="header-anchor" href="#grant-ships-genesis" aria-label="Permalink to &quot;Grant Ships Genesis&quot;">​</a></h2><p>Grant Ships began with a request from Disruption Joe to enter a <a href="https://jokerace.xyz/contest/arbitrumone/0xc1AD5102A357049f3e698248731e6A86f0F3a73d" target="_blank" rel="noreferrer">Jokerace</a> in which Grant Ships was able to take home first prize. This eventually led to the opportunity to build out Grant Ships and beta test it on with an initial grants round.</p><h2 id="how-the-game-works" tabindex="-1">How The Game Works <a class="header-anchor" href="#how-the-game-works" aria-label="Permalink to &quot;How The Game Works&quot;">​</a></h2><p>This section describes the basic flow of the game. The rest of the document will flesh this section out in greater technical detail as to how this process is executed.</p><p>The game begins during the Season 1 pre-season. During this time initial facilitators and ships will be formed. A call will go out to fill these positions, with final decision on team formation being decided via DAO governance.</p><p>Potential ship operators will be given opptunity to make their case as to why they will be able to effectively provide impactful grant distribution. Winning ship operators will be given the opportunity to design a grant program of their own, using tools of their choice.</p><p>When the season begins, the total amount allocated to Grant Ships will be evenly distributed to each Ships allocation pool. These funds will remain in the pool until grants are awarded.</p><p>As Ships start awarding grants, the ships operators will enter recipients metadata and funding total on chain. Facilitators will then review the funding request as a final security check before calling the distribute function, which will distribute the requested funds from the ships allocation pool.</p><p>As facilitators are so closely involved in the final distribution of funds, they are able to see if there are any problems during funding distributions. If there are minor problems the facilitators may issue warnings, which are correctable errors and shoild not effect the Grant Ships impact scores.</p><p>If there are numerous problems or problems so egracious that the facilitator feels funding for the ship should be stopped, the facilitator may issue a red card. If they do so, they will pause calling reject all further funding requests from the pool.</p><p>The facilitatrs will then call an emergency vote, in which they will present all available evidence as to why all further allocations to the pool are to end and the ships right to distribute grants is revoked.</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>__ _        _       _           </span></span>
<span class="line"><span>/ _| | _____| |_ ___| |__  _   _ </span></span>
<span class="line"><span>\\ \\| |/ / _ | __/ __| &#39;_ \\| | | |</span></span>
<span class="line"><span>_\\ |   |  __| || (__| | | | |_| |</span></span>
<span class="line"><span>\\__|_|\\_\\___|\\__\\___|_| |_|\\__, |</span></span>
<span class="line"><span>                           |___/</span></span></code></pre></div><p>Upon distribution of funds, the grant ship operators will then issue a hypercert to themselves and to the project. At the end of the season the DAO will be given the opptunity to take part in an Impact signalling session in which the DAO will apply impact scores on each grant awarded during the season. These scores will be added to the metadata of the issued hypercerts.</p><p>Once all of the impact is tallied an impact per dollar awarded score will be established for each ship. The facilitators will then use this score and prepare a report for the DAO to consider the performance of each Ship in relation to impact.</p><p>During the next season, as ship funding allocation is being considered, the allocations should favour the ships that have provided the most impact. Very low impact scores could even result in a total reduction of funding and thereby consider the ship out of service. This can either open the door for new operators to take over the ship or for an entirely new ship to form and start building their own reputation.</p><p>It may also be the case (and in fact ideally will be the case) that new ships are formed. higher performing ships may end up with a lower allocation than previous seasons if this is the case. What is important, is that ship will recieve a higher percentage of available funding for all of the ships.</p><h2 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-label="Permalink to &quot;Tools&quot;">​</a></h2><p>The following are the tools used to integrate with the game and the reason we use them. The Grant Ships front end</p><h3 id="allo-protocol" tabindex="-1">Allo Protocol <a class="header-anchor" href="#allo-protocol" aria-label="Permalink to &quot;Allo Protocol&quot;">​</a></h3><ul><li>[ ] TODO</li></ul><h3 id="push-protocol" tabindex="-1">Push Protocol <a class="header-anchor" href="#push-protocol" aria-label="Permalink to &quot;Push Protocol&quot;">​</a></h3><ul><li>[ ] TODO</li></ul><h2 id="players" tabindex="-1">Players <a class="header-anchor" href="#players" aria-label="Permalink to &quot;Players&quot;">​</a></h2><p>The game involves multiple actors including Delegated Arbitrum Voters, Game Facilitators, Grant Ships, and Grant Recipients. Each actor plays a unique role.</p><h3 id="delegated-arbitrum-voters" tabindex="-1">Delegated Arbitrum Voters <a class="header-anchor" href="#delegated-arbitrum-voters" aria-label="Permalink to &quot;Delegated Arbitrum Voters&quot;">​</a></h3><ul><li>Vote to elect Grant Ship Facilitators</li><li>Vote to elect Grant Ship Operators</li><li>Take part in Impact Signals</li><li>Votes on distribution proposals prepared by facilatators.</li></ul><h3 id="game-facilitators" tabindex="-1">Game Facilitators <a class="header-anchor" href="#game-facilitators" aria-label="Permalink to &quot;Game Facilitators&quot;">​</a></h3><ul><li>Create an Allo Profile</li><li>Create a pool with <strong>GrantShips</strong> strategy.</li><li>Select team to operate a ship by calling <code>allocate()</code></li><li>Can pull a ships funding by calling <code>withdraw</code></li><li>Reviews milestone metadata, can reject a milestone by calling <code>_rejectMilestone</code></li><li>Distributes funds, in sequence by calling <code>distribute()</code>, which calls <code>_distribute</code></li><li><code>distribute()</code> sends funds to the ship <strong>need to get it to the project not the ship</strong></li><li>Issues Yellow Cards</li><li>Issue Red Cards</li><li>Prepares Season End Report</li><li>Prepares distribution proposal for subsequent season</li></ul><h3 id="grant-ships-crew" tabindex="-1">Grant Ships Crew <a class="header-anchor" href="#grant-ships-crew" aria-label="Permalink to &quot;Grant Ships Crew&quot;">​</a></h3><ul><li>calls <code>submitUpcomingMilestone</code> to add a <code>Milestone</code> to the pool.</li><li>adds projects as recipients</li><li>Issues hypercerts</li></ul><h3 id="grant-recipients" tabindex="-1">Grant Recipients <a class="header-anchor" href="#grant-recipients" aria-label="Permalink to &quot;Grant Recipients&quot;">​</a></h3><p>The Game is designed minimize any design limitations on Grant Ships and as such, very little is to be said about who are most likely the most important part of this design. As such, each ship will, as part of their design, attempt to provide grants to projects or individuals that are able to provide impact to the Arbitrum ecosystem.</p><p>It is therefore incumbent upon recipients to ensure they projects they are applying to have funded fall within the areas of impact most desired by the DAO.</p><h2 id="game-process" tabindex="-1">Game Process <a class="header-anchor" href="#game-process" aria-label="Permalink to &quot;Game Process&quot;">​</a></h2><h3 id="vote-modifier-module" tabindex="-1">Vote Modifier Module <a class="header-anchor" href="#vote-modifier-module" aria-label="Permalink to &quot;Vote Modifier Module&quot;">​</a></h3><h2 id="technical-architecture" tabindex="-1">Technical Architecture <a class="header-anchor" href="#technical-architecture" aria-label="Permalink to &quot;Technical Architecture&quot;">​</a></h2><ul><li>[ ] TODO</li></ul><h2 id="legal-kyc-concerns" tabindex="-1">Legal &amp; KYC Concerns <a class="header-anchor" href="#legal-kyc-concerns" aria-label="Permalink to &quot;Legal &amp; KYC Concerns&quot;">​</a></h2><p>The following players in the game will be required to KYC.</p><ul><li>All facilitators, as they will hold the most responsibilty in the game.</li><li>Ships captains, there must be one active ship member that has gone through KYC. This person will be considered the ship captain. A ship may choose to elect more than one captain, as long as they have also gone through KYC. The captain will be the person given responsibilty to add projects to the registry along with the required metadata.</li><li>Grant recipients must have one member of their team perform KYC and this person will hold the address that funds will be distributed to. A multisig safe would be fine, as long as the KYC&#39;d individual is a signer on the safe.</li></ul><h2 id="funding" tabindex="-1">Funding <a class="header-anchor" href="#funding" aria-label="Permalink to &quot;Funding&quot;">​</a></h2><p>Funding for Grant Ships, including funding for Grant distributions, comes from funds distributed to Plurality Labs, by Arbitrum DAO. Pluarality has a mandate to build a &quot;Pluarality&quot; of grants programs for the Arbitrum ecosystem. Grant Ships is one of these programs and as such has been indiretly funded by Arbitrum DAO.</p><h2 id="team" tabindex="-1">Team <a class="header-anchor" href="#team" aria-label="Permalink to &quot;Team&quot;">​</a></h2><ul><li>[ ] TODO</li></ul><h2 id="roadmap" tabindex="-1">Roadmap <a class="header-anchor" href="#roadmap" aria-label="Permalink to &quot;Roadmap&quot;">​</a></h2><ul><li><strong>June 2023</strong> (check the dates) Entered and Won Jokerace to build a Grants program.</li><li><strong>Sept 2023</strong> Began discussions with Pluarilty Labs to build out Grant Ships</li><li><strong>Oct 2023</strong> Began prework and creted formal project proposal.</li><li><strong>November 2023</strong> (Present) Funding to build game is approved and building begins.</li><li><strong>Novmember - Decemer 2023</strong> Milestone 1 of building <ul><li>Technical Treatment</li><li>Wireframes</li><li>Initial Archtecture</li><li>Hype Site</li><li>Marketing Plan</li><li>Social Media established</li><li>Whitepaper published</li></ul></li><li><strong>December - January 2024</strong> Milestone 2 <ul><li>Dashboard MVP development</li><li>Rulebook completion</li><li>Marketing Plan initiated <ul><li>Spaces</li><li>Podcasts</li><li>Publishing</li><li>Recruitment of Grant Ship Operators</li></ul></li></ul></li><li><strong>January - February Milestone 3</strong><ul><li>Completion of Grant Ships Dashboard app MVP</li><li>Training Grant Ships <ul><li>Grant Ship operators will recieve training in all the tools they are required to interact with in the game.</li></ul></li><li>Grant Ships design their ships.</li><li>KYC for ship opeator</li><li>KYC for facilitators</li><li>Beta Season marketing campaign</li></ul></li><li><strong>February - March Milestone 4</strong><ul><li>Beta Season <ul><li>Funds allocated equally to three inital Grant Ships</li><li>Grant Ships execute their distribution plans.</li><li>Recipients entered into registery after al requirements met (eg KYC, milestone plans, reporting plans, etc.)</li><li>Funds distributed to projects.</li><li>Hypercerts Issued</li></ul></li></ul></li><li><strong>March - April 2024</strong><ul><li>Impact Signalling session. <ul><li>Impact scores assigned to hypercerts</li></ul></li><li>Facilitators prepare and publish season report detailing projects that recieved funding and the impact they have had for Arbitrum. This report will also detailthe impact each ship provided as a result of the grants they awarded.</li><li>Grant Ships improvment report. <ul><li>Grant Ships developers will prepare a report for areas of improvement for the game.</li></ul></li></ul></li><li><strong>April - June 2024</strong><ul><li>Grant Ships Improvement and Alpha release</li><li>Proposal to Fund Alpha Season</li></ul></li><li><strong>July - Aug 2024</strong><ul><li>Season Alpha Season (repeats many tasks found in beta season roadmap)</li></ul></li><li><strong>September - October</strong><ul><li>Final Development and Improvment cycle</li></ul></li><li><strong>November - December 2024</strong><ul><li>Season 1 preseason</li></ul></li><li><strong>January - February 2025</strong><ul><li>Season one</li><li>After this, with the project fully established and tested we anticpate a season can have a complete turnaround in a 3 month cycle, enabling the DAO to hold a Grants round every quarter.</li></ul></li></ul><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><ul><li>[ ] TODO</li></ul><h2 id="technical-references" tabindex="-1">Technical References <a class="header-anchor" href="#technical-references" aria-label="Permalink to &quot;Technical References&quot;">​</a></h2><h3 id="relevant-protocol-docs" tabindex="-1">Relevant Protocol Docs <a class="header-anchor" href="#relevant-protocol-docs" aria-label="Permalink to &quot;Relevant Protocol Docs&quot;">​</a></h3><ul><li><a href="https://docs.allo.gitcoin.co/" target="_blank" rel="noreferrer">Allo Docs</a></li></ul><h2 id="index" tabindex="-1">Index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;Index&quot;">​</a></h2>`,68),n=[r];function l(s,h,c,p,d,u){return a(),t("div",null,n)}const f=e(o,[["render",l]]);export{g as __pageData,f as default};