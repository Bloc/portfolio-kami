---
layout: post
comments: true
title: Creating My Own Ruby Gem
---

A few days ago I finished my second Ruby on Rails application, [Toddlerpedia](toddlerpedia.herokuapp.com). You can read about my experience building it [here](https://jdai54.github.io/portfolio/toddlerpedia/). I'm still planning to do some style updates and maybe even add features but for now the basic parts are finished. I am now transitioning to the next project which is creating my own Ruby gem. For those who need a refresher, Rails is a web framework for the Ruby language. What a framework does is it provides tools to allow developers to build web applications using programming language. A gem is a small library of code that can do a variety of things (i.e. testing, authentication, payments, to name a few). Developers use them because they help speed up the development process and provide capabilities that you would otherwise have to code yourself. It's like using power tools to build something versus using a hammer and screwdriver. Gems aren't perfect and you may need to modify them to do exactly what you want, but often times, they will help give you a leg up on things.

Anyways, back to what I'm working on. It's a gem called Kele (not sure why they named it that), but the purpose of it is to act as a API client to provide easy access to and use of the student endpoints of Bloc's API. Below are the user stories it needs to fulfill:

{:.center}
![]({{ site.baseurl }}/img/kele_user_stories.png)
