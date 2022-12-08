---
navTitle: 'Sprint 1'
title: 'Sprint 1'
metaTitle: 'Welcome to the Web Development course'
metaDescription: 'Web Development course'
access: web
prev: 'web/Module-2/Project-1'
next: 'web/Module-2/Project-1/Sprint-2'
---

## Kick Off Presentation

<Embeddediframe link="https://docs.google.com/presentation/d/1pEKfZH3AxWyLM_5figGSUj_C12FBn1Y1D8gAVDnlsMw/embed?start=false&loop=false&delayms=3000" />

## Prerequisites

Before starting the new project is important to check that you are familiar with the following topics:

- Asynchronous JavaScript
- API calls (GET method at least)
- React
- MVC (Model-View-Controller) architecture pattern

## Epic 1: MERN Stack

### Conduct research into the MERN stack architecture

Start by learning about the stack. This introduction to the MEAN and MERN stacks made by a MongoDB developer is a great place to start. It describes the primary elements in the stack as well as some of the benefits of modern javascript-based architecture.
[The Modern Application Stack](https://www.mongodb.com/blog/post/the-modern-application-stack-part-1-introducing-the-mean-stack)

### Build the MERN stack diagram

**Make a copy** and complete the slides for the presentation of the [MERN Diagram slides](https://drive.google.com/file/d/1TApvwq4nQEW8PSp8nKG6CyzNVskk5DvW/view?usp=sharing).  
Share it with your mentors so that they can check the first diagram.

## Epic 2: Install and configure React (Front-End)

### Install Node.js if you haven't already

Here is the download: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

To make sure you have it successfully installed go to your terminal and type `node -v`. You should see the Node.js version number appear.

### Create React project

Create a new repository for your project and open a terminal at the root path of this repository.  
Run command: `npx create-react-app client`  
This is going to be the repository for your Front-End.  
Go inside your client repository with `cd ./client` and run `rm -rf .git`  
This will remove the git folder automatically created by React in your client folder. We do that because we want Git to track both Front-End and Back-End within the same repository.  
Later you will create an other repository for your Back-End, and the project structure will be like that:

`<your project name>`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`client/`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`server/`

### Setup Git & GitHub

Since we want our Git folder at the root of our project folder, go out of your client folder and initialize Git.  
Open the `.gitignore` file and add lines to ignore the node_modules folders by adding the line `node_modules/`. This will ignore all sub folders named node_module for both your client folder and later on for your server folder.

Connect it with your GitHub, commit and push as you always did.

## Epic 3: Landing Page Component (Front-End)

## Epic 4: Set up and Configure MongoDB Database (Back-End)

**MongoDB** is a general-purpose, document-based, distributed database, which means it stores data in JSON-like documents.
We will use it as a distant repository to store data for our project.

### Create a MongoDB Atlas account and set it up

[MongoDB Atlas](https://account.mongodb.com/account/register)

Once you have an account you can create a new database and a user.
Follow this documentation, only from Part 1 to Part 4) to create your first Cluster: [https://docs.atlas.mongodb.com/getting-started](https://docs.atlas.mongodb.com/getting-started)

**Tip:** in Part 3, when you have to add the IP Address, you can click on **_Network Access_**, click on **ADD IP ADDRESS** and then **ALLOW ACCESS FROM ANYWHERE**. For developing purposes this is the best way so you don't have to manually add IP address every time you work from a different place.

Don't worry about the connection for now.

### Create you first database

Click on collections and then **Add My Own Data**. Choose a database name and a collection name.

**Tip:** the database name should refer to the theme of your project.  
**Tip:** the collection name should refer to the type of items you will save in it (example: if you want to show a list of cities, the collection name will be cities).  
**Tip:** because of the middleware you will use later to connect your server with MongoDB, is important that all your collection's names are lowercase and plurals.

### Populate your collection with at least 5 items

Click on **INSERT DOCUMENT** to start creating an item.

**Tip:** all items should have the same number and kind of fields (example: each city item will have a field called name and one called country)

## Epic 5: Setup Node.js server (Back-End)

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.  
It allows developers to use JavaScript to write back end server scripts.

**Start by creating a server folder in your project repository alongside the client folder and open a terminal in the server folder.**

### Create new Node.js project

Run command `npm init` in your terminal and follow the prompts to initialise the project. This will create a _package.json_ file that is used to keep track of your project information and dependencies.

### Install and configure the latest version of Express

Express.js, or simply Express, is a web application framework for Node.js, and is designed to build web applications and APIs.

We will use it to build our backend server. Install with command: `npm i express`

FYI: [Express docs](http://expressjs.com/)

### Install utility Nodemon globally

This utility allows automatic reload of the server on saves. To install globally run command: `npm i nodemon -g`

FYI: [Nodemon docs](https://www.npmjs.com/package/nodemon)

### Install Mongoose

Mongoose is a library to help you manage your data structures and interactions in MongoDB.

FYI: [Mongoose docs](https://mongoosejs.com/docs/4.x/docs/guide.html)

### Create server.js file

The server.js file is is the most important of the Node.js app. It is the entry point and the file executed by the back end server.

The first thing to do is to initialise the server and assign it to a port:

```js
import express from 'express';
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is running on ' + port + 'port');
});
```

When hosting your application on another service (like Heroku, Nodejitsu, and AWS), your host may independently configure the process.env.PORT variable for you; after all, your script runs in their environment. So process.env.PORT || 5000 means: whatever is in the environment variable PORT, or 5000 if there's nothing there.

### Run your server

In package.json, change the main field from index.js to server.js if you haven't already. In this way the entry point for your backend will be the server file. The field "start" should contain "nodemon server.js" in order to run your server in watch mode. Add a field called "type": "module". Run npm start and verify the output in the terminal.

### Install some middlewares

Middlewares are used to do something before a request is processed (eg: check if a user is authenticated).

It's good practice to use at least these three middlewares:

- [express.json()](https://expressjs.com/en/5x/api.html#express.json): in POST requests, you need to use it in order to be able to recognise json data in the body of the request.
- [express.urlencoded](https://expressjs.com/en/5x/api.html#express.urlencoded): in Post request, you need to use it in order to be able to recognise form data coming from an html page.
- [cors](http://expressjs.com/en/resources/middleware/cors.html): a JavaScript application running in the browser can usually only access HTTP resources on the same domain (origin) that serves it. If you don’t set up a CORS policy on the server that allows to serve third party origins, the request will fail. This is there for your security but if you control both the server and the client, then you’ll have all the good reasons to allow them to talk to each other. You can find more informations here: [https://expressjs.com/en/resources/middleware/cors.html](https://expressjs.com/en/resources/middleware/cors.html)

You should insert this code before you start to listen to the port (server.js):

```js
import cors from 'cors';

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
```

### Write a script to run back end and front end servers simultaneously

Install concurrently utility by running this command: `npm i concurrently`

In the package.json file of the back-end (server folder), write a Script to run back-end and front-end concurrently. Depending on your folder adapt the following script:

```js
"scripts": {
  "start": "concurrently \"nodemon server.js\" \"cd ../client && npm start\""
    }
```

Now when typing `npm start` from your server folder you should be able to run both back-end and front-end at the same time (you should see the back-end console.log in your terminal and the React app should start). Verify that it works.

FYI: [Concurrently docs](https://www.npmjs.com/package/concurrently)

### Make sure your Git and GitHub are correctly set and all your node_modules are ignored

Make sure the git folder is tracking your server folder too.

Make sure your node_modules from the server folder are ignored (they should be greyed out in your text editor).

Commit and push to GitHub.

## Epic 6: Back-End Routes (Back-End)

Before we start to write our predefined operations, we should start with some sort of uniform folder structure so that following along with these articles is as clear as possible.

### Create a folder in the backend along side the server.js file and name it "routes"

Inside this folder we will code all of our predefined operations related to each collection type in our database. Start by creating a file and name it like the first collection you created (example: `users.js`).

### Write a test route

In our route file let's write a test route just to make sure everything is connected correctly. At the top of our file, require "express" by setting it to a variable and create an instance of the express router by setting it to a variable called "router".

```js
import express from 'express';
const router = express.Router();
```

Now write a test route like this:

```js
router.get('/test', (req, res) => {
  res.send({ msg: 'Test route.' });
});
export default router;
```

We pass two arguments into our get method. The path and a callback function with our request object and response object as parameters.

Since we will make a call to app.use() in our server.js file we only need to pass in "/test" as our first argument here, however this refers to the endpoint using the full url.

Example: `localhost:5000/users/test`

In our response object we send back a simple string in JSON format.

### Use this route

Navigate back to the server.js file and make a call to "app.use" and pass in two arguments, the api route and the Router variable we have exported in our route file (make sure you import it first)

Example:

```js
import router from "./routes/testRoutes.js";
app.use('/users', router);
```

### Test the route with Postman

Make sure our server is running and move into the Postman desktop application.  
Make a "GET" request to your route and hit send.  
You should receive the message "Test route" in your response body.

## Epic 7: Connecting Server and Database (Back-End)

### Learn about CRUD

"CRUD" is an acronym that describes the four operations you can perform in a database: Create, Read, Update, and Delete. This article explains each in detail: [https://dev.to/ichtrojan/basic-routing-http-requests-and-crud-operation-with-express-and-mongodb-od2](https://dev.to/ichtrojan/basic-routing-http-requests-and-crud-operation-with-express-and-mongodb-od2)

### Create env file for linking MongoDB to local Express instance

You will need to connect MongoDB with Mongoose.

Create a file `.env` to hold the credentials. This file contains the sensitive information to connect to the DB and should be added in the .gitignore so it doesn't end up on your GitHub!

Install the `dotenv` package from `npm` and paste this line of code at the  beginning of your `server.js` file.

```js
import * as dotenv from "dotenv";
// loading .env file
dotenv.config();
```

Retrieve your DB credentials on MongoDB Atlas admin page (mongoURI): click on "connect" and select the method "Connect your application". Copy the connection string in your .env file like this:

```js
  MONGO_URI = 'mongodb+srv://...',
```

**Make sure you changed the `<password>` with the password you set up for the database user and the `<dbname>` with the name of your database.**

Finally, server.js we connect using mongoose:

```js
import mongoose from 'mongoose';
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err));
```

Run your server and verify the connection.

For more info on mongoose connect function: [Mongoose Connection](https://mongoosejs.com/docs/connections.html)

## Epic 8: Creting the Model (Back-End)

Before we start writing routes that manipulate resources, we need to create a model of our resource so that we may ensure some sort of structure for the documents in our database collection.

### Create a "model" folder at the root of your Back-End

In the folder create a file called `<your collection name>Model.js`

Follow the documentation to define your schema and create a model: [https://mongoosejs.com/docs/guide.html](https://mongoosejs.com/docs/guide.html)

**Remember to export the model!**

**Tip:** the name of module is the singular version of the collection you want to access

**Tip:** if you set the values of each property as an object you have a wide range of options when it comes to customising each field.

Example:

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const User = mongoose.model('User', userSchema);
export default User
```

The first property of the object is the "type" which defines which type of data our server can expect to receive when we send our request for the respective property of our schema.  
For instance, if our administrator tries to enter a number into the name field for a city. An error will be thrown and the resource will not be saved to our database.  
The next property of the object is the "required" field which is a boolean we set to true. This way your admin will also receive an error if they leave an input on our form blank.

More on Mongoose Schema and CRUD operations: [https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

## Epic 9: Item List GET route (Back-End)

### Update the route file

Let's update the previously created route that allows us to retrieve all the items from the DB collection. Use the same process you used to create your test route.

However this time we will not simply return a JSON saying "Test route", but the actual documents in your datatbase collection.

Read here how to retrieve all the documents from a collection using mongoose: [https://mongoosejs.com/docs/api.html#model_Model.find](https://mongoosejs.com/docs/api.html#model_Model.find)

Here an example of how it could look like:

```js
router.get('/all', (req, res) => {
  User.find({}, function(err, users) {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
});
```

### Test if your route function works using Postman

Ensure that your server is running and fetch the URL that we have defined in our GET operation (example: "http://localhost:5000/users/all").

Under status Response 200 OK, you should see all the previously created items from the database.

## Epic 10: Create List Screen and fetch your items (Front-End)
