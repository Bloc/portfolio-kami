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

Now that the data as there, the next challenge was to create a controller and then to have the queried Rooms be displayed in the view. The main challenge here was to inject the Room service in order to assign the array of objects retrieved by the `all` method to a `$scope` variable which I called `rooms`. After that, the `ng-repeat` directive was used to display the rooms in the template. What I learned here was that in "room in home.rooms", "room" could have been anything I wanted to name it. The important part was to be able to acess the array of objects by calling `rooms` properly from the Home controller.

{:.center}
![]({{ site.baseurl }}/img/codesnippet5.png)

{:.center}
![]({{ site.baseurl }}/img/codesnippet6.png)

Insert picture from checkpoint 2

The next step was for the user to be able to create new chat rooms and to see them updated in real-time. This required the use of AngularFire's `$add()` on the array of data stored in the `rooms` variable in the `Room` service.

{:.center}
![]({{ site.baseurl }}/img/codesnippet7.png)

## Results

Throughout the project, testing was a critical part just to make sure each bit of code I was adding was having the effect I wanted (a lot of times this wasn't the case and it was back to the drawing board!). This was done primarily by having a node server running and opening up the application locally in the browser and refreshing it to see the latest updates. Often times there would be issues of with newly added code not working like it was supposed to. 
Bacon ipsum dolor amet filet mignon meatball spare ribs fatback bacon shankle. Kielbasa andouille fatback salami, boudin bresaola pig alcatra turkey spare ribs jerky. Corned beef bresaola leberkas salami alcatra beef landjaeger venison shank bacon meatloaf beef ribs picanha. Leberkas sausage brisket porchetta shankle prosciutto chicken picanha kielbasa pig kevin t-bone turducken filet mignon jowl.

> Bacon ipsum dolor amet filet mignon meatball spare ribs fatback bacon shankle. Kielbasa andouille fatback salami, boudin bresaola pig alcatra turkey spare ribs jerky. Corned beef bresaola leberkas salami alcatra beef landjaeger venison shank bacon meatloaf beef ribs picanha. Leberkas sausage brisket porchetta shankle prosciutto chicken picanha kielbasa pig kevin t-bone turducken filet mignon jowl.

Bacon ipsum dolor amet filet mignon meatball spare ribs fatback bacon shankle. Kielbasa andouille fatback salami, boudin bresaola pig alcatra turkey spare ribs jerky. Corned beef bresaola leberkas salami alcatra beef landjaeger venison shank bacon meatloaf beef ribs picanha. Leberkas sausage brisket porchetta shankle prosciutto chicken picanha kielbasa pig kevin t-bone turducken filet mignon jowl.

## Conclusion

Bacon ipsum dolor amet filet mignon meatball spare ribs fatback bacon shankle. Kielbasa andouille fatback salami, boudin bresaola pig alcatra turkey spare ribs jerky. Corned beef bresaola leberkas salami alcatra beef landjaeger venison shank bacon meatloaf beef ribs picanha. Leberkas sausage brisket porchetta shankle prosciutto chicken picanha kielbasa pig kevin t-bone turducken filet mignon jowl.