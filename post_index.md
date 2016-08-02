---
layout: page
title: Blog Posts
permalink: /blog_posts/
feature-img: "img/color.png"
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>