---
layout: post
title: Carbon Copier
thumbnail-path: "img/cc_ticket_view.jpg"
short-description: A Zendesk app that CCs end-users automatically.

---

{:.center}
![]({{}}/img/cc_ticket_view.jpg)
_
## Overview

**[Carbon Copier](https://www.zendesk.com/apps/support/carbon-copier/)** is a Zendesk app that helps CC end-users when tickets are created for a specific organization or requester.

## Installation

When installing, make sure your Zendesk subdomain, email and an API key are filled in correctly. As part of the installation process, the app will create everything you need. One target, a trigger, and 2 custom fields (one for users, one for organizations).

## Using Carbon Copier

Using Carbon Copier is super easy. Add end-user emails or user IDs (comma separated) to the **Emails to CC** fields on any User or any Organization.

When a new ticket is created on that Users behalf, or as part of an Organization, any noted end-users will be added to the ticket as a CC.

This app creates a number of _non-editable elements_ in your Zendesk instance (a User field, an Organization field, a Target, and a Trigger).

## Known Limitations

The User and Organization custom fields can accept comma separated email addresses or User IDs. Email addresses are easy to use, but if you change that end-user's email in their Zendesk profile, it won't change the value of their email address where it shows up in the User or Organization custom fields.

If you uninstall the app, the custom fields installed by the app will be removed, and the values you've entered on Organizations or Users will be lost.

## Support

Have any issue? [Email me](mailto:aviwarner@gmail.com).
