---
navTitle: 'Sprint 2'
title: 'Sprint 2'
metaTitle: 'JAM Stack Project'
metaDescription: 'Web Development course'
access: web
prev: 'web/Module-1/Project-3/Sprint-1'
next: 'web/Module-1/Project-3/Sprint-3'
---

## Kick Off Presentation

<embeddediframe link="https://docs.google.com/presentation/d/e/2PACX-1vT--mMYY1FXytVwcuRu5y8LmUPDPpnV8_R8M4KzCUKh8IBjcK5QCx4kfCk5Y_BgkNMRkoQZ-28X4OLM/embed?start=false&loop=false&delayms=3000"/>

## Prerequisites

React (also known as React.js) runs in a Node.js environment, and is a JavaScript framework for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

- Install Node.js on your machine if you haven't already (to Install Node.js on your local machine, download it [here](https://nodejs.org/en/download/)

- Not familiar with React yet? Take a moment to do a crash course before you go any further.

Being the most widely used JS framework, you will find many crash courses on React. If you haven't used it in previous modules, it is advised to carry out one of these tutorials before going any further. Here are some examples, but you can of course find your own.

- [A Complete Beginner’s Guide to React](https://welearncode.com/beginners-guide-react/)
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)

## Epic 1: Create and configure a React project

Create a new repository for your project and open a terminal at the root path of this repository.  
**Tip for Windows users**: In your repository hold Shift and right click too have the option to "open a Powershell here" in the context menu.  
**For Mac users**: first enable this in settings > keyboard > shortcuts > services, tick the box for “New Terminal at Folder”. Now, in Finder, you can right click on any folder > services > New terminal at folder.

run command: `npx create-react-app [name of you app]`

### Project Structure

For the project to build, these files must exist with exact filenames:

- public/index.html is the page template
- src/index.js is the JavaScript entry point.

You can delete or rename the other files.  
You may create sub directories inside src. For faster rebuilds, only files inside src are processed by Webpack (packager tool to build and deploy web projects). You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.  
Only files inside public can be used from public/index.html. Read instructions below for using assets from JavaScript and HTML.  
You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation.  
If you have Git installed and your project is not part of a larger repository, then a new repository will be initialised, resulting in an additional top-level .git directory.

**Advice**: A popular way to structure a React project is to create a "screen" folder for all higher level components directly called from the entry point and a "component" folder for other components.

### Run your app

Lets run the react app template with the following command. Make sure your terminal is at the root of the client directory (you might have to change directory using the command "cd [your app name]): `npm start`  
More documentation from the Create React App Github project is located [here](https://github.com/facebook/create-react-app).

### Add React developer tool to Chrome (optional)

The developer tool, while not required, provide some automated tasks like tests that will simplify and speed up some of your React tasks.
[React Developer Tool Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/)

## Epic 2: Find your API and create a prototype

For this project, you will need an API that provides you with at least two endpoints:

- List endpoints returning and array of items.
- Detailed endpoints providing informations about a specific item from its ID.

suggested APIs:

[Free APIs](/content/web/Module-1/Free-APIs)

## Epic 3: Confirm your knowledge of React

With React comes a whole new set of concepts and terms that you need to familiarise yourself with. Conduct some research on the following:

- Node dependencies
- node_modules folder and the package.json file
- Functional and Class-based Components and the difference between them
- JSX and component rendering
- Props
- State
- Lifecycle Hooks (in particular `componentDidMount`)

Some useful links to help you:

- [Components](https://reactjs.org/docs/react-component.html)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Learn about two different types of React components: Functional vs Class Components](https://www.twilio.com/blog/react-choose-functional-components)
- [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Render a React Element](https://reactjs.org/docs/rendering-elements.html)
- [Render a list (map)](https://reactjs.org/docs/lists-and-keys.html)
- [React State](https://reactjs.org/docs/state-and-lifecycle.html)

As you know, one of the benefits of React is its ability to manage dynamic, front-end JS objects. Dynamic objects typically have different "states". The most obvious is a clicked vs un-clicked button, but state also includes components like comments and all the data contained in comments (think for a second how much data in one day the comments feature in Facebook generates!). React states are how these dynamic features are managed (for now, later on we will learn about Redux, a tool for managing the state).

## Epic 4: Create List Screen

Because components can contain sub-components React pages have a "component hierarchy". It’s important to understand how the features of a wireframe translate into this hierarchy before you begin to build it.  
Create a small diagram defining the components hierarchy throughout your project. It should answer the following problematic:

- What is the functionality (rendering or app logic)
- What is the parent component?
- What is the child component (if any)?
- What are the props
- Re-usability of the component

This will help you define if it should be functional or class based.

Build the List Screen and potential sub-components based on the diagram you created.

Fetch you list of data here.

## Epic 5: Create Navigation between pages using React Router

### Install the React Router Dom

The React Router Dom is a dependency to manage the "routes" between your different web pages as well your different React components. Make sure your terminal is at the root of the project folder, then run: `npm i react-router-dom`

### Configure the Router

Main utilities provided by this package are the BrowserRouter, Route and Switch. Let's start by importing them in the entry point of our React project: App.js

`import { BrowserRouter, Route, Switch } from 'react-router-dom'`

We can now wrap the BrowserRouter around our app and define the first route to be used for our Landing component as shown below

```js
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListScreen from './screen/ListScreen';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ListScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
```

Run the app from your terminal and ensure that you are routing correctly to the ListScreen component.  
[Here](https://reactrouter.com/web/guides/quick-start) you can find a guide on React Router that you will need to read for the next tasks.

Create a navigation bar and use the same process to create the Registration Screen. Make it render a simple p tag saying "registration screen" just to make sure you are routing to the correct Component.

## Epic 6: Details Screen

Create the Detail Screen and dig in the React Router documentation to find a way to route here on your app when the user clicks on an item from your list. Try to render an information about the clicked item to see if you are using it correctly.

Once you have successfully built the routes to the Details Screen, fetch your detailed information using the parameters required from your API and display them.
