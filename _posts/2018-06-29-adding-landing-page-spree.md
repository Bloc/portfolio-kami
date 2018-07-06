---
layout: post
comments: true
title: Adding a Landing Page to a Spree Application
---

Lately I've been doing work in ecommerce and a gem I started using was this gem called [spree](https://github.com/spree/spree).

It comes with a ton of features and functionality already built in right out of the box. One area I've struggled with is figuring out how everything works especially because it involves working with a Rails Engine (something I didn't even know existed before this which is another story in itself).

Something I recently just figured out was how to insert a landing page or another view into my Spree application. I googled and googled the heck out of the internet but the best answers I could find all seemed to be based on an older version of Spree that didn't quite match up with the current version that I'm using which is 3.3.

I finally decided to hit up their Slack channel, and lo and behold, I got my answer! It's awesome when there is support and a strong community base for something.

First step is to generate a controller, '$ rails generate controller (name of controller) (name of views separated by spaces)'.

Second step since I'm making this my landing page is to make the Welcome Index page the root route by adding 'root 'welcome#index''to the routes.rb file.
Learn more about this [here](http://guides.rubyonrails.org/routing.html#using-root).

Third step was to make the original home store page, a separate store page that was no longer the root route.
This is accomplished by following the advice I was given on Slack:

{:.center}
![]({{ site.baseurl }}/img/spree_slack.png)
