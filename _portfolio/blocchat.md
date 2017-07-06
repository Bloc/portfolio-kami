---
layout: post
title: BlocChat
thumbnail-path: "img/blocchat.png"
short-description: Bloc Chat is an online chatroom.

---
//asset to display project images
{:.center}
![]({{ site.baseurl }}/img/blocchat.png)

## Explanation
Bloc Chat is a Firebase application that sends and receives messages in real time. It has multiple chat rooms, usernames, and messages.


## Problem

The problem was to learn how to use the Firebase module in an Angular application, inject the $firebase service into a controller, understand and use the Firebase javascript and AngularFire APIs - methods such as child() and $add(), query a Firebase array, use UI Bootstrap to create a modal, and use cookies to store information in the user's web browser.
## Solution

I integrated the Firebase module into my Angular application. I learned how to list chatrooms by injecting the $firebase service and using child() and $add(). I created chatrooms by using UI Bootstraps $uibModal service. I listed messages through the Firebase application by creating a factory. I set and stored usernames using the $cookies service. I created a way for users to send messages with their username attached in the Message Factory.

## Results

I had difficulty viewing the final application, but I could view the list of chatrooms. I had trouble connecting the messages to the usernames.

## Conclusion

The listing of chatrooms worked and I am not sure if everything else worked and I just wasn't able to view it. I tried to view it through Google Cloud as well through the local host they set up and I wasn't able to view it there either. I will use this information in the future to create chatrooms. Also, in the future I will learn how to better view my applications.
