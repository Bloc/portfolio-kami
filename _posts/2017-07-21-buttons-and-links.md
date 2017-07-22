---
layout: post
comments: true
title: Buttons vs Links
---

I made a recent discovery when working on my latest Ruby on Rails app. I was trying to add a button on a user edit profile page where a user could click on it and be taken to another view where they could upgrade or cancel their subscription. I wrote out the code for the button:

{:.center}
![]({{ site.baseurl }}/img/initial_button.png)

When I tested it out on the local server, I got this error:

{:.center}
![]({{ site.baseurl }}/img/button_post_error.png)

The code seems right, and when I compared it to other buttons I had created, they followed the same pattern. Based on the error message, there was an issue with my route, but I knew my routes were fine. I searched the internet for the potential answer and found this question posted on Stack Overflow:

<https://stackoverflow.com/questions/4708671/button-to-in-ruby-on-rails-bad-route>

Turns out that `button_to` uses POST by default because it is usually clicked on to create something with user input. What I needed was GET because I was trying to take the user to the payment URL to upgrade their account. One work around for this was to override the default behavior by setting the method to GET like this:

{:.center}
![]({{ site.baseurl }}/img/button_get.png)

While this solved the issue, it is preferable to use `link_to` instead of `button_to` when trying to take the user to a new url. I still wanted it to have the appearance of a button though, so what I did was I just used assigned the link to a bootstrap css class. My final code for the link was:

{:.center}
![]({{ site.baseurl }}/img/final_button.png)

and this is how it looks in the view:

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_edit_profile.png)
