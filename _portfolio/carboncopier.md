---
layout: post
title: Carbon Copier
thumbnail-path: "img/blocjams.png"
short-description: A Zendesk app that CCs end-users automatically.

---

{:.center}
![]({{ site.baseurl }}/img/blocjams.png)

## Overview

**[Carbon Copier]()** is a Zendesk app that helps CC end-users when tickets are created for a specific organization or requester.

## Installation

When installing, make sure your Zendesk subdomain, email and an API key are filled in correctly. As part of the installation process

## Using Carbon Copier

First pass at building the site relied on vanilla Javascript. It was a great exercise, and an excellent learning opportunity to dive into event listeners. The site was refactored using jQuery, with some added functionality thrown in beyond the original specifications (e.g. hiding the play bar until the first song is playing). Music playing is built on the Buzz library.

## Known Limitations

The User and Organization custom fields can accept comma separated email addresses or User IDs. Email addresses are easy to use, but if you change that end-user's email in their Zendesk profile, it won't change the value of their email address where it shows up in the User or Organization custom fields.

If you uninstall the app, the custom fields installed by the app will be removed, and the values you've entered on Organizations or Users will be lost.

## Support

Have any issue? [Email me](aviwarner@gmail.com).
