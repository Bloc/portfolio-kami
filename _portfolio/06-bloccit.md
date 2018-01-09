---
layout: post
title: Bloccit
thumbnail-path: "img/bloccit.png"
short-description: The goal of the project was to build an app similar to Reddit.

---

{:.center}
![]({{ site.baseurl }}/img/bloccit.png)

## Explanation

Using Ruby on Rails and TDD (utilizing Rspec) I was asked to create an application where people can post, vote on, share and save links and comments. Then it needed to be deployed to Heroku.

## Problem

In addition to the creation of the application, the following were required pieces of functionality. The ability for a user to…
* Sign up to be a member
* View all their posts, comments and favorites on their profile page.
* Perform CRUD actions on topics, posts and comments depending on their user role
* See others public topics, posts and comments.
* Favorite and up/down vote posts
* Receive email updates when there are updates to a post they favorited.

## Solution

I created a Ruby on Rails application. I choose to...
* Create models for topics, posts, comments, favorites, users, voting as well as the appropriate associations between them and nesting.
* Setup validation rules for and used BCrypt for password security.
* Use a session object to persist a user’s info after they sign in.
* Create three roles guest, member and admin. Each capable of specific action and will see different views depending on role. I represented rules via an enum and used scoping to restrict who can view what.
* Set up Sendgrid as an add-on to Heroku to enable sending of emails.

## Results

All user requirements were met. I tested it using test cases I created as well as manually testing it. It was successfully launched to Heroku. https://blooming-gorge-51473.herokuapp.com/

## Conclusion

* There are a variety of gems available in Ruby on Rails to simplify the development of an application.
* Built in active record methods and scopes are key to writing clean code.
