---
path: "/work/fut"
title: "FUT Grapher"
date: "2018-01-15T12:00:00.000+08:00"
description: "A python app which suggests the best squad for Fifa Ultimate Team using graph theory."
preview_image: squad_suggestions.png
---

A python app which suggests the best squad for Fifa Ultimate Team using graph theory.

## Screenshots

![Fifa 18 Ultimate Team](./fifa18_UT.jpg)

![Squad suggestions](./squad_suggestions.png)

## Links

- [GitHub](https://github.com/WaqasAliAbbasi/FUT_Grapher)

## Background Info

The best squads in fifa ultimate team are the ones with the highest overall ratings of players and highest chemistry between each player. Chemistry between players depends on the following similarities:

1.  Same Club
2.  Same League
3.  Same Nationality

If any attribute is similar, there is a orange link. If there are two similar attributes, there is a green link. The more green and orange links there are, the higher chemistry the team has.

## Problem

Therefore, it is in the player's interest to form a team with the best overalls and the best chemistry. However it becomes really tedious to find such a squad from the long list of random players.

## Solution

I turned this into a graph problem to find the best squads by using players as nodes and edges as similarities.

Make a credentials.json with the FUT details:
`{ "email": "", "password": "", "secret": "", "platform": "" }`

Run `python squad_graph.py`

## Legend

Brown node: Goalkeeper

Yellow node: Defender

Green node: Midfielder
