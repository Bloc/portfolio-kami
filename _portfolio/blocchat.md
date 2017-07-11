---
layout: post
title: Blocchat
thumbnail-path: "img/blocchat/blocchat-main.png"
short-description: Build a self-destructing to-do list application.

---

{:.center}
![](/img/blocchat/blocchat-main.png)

## _Explanation_

**Blocchat** is a chatroom app which allows users to send messages to each other via chatrooms.Users will also have the ability to create their own chatrooms.--
Blocchat has been built with the following technologies -

- AngularJS(1.5.7)
- AngularFire(2.0.1)

## _User stories_

The following user stories are part of the blocchat app:

1. Users need to sign in to _Blocchat_ to view the available rooms
2. Users need to have the ability to create chat rooms.
3. Users need to see the current messages in all rooms.
4. Users need to send messages associated with their user name in all rooms.

## _Solution_

#### List all rooms
--------------------

The first step would be to create a room factory,inject the `$firebaseArray()` service and then use the firebase's `child()` method to query the rooms.

  ```
  (function() {
    function Room($firebaseArray) {
      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);
  
      window.foo = $firebaseArray(firebase.database().ref().child("messages"));
  
      return {
        all: rooms
      };
    }
  
    angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
  })();
  
  ```
   
#### Create chat rooms
----------------------

To create new chat rooms,I've used the AngularFire's `$add` method inside a RoomFactory method `add` which takes `room` as an argument.

  ```
  (function() {
    function Room($firebaseArray) {
    ......
    ......
    
      rooms.addRoom = function(name){
      this.$add({name: name});
      };
    
      }
  
    angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
  })();
  
  ```

#### List Messages
--------------------

To list all the messages when the user clicks a chat room,the pattern is same as that of a room - create a `message` factory,inject the `$firebaseArray` service ,and use the `child()` method to query for messages.

  ```
  (function() {
    function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    //var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        console.log(roomId);
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },

    };
   

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
    })();
    
  ```

#### Send messages
------------------

In this case,we add a method to your Message factory called send, that takes a message object as an argument and submits it to your Firebase server:

  ```
  (function() {
    function Message($firebaseArray) {
    ....
    ....
    send: function(newMessage) {
          // Send method logic
          console.log(newMessage);
          $firebaseArray(ref).$add(newMessage);
        }
    ....
    ....

     angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
    })();
    
  ```

#### User Authentication
-------------------------

To store the user in the browser,I used _cookies_ and to integrate cookies with Angular - 

- Inject the `ngCookies` module in to the Angular app's dependency array
- Inject the $cookies service into the run block's dependencies to check for the presence of the cookie holding the username

  ```
  (function() {
    function BlocChatCookies($cookies) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        // Do something to allow users to set their username
      }
    }

    angular
      .module('blocChat')
      .run(['$cookies', BlocChatCookies]);
    })();
    
    ```

Next, I've used the basic javascript `prompt()` in the authentication controller to prompt the user for _email_ and _password_ when user clicks 'Login'

## _Results_

#### User Signin
--------------------
Before testing the authentication,users have to be manually created in the firebase database.

![sign in](img/blocchat/email.png "Sign In")

#### List Chatrooms
--------------------
Shows a list of chatrooms available for the user.

![list chatrooms](img/blocchat/listchatrooms.png "list chatrooms")

#### Send Messages
--------------------
Select a chatroom and send a message to the chatroom

![send messages](img/blocchat/sendmessages.png "send messages")

#### Show Messages
--------------------
Login with a different user and show messages

![show messages](img/blocchat/showmessages.png "show messages")

## _Conclusion_

My first AngularJS app really came out well.To build my first web app from scratch piece by piece and then going about fitting the pieces together was a rewarding experience.

Things I could've done better
------------------------------

1. _**User experience**_ - The app has been bilt with using basic CSS and HTML capabilities.The layout,the style and the overall user experience could have been better.
2. _**Bootstrap**_ - Due to lack of time.I had to makedo with basic javascript prompts for user authentication.The experience could have been better with _Bootstrap modals_.
