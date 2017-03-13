---
layout: post
title: BlocJams
thumbnail-path: "img/blocjams.png"
short-description: BlocJams is a Spotify replica for users to discover new music.

---

{:.center}
![]({{ site.baseurl }}/img/blocjams.png)

## Explanation

Bloc Jams is the first project I have been exposed to in my Part-Time Web Developer Track at [Bloc](https://www.bloc.io). It's designed to be an introduction project to get students familiar with frontend web development and the process it takes to develop a functional web app. We go through the essential steps from setting up the layout with HTML, adding style and responsiveness with CSS, and implement interactivity with JavaScript.

## Problem

The most difficult problem I faced in this project was using JavaScript for interactivity, more specifically traversing the DOM in vanilla JavaScript and then using jQuery to add functionality to all the features that allow a user to play, pause, skip and select previous tracks from an Album view page. 

> Traversing the DOM initally was tough for me, understanding how all the Nodes connected and using the right termanology for selecting parent, children, and sibling nodes was something I had little experience with. There were also alot of selectors that I was not aware of and knowing when to even use them was a challenge.

> jQuery made life a little easier when it came to selecting elements on the DOM and adding functionality to them, however there was yet again a new set of key words and functionality to understand. Throughout the project we had to implement many new functions that allowed simple interaction to the tracks that were provided. Making sure the data was correct when you pressed play and even going to the next track to get that data took many steps, more than I could have imagined if I was just a user.

## Solution

The way I got to understanding these problems were to actually step away from the project and practice DOM traversing and jQuery manipulations on simple little programs using [jsfiddle](https://jsfiddle.net/). Also my mentor really helped me break each section of the code into steps that were easier to understand instead of trying to tackle the whole thing at once.

## Results

Then end result was the completed project with a home page, a collection page for all the albums, and a specifc album page with a list of all the tracks on that paticular album. With each album page there is a seek bar at the bottom of each page so when the user clicks play on a track it will display it's total time and time passed. This also gives the user the ability to scroll to a particular part in the track with ease. After the final product was working to design it was time to [Deploy](http://luse-tracks.netlify.com/).

## Conclusion

This was a good primer project that gave me a good look at the life cycle of a frontend project. It reinforced simple tasks like having a good Git workflow to using CSS styling. It also taught me much more JavaScript than I could have expected, the smallest features are alot more complicated than they seem. Discovering jQuery and how simple it makes selecting DOM objects to manipulate them to however we see need, but understanding its just a library and the same actions can be solved just using vanilla JavaScript. I actually plan to update this project for my own personal use, having it show case my own DJ mixes that I do has a hobby.