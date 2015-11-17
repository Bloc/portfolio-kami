---
layout: post
title: Blocipedia
thumbnail-path: "img/blocipedia.png"
short-description: Wiki Collaboration Application

---

{:.center}
![]({{ site.baseurl }}/img/blocflix.png)

{:.center}
[View the Repository](https://github.com/AnithaPal/Blocipedia)
[Heroku Demo]()

{:.center}

## Overview

This Blocipedia application allows to create, edit, destroy  wikis and collaborate with others. It allows users to upgrade membership to create private wikis.

{:.center}

## Features

+ Users can create a standard account in order to create, edit, and collaborate on public wikis using Markdown syntax; anyone can view public wikis.
+ User can preview their wiki while typing their markdown. 
+ Users can pay to upgrade their account to Premium in order to view and create private wikis.
+ Premium users can allow others to view and collaborate on the private wikis they create.
+ Premium users can downgrade their account back to Standard account.
+ When a user downgrades his or her account, his or her private wikis will automatically become public.

{:.center}

## Tools

**Languages, Libraries, and Frameworks:** Ruby on Rails, Bootstrap 

**Databases:** SQLite (Test, Development), PostgreSQL (Production)

**Development Tools, Gems and Methodologies:**

+ Devise for user authentication
+ SendGrid for email confirmation
+ Redcarpet for Markdown formatting
+ Pundit for authorization
+ Stripe for payments

{:.center}

[Home]({{ site.baseurl | append: '/' }}) 

