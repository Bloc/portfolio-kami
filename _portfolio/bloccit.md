---
layout: post
title: Bloccit
thumbnail-path: "img/bloccithomepage.png"
short-description: A Reddit replica used to cover the basics of Ruby on Rails.

---
[Check it out here](https://bloccit-community.herokuapp.com/)
{:.center}
![]({{ site.baseurl }}/img/bloccithomepage.png)

## Explanation
Ever since the internet was created, people have had the desire to be able to share information more easily. Bloccit is a Ruby on Rails application made to allow members to discuss various topics and have posts and comments. My role was to build the application using Ruby on Rails according to TDD principles.

that allows members to create new topics, to write posts or comments, and upvote or downvote posts. Users are able to follow their favorite posts and receive emails when someone comments on a particular post.

## Problem

The application needed to be created from scratch, and I needed to build out the models, views, and controllers (MVC architecture) for each aspect of the application. Since this app was meant to share information, there needed to be functionality for users to create new posts as well as editing and deleting them. Also to encourage interaction, comments needed to be added as well as the ability to upvote or downvote a post. To encourage users to come back to the app, favorites needed to be created, so a user could follow particular posts and be notified if there was any activity on a particular post such as a new comment.

Users can sign up for an account and view their activity (posts, comments and favorites).
Users can view, edit and create posts or comment on posts under various topics.
Users can upvote or downvote a post.
Users can comment on posts.
Users can mark posts as favorites to get notified of new comments.
Admins can alter or delete any topics, posts, or comments.
## Solution

At the start of the project, I needed to create the development database and create a basic UI as a foundation to build on. I created a new database using `rake db:create`. Below is my initial gemfile.

{:.center}
![]({{ site.baseurl }}/img/bloccit_gemfile.png)

I also deployed the app to Heroku. In order to set up the initial UI, I ran `$ rails generate controller welcome index about`. This set up the initial Welcome controller and views. I created the Welcome routes which looked like this:

{:.center}
![]({{ site.baseurl }}/img/bloccit_initialroutes.png)

This code set the welcome index view as the default view using `root`. An example of a simple test for this is below:

{:.center}
![]({{ site.baseurl }}/img/bloccit_indexview_test.png)

In terms of styling, this was greatly facilitated by using the Bootstrap CSS framework by adding `gem 'bootstrap-sass'` to the `Gemfile`. 


## Results


## Conclusion
