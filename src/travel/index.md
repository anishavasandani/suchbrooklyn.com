---
layout: page_without_description
title: Travel
excerpt: "An archive of blog posts sorted by date."
---

<p>As much as we adore Brooklyn, sometimes you need to get <em>out there</em>. Here, we'll archive our trips beyond, whether we're daytripping, glamping, weekending, or globetrotting.</p>

<ul class="post-list">
{% for post in site.categories.travel %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
