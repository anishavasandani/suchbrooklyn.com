---
layout: page_without_description
title: Mixology
excerpt: "An archive of blog posts sorted by date."
---

<p>We're <em>spirited</em> devotees of the mixology movement. Here, you'll find recipes for your next rooftop shindig, craftfully made with loot from the farmer's market. We'll also cover this borough's best cocktail programs.</p>

<ul class="post-list">
{% for post in site.categories.mixology %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
