---
layout: post
title: Kele API Client
thumbnail-path: "img/keleapi.png"
short-description: The goal of the project was to create a Ruby Gem API client.

---

{:.center}
![]({{ site.baseurl }}/img/keleapi.png)

## Explanation

Using Ruby I was asked to create a gem to provide easy access to and use of the student endpoints of Bloc's API.

## Problem

In addition to creating the gem the user needs to be able to…
* Initialize and authorize a user with a Bloc username and password.
* Retrieve the current user as a JSON blob.
* Retrieve a list of the current user’s mentor’s availability.
* Retrieve roadmaps and checkpoints.
* Retrieve a list of my messages, respond to existing message and create a new message thread.
* Submit checkpoint assignments.

## Solution

I created a Ruby gem. I choose to...
* Create the Kele API client as a ruby gem to allow us others to integrate Kele with other software.
* Use HTTParty as a dependency to allow a programmatic Ruby interface to make http requests.
* Created initialization that uses the username and password and retrieves to retrieve the authorization token.
* Created the appropriate methods to retrieve the requested information.
* Added a module to reduce the amount of code included in the Class itself.

## Results

All user requirements were met and tested in IRB.

## Conclusion

* Ruby gems are simpler to create than I assumed.
* Gems like this that are an API client could be very useful if you have multiple applications that need to access an API or want to make it easier for front end developers to use.
