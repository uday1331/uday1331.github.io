---
layout: archive
author_profile: true
---

{% assign sorted = site.work | sort: 'date' | reverse %} {% assign
highlight_projects = "" | split: "" %} {% for post in sorted %} {% if
post.highlight %} {% assign highlight_projects = highlight_projects | push: post
%} {% endif %} {% endfor %}

<h3 class="archive__subtitle">
  What am I up to right now?
</h3>
- [StudentBase](/work/studentbase) (A community of high school students, tutors and teachers with 10k Monthly Users and 100k Monthly Page Views)

<h3 class="archive__subtitle" style="border-bottom: 0px">
  {{ highlight_projects | size }} Highlight Past Projects
</h3>
<div
  class="grid__wrapper"
  style="border-top:1px solid #f2f3f3; padding-top:0.5em"
>
  {% for post in highlight_projects %} {% include archive-single.html
  type="grid" %} {% endfor %}
</div>
