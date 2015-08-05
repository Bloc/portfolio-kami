---
layout: post
title: Making Pong
tags:
- game development
- javascript
- canvas
---

Subtitle: Adventures in `<canvas>`.

I'm currently working through the [Bloc](http://bloc.io) front end development apprenticeship, an online/remote mentorship dev bootcamp. Now in the projects phase, I recently completed my first project from scratch: [Pong](/pong/). Yes, Pong.

[![ Screenshot of my Pong game ]({{ site.url }}/img/blog/pong-game.png)](/pong/)

During the Foundation stage of Bloc, the curriculum led me through building a nice little [music application](https://github.com/abea/bloc-jams). It's a cool project and I learned much, but they pretty much hold your hand through most of it, providing specific code to copy over in many cases. The projects phase is very different. Here, checkpoints are written more as [user stories](https://en.wikipedia.org/wiki/User_story), such as "as a player, I want to play against a computer opponent." They might provide links to relevant resources, but it's up to us to actually write the program.

I chose Pong from the list (Bloc students do three of these projects before their capstone, which is 100% self-directed) because all the others are AngularJS-based and it would introduce some Javascript and HTML concepts that wouldn't be elsewhere. I'm currently deep in Angular, but I did want to spend some more time with vanilla JS before doing so.

The first concept that this project offered was the HTML5 `<canvas>` element. `<canvas>` allows developers to generate images, animations, and interactive features (including games) directly in the browser using Javascript. Check out some really wild stuff [people built for fun on CodePen with `<canvas>`](http://codepen.io/search?q=canvas&limit=all&depth=everything&show_forks=false) to see what it can do.

Adobe Flash offers some of the same abilities, however it has several disadvantages. First, people need to download a plugin to use Flash, or else get a broken box with nothing but a puzzle piece to stare at. `<canvas>`, on the other hand, is native to the browser, so no plugin is needed.

![ Flash plugin missing warning ]({{ site.url }}/img/blog/pong-flash-missing.png)

In the last month or so, we learned that a number of significant vulnerabilities were exposed in Flash's software. A professional group of hackers who sell such secrets to governments [had their own data stolen](http://blog.trendmicro.com/what-you-need-to-know-about-the-hacking-team-flash-zero-day/0), including the Flash issues. Just yesterday, black hat hackers [used Flash vulnerabilities through Yahoo! ads](http://gizmodo.com/malvertising-attack-on-yahoo-is-another-reminder-to-dis-1721967056) to take over individuals' computers. Scary stuff. `<canvas>` wouldn't carry the same risks.

Finally, `<canvas>` is part of the web page's <abbr title="Document Object Model">DOM</abbr>. For non-coders, that means that it's part of the page itself and can interact with anything in the page. Flash objects are external files, so that's not really the case beyond simple interaction like starting the Flash video.

Next, this project involved learning about keyboard interaction and basic game construction with Javascript. Most Javascript interaction that I’d used before involved clicking or dragging elements with the mouse. I was aware of the key codes for each keyboard key, but hadn’t used them yet. This project toured me first through using [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) for its simple naming (e.g., ArrowUp and ArrowDown). I then learned about the inconsistancies with that and quickly switched to [keycode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) then jQuery’s [which](https://api.jquery.com/event.which/) for jQuery-driven browser compatibility.

Computer <abbr title="artificial intelligence">AI</abbr> was probably the most fun element of this project. The AI for my Pong game is extremely simple, but it’s enough to make the game challenging but beatable. Essentially, the ball will fire off at a randomized angle and speed (within parameters). It will then speed up slightly with every hit on a paddle. Once the ball exceeds a preset speed, the computer will no longer be able to keep up perfectly. You’ll then notice computer hits no longer in the center of the paddle until it misses completely. The game ends with a full screen message when you or the computer gets 11 points.

While this AI is simple, writing code to make a computer element interact with me “imperfectly” was exciting and felt very cool when done. The same can generally be said for generally programming a game. I now can imagine how many casual games like  [Flappy Bird](http://flappybird.io/) could be written.

Game development doesn’t yet hold too much appeal to me as a career, in part since I generally avoid playing casual (read: addictive) games. Regardless, Pong was a great first project to build for learning a couple of important concepts and getting some hours in with vanilla JS. I can think of a few updates to my Pong game I might tackle after I get through other projects, but for now it’s a totally playable, fun game that I can say I built myself.

## [Please enjoy!](/pong/)