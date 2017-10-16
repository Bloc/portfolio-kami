---
layout: post
title: Bloc Jams
thumbnail-path: "img/blocjams.png"
short-description: Bloc Jams is a music player that only plays one album that I really really like.

---

{:.center}
![]({{ site.baseurl }}/img/blocjams.png)

## Explanation

**[Bloc Jams](https://jams.aviwarner.com)** is my first decent web project, and is a full functioning music player. Key features are play, pause, skip and volume control.

## Problem

There are a ton of music players out there. Most do a pretty good job. Of course, it's tough to decide what to play with so much selection. My goal was to build a functional, responsive music player that cut through all the garbage out there and just focused on playing a single, great album.

## Solution

First pass at building the site relied on vanilla Javascript. It was a great exercise, and an excellent learning opportunity to dive into event listeners. The site was refactored using jQuery, with some added functionality thrown in beyond the original specifications (e.g. hiding the play bar until the first song is playing). Music playing is built on the Buzz library.

## Results

There were a few functions that ended up notably challenging, and a couple outstanding bugs that have yet to be resolved.

Functionality around the forward/back button was particularly tricky but in working through those issues, learned a ton about jQuery.

Playback continues to error out if the forward or back button is pressed in succession too quickly. The root cause is related to the Buzz library and that a pause function is called before the promised play function has begun.

Seeking results in an unpleasant fast-forward/skipping sound. I'll refactor at some point to continue to play normally during seeking, then play at the new time when the mouse button is released.

## Conclusion

A fun project to work on, and I'm looking forward to refactoring it using AngularJS.
