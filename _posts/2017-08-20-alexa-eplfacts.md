---
layout: post
title: Alexa 'EPL Facts'
date: 2017-08-14 09:55:10 -0700
categories: alexa
---

## Fact Skill
My second Alexa skill involved building a fact skill from the _space geek_ skill template. The template leverages [AWS Lambda](https://aws.amazon.com/lambda "AWSLambda"), the [Alexa Skills Kit (ASK)](https://developer.amazon.com/alexa-skills-kit "ASK"), and the [ASK SDK](https://developer.amazon.com/blogs/post/Tx213D2XQIYH864/Announcing-the-Alexa-Skills-Kit-for-Node-js "ASK SDK"), while providing the business logic, multiple language support, use cases, error handling and help functions for your skill. I leverage my passion for football(soccer, as we like to call it in the U.S) to build a fact skill on the most popular football league - [English Premier League(EPL)](https://en.wikipedia.org/wiki/Premier_League "EPL").

## Set Up
Since I was utilizing a skills template, the setup and configuration of the skill in the Amazon developer portal was fairly straight forward. Here is a brief description of the steps needed -

- **Define intents**- In the context of Alexa, an intent represents an action that fulfills a user’s spoken request. Ex- StartIntent, StopIntent, HelpIntent etc.
- **Define utterances**- Utterances are basically words to map to the intents. There will be many different ways to express the same request, and utterances help improve voice recognition for the abilities you add to Alexa.
- **Create skill logic using AWS Lambda**- Download the [github](https://github.com/alexa/skill-sample-nodejs-fact) repository and make changes as necessary. You will need to install and leverage the Alexa SDK.
- **Upload code**- Once you update the data with the facts relevant to your app, you need to zip up the contents of the 'src' directory and upload it to the AWS Lambda management console.
- **Test your skill**- Next, you add the Lambda function to your skill in the developer console, and then test the skill using the service simulator.
- **Personalize your skill** - Edit the Skill Information tab in the developer console to personalize your skill with skill invocation name and icon.
- **Publish your skill** - Spend some time here coming up with descriptions and full information on how to use your trivia skill. Detailed information on Alexa interaction will result in better user engagement.

## Lessons
After I submitted my skill for certification, I received a rejection from the Alexa team regarding the usage of _invocation name_ for the skill -

```
Your skill does not meet our invocation name requirements for formatting. The invocation name must contain only lower-case alphabetic characters, spaces between words, possessive apostrophes (for example, “sam’s science trivia”), or periods used in abbreviations (for example, “a. b. c.”). Other characters like numbers must be spelled out. For example, “twenty one”. 

Actual Invocation Name: epl facts

Expected Invocation Name: e.<space>p.<space>l.<space>facts => e. p. l. facts

```
An important point to note before you submit your invocation name and example phrases. A good practice would be to review the [documentation](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill?ref_=pe_679090_102923190_pe_679090_102923190%23Invocation%20Name%20Requirements "invocation name") as well.