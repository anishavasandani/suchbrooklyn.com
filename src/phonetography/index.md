---
layout: page_without_description
title: Phonetography
excerpt: "An archive of blog posts sorted by date."
---

{% instagram accesstokenpath:instagram_access_token.txt %}
  <div>
    <h3>{{ item.caption.text }}</h3>
    <img src="{{ item.images.standard_resolution.url }}" />
  </div>
{% endinstagram %}

<ul class="post-list">
{% for post in site.categories.phonetography %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
