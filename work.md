---
layout: page
title: My Work
permalink: /work/
feature-img: "img/color.png"
---

Please explore some of my work below. In addition, I have [years of experience]({{ site.theme.linkedin }}) with digital strategy and web project management both within organizations and as an agency project manager. I'd love to talk about how we can collaborate. Please [email me](mailto:alex@abcreations.co) or send a message through my [contact page](/contact).

## Case Studies

{% for project in site.portfolio %}
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