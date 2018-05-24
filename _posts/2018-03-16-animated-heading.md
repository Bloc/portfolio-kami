---
layout: post
comments: true
title: Adding an Animated Heading Using CSS
---

For a while now I've been a little dissatisfied with how my home page has looked but couldn't pinpoint why. Perhaps it was the font looking too boxy or just the page itself looking a little too plain. Then I recalled a podcast I had listened to from CodeNewbie which was on the topic of web animation and how it can be used to enhance the user experience. The guest was Rachel Nabors who is a developer at Microsoft and has created several courses on the topic. You can listen to it [here](https://www.codenewbie.org/podcast/what-and-why-is-web-animation), I highly recommend it!

I decided to incorporate a little of that on my homepage to make it little more interesting and to draw attention to the technologies I've worked with (You can go back to the home page if you missed it!). I used the CSS fadeIn property to first have the title "Full Stack Developer" appear and then have each icon gradually appear one by one onto the page beneath the headline. I had six icons to work with, HTML, CSS, JavaScript, Angular, Ruby, and Rails. After finding quality images for each one, now began the work of incorporating them to the page.

```
    <div class="hero-full-stack animated fadeIn">
      <h1>Full Stack Developer</h1>
    </div>
    <div class="hero-skills animated fadeIn">
      <div class="html animated fadeIn">
      <img src="img/html3.png">
      </div>
      <div class="css animated fadeIn">
      <img src="img/css2.png">
      </div>
      <div class="javascript animated fadeIn">
      <img src="img/javascript.png">
      </div>
      <div class="angular animated fadeIn">
      <img src="img/angular.png">
      </div>
      <div class="ruby animated fadeIn">
      <img src="img/ruby.png">
      </div>
      <div class="rails animated fadeIn">
      <img src="img/rails.png">
      </div>
    </div>
```
I placed each element in a separate div and gave each one a unique class name to match as well as the classes animated and fadeIn (which is defined in the @keyframes rule at the bottom).

```
.hero-skills {
  text-align: center;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.hero-skills img {
  height: 60px;
  vertical-align: middle;
  margin: 1.5rem;
}

.hero-full-stack {
  animation-duration: 3s;
  animation-delay: .5s;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.html {
  animation-duration: 1s;
  animation-delay: 2.0s;
}

.css {
  animation-duration: 1s;
  animation-delay: 2.4s;
}

.javascript {
  animation-duration: 1s;
  animation-delay: 2.8s;
}

.angular {
  animation-duration: 1s;
  animation-delay: 3.2s;
}

.ruby {
  animation-duration: 1s;
  animation-delay: 3.6s;
}

.rails {
  animation-duration: 1s;
  animation-delay: 4.0s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

There is a lot of good information on animations at [w3schools](https://www.w3schools.com/css/css3_animations.asp). The important start point is using the @keyframes rule which I used to set the opacity of each element to change from 0 to 1 which creates the fading in effect. In each class I use the animation-duration property to define how long time the animation should take to complete. Since I wanted each image to appear one after the other gradually, I set the animation-delay property to increasingly larger values to set the delay for the start of the animation. For the .animated class, there is a animation-fill-mode property set to both. The animation-fill-mode property defines what values are applied by the animation outside the time it is executing. By setting this to both, it initially applies opacity: 0 and then finishes by having opacity set to 1.
