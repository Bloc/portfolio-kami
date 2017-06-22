---
layout: post
title: Bloc Chat
thumbnail-path: "img/blocchat.png"
short-description: The goal of the project was to build a real-time chat application.

---

{:.center}
![]({{ site.baseurl }}/img/blocchat.png)

## Explanation

Using Angular and Firebase, I was asked to create a real-time chat application from the ground up, including setting up the database. I was given some basic wireframes but no starting HTML or CSS.

## Problem

In addition to the creation of the application and database, the following were required pieces of functionality. The ability for a user to…
* See a list of available chat rooms
* Create chat rooms
* See a list of messages in each chat room
* Set their username to display in chat rooms
* Send messages associated with their username in a chatroom

## Solution

I developed an AngularJS application that utilizes Firebase to store the chatroom and message data.
* **See a list of available chat rooms**- I created a service to access the rooms listed in the database. The rooms were displayed using the ng-repeat directive and ng-click directives were added to update the chat display area based on what room the user clicked-on.
  * **Bonus**- What the user should see prior to selecting a room was not defined. To ensure the user gets to the correct room I provided instruction to select a room if one was not already selected.
* **Create chat rooms**- I added additional functionality to my service to add new rooms to the database. Then using UI Bootstrap's $uibModal service I developed a modal with a form where a user could enter a new room. When submitted, it utilized the service to immediately update the database and by extension the available room displayed.

{:.center}
![]({{ site.baseurl }}/img/createroom.png)

* **See a list of messages in each chat room**- I set up the database so that each message contained the username, message, time posted and room it was posted in. Using a new service, I could query the database for messages that matched the room the user was currently in and display those in the chat area.
* **Set their username to display in chat rooms**- I first integrated the Angular cookies module and created a new service to be able to access and store a username in a cookie. They would only be prompted if their username had not already been saved. New users are prompted for their username via another UI Bootstrap modal and what they enter is saved into the cookie, then the modal closes.

{:.center}
![]({{ site.baseurl }}/img/createuser.png)

* **Send messages associated with their username in a chatroom**- I added additional functionality to my existing service to be able to send the required information (username, room, time posted and message) to the database. I built a function in my controller to populate the object with the required information when a user submits a message.
  * **Bonus**- While not requested I added the ability for the time stamp to automatically populate based on the current time and for the message entry area to clear once a message was submitted and placeholder text reappear. I also hid the message entry field until the user selects a room.

While not requested there is a basic level of mobile responsiveness but additional is being worked on, particularly for the forms.

## Results

All user requirements were met and some additional items were added to help improve the user experience. I tested my solutions by.

* **See a list of available chat rooms**- Comparing chat rooms I could see in the application with what was in the database.
* **Create chat rooms**- Clicking on the button to bring up the modal, entering a room name and submitting it then checking to see if it was in the database and if it was appearing on the application. I also tested trying to submit blank and it did not send to the database. I also tested the cancel button to ensure it closed the modal window.
* **See a list of messages in each chat room**- I tested by clicking into each room and comparing what was displayed to what was in the database that was associated with that room.
* **Set their username to display in chat rooms**- I tested visiting the application as a new user and whether what I entered in the modal correctly populated the cookie using the developer tool. After entering my username, I refreshed the page to see if I would be prompted again.
* **Send messages associated with their username in a chatroom**- I tested entering a message in a chat room and seeing if it correctly added the information to the database and if it displayed in the correct chat room. I did this for multiple chat rooms.

## Conclusion

* Utilizing firebase worked well for a basic database and Angular is well suited to this type of project with its modularity.
* In the future, I would explore other options for modals. The UI bootstrap modal felt restrictive and overly complex for the need.
* I learned the importance of taking small steps towards the goal, ensuring they are working then moving to the next. This helps narrow your scope when you are trying to troubleshoot.
