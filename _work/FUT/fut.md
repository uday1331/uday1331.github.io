---
title: "FUT Grapher"
highlight: true
date: '2018-01-15T12:00:00.000+08:00'
excerpt: "A python app which suggests the best squad for Fifa Ultimate Team using graph theory."
header:
  teaser: squad_suggestions.png
sidebar:
  - title: "FUT Grapher"
    image: squad_suggestions.png
    image_alt: "Squad suggestions"
    text: A python app which suggests the best squad for Fifa Ultimate Team using graph theory.
gallery:
  - url: fifa18_UT.jpg
    image_path: fifa18_UT.jpg
    alt: "Fifa 18 Ultimate Team"
  - url: squad_suggestions.png
    image_path: squad_suggestions.png
    alt: "Squad suggestions"
---

A python app which suggests the best squad for Fifa Ultimate Team using graph theory.

{% include gallery caption="Fifa 18 Ultimate Team and Squad Suggestions" %}

## Links

* [Github](https://github.com/WaqasAliAbbasi/FUT_Grapher)

## Background Info

The best squads in fifa ultimate team are the ones with the highest overall ratings of players and highest chemistry between each player. Chemistry between players depends on the following similarities:

1.  Same Club
2.  Same League
3.  Same Nationality

If one attribute is similar there is a orange link, if there are two similar attributes then there is a green link. The more green and orange links are there, the higher chemistry the fifa ultimate team has.

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
