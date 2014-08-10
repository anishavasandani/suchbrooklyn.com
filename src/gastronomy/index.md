---
layout: page_without_description
title: Gastronomy
excerpt: "An archive of blog posts sorted by date."
---

<p>gas·tron·o·my: the practice or art of choosing, cooking, &amp; eating <strong>good</strong> food. Expect: insightful restaurant reviews and tasteful entertaining hacks.</p>

<ul class="post-list">
{% for post in site.categories.gastronomy %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
