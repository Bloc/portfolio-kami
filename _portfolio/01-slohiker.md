---
layout: post
title: SLO Hiker
thumbnail-path: "img/slohiker.png"
short-description: The goal of the project was to build a hiking trail application.

---

{:.center}
![]({{ site.baseurl }}/img/slohiker.png)

## Explanation

Using AngularJS, I wanted to create an application that provided information about hiking trails in the San Luis Obispo area.

## Problem

In addition to the creation of the application, the following were required pieces of functionality. The ability for a user to…
* View the trails in the area
* See details about each trail
* Sort trails by difficulty, length and time
* See trailheads on the map
* Know the current weather and forecast
* Get directions to the trailhead

## Solution

I developed an AngularJS application and utilized UI router for the routing.

* View the trails in the area- I created a service to house the trail information. The trails were displayed using the ng-repeat directive on the home page template.
* See details about each trail- I passed state params indicating what trail the user clicked to the trail template which determined the content to display. The content was pulled from the previously mentioned service.
* Sort trails by difficulty, length and time- Since an array is required to sort, but I was using objects, I setup a filter to allow the trail objects to be sorted. Plus, I created a method that provided information to the filter on what it should sort by based on the users click selection. Since I needed a number to sort by for time but didn’t want to display it in minutes to the user, I created a filter to convert it to hours and minutes in the view.
* See trailheads on the map- I used the AngularGM module to create a map that showed the trailhead locations on a google map. This required adding additional script tags to the module and googleapis, adding functions to the home page controller, adding the html binding code in the template.
* Know the current weather and forecast- I used a jQuery plugin called Simpleweather to show the current weather in my area and the five day forecast. I put it in a directive. I realize that using jQuery plugins is not usually done with AngularJS apps but I wanted the challenge of figuring out how to do it and liked the simplicity of the plugin.
* Get directions to the trailhead- I created a directive with a form that works with google maps to provide directions to a location you specify.

## Results

All user requirements were met.

## Conclusion

* Having solid user stories and wireframes helped maintain scope.
* Building the functionality first before diving into the front-end was a great way to execute a project and likely saved me a lot of time in the long run.
* Be careful about what modules you select to use and be sure the documentation is well laid out before committing to using it. I had difficulties with the AngularGM implementation in part because of limited documentation.
* Using services to hold information does work but is not scalable. I will likely convert it to Firebase in the future.
