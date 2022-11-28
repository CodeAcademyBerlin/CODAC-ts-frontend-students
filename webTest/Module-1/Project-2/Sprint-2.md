---
navTitle: 'Sprint 2'
title: 'Sprint 2'
metaTitle: 'Welcome to the Web Development course'
metaDescription: 'Web Development course'
access: web
prev: 'web/Module-1/Project-2/Sprint-1'
next: 'web/Module-1/Project-2/Sprint-3'
---

<embeddediframe link="https://docs.google.com/presentation/d/e/2PACX-1vTjg3-Rc_6hTfpChLME4MLUBnyTZYEPt8vupkQgQfniiHr2r-iapeFvXUaFyQ4dcXubxleZTQ2JdRtv/embed?start=false&loop=false&delayms=3000"/>

## Epic 1: Choose API and Project content

### Choose and test your API

[What is an API](https://www.iotforall.com/what-is-an-api/)

It's time to start thinking about your next website! This time the goal will be to use JavaScript to make your pages more interactive. Again the content is up to you.

Since you will be using live data, first check this list of [Free APIs](/content/web/Module-1/Free-APIs). Choose your topic based on what you can find there.

### Start by testing some endpoints

Before starting to write any code or decide how the website is going to look like, it's important to understand how the API of your choice works. Read carefully the documentation and use [Postman](https://www.postman.com/) to test the endpoints you want to use.

### Think of a design

In this module you will use Bootstrap to design your pages therefore you should not spend too much time on it. However is always useful to have a simple mockup of the features you want to include from the beginning.

Minimum Requirements:

- Home Page with the following features:
  - a picture
  - a navigation bar
  - some text
  - a button saying "Show More". When clicking it, you should see more text and the button should say "Show Less". When clicking it again, you should hide the text mentioned above and turn the button back to "Show More"
- Page to display some of the content of your API with the following features:
  - a table or a list to display the content coming from your API
  - checkboxes that will be used to filter some of your data

## Epic 2: Display the response from your API

### Create the Home Page and style it with Bootstrap

Now start to create the Home page and style it with [Bootstrap](https://getbootstrap.com/).

### Create a JavaScript file and play with Events

After finishing with HTML CSS and Bootstrap is now time to use JavaScript to show more or less text!
For this problem, you will use a JavaScript click event. [Here](https://www.w3schools.com/jsref/event_onclick.asp) you can find the syntax.

Think of it as two different paragraphs, one that is visible and the second one that is not.

Then think about what should happen when a user clicks on "Show More": the hidden paragraph should be visible (change of CSS class or change of inline style property) and then the text of the button should change ().

Try the same mental process for when the user clicks on "Show Less"

### Create a page to display the content of your API

Create another HTML page and connect it with the Home Page. You can decide what to put on this page, but later on, you must have a table or a list of data pulled from the API of your choice. Therefore is a good idea to create a div element and assign to it an id:

`<div id="api-data"></div>`

### DOM manipulation

Copy the response from Postman into a `data.js` file and assign it to a variable called `data` like this:

```javascript
var data = <"RESPONSE FROM YOUR API">
```

Link this file to your html.

### Create a new JS file called main.js and connect it with the previous HTML page

Make sure that the `data.js` file comes first.

If you linked them correctly over the same html file, from your `main.js` file you should be able to consle.log your data from the `data.js` file.

Create a function and with a loop start to append elements to your `<div id="api-data"></div>`.

## Epic 3: AJAX and API calls

Today you will learn about Asynchronous JavaScript and API calls, the two most important concepts in Web Development.

Before the afternoon lesson, take some time to read these articles:

[Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)

It will help you understand better the concept later today.

### Write a fetch function in your main.js

Comment the data.js file in your html. From now on we will not use the data that we manually copied from the response in Postman, but we will use directly the live data coming from the API.

Create a function and inside write the code to pull live data from your API.

**If you get CORS error, add this url in front of the one you are using to fetch your data: `https://cab-cors-anywhere.herokuapp.com/`**

Once you see that you get the right data back, call the function to display the data from the fetch function and send the data received.

### Style the page with Bootstrap
