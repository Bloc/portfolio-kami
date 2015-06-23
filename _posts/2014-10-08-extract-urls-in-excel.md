---
layout: post
title: Extract URLs from linked text into new column
tags:
- stuff I searched for
---

*First in my imagined series, “Stuff I searched for,” aka “Posts with boring titles that may hopefully come in handy for someone someday.”*

*TL;DR: [Get the URL from an Excel Hyperlink](http://blog.contextures.com/archives/2010/12/13/get-the-url-from-an-excel-hyperlink/) by Debra Dalgleish*

I’m the internal lead for a major website redesign and rebuild at [Oceana](http://oceana.org). One part of that process has involve taking a hard look at all existing content on our website and figuring out what to do with it all. Once that was done, we could use that as a master list to (in most cases) repurpose the previous versions of pages for the new site[^1]. Some XML sitemaps may include the page names (important for organization), but ours doesn’t.

The first step was to get the full list of pages. Our (other) sitemap page worked for that—essentially a menu tree. Once that was copy-pasted into an Excel doc, since Google docs stripped the hyperlinks, I needed a way to pull the URLs out into a new column. 

*[CUE INTERNET SEARCHING MUSIC]*

It’s worth noting here that I foolishly tested out of Excel class in undergrad, so I need basic step-by-step instructions for anything more complicated than simple formulas. That’s what I found with [Get the URL from an Excel Hyperlink](http://blog.contextures.com/archives/2010/12/13/get-the-url-from-an-excel-hyperlink/) by Debra Dalgleish. The bit I was looking for is under the heading, “Extract Address from Hyperlink.”

In short, it involves creating a VBA module which allows you to use a new formula, or macro—hlink() here, but it could be anything you assign. The VBA code:

```
Function HLink(rng As Range) As String
‘extract URL from hyperlink
‘posted by Rick Rothstein
  If rng(1).Hyperlinks.Count Then HLink = rng.Hyperlinks(1).Address
End Function
```

If you, like me, skipped the class where we learned to make Excel Macros, [this would be your cheatsheet](http://office.microsoft.com/en-us/excel-help/create-or-delete-a-macro-HP010342374.aspx). After that, just put formula `=hlink(B1)` (to pull the URL from cell B1) into a new cell, and you’re good to go.

There are probably other, better ways to accomplish what I was trying to do. Maybe even with my level of experience. Please share those below.


[^1]: Pages are not included in our migration plan.