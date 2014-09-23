---
layout: post
title: "Gastronomy Post"
comments: true
modified:
categories:
excerpt:
tags: []
image:
  feature:
date: 2014-08-08T15:39:55-04:00

suggested_tweet:
  url:                  'http://suchbrooklyn.com/gastronomy/'
  via:                  'suchbrooklyn'
  text:                 'hey hey'
  hashtags:             ['suchbrooklyn']
---

You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

## Sample Heading

### Sample Heading 2

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll]:    http://jekyllrb.com

<!-- Suggested Tweet -->
<div class="entry-meta-suggested-tweet">
  <h3 class="suggested-tweet-title">Sharing is Caring</h3>
  <a href="{% suggested_tweet %}" class="suggested-tweet-bubble" target="_blank">
    {% if page.suggested_tweet.text != empty %}
      <span class="suggested-tweet-text">{{ page.suggested_tweet.text }}</span>
    {% endif %}
    {% if page.suggested_tweet.hashtags != empty %}
      {% for hashtag in page.suggested_tweet.hashtags %}
        <span class="suggested-tweet-hashtag">#{{ hashtag }}</span>
      {% endfor %}
    {% endif %}
  </a>
  <p class="suggested-tweet-link"><a href="{% suggested_tweet %}" class="icon-left icon-twitter" target="_blank">click to tweet</a> <small>(you may edit before posting.)</small></p>
</div>

<!-- Image Gallery -->

