---
layout: post
title: Strikeitoff
thumbnail-path: "img/blocitoff.png"
short-description: Build a self-destructing to-do list application.

---

{:.center}
![]({{ site.baseurl }}/img/blocipedia.png)
{:.center}
[View the Repository](https://github.com/AnithaPal/strikeitoff)
[Heroku Demo]()

{:.center}

## Overview
“Strikeitoff”  is a self-destructing to-do list application. The purpose of creating a self-destructing to-do list application is to prioritize to-do items based on the date it is created and add urgency  to get things done.  The application sends a remainder to a user before self destructing a todo item unless it is not completed by a user. The application allow users to create, edit and destroy  and mark to-do lists.

{:.center}

## Features

+ Users can create an account, make their  to-do list, and add new items to their list.
+ Once an to do item created, application sends an email to the user about their new task.
+ The list will display the number of days until each item is scheduled for automatic deletion.
+ Once users complete an item, they can mark it as complete and remove it from the list.
+ If the to do item is not completed on the sixth day, application sends a remainder about the task they have to finish.
+ At the end of each day, items more than 7 days old will be automatically deleted from the list.

{:.center}

## Tools
**Languages, Libraries, and Frameworks:** Ruby on Rails, jQuery, AJAX, Bootstrap, RSpec, Cabybara, Factory Girl

**Databases:** SQLite (Test, Development), PostgreSQL (Production)

**Development Tools, Gems and Methodologies:**

+ Devise for user authentication
+ SendGrid for email confirmation
+ Rake Utility for task automation

{:.center}

[Return to the main page]()