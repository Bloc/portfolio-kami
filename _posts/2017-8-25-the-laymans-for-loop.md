---
layout: post
title: The Layman's For loop
---
In the beginning of learning JavaScript I came across the for loop.  I had no idea how powerful and a staple of JavaScript it was. For people who do not code a for loop is a javascript statement. And it looks like this

{% highlight javascript %}
	for (var i = 0; i < 10; i++) { }
    {% endhighlight %}

So let's break it down. `for` is just stating it is a `for` loop and not another statement.  Then we have `(` are open parenthesis and closed `)` parenthesis. Inside them is where the magic take place. The `var` is  a JavaScript variable and the `var` is how you declare it. We have are variable and it is named `i`. You can name the variable anything you like `i` is just a variable item. `var i = 0;` in english its saying variable `i` is equal to zero. That is starting point of our loop.  The `;` semicolon at the end is just ending our first statement. Now we have a starting point let's get our  `for` loop running. The next statement says `i < 10;` and in english we are saying if `i` is less than ten. Remember we already stated `i` is equal to zero. Now what, `i` is indeed less than ten this is when we move onto the last statement.  It looks like this `i++` and in english it is saying `i` equals `i` plus one. Sometimes you will see that last statement written as `i = i + 1;`. So what is this doing. It is literally adding one to our variable `i`. Now we have come back to our first statement, remember it's a loop. An if we to read the first statement in english again it would know say variable `i` equals one. Alright, now let's go through the whole `for` loop in english from the top. Variable `i` equals zero, if `i` is less than 10, `i` equals `i` plus one. One more time through the loop, variable `i` equals one, if `i` is less than 10, `i` equals `i` plus one. So what would `i` be now? I hope you saying two. The `for` loop would continue until `i` equals ten. Our `for` loop would then stop. What about the open `{` and closed `}` curly brackets, that is where we would write some code we want to execute. For example say we want to count to a hundred and make a list or in JavaScript an array. It would look like this.

 {% highlight javascript %}
	var list = [];

	for (var i = 0; i <= 100; i++) {
     list.push(i);
};
{% endhighlight %}              

Let’s break it down in layman terms.`var list = [];`  Variable list  equals an empty array. Now will use the for loop to loop through 0 to 100. `list.push(i);` is what will push the numbers to our list array.  This is one of many many uses for the `for` loop.    
