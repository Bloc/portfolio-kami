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

When installing, make sure your Zendesk subdomain (_not including *.zendesk.com_), email and an API key are filled in correctly. As part of the installation process, the app will create everything you need. One target, a trigger, and 2 custom fields (one for users, one for organizations).

## Using Carbon Copier

Using Carbon Copier is super easy. Add end-user emails or user IDs (comma separated) to the **Emails to CC** fields on any User or any Organization.

When a new ticket is created on that Users behalf, or as part of an Organization, any noted end-users will be added to the ticket as a CC.

This app creates a number of **non-editable elements** in your Zendesk instance (a User field, an Organization field, a Target, and a Trigger).

## Known Issues

### App doesn't add CCs

Go to 'Channels' > 'API' > 'Target Failures' and take a look at the failures there. The most common issue is an authentication error.

That suggests your _API key or subdomain change or were entered incorrectly on installation_. Changing them in the app setup after installation won't fix this, but here are steps to get it working again!

We're going to setup a new target & trigger:

1) If you haven't already, [generate a Zendesk API token](https://support.zendesk.com/hc/en-us/articles/226022787-Generating-a-new-API-token-)
2) Copy the token, and the email address you were signed in with when you generated the token.
3) Go to Settings > Extensions and create a new 'HTTP Target'
4) Use the settings below
```
URL: https://YOURSUBDOMAIN.zendesk.com/api/v2/tickets/{{ticket.id}}.json
Method: PUT
Content Type: JSON
Username: youremail@yourdomain.com/token
Password: Pasted API Token
```
5) Test the target to make sure it's working 
6) Go to your triggers, clone the trigger created by the app.
7) Open the new cloned trigger using below body for the target message: 
```
{
  "ticket": {
    "additional_collaborators": "{{ticket.organization.custom_fields.org_cc}},{{ticket.requester.custom_fields.user_cc}}"
  }
}
```
8) Deactivate the original trigger

This should work now! If it does not, go back to Target Failures and see if there are any new failures that have popped up, you might need to correct the Target Username and/or Password.

## Something else?

Have an issue not listed above? [Email me](mailto:aviwarner@gmail.com).
