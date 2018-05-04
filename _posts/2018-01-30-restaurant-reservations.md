---
layout: post
comments: true
title: Creating a Reservation System
---

In my previous post I wrote about creating a restaurant website for my family's business. One of the user stories I set out to complete was creating an interface where users could make a reservation. For this I looked through various gems and ultimately decided on this [datetimepicker](https://github.com/Envek/jquery-datetimepicker-rails) gem because it worked with jQuery. One interesting thing I learned when installing it was that not all gems are hosted on https://rubygems.org/. In this case I had to use:
```
source 'https://rails-assets.org' do
  gem 'rails-assets-datetimepicker'
end
```
One of the frustrating experiences I had as well as my mentor was figuring out how to change the default formatting to display time in 12HR format rather than 24HR. I figured out that the datetimepicker was parsing and formatting the time and date displayed using PHP. I ended up going to the PHP manual [here](http://php.net/manual/en/function.date.php) to figure out how to change the date and time formatting. The result was this revision on line 42:

{:.center}
![]({{ site.baseurl }}/img/greatchina_timeformatting.png)

This is how the calendar/reservation form looks:

{:.center}
![]({{ site.baseurl }}/img/greatchina_reservation_form.png)

Next, I discovered the [strftime](https://apidock.com/ruby/DateTime/strftime) Ruby method to format the output of the arrival time.

```
<%= @reservation.arrival.strftime("%F - at %I:%M%p") %>
```
Now when a customer creates a reservation on the website, he gets this confirmation:

{:.center}
![]({{ site.baseurl }}/img/greatchina_reservation_confirmation.png)
