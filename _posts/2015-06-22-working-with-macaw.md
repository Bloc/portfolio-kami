---
layout: post
title: Love-hate working with Macaw
tags:
- web design
- software
youtubeID: 56wXV0oBTg8
---

Every now and again something comes along in your life that you pretty much can’t do without, but it drives you nuts nevertheless. Maybe a boyfriend or girlfriend (#butnotmywifesheisperfect), the beat up car that gets you to work, or… software.

I think this ends up being the case with software all too often. Microsoft Office (or even Windows itself) may have been the first major case of this in the United States. When I moved to a Mac many years ago, I loved Keynote and Numbers for how easy and … beautiful they made typically boring presentations and spreadsheets. Still, once in grad school and working on team projects I found myself pulled back into Office for Mac since that was the standard everything is built around.

## Which brings me to Macaw.

Far from the standard, which is really still Adobe’s Photoshop or possibly Illustrator, I was instantly intrigued by [Macaw’s](http://macaw.co) promise. It is built to be so many great things:
- a drag and drop *design* editor (not just wireframes) that is
- built to convert desktop designs into smaller breakpoints and then
- export solid HTML, CSS, and Javascript for design delivery or even conversion to production code.

I have enough comfort with Photoshop to know a few things. First, that I’m capable of basic image manipulation to produce web-ready graphics. Second, I’m a developer first and know several great designers of whose skills I’m regularly in awe. Leveling-up to the point of producing high-quality web designs is a significant undertaking, but when doing solo jobs I need to get over that hurdle. And maybe most importantly here, that the concept of producing the same design in multiple static versions, only to have to edit each one every time a change is requested seems more intensive than it should be in 2015. Macaw is made to take care of those latter issues.

### Killer features

Once I really dove in, my experience designing in Macaw was both  amazingly simple and incredibly frustrating at times. To be fair, the same could be said for most learning processes (see: me and AngularJS right now). The Macaw toolset is very recognizable as a mix of photo editor tools, wire framing tools,   and common WYSIWYG editors. Smash Pixelmator (my PS alternative of choice), Omnigraffle, and CKEditor together and the aftermath is right there on the left bar.

![Macaw toolbar detail screenshot]({{ site.url }}/img/blog/macaw-regions-tools.png) 

Varying by the element you’re working on, the right bar is a variety of attributes that are familiar to anyone with intermediate experience with CSS: borders, padding, width and max-/min-width, typography options, and nearly every other typical attribute. You can also add classes, ids, and rename elements, for example as HTML5 elements such as *footer* or *aside*. All of that is really cool and easy.

![Macaw element attributes detail screenshot]({{ site.url }}/img/blog/macaw-regions-attributes.png)

There are other nice tools that are included, such as:
- global styles that can be created and “stamped” onto elements so later changes can be applied several places at once;
- creation of components, or grouped elements that can be saved in a library for use on other pages;
- static (default) as well as fixed and absolute positioning, for when you need to break something out of the element flow;
- custom breakpoint setting that you can change later without changing the layout in that breakpoint;

I know there are lots of other tricks that I’ve yet to discover or make good use of as well.

### Crazy element interaction

My biggest frustrations with Macaw came through element interaction. There were several instances where I moved an element and other elements that were not even within the same container jumped out of place. This video is one of those examples, where I moved an element in the document outline into a container, causing a text block and signup form to inexplicably move down:

{% include youtubePlayer.html id=page.youtubeID %}

The good news is that I learned a few tips to make things go smoothly (credit to [Nichole Burton](https://twitter.com/burtonnichole) for passing along her experience):
1. When adding an element to a container, double-click into that container first. If you’re looking at the outline view on the right, you’ll know you’re within that container when only its children are bright with all else faded grey.
2. This is sort of a 1a, really. If you shouldn’t just drag things into an element to make it a container (see [Macaw documentation ](http://docs.macaw.co/#drawing) for the terminology), then how do you make the container in the first place!? My go-to method is now to drop in some text or other small block (often text) in the area where I want the container to be. I then use the container tool to draw the block *around* that small block. Once the container is sized, you can add things in there pretty easily and delete the starter block if you don’t actually need it.
3. Create components in another page. I was designing a blog post template in this case and wanted to use my client’s real blog post in the design to be most true to his use-case. It may seem simple, but a typical professional blog post has headers, images, paragraphs, block quotes, and more. In Macaw, each of these is its own element that have to be drawn together into what looks like a blog post. 
Rather than struggle through this complex region where it could unexpectedly interact with other page elements, I created the blog post content on a new page, saved it as a component, and then double-clicked into the post region and dragged the component into the post region. I did this with a few other components as well. For example, I made one sign-up form, saved it as a component, and added it to two different regions of the page.

4. As mentioned above, make good use absolute or fixed positioning. You can see social media links in my menu bar in the video above. At a smaller width, I had those pop down into the photo banner as the main menu went full width. To keep the published code looking right, I didn’t want to recreate the icons in the banner and use show/hide on the separate groups. 
Instead, the smaller-width sets the icons to absolute positioning and has them pulled just out of their parent container. Absolute positioning means that they’re not going to disrupt the site logo and everything is in its place. Ultimately this may be close to the solution in actual CSS, so it’s an instructive moment as well. 

## Coming to a point
I’m not done with this project and, as much as I had trouble along the way, I’m certainly finishing this one with Macaw and will very likely continue using it. I’ve heard great things about [Sketch](http://bohemiancoding.com/sketch/), but without the responsive feature and exporting browser-ready demos, I’m not tempted to put time into it. Most of my big problems with Macaw were solvable. Some do seem like issues that should be addressed, but  at least I know how to work around them for now.

Macaw is about to come out with its second version soon, dramatically called [Macaw Scarlet](http://scarlet.macaw.co/). If you are tempted to try this tool, either buy now and take advantage of the current $100 discount or wait and get what looks like it will be a much improved tool. Either way, as a developer with decent design sensibility but minimal Photoshop chops, this looks like it’ll be a valuable tool for me for some time to come. More thankfully, it’s also the first major entry in a new class of web design tools of which I hope to see many more to come.