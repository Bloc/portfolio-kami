---
layout: post
title: Blocipedia
thumbnail-path: "img/blocipedia.png"
short-description: Build a production quality SaaS app that allows users to create their own wikis.

---

{:.center}
![]({{ site.baseurl }}/img/blocipedia.png)

## Explanation

Blocipedia is a project designed by Bloc to give their students a broad range of challenges to show case what they have learned in the fundamentals section of their rails curriculum. The core of this project was to design a wiki site that is free for users to create and edit, additional challenges came in the form of adding premium users who utilize the site through a SAAS model and the implementation of a number of window dressing features such as allowing the wikis to understand markdown syntax and user friendly, more readable, web addresses.  

## Problem

Beyond simple creating a basic wiki site where users create and edit any and all pages Blocipedia provides a paid premium user option that allows for the creation of wikis only viewable by other premium users; in addition to the premium users creating and editing private wikis we wanted the premium user to be able to add collaborators to the private wikis that they create, these collaborators are regular users who are give specific access to view and edit these wikis.

## Solution

I first implemented a monthly subscription option that users could sign up for to gain premium status, this was done with the aid of the Stripe gem for ruby on rials. Once premium users were added and scopes created to limit what different types of users could access and edit I added a collaborations model that belonged to both a user and a wiki, both of which in turn were given a has_many relationship with collaborations. This solution along with some modifications to the wiki controller worked beautifully.

## Results

The final site, tested by myself along with my Bloc mentor, successfully implemented all of the desired features in an intuitive, user friendly, way. Any user may sign up for a free account to create and edit wikis and those choosing to pay a monthly fee may create and edit private wikis that they are able to add non-premium user collaborators to.

## Conclusion

The project was first and foremost designed with learning in mind, in this it was a great success.  I was able to reinforce all of my basic ruby skills while learning and successfully implementing new design patterns such as the collaboration model's relationship with both users and wikis as well as discovering how to utilize new gems that make it possible to monetize an app, allow the use of markdown syntax within the app, making web extensions user friendly, and adding additional security to the app.  The success of this project has provided me with many new skills, and strengthened old ones, that I will continue using for my future projects. 
