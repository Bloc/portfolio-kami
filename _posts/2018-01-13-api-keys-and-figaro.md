---
layout: post
comments: true
title: Passing API keys When Using Figaro
---

My first job/client as a freelancer has been naturally to help out my family. In this case it involves building a website for my parents' Chinese restaurant which they've owned and operated for 30 years! What better way to show my appreciation for their support than to build them a much needed website.

The subject for this post is when I trying to incorporate a map from Google Maps to indicate to a visitor where the restaurant is located. Google provides a very handy dandy tutorial on how to do this [here](https://developers.google.com/maps/documentation/javascript/adding-a-google-map). I followed the tutorial which was pretty straightforward and got to the part where I had to get an API key. Well for security purposes, an API key should never be stored in a public repository like GitHub. For this purpose, I use the [Figaro gem](https://github.com/laserlemon/figaro) which basically allows you to store your API keys and other sensitive information in your code without having it stored publicly for everyone to see.

At the bottom of your HTML the Google tutorial says to pass this script which will make the API call
```
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
```
I got stuck on how to pass an ENV variable into a script tag. Thankfully a quick Google search yielded me with this answer on StackOverflow [here](https://stackoverflow.com/questions/36415073/how-to-pass-an-env-variable-into-script-tag). Following the answer I created a `GOOGLEMAPS_API_KEY` variable in Figaro and passed it through my script tag like this:
```
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=<%=ENV['GOOGLEMAPS_API_KEY']%>&callback=initMap">
</script>
```
It worked and now I have a beautiful Google Map on the Contacts page!
