---
layout: post
title: My "Integration" journey
date: 2017-16-23 09:44:10 -0700
categories: general
---

## The beginning...
I was first introduced to integration technologies - ([TIBCO](https://en.wikipedia.org/wiki/TIBCO_Software)] to be specific, when I started my first job as a software engineer out of college in '03.I was part of a unit called "Enterprise Solutions" in my company which supposedly dealt with the latest and cutting edge technologies in the market.Keep in mind those were the days where terms like   [ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning) , [ESB](https://en.wikipedia.org/wiki/Enterprise_service_bus) , [EAI](https://en.wikipedia.org/wiki/Enterprise_application_integration) were still new.All I knew was C,and some Java which we were trained on as part of onboarding. So TIBCO was a refreshing change, but little did I know that I would end up making a career out of it.

## TIBCO
TIBCO was founded by [Vivek Ranadive](https://en.wikipedia.org/wiki/Vivek_Ranadiv%C3%A9) in 1997. When I started dabbling in TIBCO in my nascent days,I distinctly remember one of my colleagues saying that TIBCO had "digitized" Wall Street.And that 90% of the trading floor runs TIBCO's software.I was fascinated.In the 80s,Vivek had noticed that the financial systems in those days had to deal with a ton of systems,databases/monitors and wires.A trader would collect a lot information from disparate systems and databases and eventually make a trade.Vivek sensed an opportunity and wanted to make the information available to the traders immediately.--

> "If you look inside a computer, there's a back plane, or bus, with cards that plug in to run the machine's functions. My idea was to create a software bus and plug applications into that." 

- Vivek Ranadive

Thats where the concept of a "bus" was born.The information bus would streamline the information from various systems and make it available "real-time".TIBCO's [Rendezvous](https://en.wikipedia.org/wiki/TIBCO_Rendezvous) was the messaging platform for the bus resulting in a true publish-subscribe mechanism for the "digitization" of Wall Street.

While TIBCO was founded on Rendezvous's success,it made its name in the early part of 21st century primarily on 3 products - 

- TIBCO [Business Works](https://www.tibco.com/products/tibco-businessworks)(BW) - the main service orchestration or "development" component 
- TIBCO [Enterprise Message Service](https://www.tibco.com/products/tibco-enterprise-message-service)(EMS) - TIBCO's implementation of [JMS](https://en.wikipedia.org/wiki/Java_Message_Service)
- TIBCO [Business Events](https://www.tibco.com/products/tibco-businessevents)(BE) - a complex event processing and rules engine

TIBCO has bought tens of companies in the past 15 years ranging from _Analytics, Security, Visualization ,Reporting, Cloud integration etc._ resulting in a vast expansion of the company's product suite and capabilities.But the core of its products have remained the same. I've been part of several TIBCO implementations over 10 years and BW and EMS are always at the heart of it.BE became popular in the early part of last decade when it revolutioned fraud detection and recognizing airline delays by responding to the critical events in real time.TIBCO called this **"2 second advantage"** and Vivek infact co-authored a [book](https://www.amazon.com/Two-Second-Advantage-Succeed-Anticipating-Future-Just/dp/0307887650) on the topic.

Vivek started an amazing company which survived the dot com crash and whose core products have stood the test of time.I've been involved with TIBCO products for over 12 years and have been amazed at the breadth and scale of what they can do.I have also learnt a lot about TIBCO's suite in all aspects - development,architecture,security,deployment,monitoring,devops,infrastructure and messaging.It has been a remarkable journey!

For more on Vivek,I suggest reading [this](http://www.newyorker.com/magazine/2009/05/11/how-david-beats-goliath) fascinating tale of how he coached his daughter's team of underdogs to a national basketball championship! And the crazy part - Vivek didnt know a thing about basketball!


## Mulesoft
Mulesoft was founded in 2006,when TIBCO probably had about 60% share of the Integration/ESB market. Over the years,the proliferation of social media platforms,mobile and IoT devices,[RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) webservices have led more and more organizations towards a [microservices](https://en.wikipedia.org/wiki/Microservices) based approach for designing and building applications.Mulesoft  with its API-led connectivity approach,has benefitted tremendously from this and as a result, is currently one of the hottest companies in the market. 

Mulesoft comes with the full gamut of products :
- a lightweight open source "Mule ESB" with prebuilt connectors and templates to integrate with a wide range of systems systems from legacy to social media
- a full lifecycle API management platform with API security,governance and integrated access management.
- an Integration Platform as service(iPaas) to integrate with cloud services as well as with on premise applications.

While its only been a couple of years since I started working with Mulesoft technologies,the experience has been great so far. The process of designing,development ,packaging and deployment of an API to Mule's propritery "cloudhub" platform(based on AWS) is easy and seamless.Most of the development is done using Mule's _Anypoint Platform_ which provides a collection of runtimes,tools and frameworks to make a developer's job easier.

The highly acclaimed Gartner firm has recognized Mulesoft as a "leader" in full life cycle API management in 2016 - which it defines as the planning, design, implementation, publication, operation, consumption, maintenance and retirement of APIs(see below)

![gartner-api-management](/img/cogniden/gartner-api-management "Gartner magic quadrant API management")

## To TIBCO or to Mulesoft

TIBCO has had to go through a few challenges in the last few years -

- The supposed tranformation of its core product Business Works to an eclipse based UI(BW 6.0) did not go well.As with any new product,customers have complained about bugs, issues and subsequent delays with the fixes.I suppose it was always going to be tough living upto the legendary BW 5.x.
- It was acquired by Vista Equity after an year of declining profits.
- TIBCO was stuck with an on premise SOA based ESB centric approach and fell behind the cloud-first API-led connectivity thinking.
- Its expensive licensing and subcription models primarily targeted companies with $500M or more in revenue.And so it was not a viable offering to small and medium enterprises who wanted to hit the ground running with much less overhead.

That being said,TIBCO's acquisition of [Mashery](https://www.mashery.com/api-management) from Intel in late 2015 has been a game changer and has put TIBCO back right in the mix of API market.Mashery delivers full life cycle API management capabilities and it well integrates with the rest of the TIBCO product line.

One of Mulesoft's primary attractions in its early days was its accessibility and cost to small and medium enterprises to quickly deploy and run APIs in production.However, with the proliferation of its API management plaform and IPass offering,that is no longer the case.I was recently part of a vendor tool evaluation for a customer for their API/integration strategy and as it turned out,the TCO for Mulesoft was on par with TIBCO,if not more.

Whether you chose TIBCO,Mulesoft or other industry leaders like Apigee,SoftwareAG,Layer7(CA),one thing is guaranteed - Focus has shifted toward API programs and their fundamental role in the execution of digital strategies, which includes getting value out of the API economy.

