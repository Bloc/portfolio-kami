---
layout: post
comments: true
title: Learning About JSON on the Fly While Interviewing
---

So I've been on the job hunt starting towards the end July. It's been a couple months now, and the experience has been a lot of things. It has been trying at times when I get rejections or no responses at all. Also it has been exciting at times when I do research on companies and actually get to hear back from a few about interviewing (finally!). Recently I had an interesting experience during the technical phone screen interview where I was asked to request data from an API and basically pass it through and show it on my hypothetical company's site. The API was from SpaceX and it contained information about their latest launches [here](https://api.spacexdata.com/v1/launches/latest). I was allowed to Google and use any resources I would like (which totally saved me by the way).

For some this might seem like a piece of cake while others might find this task daunting. I was in the latter camp. I've done some work with APIs before when I built a gem that accessed Bloc's API, so I wasn't completely lost. Admittedly though I was a bit rusty because that was 2 months ago which seems like a lifetime when you've had a baby in between. The extra challenge of having to display the API data on my site threw me off. Also there was the whole pressure packed situation where you're interviewing and someone is basically watching you fumble around. That and there's the whole we only had 20 minutes left in the interview to do it! I learned a ton through this experience and definitely understand JSON and APIs a lot better than before I had this interview!

My interviewer was very kind and dropped hints here and there to lead me in the right direction. The first of these hints was asking me if I had ever used HTTParty before. That immediately rang a bell because I used it before. I was like "YESS!...but hmm let me see how to use that again..."

I started my application as a basic Rails 4.2.5 app with a Welcome controller and index and about views. I installed and used the HTTParty gem to get the JSON from the API. JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format
and is "self-describing" and easy to understand. While JSON uses JavaScript syntax, it is language independent because it is text-only and can be read and used as a data format by any programming language. Below is the code from my Welcome controller.

{:.center}
![]({{ site.baseurl }}/img/json_welcome_controller.png)

In the first two lines I require HTTParty and json. For the index method, the response from the API is stored as "response" following the instructions from the HTTParty documentation. In lines 9-13 I created a few conditional error responses in case there were issues with the request to the API. The error responses are written in JSON and I also learned that I needed to add `render json:` each time. I rendered the JSON in the index view by first assigning the parsed JSON response to "@launches" in line 15. In the index view I looped over @launches as shown below:

{:.center}
![]({{ site.baseurl }}/img/json_index_view.png)

The final result with the JSON shown in the browser in the view:

{:.center}
![]({{ site.baseurl }}/img/json_sampleapp.png)
