---
layout: post
title: Blocipdeia
thumbnail-path: "img/blocipedia.png"
short-description: The goal of the project was to build an application similar to wikipedia.

---

{:.center}
![]({{ site.baseurl }}/img/blocipedia.png)

## Explanation

Using Ruby on Rails I was asked to create an application that allows users to create public and private Markdown-based wikis. Then it needed to be deployed to Heroku.

## Problem

In addition to the creation of the application, the following were required pieces of functionality. There needed to be three roles admin, standard(free) and premium, as well as the ability for a user to…
* Sign up for a free account by providing a username, password and email
* View all their posts, comments and favorites on their profile page.
* Sign in and out
* Create, read, update and delete public wikis
* Edit wikis using markdown syntax
* Create private wikis if they are a premium user.
* Add or remove collaborators for private wikis if they are a premium user.

## Solution

I created a Ruby on Rails application. I choose to...
* Created three models Wiki, User and Collaborators (utilized the Has Many Through relationship for this one).
* Utilizing the Devise gem, I gave users the ability to sign up for and cancel an account. In addition, I set it up to generate a confirmation email for sign ups utilizing Heroku.
* Used the Pundit gem for authorization to control users ability to do certain actions and the view they are shown.
* Integrated Stripe third party API for premium account payments.
* Integrated Redcarpet Markdown rendering gem to add the ability to edit with markdown.
* Use the Faker gem to generate fake data for users and wikis.

## Results

All user requirements were met and it was successfully launched on Heroku. https://intense-escarpment-81403.herokuapp.com/

## Conclusion

* Stripe is a quick and simple solution for integrating payments.
* There are a variety of ways to implement authorizations and scopes, including manual which I did before and via gems. For simple applications I felt that manually adding was quicker and produced more DRY code.
