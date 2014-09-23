---
layout: page_without_description
title: Phonetography
excerpt: "An archive of blog posts sorted by date."
---

<p>Well, this is pretty self-explanatory. You're welcs to insta-stalk <a href="http://www.instagram.com/suchbrooklyn" target="_blank">us.</a></p>

{% instagram accesstokenpath:instagram_access_token.txt %}
  <div>
    <h3>{{ item.caption.text }}</h3>
    <img src="{{ item.images.standard_resolution.url }}" />
  </div>
{% endinstagram %}

This is the end of the Instagram feed. Now posts with the catagory phonetography are listed. This shoud probably be removed.

<ul class="post-list">
{% for post in site.categories.phonetography %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
