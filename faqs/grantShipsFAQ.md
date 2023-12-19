# Grant Ships FAQ

## General FAQ

::: details Q. Why not just have a grants council?
A. We wanted to emphasize a pluralistic approach and avoid centralization of power. Grant Ships unbundles the functions of a traditional, centralized grants-giving committee and distributes power and responsibility among 3 groups: Grant Ships, Facilitators, and the voting community.

Together, these 3 groups have all the power and responsibility of a grants council but ensure a broader representation of perspectives and mitigate the risk of undue influence. However, because many of the relevant permissions and processes are explicitly defined, we offload the governance overhead that a grant-giving organization would normally be responsible for designing.

Grant Ships are free to focus on transparently allocating funds. Facilitators make sure the rules are being followed. Members of Arbitrum DAO need only focus on voting on their favorite Grant Ships and checking power where needed.

In essence, we aim to get the best of both worlds. We get the capture-resistance of a decentralized organization, as well as the efficiency and clarity of a traditional structure.

Here is a diagram showing how this system could be built:

Alt text

While we’re mostly agnostic about the tech that each Grant Ship uses, we believe that Hats Protocol is an ideal tool for creating the structural ‘skeleton’ for this system.
:::

::: details Q. This all seems complicated, why not do something simpler?
A. The more distributed and decentralized a system is, the more its rules must be explicitly defined. In centralized grant-giving solutions, the complexity is hidden in the internal political dynamics and decision-making processes of the responsible team.

By providing this structure for a pluralistic approach, we relieve teams of managing a major portion of the complexity by systematizing it, and then allowing them to focus on the equally complex problem domain which is “How to Give Grants Effectively.”
Hats
:::

::: details Q. Why Hats Protocol?
A. Hats Protocol allows DAOs to create organizational structures that are capture resistant, transparent, and efficient.

A Hats structure is a network of non-transferable ERC-1155 compatible tokens. They allow a DAO to build a ‘tree-shaped’ role and permission structure where each token can manage the tokens below it, but not above. Placing the ‘Top Hat’ on Arbitrum DAO ensures that the ultimate decision-making power is granted to the most decentralized player in this game.

By offloading operational authority and responsibility, Arbitrum DAO needn’t be burdened with every decision – only revoking authority when needed.

Hats also have the additional benefit of providing an easy map of all the key players involved. Facilitators, Grant Ships, and Grant Recipients could all be made visible in one live chart that sources purely from on-chain data.
:::

## Grant Ships FAQ

::: details Q: What is a Grant Ship?
A: A Grant Ship is a subDAO. It receives funds each season based on its past performance, with the expectation that it will distribute those funds as ecosystem grants.
:::

::: details Q: How are Grant Ships selected?
A: When the game first begins, teams can apply to become Grant Ships. A team of facilitators with input from the community will choose the first Grant Ship eligible crews. There will likely be a community vote to determine the first 3 Grant Ship crews. Future iterations will be fully decentralized with token votes assigning Grant Ships.
:::

::: details Q: What powers do Grant Ships have?
A: Grant Ships have 2 main powers: Distribution & Disclosure. A Grant Ship receives funding and has permission to distribute the funds. It also can make official onchain disclosures.
:::

::: details Q: What are the expectations of a Grant Ship?
A: Grant Ships can operate however they like but are expected to operate transparently and in good faith. Their onchain disclosures will turn into a Portfolio Report at the end of a funding season, which includes all funding allocations. Grant Ships are encouraged to disclose major internal decisions and announcements onchain.
:::

::: details Q: What happens if a Grant Ship doesn’t meet those expectations?
A: The Facilitator Team has the option to assigns the Grant Ship a “yellow flag” (onchain attestation detailing a rules violation) or a “red flag” (percieved bad faith) that adds context for the end-of-season Ship Ranking Vote.
:::

::: details Q: How does a Grant Ship receive funding?
A: In the first season, all Grant Ships receive an equal portion of funding from a Common Funding Pool. In the following seasons, the Grant Ship’s portion of the Funding Pool is proportional to their performance in the previous season, relative to other active Grant Ships.
:::

::: details Q: How is Grant Ship’s performance measured?
A: At the end of each season, a portfolio report is generated from all available onchain allocations and attestations. Portfolio Reports are ranked by voters during the Ship Ranking Vote at the end of each season.
:::

