---
layout: post
title: Powerball Simulator
thumbnail-path: "img/powerball.png"
short-description: A simple powerball simulator representing many games played over a lifetime.

---

{:.center}
![]({{ site.baseurl }}/img/powerball.png)

## Introduction

In the Fall of 2015 the Powerball lottery was gaining a lot of attention. This was because the grand prize was over a billion dollars. I created a simple powerball simulator to show people why playing Powerball is not a smart investment. I did this by creating a simple simulation in R.

Originally I created three different files. They all covered 3 different topics that I thought were interesting.

<h4><p>1. <a href = "https://github.com/dvcv/Powerball/tree/master/Powerball1" style = "color: #0070BB" target="_blank_">Powerball 1</a>: Why millionaires do not play powerball</p></h4>

This is a simple powerball simulater representing ONE single game of powerball where many quick pick tickets were bought.

<h4><p>2. <a href = "https://github.com/dvcv/Powerball/tree/master/Powerball2" style = "color: #0070BB" target="_blank_">Powerball 2</a>: Why you should not gamble on powerball</p></h4>   

This is a simple powerball simulater representing many games played over a lifetime. Assuming you played powerball about once a week for 100 years (52*100=5200) and played random numbers every time.

<h4><p>3. <a href = "https://github.com/dvcv/Powerball/tree/master/Powerball3" style = "color: #0070BB" target="_blank_">Powerball 3</a>: Why powerball ticket (1,2,3,4,5,+6) has the same odds as a quickpick</p></h4>

This is a simple powerball simulater representing many games played over a lifetime, where player 1 bought the same ticket (1,2,3,4,5,+6) and player 2 bought a quickpick. Assuming both players played powerball about once a week for 100 years (52*100=5200). Meaning player 1 played the same ticket (1,2,3,4,5,+6) and player 2 played random numbers every game.

You can find links to these original files by clicking on the hyperlinks highlighted in blue. They will take you to an example pdf and the original R code.

## Shiny

Using shiny I created an interactive experience so that anyone could simulate playing the game of powerball. You can find a link to the app by clicking <a href = "https://dvcv.shinyapps.io/Powerball/" style = "color: #0070BB" target="_blank_">here</a>. The original code can be found on my <a href = "https://github.com/dvcv/Powerball/blob/master/ShinyApp/app.R" style = "color: #0070BB" target="_blank_">github</a>
