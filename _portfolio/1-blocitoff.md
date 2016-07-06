---
layout: post
title: Blocitoff
thumbnail-path: "img/blocitoff.png"
short-description: Build a self-destructing to-do list application.
slug: blocitoff
---

{:.center}
![]({{ site.baseurl }}/img/blocitoff.png)

## Explanation

Blocitoff is self-destructing to-do list. This utility application uses rake automation to remove to-do items that are over 7 days old. The logic is that if the item has not been completed in a week, it is not important enough to be on a to-do list. The intention is to motivate users to complete their tasks ASAP.

## Tools
This application was built with Ruby on Rails. It also uses:

* jQuery
* AJAX
* HTML/CSS/SASS
* Bootstrap
* Devise library for user authentication
* SQLite3 for development and PostgreSQL for production


## Test it Out

You can see the source code on [Github](https://github.com/kimbergee/blocitoff){:target="_blank"} or live on [Heroku](https://kimbergee-blocitoff.herokuapp.com/){:target="_blank"}.
