---
layout: post
title: Bloc Pong
thumbnail-path: "img/blocpong.png"
short-description: The goal of the project was to build a basic version of the old arcade game Pong using JavaScript.

---

{:.center}
![]({{ site.baseurl }}/img/blocpong.png)

## Explanation

I was asked to create the Pong replica using pure JavaScript and the HTML5 canvas element.

## Problem

In addition to creating the functionality I needed to create at page that could host the game. The specific functionality required was...

* To vary the speed of play and angle.
* The ability for a player to control the position of a paddle with arrow keys.
* That the ball bounces off the paddles and two sides of the table.
* The creation of a mildly intelligent computer opponent.
* To track and display the score live.
* To end the game after a player scores 11 points and display a message to the player about whether they won or lost.


## Solution

* Utilized HTML, CSS and Google fonts to create the page
* Used the HTML 5 canvas element to create the table, paddles and ball along with object prototyping.
* Created an animate function that calls the requestAnimationFrame method on the window object to continuously render and by extension animate the game.
* Used an event listener and event.code to recognize up and down arrow actions
* Wrote multiple if statements to recognize collisions and redirect as needed or add to score
* Used DOM selectors and methods to manipulate displays


## Results
All user requirements were met. In addition, I added:
* A navigation with links to two additional pages that provide information about the game and how to play it.
* Media queries that changes what is displayed on small and medium size screens to let players know they need to use a larger screen to play.


## Conclusion
* The requestAnimationFrame method is a good way to efficiently animate using JavaScript and requires writing as DRY a code as possible to reduce duplicate animations.
* HTML 5's canvas element has a variety of possible applications.
