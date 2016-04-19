---
layout: post
title: cthompsonart
thumbnail-path: "img/cthompsonart-thumb.jpg"
short-description: Retail website for an artist

---

{:.center}
![]({{ site.baseurl }}/img/cthompsonart-thumb.jpg)

## Explanation

Chris Thompson, a talented artist, has an online presence but no website to sell his art. I offered to build a retail website for him. Cthompsonart was built using JavaScript, AngularJS and HTML/CSS.

#### The Players


* Chris was the client. His art would be on display and he would receive money from sales.
* The users, anyone navigating to cthompsonart, would be the people viewing and buying Chris' art.

## Problems, solutions and results

#### Getting art onto the website
One of the earliest steps in building the website was creating a way to capture information about each piece of art. This was done with an object and keys/values. 

{% highlight javascript %}
$scope.artList = [
        {   
        artTitle: 'Battleship',
        artYear:'2011',
        artTopic: 'military',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/battleship1.jpg',
        artMedium: 'Acrylic on canvas',
        artPurchase: ['Print'],
        printSize: '11" x 14"',
        originalSize: 'x',
        artOriginalCost: 'xx'
        }
{% endhighlight %}

The first version of the object is similar to the current version but not exactly the same because properties were added and removed. For instance, in one feedback session, Chris specifically said he did not want to provide a background explanation for each piece of art. Since I would no longer need this key, because it would never get used, I removed it.

The actual assets (jpegs) were originally housed on my hard drive for convenience. Where would/should they be housed once the website went live? After doing some online research I chose AWS S3 for storage because it was a free service and because it has a good reputation for stability. Most of the documentation I used to connect the website to S3 came from [Heroku](https://devcenter.heroku.com/articles/s3) but I needed to do more web research to actually get it working. For example, after I made the initial connection to S3 the only thing on the website were references to images but not the images themselves. The solution was that each individual image need to be made public through the S3 UI.

As soon as I finished connecting to S3, I realized I needed to tackle how quickly images loaded, which was not quick at all. I used [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to find solutions. I latched onto the idea of reducing the size and quality of each image. Before making any adjustments I used the Firefox Inspector to get the display size of each image. I then used a [free web service](http://webresizer.com/resizer/) to change the size of each image to match the display size. At the same time I experimented with different quality levels. I found a nice balance at 70% quality. 

{:.center}
![]({{ site.baseurl }}/img/resizer-shot.jpg)


After making adjustments to every image, the results were dramatic. I now had a website that loaded quickly and the art still looked good.


#### How to organize art on the website
The initial super-simple wireframe would have showcased one piece of art at a time, with forward and backward buttons to navigate. I scrapped this plan, instead creating the format currently seen on the website. I moved away from the original wireframe because I wanted the user to see more of Chris' artwork in a single glance.

The main barrier to this new plan was the height and width of each image. Originally I had the images output in rows but this created uneven whitespace between the rows. I could have moved images around in the object to even things out but this would have been too time consuming and unsustainable when more art was added to the website. I chose instead to use Bootstrap and a function to divide the main object into four smaller arrays.

{% highlight javascript %} $scope.artDivide = (function(){
        $scope.columnClass = {artone:'col-md-3', arttwo:'col-md-3', artthree:'col-md-3', artfour:'col-md-3'};
        $scope.columnDriver = 4;

            $scope.columnMath = Math.ceil($scope.artList.length / $scope.columnDriver)
            var smallindex = 0
            $scope.smallArtList = Array($scope.columnDriver);
            $scope.smallArtListTemp = [];

            for(i=0;i < $scope.artList.length; i++){      
                $scope.smallArtListTemp.push($scope.artList[i]);
                var artContainerLimit = i % $scope.columnMath
                if(artContainerLimit === $scope.columnMath-1){
                    $scope.smallArtList[smallindex] = $scope.smallArtListTemp;
                    smallindex +=1;
                    $scope.smallArtListTemp = [];
                };
            };
    })(); {% endhighlight %}

To complete this effort, I used a ng-repeat nested inside another ng-repeat in the HTML. This worked out well.


#### Creating the interface to select specific art and take payments
I had two goals for this part of the website. One, that the user would see a larger version of the art so they could soak up the awesomeness. Two, that it would be clear how to  purchase art and would be easy to do so.

Displaying a larger image for the user was not especially complex because of Angular's show and hide directives. What was problematic was the sizing of the art. Some images fit perfectly in the window and others were cut off because of image length. I did try making all the images smaller but I threw out that CSS since some of the art ended up being no bigger than in the all art view. I finally decided on what I think is a balanced solution: keep the image large and allow the user to scroll to see more of it.

Chris mentioned he had a PayPal account and would like to receive customer payments through it. I had no experience with PayPal so I admit I was nervous about using it. Initially it looked like I would need to create a different PayPal button for every item. Instead, after digging into my mental toolbox, I realized I could place PayPal's button HTML into two templates. One template would be for original art and the other would be for prints/t-shirts. 

{% highlight javascript %} $scope.artCost = function(purchasetype){   
        if(purchasetype === 'Original painting'){
            $scope.revealCost = $scope.clickedArtMedium + ' ' + $scope.clickedOriginalSize + ' - ' + $scope.clickedOriginalCost
            $scope.payPalButton = '/templates/pricePointOriginal.html'
            $scope.payPalMerchantID = "xxxxxxx"
        }; {% endhighlight %}

Essentially, instead of creating 32 x 3 buttons through the PayPal UI, I ended up with only two buttons that would update and show/hide dynamically based on user choices in a *select*.

{:.center}
![]({{ site.baseurl }}/img/button-example.jpg)


#### Desktop and mobile devices
The responsiveness of the website fell into two categories, functional and visual. On the functional side, the website needed to function on mobile devices basically the same way as on a desktop. On the visual side, I did not want the user to have a bad experience if their mobile device happened to be small.

The Mysterious Case of the Missing Details. On my own mobile device I could choose an option in the *select* but then... nothing. It turns out the ng-repeat/ng-click event was failing on my device and therefore no art details would appear. After a lot of research, test runs and quite a few expletives I figured out that I needed to switch to using ng-options/ng-change. Mystery solved.

The initial view on mobile devices was not good enough because the art details overlapped onto the art. I ended up using a media query to make the mobile view better. I consider this a balanced solution since there are still situations where the art details will still slip onto the art.

{% highlight css %} @media (max-width: 1280px) {
     .art-larger, .all-info {
     position: static;
     float: right;
     margin-top: 0;
     margin-bottom: 0;
     }{% endhighlight %}


## Conclusion

I plan to add a web form so Chris can input details about each new piece and add a way for Chris to upload new art. Image uploading will be challenging because image size and quality will need to adjust automatically. Of course this complicates things even more because I will need to create an access-limited administrator page where he can do all this. In step with these changes, I will eliminate the hard coded art details object and connect to a database.

I also plan to connect with Chris about user feedback. I'm hoping he will be open to a web form for users to leave comments and to request commissioned art. Today users can only contact him through his email address.

I have a lot of work ahead of me, but I look forward to it!