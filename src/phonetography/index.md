---
layout: page_without_description
title: Phonetography
excerpt: "An archive of blog posts sorted by date."
---

<link rel="stylesheet" href="{{ site.url }}/assets/css/justifiedgallery.css">
<script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="{{ site.url }}/assets/js/vendor/jquery.justifiedgallery.js"></script>


<p>Well, this is pretty self-explanatory. You're welcs to insta-stalk <a href="http://www.instagram.com/suchbrooklyn" target="_blank">us.</a></p>

<div class="instafeed">
{% instagram accesstokenpath:instagram_access_token.txt %}

    <a href="{{ item.link }}" target="_blank"><img src="{{ item.images.standard_resolution.url }}" /></a>
{% endinstagram %}
</div>

<script>
  $(".instafeed").justifiedGallery({'rowHeight':250});
</script>