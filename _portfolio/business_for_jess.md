---
layout: post
title: Blocipedia
thumbnail-path: "img/blocipedia.png"
short-description: Build a production quality SaaS app that allows users to create their own wikis.

---

{:.center}
![]({{ site.baseurl }}/img/blocipedia.png)

## Explanation

My first solo project was to create a website for a local small business that showcased their services, allowed potential customers to easily contact the company, and book appointments online.  I personally sat down with the business owner to figure out exactly what she was looking and drew up the first draft of the wireframes with her.  Once I had started the programming for this project I was in regular contact with the business owner through it's creation and continue to make myself available to her for any cosmetic adjustments or newly desired features she may want.



## Problem

In addition to some basic display pages to showcase the business services and a simple message page that forwarded to the owners business email this project involved booking appointments and keeping the business's schedule conflict free; because this is a small business that is owned and operated by a single individual she needed an easy way to block off afternoons or full days on the calendar for when she would not be available. An appointment calendar was new territory for me, especially after spending a day researching potential ruby gems and finally concluding that I'd have to build it myself.  

## Solution

For the base page nothing fancy was needed a welcome controller and a messages model hooked up with Sendgrid did the trick. It was when I got to the appointment calendar that I was unexplored waters and had to figure out the best way to implement it.  After two false starts I finally settled on utilizing the Ruby datetime class along with a series of functions that ensured there was not conflicting appointments and that appointments were never scheduled for when the owner needed the time for something else. Because of the three types of services offered each one is checked slightly differently for potential conflict and all check against scheduled time off.  The time off was implemented as another appointment type that only the logged in business owner can book, this made sure she knew of any already booked appointments that her desired time off may conflict with and give her the opportunity to reschedule them or her reason for needed the free time.

## Results

Starting with rspec testing was a great way to make sure that all of my conflict checking methods were working properly but booking and canceling hundreds of appointments in the developments environment, some of which with the supervision of my Bloc mentor and others with the business owner really allowed for the fine tuning of these methods as well as the calendar and conflict alert displays. Having the business owner be able to see the work in progress allowed us to catch potential scheduling issues like building in travel time that would not have been immediately obvious from a programing prospective.

## Conclusion

As my first project with an actual customer this project really let me learn the value of maintaining contact with the individual or group for whom the project is ultimately for.  The largest struggle for me during this project was the scheduling calendar, something that i at one point attempted to design without any ruby classes to assist me; in the end I was able to create this more simply and elegantly by using the ruby datetime class, something that further reminds me how amazing this language is and will serve to ensure that, going forward, I do my proper research into my available resources before trying to reinvent the wheel in my future projects.
