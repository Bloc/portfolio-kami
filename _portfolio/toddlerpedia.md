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
- As a user, I want to sign in and out of the application.
- As a user with a standard account, I want to create, read, update, and delete public wikis.
- As a developer, I want to offer three user roles: admin, standard, or premium.
- As a developer, I want to seed the development database automatically with users and wikis.
- As a user, I want to upgrade my account from a free to a paid plan.
- As a premium user, I want to create private wikis.
- As a user, I want to edit wikis using Markdown syntax.
- As a premium user, I want to add and remove collaborators for my private wikis.

## Solution

One of the most useful additions to this application was the use of the Devise gem for user authentication. The Devise gem was fairly easy to implement by following the ReadMe on its GitHub page. Another great aspect of it is that it comes with many pre-made views with forms for user login, user account setup, etc.
For the premium level there needed to be a way for a user to make a one time payment to upgrade his or her membership level. First off the three user roles were defined by using an enum which is a special attribute type whose values map to integers, but can be referenced by name. With this project, the enum is declared in the user model like this to create the three different roles:
```
enum role: [:standard, :premium, :admin]
```
This line in user.rb makes it so that newly created users will be set to the standard user level by default:
```
after_initialize { self.role ||= :standard }
```
This is the view where users can choose to upgrade to premium. Payments are handled by [Stripe](https://stripe.com/) using the Stripe gem. I enjoyed creating this view the most as I find styling visually appealing with the $10 dollar charge in large print on one side and the details on the right.

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_premium.png)

One of the trickier parts of this application was building in the collaborators role and figuring out how to build the Active Record associations between wikis, users, and collaborators. I needed a wiki to be able to belong to a user but also allow a collaborator into the mix.

Below is the code from user.rb:
```
has_many :wikis, through: :collaborators
has_many :collaborators, dependent: :destroy
```

This is from wiki.rb:
```
has_many :collaborators, dependent: :destroy
has_many :users, through: :collaborators
```

This is from collaborator.rb:
```
belongs_to :user
belongs_to :wiki
```

## Results

The final result is an app that has all of the proper Active Record associations allowing for a premium user to create a wiki and add collaborators to work together. All users are able to perform CRUD operations on wikis they have created. An example of a user created wiki is below. On the page are all the necessary buttons to perform edit and delete functions or to just go back to the main list of wikis.

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_wikiexample.png)

Below is an example of what a premium user sees when he is on the create wiki form. Notice that there is an available private wiki checkbox that is not available to standard users.

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_premium1.png)

Once a wiki is created by a premium user (premium@premium.com), he can go to the edit screen and add a collaborator by email address courtesy of a partial which renders the collaborators form as seen in this screenshot:

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_premium2.png)

If I add a user as a collaborator and refresh the edit page, I can see the collaborator I added listed courtesy of another partial, collaborators/show.

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_premium3.png)

If I sign in as the invited collaborator, voila! I can see the private wiki I was invited to work on in the wiki index.

{:.center}
![]({{ site.baseurl }}/img/toddlerpedia_premium4.png)


## Conclusion

Working on Toddlerpedia was a great and challenging experience that built upon just the plain build a Reddit clone idea by adding additional features and concepts such as the premium user feature which was detailed in the above sections. Thinking through the Active Record associations with the various models made me focus on how each model was related and helped me understand better the concepts of `has_many` and `belongs_to` and the differences between them and a Has Many Through relationship.
