---
layout: post
title: Bloc Jams Angular
thumbnail-path: "img/blocjamsangular.png"
short-description: The goal of the project is to convert the Bloc Jams site to an Angular application.

---

{:.center}
![]({{ site.baseurl }}/img/blocjamsangular.png)

## Explanation

Using the Bloc Jams site as a starting point the request was to convert it to use Angular JS.

## Problem

To convert to Angular I needed to accomplish the following tasks.
* Bootstrap Angular to my application
* Configure routing and states for my application
* Implement controllers for my application views
* Create a service that handles song playback
* Write a directive that controls song and volume sliders
* Add a time code filter to display time properly

## Solution

* Bootstrap Angular to my application- I set up a new application structure, migrated the CSS and assets and did some updates, added Angular scripts and a global file, declared an Angular module, linked the module to the application.  
* Configure routing and states for my application- Created templates to use in the views, used UI-Router to set up routing for displaying these templates ($stateProvider) and urls ($locationProvider).
* Implement controllers for my application views
  * Created several controllers
  * Converted javascript template repeats with ng-repeat
  * Converted hover states to use ngShow along with ngMouseover and ngMouseleave and click to ng-click directives.
* Create a service that handles song playback- Created the service and injected in the the appropriate controllers, added Buzz library, refactored logic to work with Angular.
* Write a directive that controls song and volume sliders- Wrote a custom directive that uses some jQuery methods.
* Add a time code filter to display time properly- Add a new filter and implemented it on the template.

## Results
All user requirements were met. I tested my solutions by.
* Using chrome inspector to test responsiveness
* Reviewing album covers displayed on the collection page
* Mousing over each row on the album page to test for play button display, then playing one and doing this again.
* Pausing a playing song
* Choosing a new song after a song was playing and paused.
* Playing/pausing a song from the music player.
* Skipping forward and backward from a current song. Inclusiding the first and last songs.
* Playing a song and seeing if it tracks the playback and using the bar to skip forward and backward in the song, listening to ensure reflected.
* Using the volume bar to adjust the volume up and down, listening to see that it is reflected.

## Conclusion
* Angular is a good alternative to using plain JavaScript and jQuery for non-content heavy sites. It makes it simple to identify the actions being taken on an element.
