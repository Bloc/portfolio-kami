---
layout: post
title: Safe Sass Extending or How I learned to stop worrying and love placeholder selectors
tags:
- Sass
- Front end development
- web development
---


I love [Sass](http://sass-lang.com/). My feelings on sass (lowercased) are more complicated, but that’s another story. Sass, the CSS preprocessor *, has a huge suite of built in tools to make theming easier: mixins, variables, functions. And extends.

Extends are a great tool to let me write a rule once and reuse it many times. They’re written as something like:

    %dark-blue-bg {
      background-color: darkblue;
    }

    .blue-box {
      @extend %dark-blue-bg;
    }

    .another-blue-box {
    	@extend %dark-blue-bg;
    	border-width: 1px;
    }

Nothing too crazy. And it’s worth noting that the first rule will rarely be directly next to places where its being extended in this example.

This all compiles to:

    .blue-box,
    .another-blue-box{
      background-color: darkblue;
    }

    .another-blue-box {
    	border-width: 1px;
    }

One rule touching two selectors from one master rule and two separate rules extending it. Great! It’s great for when a common property or set of properties would be used repeatedly. Of course, that’s not the limit of `@extend`’s powers.

Let’s say instead that I had a `.btn` class for button styling. It’s sprinkled throughout a Sass file for when the button component is nested within other selectors and whatnot.

    .btn {
      padding: 4px;
      border: 2px $blue solid;
    }

    .form--wide .btn {
      margin: 0 auto;
    }

    .signup .btn {
      margin-top: 10px;
    }

We have special styles for when the button is in a wide form or in a signup form. Now let’s say I want to create a set of tabs ([example](http://www.zetaprints.com/help/wp-content/uploads/2009/03/tabs.jpg)) that I want to look similar to my button style. That’s easy! I’ll just extend the `.btn` class that defines its look.

The Sass:
    .tab {
      @extend .btn;
    }

Compiled CSS:

    .btn,
    .tab {
      padding: 4px;
      border: 2px #000fff solid;
    }

    .form--wide .btn,
    .form--wide .tab {
      margin: 0 auto;
    }

    .signup .btn,
    .signup .tab {
      margin-top: 10px;
    }

Well, my `.tab` class matches `.btn`, but now I also have selectors for when my tab appears within a signup form or wide form. `@extend` not only inserts the new selector with the exact selector I’m extending, but also any other rule where the original selector appears.

This is no good for a couple of reasons. First, it adds to the size of my CSS file. If I were to continue this way for a whole project, I could have a hundred or more extra lines of code that serve no purpose whatsoever. The more rules that involve `.btn`, the worse it gets.

In addition, someone trying to read my CSS file would be confused and have a harder time reading what the actually functional rules are. This may not happen often, but just as a carpenter would like the fittings on her work look good to colleagues, so do we developers with our code.

## Enter the percent sign.
You may have noticed in my first example I used the percent sign  (`%`) rather than a period or number sign as with a normal class or ID. I came across this in a few places, including [a post from The Sass Way, that helped me really understand extends](http://thesassway.com/intermediate/understanding-placeholder-selectors)—maybe for the first time. By putting a percent sign in front of your selector, this becomes a **placeholder selector** and it *will not be included in your compiled CSS*. That’s huge.

Even that post promotes placeholder selectors mostly as a substitute for writing an extra class that you won’t use but that will be hanging out with all the real selectors in your compiled CSS. This is good, but an extra class or two in the CSS wouldn’t be the end of the world or even look that bad. There are other cases, however, where extending classes truly becomes a problem.

When I started at Singlebrook, my team leader cautioned against using extends at all. On a previous project they had over used extends and it created bloated stylesheets that were heavy for browsers and just a real mess. I could totally see how that could happen and was fine following his direction, but I kept coming up on situations where it seemed that extends were a good tool to use.

After reading the Sass Way post and thinking some more, I realized where we’d gotten into trouble and why the `%` sign could free us to use extends more.

## The complicated beauty of CSS frameworks
We’ve become very active users of [the Bootstrap front end framework](http://getbootstrap.com) at Singlebrook. We’ll override rules to match our projects’ designs, but right out of the box it includes classes we can drop in for buttons, column spacing, callout boxes, and way more. That `.btn` class is right out of Bootstrap. We’d do some overwriting of its properties to match our designs, then just give `button` HTML elements that class to theme them consistently.

Now, Bootstrap is built to cover pretty much every use case imaginable. Millions of people use it, so it has to. That means that the `.btn` class appears in roughly 34 different selectors across nine Sass files (e.g., `.input-group-lg > .input-group-btn > .btn`). My style override added at least one more to make the class look like my design. If I then want my `.tab` class to match the look of `.btn`, I now have `.tab` appearing probably 34 more times in the compiled CSS than I want. That’s terrible, but it’s not the extend tool’s fault. This practice used a few more times and suddenly I could have my 100+ lines of useless code.

There are a few solutions. One would be that we don’t overwrite `.btn` to set the look. Instead, we could use `.btn--design` for the button style. If we assume it will always be used with `.btn`, we can still take advantage of Bootstrap’s button-related rules for positioning and whatnot and maybe use `.btn--design` in extends elsewhere.

Even better, I could instead write a placeholder and extend that in `.btn`, `.tab`, and wherever else I want.

    %btn--design {
      [BUTTON APPEARANCE STYLES]
    }

    .btn {
      @extend %btn--design;
    }

    .tab {
      @extend %btn--design;
    }

The placeholder only has rules for the look of a “button” and only appears once in my Sass, so it’s all good. I’d end up with something like this:

    .btn, .tab {
      [BUTTON APPEARANCE STYLES]
    }

Then all the position and relational rules are totally separate and not shared at all.

## TLDR; sort of
My point here is that extends are great when used carefully. Just like mixins, which I’d say are easier to understand, extends let you write less verbose code in a much easier way with more consistent and maintainable results.

A few guidelines might help wrap this up nicely:

1. **If you’re writing a style you’ll want to extend later on, use the `%` sign to make the initial selector a placeholder**. It won’t be compiled on its own so it’s less likely to end up sprinkled about your Sass files. To be sure…
1. **Never create more than one Sass rule with a placeholder selector**. There will be exceptions, but if you want to reuse your placeholder selector frequently in extends, it has to have limited properties and contexts attached.
1. **When using a CSS framework, it’s almost never a good idea to extend a class from that framework**. Instead, write a placeholder selector and extend it in the framework’s class.
1. **Use a Sass linter**. I use and love [the **scss-lint** project](https://github.com/brigade/scss-lint). I set a few custom rules and definitely include the rule to only extend placeholders. My code editor calls me out every time I get lazy or sloppy.

If you and I follow these, we’ll both get much more out of extends with no unintended consequences. Sass, Less, and other CSS preprocessors allow us to do all kinds of styling code magic—duplicating rules, altering colors, using Javascript-esque functions in CSS. But as the Hulk’s babysitter told him, “with great power comes great responsibility.” Use of these incredible coding tools needs to be intentional and thoughtful if we want to get our intended results.

<br><br>

*PS.* It’s worth mentioning that in some cases, applying a set of properties would be better done through a mixin rather than an extend. [The Sass Way post](http://thesassway.com/intermediate/understanding-placeholder-selectors) hits on this briefly and it’s worth considering.

\* CSS preprocessors let developers use coding tools like those mentioned here to make their job easier, then run it through a compiling process. The result is normal CSS that web browsers can read.
