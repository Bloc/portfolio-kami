---
layout: post
title: Alexa 'Arsenal Trivia'
date: 2017-08-14 22:35:10 -0700
categories: alexa
---

## Introduction
I've always been fascinated about voice enabled technologies and devices such as Amazon Echo which are at the heart of it. I personally don't down the Echo but it must be awesome to order coffee pods or toilet rolls by saying a few words.So when Bloc offered me the opportunity to build Alexa skills as part of their internship,I jumped at it.

## Trivia Skill
My first Alexa skill involved buinding a trivia skill from the trivia skill template.The template leverages [AWS Lambda](https://aws.amazon.com/lambda "AWSLambda"), the [Alexa Skills Kit (ASK)](https://developer.amazon.com/alexa-skills-kit "ASK"), and the [ASK SDK](https://developer.amazon.com/blogs/post/Tx213D2XQIYH864/Announcing-the-Alexa-Skills-Kit-for-Node-js "ASK SDK"), while providing the business logic, multiple language support, use cases, error handling and help functions for your skill.I'm a massive fan of [Arsenal](https://en.wikipedia.org/wiki/Arsenal_F.C. "Arsenal") and thus building a trivia skill on the club I love dearly,seemed an easy choice.

Since I was utilizing a skills template,the setup and configuration of the skill in the Amazon developer portal was fairly stratight forward.You basically follow a sequence of steps to configure your skill -

1.**Define your intents**- In the context of Alexa, an intent represents an action that fulfills a user’s spoken request.Ex - StartIntent,StopIntent,HelpIntent etc.
2.**Define sample utterances**- Utterances are basically words to map to the intents.There will be many different ways to express the same request,and uttenrances help improve voice recognition for the abilities you add to Alexa.
3.**Create skill logic using AWS Lambda**- Download the [github](https://github.com/alexa/skill-sample-nodejs-trivia) repository and make changes as necessary.You will need to install and leverage the Alexa SDK.
4.**Upload Code**- Once you complete the changes for your trivia,you need to zip up the contents of the 'src' directory and upload it to the AWS Lambda management console.
5.**Test your skill**- Next,you add the Lambda function to your skill in the developer console,and then test the skill using the service simulator.
6.**Personalize your skill** - Edit the Skill Information tab in the developer console to personalize your skill with skill invocation name and icon.
7.**Publish your skill** - Spend some time here coming up with descriptions and full information on how to use your trivia skill.

## Conclusion
While working on the trivia skill using a skills template was fun,the challenging part was understanding the skill logic which goes behind understanding the intent,and building the questions and answer choices.Building and mapping custom slots with intents is also something I would like to explore.