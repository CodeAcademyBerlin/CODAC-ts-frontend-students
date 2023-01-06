---
navTitle: 'Sprint 3'
title: 'Sprint 3'
metaTitle: 'JAM Stack Project'
metaDescription: 'Web Development course'
access: web
prev: 'web/Module-1/Project-3/Sprint-2'
next: 'web/Module-1/Project-3/Sprint-4'
---

## Epic 1: Integrate a global store (Redux/Context) to manage your data (optional)

Before starting to talk about State managment is important for you to get familiar with one of the most common architecture pattern: the Model-View-Controller or MVC.  
This pattern describes a separation between data (the Model), interface (the View) and application logic (the Controller). Each of these components are built to handle specific development aspects of an application.  
As an application scale, the MVC data flow can become problematic because MVC applications have data that can move in multiple directions and the code is difficult to maintain.

Facebook solved this problem by creating the Flux Architecture, a design pattern that only allows datat to flow in one direction while working closely with React to only update a web page when the state of a component changes.  
Redux is a library that acts as a container and helps to manage your application data flow. It is similar to Flux but it expands it making it suitable for more complex architecture.  
Context API with React Hooks is the newest feature of React and combines the best of Redux and Flux, making state managment a lot easier.

State managment refers to the managment of data across an app or a website and it is a way to store information about the behavior of you app.

[Here](https://egghead.io/articles/what-is-state-why-do-i-need-to-manage-it#:~:text=to%20those%20actions.-,State%20management%20makes%20the%20state%20of%20your%20app%20tangible%20in,read%20from%20and%20write%20to.&text=When%20you're%20creating%20larger,a%20huge%20boon%20to%20developers) you can find an article about State managment.

[Prop drilling problem](https://kentcdodds.com/blog/prop-drilling)

In React there are several ways to do so:

- [Context](https://kentcdodds.com/blog/application-state-management-with-react)
- [Context official docs](https://reactjs.org/docs/context.html)

- [Redux](https://medium.com/codingthesmartway-com-blog/learn-redux-introduction-to-state-management-with-react-b87bc570b12a)
- [Redux official docs](https://react-redux.js.org/introduction/quick-start)

In the case of your App you could move here your fetch functions in order to be able to access the data from more than one component.
