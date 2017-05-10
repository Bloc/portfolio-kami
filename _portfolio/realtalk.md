---
layout: post
title: Real Talk
thumbnail-path: "img/realtalkmessageentered.png"
short-description: Real Talk is a chatroom application for people trying to connect to share their passions and ideas.

---

{:.center}
![]({{ site.baseurl }}/img/realtalklogin.png)

## Explanation

Real Talk was born out of a desire to create a chat application where people could communicate and share ideas on whatever interested them. The users are people who have a desire to not just consume information but have a desire to learn new things and discover the world around them. My role was to use Firebase and AngularJS to create a real-time chat application

## Problem

The application had to be built using a provided repo that already included common application files, configuration files, and a NodeJS server file. My job requirement was that I needed to meet at least fulfill a set of user stories. These included having a list of available chat rooms, being able to create chat rooms, being able to see a list of messages in each chat room, being able to set a username and display it in chat rooms, and lastly to be able to send messages associated with a username in a chat room. The goal was to be able to fulfill these user stories while building a single page application. 

## Solution

At the start of the project, I set it up by adding Angular, adding the AngularUI Router in place of the default Angular router, and including AngularFire which is the officially supported AngularJS binding for Firebase creating a three-way data binding between the HTML, JavaScript, and Firebase database. To get the basic foundation of the application set up, I defined the first state as `home` to be used as the main view of the application.

{:.center}
![]({{ site.baseurl }}/img/codesnippet1.png)

Next I created a Home controller and a template for the "home" state.

{:.center}
![]({{ site.baseurl }}/img/codesnippet2.png)
{:.center}
![]({{ site.baseurl }}/img/codesnippet3.png)

Once the home view was set up, it was time to get a list of chatrooms viewable by the user. A set of "fake" data was created in Firebase to test for this. Below is a sample of what this looked like at one point in the project (by this point, fake messages had also been added).

{:.center}
![]({{ site.baseurl }}/img/samplefakedata.png)

A Room factory was created in Angular to definte all Room-related API queries. The `$firebaseArray` service was used to ensure the data is returned as an array:

{:.center}
![]({{ site.baseurl }}/img/codesnippet4.png)

Now that the data as there, the next challenge was to create a controller and then to have the queried Rooms be displayed in the view. The main challenge here was to inject the Room service in order to assign the array of objects retrieved by the `all` method to a `$scope` variable which I called `rooms`. After that, the `ng-repeat` directive was used to display the rooms in the template. What I realized here was that in "room in home.rooms", "room" could have been anything I wanted to assign it. The important part was to be able to acess the array of objects by calling `rooms` properly from the Home controller.

{:.center}
![]({{ site.baseurl }}/img/codesnippet5.png)

{:.center}
![]({{ site.baseurl }}/img/codesnippet6.png)

Insert picture from end of checkpoint 2

The next step was for the user to be able to create new chat rooms and to see them updated in real-time. This required the use of AngularFire's `$add()` on the array of data stored in the `rooms` variable in the `Room` service.

{:.center}
![]({{ site.baseurl }}/img/codesnippet7.png)

Now in HomeCtrl a method was created to be called when the view submit button is clicked. This method gathers the information needed to create the room and call `addRoom` from the `Room` service.

{:.center}
![]({{ site.baseurl }}/img/codesnippet8.png)

After adding the `ng-click` and the form for adding the new room information in the view, this was the result: 

{:.center}
![]({{ site.baseurl }}/img/realtalkroomtyped.png)

The next user story was to allow the user to see a list of messages in each chat room. This required associating messages with a room. One important aspect here was to know that when associating objects with other related objects, like rooms with messages, it requires the use of a reference to the parent data (the room) in the child data (the messages). A `Message` factory had to be created to define all Message-related API queries.

{:.center}
![]({{ site.baseurl }}/img/codesnippet10.png)

{:.center}
![]({{ site.baseurl }}/img/realtalkmessageentered.png)

In a chat application it is important for users to be able to have their own username and have it displayed in order to know who sent each message. Here cookies were introducted through the `ngCookies` module to store this information. In addition, a login page was added in order to check whether a user had a username or not. If not, the user would be routed to a log in page where he would have to create and submit one. This required a new view, controller, and service. 

{:.center}
![]({{ site.baseurl }}/img/realtalklogin.png)

The final user story was to allow users to send messages associated with their username in any particular chat room. This required adding a new `send` method in the `Message` factory that takes a message object as an argument and submits it to the Firebase server.

{:.center}
![]({{ site.baseurl }}/img/codesnippet11.png)

Since each message object has a `username` property, the `$cookies` service was used to populate the `username` property with the current user's username.

{:.center}
![]({{ site.baseurl }}/img/codesnippet11.png)

Here is the final result with user name appearing in bold above the content of the message along with a timestamp offset to the right.

{:.center}
![]({{ site.baseurl }}/img/realtalksamplechatroom.png)


## Results

Throughout the project, testing was a critical part just to make sure each bit of code I was adding was having the effect I wanted (a lot of times this wasn't the case and it was back to the drawing board!). This was done primarily by having a node server running and opening up the application locally in the browser and refreshing it to see the latest updates. Often times there would be issues of with newly added code not working like it was supposed to. One simple error was creating a service such as the `Message` service and forgetting to add it to `index.html`. I get an error which baffled me for a while.

{:.center}
![]({{ site.baseurl }}/img/codesnippet9.png)

Another important concept that may seem obvious is to name things to describe what is being passed around. The power of Angular is the ability to use a given name to refer to a much larger set of information such as a function. Argument names should make sense with the expected result otherwise there can be a lot of confusion and lack of clarity as to what is being passed and returned. 

> "When I first looked at Real Talk, I thought the layout was boring and the messages were laid out in a way that the flow of the conversation didn't seem intuitive. Now with the changes in the layout, I like how I can see the usernames and the time the messages were sent. I also liked how the font wasn't a boring one." 

Another user gave feedback mentioning how he didn't like how the navigation menu that holds the list of chatrooms was hidden when you go to the page for the first time.

> "[For what it's worth], I don’t understand hiding the chatrooms on page load, since this is a chat app, but it’s your app and that’s just an opinion."

I agreed with this assessment and thought it made sense as well, so I had the menu be shown rather than hidden on page load.

## Conclusion

Going into the project I had little experience working with Angular and wondered how I could build a functioning app mostly from scratch. I had to think through the components and features that were critical to a messaging application. Even though I have used them plenty before, I had never sat down and thought about what features I wanted and other details. I was surprised at how much I learned through the process of struggling through parts of this project such as how to name a method in a service and then how to properly call it in the controller and finally adding that to the view. There were many times where things did not initially work mostly because I had not called a function properly in the controller causing it not to work. The flow of Angular has become much more clear to me now, and I hope to be able to build more features to this application over time and hopefully to apply this to other projects as well. 