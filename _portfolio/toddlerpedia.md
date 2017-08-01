---
layout: post
title: Toddlerpedia
thumbnail-path: "img/toddlerpedia_home.png"
short-description: A Ruby on Rails Wiki Resource on Toddlers

---
[Check it out here](https://toddlerpedia.herokuapp.com/)
{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_home.png)

## Explanation

Toddlerpedia is a Ruby on Rails application for everything you want to know about those crazy toddlers. There is plenty of stuff online for infants but what about toddlers?? This application allows users to create public and private Markdown-based wikis. My role was to build the application using Ruby on Rails according to TDD principles. Users can upgrade to premium membership which will allow them to create private wikis and collaborate with other users. This feature is designed for users who want to be able to maintain some privacy, but still be able to discuss topics with those who they trust.

## Problem

Below is a list of the user stories that I wanted this application to fulfill:

- As a user, I want to sign up for a free account by providing a user name, password and email.
- As a user, I want to sign in and out of Blocipedia.
- As a user with a standard account, I want to create, read, update, and delete public wikis.
- As a developer, I want to offer three user roles: admin, standard, or premium.
- As a developer, I want to seed the development database automatically with users and wikis.
- As a user, I want to upgrade my account from a free to a paid plan.
- As a premium user, I want to create private wikis.
- As a user, I want to edit wikis using Markdown syntax.
- As a premium user, I want to add and remove collaborators for my private wikis.

## Solution

One of the most useful additions to this application was the use of the Devise gem for user authentication. The Devise gem was fairly easy to implement by following the ReadMe on its GitHub page. Another great aspect of it is that it comes with many pre-made views with forms for user login, user account setup, etc.

## Results


## Conclusion
