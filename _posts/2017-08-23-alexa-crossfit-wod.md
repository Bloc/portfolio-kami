---
layout: post
title: Alexa 'CrossFit WOD'
date: 2017-08-23 21:30:10 -0700
categories: alexa
---

## CrossFit
The premise for my third Alexa skill is based on something I'm super passionate about, and thats [CrossFit](https://en.wikipedia.org/wiki/CrossFit "CrossFit wiki"). I decided to take up CrossFit about an year ago and it has changed my life. Before my CrossFit days, my workout routine was moderate - I used to jog maybe once a week, with a couple of days of yoga and a hike or two thrown in between. The mundane and routine workouts were not proving to be much effective and I was losing interest pretty fast. And thats when I decided to try something new. When I took my CrossFit trial class which lasted about 20 min, I was out of breadth by the end of it and the coach actually had to sit me down. Oddly, that was the moment I officially made the jump to _CrossFit_.

_CrossFit_ has brought an amazing transformation in my mind, body and soul. At the end of class, the feeling of having given it all in the "CrossFit battlefield", is unparalleled. If I had to list 3 reasons as to why I adore CrossFit -

- **Intensity** : The high intensity interval training is absolutely magic. Or most times, a freaking nightmare. But it gets you the results you've craved for.

- **Community**: I would like to think Crossfitters actually belong to a _cult_. Well, they do not but I would like to _think so_. Doing something intense and physically exhausting binds _the cult_ together.

- **Work out of the day**: WOD(as in pod) as we like to say. A different WOD everyday keeps it interesting and engaging. You could be doing weightlifting one day, indoor rowing another day, and handstand push ups or strict pull ups the third day.


## Designing a skill to get the WOD
My skill is going to be retrieving the work out of the day(WOD) from my local CrossFit gym. We're living in a changing world where we've progressed from Desktop -> Mobile -> Voice. It would be super convenient for CrossFitters to read their daily WOD routines from an Alexa enabled device, rather than pulling up the WOD on their desktop or mobile. Our gym makes use of the _Wodify_ app to publish everyday workouts and results. I'll be making use of the _Wodify API_ to retrieve the WOD details.

## Design Steps 
- **Intents:** I have defined one custom intent - _GetWODIntent_ to retrieve the WOD from the Wodify API. I'll also use the 3 default intents including StartIntent, CancelIntent and HelpIntent.

- **Sample Utterances:** Utterances are basically words to map to the intents. I've defined close to 50 different utterances for the _GetWODIntent_. All of the utterances can be found [here](https://gist.github.com/praveenyr/705a67dc730a46247e0dbf7cdb4034e9 "utterances") 

- **Visual Representation of the Menu/Model:** The following diagram depicts a flow of information from the user to the Alexa enabled device and back. In my case, the two cases which need to be handled by alexa include:

  1. Respond with WOD details if a CrossFit WOD exists for the specific date
  2. Respond with 'No WOD available today' if no workout has been scheduled for the date.

  ![alexa wod](/img/alexa-wod.jpg "Alexa Voice Model")
 

  


 

  

