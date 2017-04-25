# jQuery One

## Lecture Notes:

*   [jQuery - A Conceptual Overview](notes/jquery1.html)
*   [How to Get jQuery](notes/jquery2.html)
*   [Selecting Elements](notes/jquery3.html)
*   [Adding, Removing, and Moving Elements with jQuery](notes/jquery4.html)


## Overview:

All your work and code for the jQuery One exercises, below, will go in the index.html file of the jquery-one project. Let's get setup to work:

1.  In your website's workspace, open up the index.html at **projects/jquery-one/index.html**. You'll code in here.
2.  To work on the exercise, have 3 tabs open, one tab with your workspace, one tab serving the index.html page of the jquery-one project, and one with the directions. Follow the the direcitons on this page, switch back to your workspace, code the step, save, switch back to the index.html page, refresh. Rinse, repeat...
3.  If your webserver is running, [your index.html should be available here...](index.html). If it's not, ask for help!


## Setup:

*   <input type="checkbox">In your website's workspace, open up the index.html at **projects/jquery-one/index.html**. You'll code in here.

## Exercise 1

#### 1.1 : Add Markup:

You will have already completed the following steps of linking to the jQuery library AND creating the necessary markup in our index.html page IF you followed the setup steps in both [Getting jQuery](notes/jquery2.html#setup) and [Selecting Elements](notes/jquery3.html#setup).

If you've completed those setup steps of linking jquery and adding the markup to your `<body>` tag of the index.html page, you can checkoff all the steps in this **1.1 : Add Markup:** section, and move on to the next section, **1\. 2 : Accessing Elements Using JavaScript and jQuery**.

*   <input type="checkbox">Add a <div> with an ID of "container"
*   <input type="checkbox">Give that <div> node four children nodes, an <h1> tag, two <p> tags and two <div> tags.
*   <input type="checkbox">Give each of those two <div>s a class attribute with the value "holder"
*   <input type="checkbox">Give one of the <p> elements an id attribute with the value "target"
*   <input type="checkbox">Give each <div class="holder"> an unordered list as a child element.
*   <input type="checkbox">Add an empty <script> tag just before the </body> tag. Give it a "src" attribute with the value "[https://code.jquery.com/jquery-2.1.1.js](https://code.jquery.com/jquery-2.1.4.js)"
*   <input type="checkbox">Make sure jQuery is working by typing `jQuery` into the browser console. It should return a function and not throw an error.

#### 1.2 : Accessing Elements Using JavaScript and jQuery:

*   <input type="checkbox">Add a second <script> tag just before the ending </body> tag. Your JavaScript will be written within this <script></script> tag tag
*   <input type="checkbox">Within the <script> tag, create a new variable called "allDIVs" and assign to it a jQuery object containing reference all the <div> tags on the page.
*   <input type="checkbox">assign a jQuery object containing reference all the <ul>s to a variable "allULs"
*   <input type="checkbox">Turn all <p> tags' text blue // hint: [http://api.jquery.com/css/](http://api.jquery.com/css/)
*   <input type="checkbox">turn #container's 'background-color' to 'red'
*   <input type="checkbox">change .holder's 'border' to '1px solid black'

#### 1.3 : Extra Credit:

You haven't been taught how to do this yet, but maybe you can figure it out...

(hint: [http://www.w3schools.com/cssref/css_selectors.asp](http://www.w3schools.com/cssref/css_selectors.asp), [http://api.jquery.com/not/](http://api.jquery.com/not/), [http://www.w3schools.com/css/css_display_visibility.asp](http://www.w3schools.com/css/css_display_visibility.asp))

*   Change every <li> which inside a <ul>'s 'font-weight' to 'bold'
*   Make the <p> tag which does not have an id of "target" disappear

## EXERCISE TWO:

Resource: [Adding, Removing, and Moving Elements](jquery4.html)

#### 2.1 Adding, Removing and Moving Elements

*   Prepend a new <div> with the text "hello" to div#container
*   Append a new <div> with the text "goodbye" to div#container
*   Prepend a new <div> the body, append a new <div> after. How is this different than above?
*   Place a new div#first before the first div.holder
*   Place a new div#last with text after the second div.holder

*   Create a `newDetachedDiv` var which is a jQuery object of a new <div> with some text in it

*   Change some of its css properties. Is it on the page yet?
*   now append it. Is it on the page yet?
*   Run this code: `$('div').remove();` What does it do?
*   Reload the page and do this: $('#container').empty(); How is that different than above

*   What does this code do? `var orphanNode = $('#target').detach();`

*   Now try adding: `$('#container').append(orphanNode);` Why would this be useful?

*   Use the `.find()` method to do something interesting: [http://api.jquery.com/find/](http://api.jquery.com/find/)

*   Play around with the `.parent()` and `.children()` methods: [http://api.jquery.com/](http://api.jquery.com/) // (hint: [CMD + F] and search "parent") // var parentNode = $('#target').parent(); // var childrenNodes = parentNode.children();

### BUILD:

*   Combine setTimeout and/or setInterval with '.css' make various parts of your page change styles over time.
*   Make your own version of [Background Randomizer](http://jenniferdewalt.com/random_background.html) or [Mondrian Maker](http://jenniferdewalt.com/mondrian.html) (hint: [CMD+OPTION+U] to read the source code)

## HOMEWORK

*   Watch more of these [videos about jQuery](https://www.learnhowtoprogram.com/sections/jquery) and try the exercises*   Or try a similar resource [from CodeSchool](https://www.codeschool.com/courses/try-jquery)</section>

</div>