::: details Q: Why isn’t there a set governance structure for each Grant Ship?
A: We believe that optimal models for grant distribution have yet to be discovered. Only through experimentation and real-world tests can we begin to narrow in on what might be the best model for a decentralized grants committee.
:::

## Facilitators

::: details Q: What power does the Facilitator Team have?
A: The Facilitator Team is a group of elected individuals that collectively has permission to assign yellow and red flags to Grant Ships and initiate fund allocations as specified by Grant Ship crews. They also initiate the Ship Ranking Vote at the end of the season, finalize the results and launch a new funding round.
:::

::: details Q: What is a red flags?
A: Red flags are attestations issued by the Facilitator team. They are included as context in a Ship’s Portfolio Report. Red flags are issued to teams that appear to have ‘abandoned the ship’ or are deemed to be operating in bad faith. This flag will be included as context for voters at the end of each funding round.
:::

::: details Q: What are the responsibilities of the Facilitator Team?
A: The Facilitator Team is expected to take care of any non-automated administrative or on-chain actions required by the Rule Book. This includes initiating funds disbursal proposals at the beginning of the season and initiating the end-of-season Ship Ranking Vote. They should also note and document any inconsistencies or flaws in the Rule Book and submit them for public review at the end of the season. They are the arbiters and adjudicators of the Rule Book and are responsible for providing interpretations if clarity is lacking.
:::

::: details Q: How is the Facilitator Team selected and held accountable?
A: The Facilitator team is elected through a volunteer/nomination process followed by a Token Vote. Facilitators can be replaced at any time through an Arbitrum Token Vote. Facilitator Team attestations can be contested by any Grant Ship with a counter-attestation.
Season Cycle
:::

::: details Q: What is a Grant Season?
A: A Grant Season or Season for short, is a period of 3 months and is broken into 2 phases: the Allocation Phase and the Review Phase.
:::

::: details Q: What happens during the Allocation Phase?
A: This is the period where Grant Recipients are funded and begin producing results. This is also where most of the interaction between Grant Ships, Grant Recipients and the community occurs.
:::

::: details Q: What happens during the Review Phase?
A: This is the phase where Grant Ships submit their Portfolio Report for review by the community and Facilitators. A community vote is initiated and the results determine funding levels for the upcoming season. If a crew fails to receive a minimum threshold of support from the community, new crews are onboarded to that ship during this period.
:::

## Reports & Voting

::: details Q: What is included in a Portfolio Report?
A: The Portfolio Report should include expenses, funding allocations, and grant recipient progress. A template is provided and Facilitators review the report before initiating the token vote. Any yellow or red flags assigned by Facilitators are appended to this report.
:::

::: details Q: How does the Ship Ranking Vote work?
A: The Ship Ranking Vote is a weighted token vote that occurs at the end of each season, and is an opportunity for the Arbitrum community to rate and rank the performance of the active Grant Ships.

The Portfolio Reports from each Grant Ship are first made available for review. Then, each ARB holder has the opportunity to ‘weight’ the performance of each Grant Ship. They receive votes equal to their token count and can assign them across the Grant Ships as they see fit. The vote total received by each ship is divided by the total number of votes received by all ships. This number determines the proportion of the total funding pool they receive in the upcoming season.

Additionally, any new crew that have applied can receive votes at this time. If an active Grant Ship crew fails to receive a minimum threshold of support, they are evacuated from their ship and replaced with the highest-rated new crew.
Other Questions
:::

::: details Q: How does the Common Funding Pool receive funds?
A: Presumably these funds are being supplied by Arbitrum DAO itself, so whatever process they use to disburse funds would need to be used to fill the pool. The pool could also be opened to receive funds from other sources looking to support Arbitrum Grants. Ideally, this Common Funding Pool would be refreshed each Season automatically.
:::

::: details Q: What if this rulebook has a flaw or needs to be updated?
A: During the course of a season, the Facilitator Team is responsible for adjudicating the rules. If they see an inconsistency or flaw, they have the purview to make adjustments on the fly to maintain the integrity of the game. These issues should be documented and submitted for review at the end of each season.

Variables such as the number of Grant Ships, minimum vote thresholds, size of the Facilitator Team, and funding levels can be set depending on the needs and wants of the community when the game begins.

::: details Q: When does the game end?
A: Ideally, a token vote is held to initiate this game and then it would run indefinitely, ended only by a separate successful token vote initiative.
:::
