---
layout: post
comments: true
title: Using Active Record Helper Methods and Enums
---

This post is on the latest thing I learned while working on my latest Ruby on Rails app, Toddlerpedia. I had already implemented enums in my project for assigning different user roles (standard, premium, and admin). To really simplify Active Record enums, it involves declaring an enum attribute where the values map to integers in the database. The advantage is that these can then be queried by name. For more on enums, click [here](http://api.rubyonrails.org/classes/ActiveRecord/Enum.html).

Here's the code in my `user.rb` file where I declare my enum attributes on line 13:

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_enum.png)

Something that makes for terrible user experience is to see links on a page, and when you click on them,  you are given an error message telling you "you're not allowed to do that." It only frustrates the user and makes them wonder why the link was there to be clicked on. So in my application, instead of allowing links such as upgrading your account or downgrading your account to be displayed at all times, I wanted them to only be displayed if it was applicable. To do this, I added `if` statements to check if the user was signed in and if the user was either a standard user or premium user. If the user was a standard one, he should see a link to upgrade his account to premium. If the user was premium, he should see a link to downgrade his account.

Below was the code I started off with (note lines 43 and 46):

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_user_if_initial.png)

When I tested it out on the local server, I found that when I downgraded or upgraded a user, the buttons didn't change as they should have, and the user's actual role didn't change either. I realized that this was because of the way I wrote out the `if` statements in the views and the methods in the controller. The `enum role: [:standard, :premium, :admin]` method in Active Record that I had already used meant that I should use Active Record helper methods in the controller and views.

In the controller, instead of using `current_user.update_attributes(role: 'premium')` to upgrade a user to premium, it should be `current_user.premium!`. To downgrade a user, instead of using `current_user.update_attributes(role: 'standard')`, it needed to be `current_user.standard!`.

Here is the code for the views (see lines 43 and 46):

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_corrected_view.png)
