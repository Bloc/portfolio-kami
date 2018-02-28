---
layout: post
title: The final journey
excerpt: The last steps with Bloc were funny enough a hiking trail site.

---
The final steps of my journey with Bloc were built on the many steps I had taken before. I mean this both figuratively and literally. The capstone project I choose was a hiking trail website, built on all that I had learned along my way with Bloc and my own sweat hiking these trails so I had the content. So, what more fitting way to describe it then as a hiking trip.

**Getting ready**
Just like for a long hike I needed to have the proper items packed and organized. I knew I wanted to provide useful information about trails in my area. The question was how to best do that. To get inspired I looked at some other sites and thought about what I want to know when I am looking at a new trail. I determined my target audience and wrote user stories to clearly outline the goals.

**Planning the route**
With a properly organized pack it was time to map the trail. How would I get from content to creation, what would that look like? I wanted to have a simple, clean design and to make it easy to use on any device. I created two wireframes one for the home page and one for the individual trail pages. With content and wireframes in hand it was time to go to the trail.

**Base of the mountain**
You have to start at the base before you start to climb. I originally wanted to build the site without a framework but after looking at the wireframes realized it begged to be built with AngularJS. Plus, I had enjoyed the Angular projects and was eager to try my hand at it again. Knowing this I went back to my user stories and determined the technical requirements. These included adding some additional modules, filters, directives and a plugin. I assessed what I was seeing in front of me on the trail.

**Starting the climb**
It was time to make the first climb. Step number one, get my AngularJS application up and running. I used the Bloc starter project to get going since I quickly learned there are many many options for how to start an Angular project and this one seemed clean and simple. I immediately installed UI-router to help with routing.

**Over hill and dale**
Now it was time to settle into the hike and the rhythm of steady progress. My site is meant to provide information, which means it needs to store that information somewhere. For my first implementation and to stay within scope for the time I had, I decided to create a service to hold my trail information. I do plan on implementing a database in the future though.

Time to add the additional functionality I wanted. This included linking to more details of a trail from the home page, a plugin for the weather (learned how to use a jQuery plugin in Angular for that), the map of trailheads (used a challenging third-party module AngularGM), directive for providing directions and sorting functionality for the trails using a filter.

**Views from near the top**
As I neared the top, it was time to take in some views. As it stood my site was a healthy individual but it wasn’t looking it. It was time to make it look as good as it felt. I choose to use bootstrap to learn more about this popular library and found it very useful. Love the grids. I started building and gradually little by little it came together into a great view.

**Summit**
It was time to see the world or in this case for the world to see my project. I deployed to Heroku and planted that flag (https://glacial-lowlands-51627.herokuapp.com/ ) .
