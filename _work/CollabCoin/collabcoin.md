---
title: "CollabCoin"
excerpt: "A decentralized crowdsourced investment fund."
header:
  teaser: workflow.png
sidebar:
  - title: "CollabCoin"
    image: logo.png
    image_alt: "Logo"
    text: A decentralized crowdsourced investment fund.
gallery:
  - url: workflow.png
    image_path: workflow.png
    alt: "Workflow"
  - url: execution.png
    image_path: execution.png
    alt: "Execution"
  - url: technical.png
    image_path: technical.png
    alt: "Technical Architecture"
  - url: market.png
    image_path: market.png
    alt: "Market"
---

A decentralized crowdsourced investment fund.

{% include gallery caption="CollabCoin from different perspectives." %}

#### Links

* [Github](https://github.com/waqasaliabbasi/CollabCoin)

#### Awards

* Runner-up: Shanghai Commercial Bank Fintech Hackathon Grand Finals (50,000 RMB)
* Winner: Shanghai Commercial Bank Fintech Hackathon Hong Kong Round (20,000 HKD)

#### Summary

The flow charts describing the overall application is as follows:

<p align="center">
  <img src="workflow.png" width="800"/>
</p>

The product aims at making a Market-beating portfolio by

1. Crowd-sourcing insights and capital
2. Mix of Product to Mix of Talent

Our TWO Target Groups

People with investment insights= Player
People looking for investment options= Putter

After the trades have been executed and the players have been ranked according to our <i> decentralised algorithm </i> the player with a higher competency receives higher money to invest in the shares further and is incentivised with more collabcoins.

<p align="center">
  <img src="execution.png" width="800"/>
</p>

#### Techincal Implementation

The workflow of the whole system is based on BigchainDB blockchain and it has been executed as follows:

<p align="center">
  <img src="/Technical.png" width="800"/>
</p>

For the system we have divided the implementation in two parts:

##### Backend

Under the backend folder CollabCoin/Backend/Tier 1 BigChainDB:Blockchain/
Run script.sh

This starts the docker image running the bigchainDB blockchain instance and makes use of sample data to generate the competency based ranking for players.

##### Frontend

The frontend can be deployed by cloning the following repository using `git clone https://github.com/WaqasAliAbbasi/CollabCoin.git`.
Then run the Meteor based web app using the docker file at CollabCoin/Frontend/Dockerfile-dev </br>
Finally run the meteor server using metor server with docker file at CollabCoin/Frontend/Dockerfile

<b> You have the platform running ! </b>

#### Business Model

Why CollabCoin works?

<p align="center">
  <img src="market.png" width="800"/>
</p>

###### As a Putter

1. No more fuss when investing
2. No more double charging
3. Your capital is taken care of by the best-performing people
4. Hedged risk from a diverse profile

###### As a Bank

1. Enter as a Putter & gain profit
2. Enter as a Broker & gain profit
3. Identify promising Players for recruitment
4. ⬆ Lending opportunity
5. Financial education ➡ generate business opportunities for own financial services

###### As a Player

1. Earn commission with top-performing portfolios
2. Leverage public capital
3. Showcase their investment strategies for job prospect
4. ⬆ Competency Level
5. ⬆ Reputation
