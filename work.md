---
layout: page
title: My Work
permalink: /work/
feature-img: "img/color.png"
hide: true
---

Building web products is my work of choice 


{% for project in site.portfolio limit:3 %}
<div class="project">
  <div class="project-thumb">
    <a href="{{ project.url | prepend: site.baseurl }}">
      <img src="/{{ project.thumbnail-path }}" alt="{{ project.title }}"/>
    </a>
  </div>
  <div class="project-description">
    <a href="{{ project.url | prepend: site.baseurl }}"><strong>{{ project.title }}</strong></a>
    <p>{{ project.short-description }}</p>
  </div>
</div>
{% endfor %}
