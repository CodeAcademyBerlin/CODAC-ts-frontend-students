---
navTitle: 'Sprint 1'
title: 'Sprint 1'
metaTitle: 'Welcome to the Web Development course'
metaDescription: 'Web Development course'
access: web
prev: 'web/Module-1/Project-3'
next: 'web/Module-1/Project-3/Sprint-2'
---

## Epic 1: Configure your environment and choose the Framework

### Single Page Application (SPA)

A single-page application is an app that works inside a browser and does not require page reloading during use. Vue and React enables this behavior out of the box.

Here you can find an interesting article about the difference between Single Page Application and Multi Page Application: [https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)

### Install Node.js

Node.js is a JavaScript runtime environment that allows to run JavaScript outside the browser. You will need to install it on your computer in order to be able to run React or Vue (Apple computers have it installed out of the box).

Here is the download: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

To make sure you have it succesfully installed go to your terminal and type `node -v`. You should see the Node.js version number appear.

### Choose and create a React or a Vue app

[React](https://reactjs.org/docs/create-a-new-react-app.html)  
[Vue](https://cli.vuejs.org/guide/installation.html)

Useful extension for React: "ES7 React/Redux/GraphQL/React-Native snippets"  
This extension will allow you to type `rcc` on a blank file to automatically create the boilerplate for a Class-based Component or `rfc` for a Function-based component and many more snippets that you can find [here](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Epic 2: Create your first Single Page Application

During this Epic you will have to create a small Single Page Application similar to this one: [Rick and Morty SPA](https://rick-and-morty-spa.netlify.app/)

Minimum Requirements:

- create flip cards to display images on one side and name on the other when user hover with the mouse
- in the back of the card you will need a button to display more informations
- once it is clicked, a Modal should appear showing more informations about that specific card
- dynamic search bar

### Fetch API in App component

Here is the free API to use: [https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/)

The endpoint is already set. If you test it on Postman or on the browser you will see a list of 20 characters from Rick and Morty.

This API is paginated, that means that with this end point you will only get the first page of results (20 characters). In order to get more results you will have to make a new request for each page (ex: `https://rickandmortyapi.com/api/character/?page=2`).

Don't worry about this for now and just use the first 20 results you get from the first page.

### Display the images coming from the API

Use a loop to display all the images and names coming from the JSON.

### Create a new Component and pass the images one by one to it

Remember that one of the reasons programmers love Component based frameworks is that in this way you can divide your code in smaller and tidier files.

So, create a new component, call it from within the loop and pass the single images and names as props.

### Decide which CSS framework to use

You already know one CSS framework: Bootstrap. However when using Component based frameworks the best is to use the Bootstrap version for that specific framework.

[Bootstrap Vue](https://bootstrap-vue.org/)  
[Bootstrap React](https://react-bootstrap.github.io/)

Of course there are also specific CSS frameworks for Vue and React.

[Material-UI](https://material-ui.com/) for React  
[Vuetify](https://vuetifyjs.com/en/) for Vue

Whatever you will choose, you will have to install it as a package with the help of NPM (Node Package Manager). Make sure to open the terminal at the root folder of your project (where you have the `package.json` file) and use the instruction on the documentation to install the CSS framework.

Similarly to the Bootstrap you used previously, these frameworks come with a set of pre-defined CSS classes and styles. The difference now is that instead of invoking the class you want to use in your HTML you will have to import the specific component.

### Time to flip!

It's now time to make those cards flipping!

Here you can see an example of how you can use simple CSS to achieve that: [(https://www.w3schools.com/howto/howto_css_flip_card.asp)](https://www.w3schools.com/howto/howto_css_flip_card.asp)

**Tip:** the HTML structure it's very important to get to this result. Make sure your HTML structure is the same as the one in the example.

### Add a search bar

Add a search bar at the top of the page. Use the Input component from the CSS framework of your choice.Style the component by following the customization methods described in the documentation your CSS framework describes.

The list of characters should update every time that the user enter a new keyboard character. Use the on change event for that.

Make sure that the search is case insensitive (it doesn't matter if the user uses capital letters or not).

### More Info button and Modal

Create a More Info button (use the Button component coming from the CSS framework) in the back of the card and show a modal when the user clicks on it to display the status, the species and the gender.

You might want to show the image and the name of the character again in the modal.

### Show more characters

Use the page query in the API request to display all the characters.

**Tip:** in order to trigger a second API call, you will need an event.  
**Tip:** in the info part of the JSON response you can see that they already provide you with the correct URL for the next or previous page.
