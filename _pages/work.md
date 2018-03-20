---
layout: archive
permalink: /work/
title: "Projects"
author_profile: true
---

<div class="grid__wrapper">
  {% for post in site.work %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
