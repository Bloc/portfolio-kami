---
layout: post
comments: true
title: Using Optional Parameters in Ruby
---

It's been a busy couple weeks since my last post (which I've been more active with lately). I'm still working on Ruby on Rails after finishing my previous two projects ([Bloccit](bloccit-community.herokuapp.com) & [Toddlerpedia](toddlerpedia.herokuapp.com)). The past two weeks I was working on creating my own Ruby gem called Kele, a Ruby Gem API client to access the [Bloc API](http://docs.blocapi.apiary.io/).

(To learn more about APIs, [this](http://www.restapitutorial.com/) is a great resource with simple tutorials and great videos.)

One feature I worked on was giving the user the ability to retrieve messages sent between the user and his/her mentor. The client will issue a GET request to retrieve the messages:

{:.center}
![]({{ site.baseurl }}/img/kele_messages_get.png)

An example of what to expect when using it in the Rails console was given here:

{:.center}
![]({{ site.baseurl }}/img/kele_rails_console.png)

Using the documentation for the API is very helpful here because it provides examples. Following the example, I wrote the following code:

{:.center}
![]({{ site.baseurl }}/img/kele_messages_before.png)

When testing this out in the Rails console, I had no issues when I passed a specific page number to retrieve. If no page number was passed, it should retrieve all the messages. When I tried this however, I got the following error:

{:.center}
![]({{ site.baseurl }}/img/kele_error.png)

The error message here is an `ArgumentError`. It tells us that the method `get_messages` was passed 0 arguments but it expected 1 argument. This is true because no argument was passed when I was trying to retrieve all the messages rather than a specific page of messages.

I did some googling to find out ways to work around this and found that I could use [optional parameters in Ruby](https://stackoverflow.com/questions/35747905/a-method-with-an-optional-parameter). Rather than always requiring an argument, in cases like mine, I could set the parameter's default value to nil. Then I create a conditional depending on whether a value is passed or not. Here was my final code implementing optional parameters which created the desired result:

{:.center}
![]({{ site.baseurl }}/img/kele_messages_final.png)
