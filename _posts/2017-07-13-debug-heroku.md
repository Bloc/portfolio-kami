---
layout: post
comments: true
title: My Debugging Experience with Heroku and Git
---

The CodeNewbie twitter chat which I participate in on Wednesdays and Sundays was on the topic of debugging. Shout out to Code Newbie! If you don't know what Code Newbie is, you should definitely check it out whether you're a "beginner", "expert", or somewhere in between. Just go to Twitter and search "#CodeNewbie. It's a great community where people share their joys and struggles through the journey of learning to code. It has been 100% encouraging for me and hopefully will be for you as well.

Back to our story... so after this, of course I ran into a bug! Not a crazy complicated one, but one that highlights a simple process of debugging that solves a majority of the ones I run into because I'm not trying to do super complicated stuff. So I have a Ruby on Rails app deployed to Heroku called Bloccit (insert link!). I had created some updates to one of the views and was trying to push the new updates to Heroku. I ended up with this strange error:
{% include image.html
            img="img/debug1.png"
            title="Hmm...No such app???"
            caption="Hmm...No such app???" %}

It's important when running into bugs, not to get frustrated (though its tempting because we all want our code to work on the first try!). Read the error message and see if you can decipher what it's telling you. Sounds obvious, but after running into your 19th error of the day, the enthusiasm level can be a bit low.

I stayed calm and I remembered something I did before...I had changed the default name that Heroku gives your app to "bloccit-community". Remembering what you did since the app was last working is important (assuming you know what you were even doing)! I thought maybe this was the reason. Another useful method is to just google your error. Most likely you're not the first one to create this error. I googled "how to push to heroku after I changed the name" and lo and behold, the first result had the answer to my problem. <https://stackoverflow.com/questions/21941015/git-push-failing-after-heroku-app-name-change>

Someone had run into the same exact issue I was having. I followed the steps outlined in the answer...

{% include image.html
            img="img/debug2.png"
            title="check git remote"
            caption="First, check my git remote...it was the old one which had since been renamed." %}

{% include image.html
            img="img/debug3.png"
            title="replace git remote"
            caption="Next, remove the old git remote and replace it with the new one." %}

{% include image.html
            img="img/debug4.png"
            title="push the changes to heroku"
            caption="Push the changes to Heroku." %}

{% include image.html
            img="img/debug5.png"
            title="deploy complete"
            caption="Deploy complete, yay!" %}

You can see my latest updates to Bloccit here: <https://bloccit-community.herokuapp.com/>

Stack Overflow is a great resource to use among many of the other vast resources on the internet. It can be a little overwhelming, and I've heard horror stories of people asking questions and coming away feeling humiliated. I've avoided that entirely because my questions have already been asked in some form. Don't be scared away by errors. Everyone runs into them. Heck, even my mentor when he tries to show me stuff gets stuck on things. If he's been a senior dev for many years and runs into bugs he can't solve right away, I'm in good company.
