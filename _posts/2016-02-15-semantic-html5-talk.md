---
layout: post
title: Talking Semantic HTML5 Structural Elements and IWP
tags:
- HTML5
- Front end development
- web development
- accessibility
- career
---


I've been lucky enough to be asked to speak on a few professional topics in my careers, but I don't think I found a talk I've given as interesting and useful as this one. A couple of weeks ago, I spoke to our local web development Meetup group about a pretty elementary topic: HTML5 semantic structural elements. It's a topic that most of we web developers probably think we know better than we actually do. Myself, I knew I'd learn from planning the talk, but I was surprised at the things I realized I was doing totally wrong.

## IWP

First, a quick note about [Ithaca Web People](http://www.meetup.com/ithaca-web-people/) (IWP). When I first decided I was going to make my shift into professional web development here in Ithaca, I knew that networking would be important. It's also something I really don't like to do. I searched for Meetup groups, knowing that they are a good place to meet like-minded people and connect around topics, including work.

I first went to our local Drupal group. It's a great small group, but really seemed more organized around back end developers. When I first went I was managing a Drupal site, but not yet developing them at all. The group wasn't the right fit.

IWP is specifically designed to have talks for both front end and back end developers. The group can skew more towards the latter as well and does trend toward advanced topics, but the organizers are aware of that and are working to be more inclusive and welcoming to more junior developers (like me!). This HTML5 talk is an example of that.

## Back to basics

Writing PHP/HTML templates and CSS every day gets you thinking a lot about doing things the "right way". I think the beauty of front end theming is in part that most of the technology is relatively simple. I'm not trying to write SQL queries that can handle millions of requests per minute or API hooks from scratch. Sure, there are simple versions of both of those practices, but a good deal of my work is using the two or three most basic languages of the Web.

Growing professionally could mean that I move more into Javascript frameworks or start in on back end languages. Alternatively (and what I find more interesting), I can go deeper into these more basic languages to make better use of everything they have to offer. What I love about this approach is that by building a mastery of the core languages, I can get more power out of them than I probably could by learning bits of many different disciplines.

## Semantic HTML5 and the talk

Accessibility is a huge issue in front end development right now. I absolutely recognized its importance long ago, but frankly I was intimidated. Accessibility covers all sorts of topics, but the one that shook me most was the concept of "roles" and accessible HTML mark up that help people using [screen readers](https://en.wikipedia.org/wiki/Screen_reader) (among others). [ARIA roles](http://a11yproject.com/posts/getting-started-aria/) and other techniques seemed like another confusing maze of dos and don'ts that threatened to once again make me feel like an idiot and charlatan.

That was until I read the eBay Tech Blog post, [How Our CSS Framework Helps Enforce Accessibility](http://www.ebaytechblog.com/2015/11/04/how-our-css-framework-helps-enforce-accessibility/). In it, Ian McBurnie wrote about how the eBay team wrote their CSS to force their HTML to be more accessible. Read the post for that whole story, but what it also showed me was how important semantic HTML is. Semantic markup means that the HTML elements have inherent meaning in and of themselves. For example, a `<button>` element indicates that this is an interactive element that makes something happen.

The post mostly discusses interactive elements such as buttons and tabs, but it got me thinking about the other semantic HTML elements. In particular, I wondered about all those structural elements that I only _kinda_ knew how to use well. It became clear that we can get such great accessibility gains from simply using the elements we've been given as they are intended! Long story short, I asked my co-worker and IWP organizer, Jared Beck, if they had done a talk about accessibility and a few months later I was the one up to talk about semantic HTML.

Reading [HTML5 Doctor articles](http://html5doctor.com/element-index/) and [the HTML element specifications](https://www.w3.org/TR/html5/sections.html) gave me a much better picture of how templates and HTML mark up can be written to better serve all people as well as make it easier for developers to read and update.

There's a ton to cover, and I'm not concerned enough about SEO to write it all out in a post at the moment, but please see the presentation below. [You can also go right to the presentation here](../../../assets/talk-html5/index.html) or [here to include speaker notes](../../../assets/talk-html5/index-with-notes.html) (they may overlap other content). I used [reveal.js](http://lab.hakim.se/reveal-js/#/), which should allow you to arrow through the presentation in the browser.

If you go through the presentation, I hope it shows you the power of these semantic elements. Accessibility is a huge topic, but it's amazing how much progress we can make towards it by just doing what we're already doing... but just a bit more thoughtfully.

<div class="embed-container embed-container--tall">
  <iframe class="revealjs--noteless" src='../../../assets/talk-html5/index.html'></iframe>
</div>
