---
navTitle: "MERN deployment"
title: "MERN deployment"
metaTitle: "Welcome to the Web Development course"
metaDescription: "Web Development course"
access: web
prev: "web/Module-2/Project-1/Sprint-4"
---

For this project deployment we will use a new Cloud Deployment platform using Heroku. Heroku deployment is a bit more complicated than Netlify, but necessary for deploying our backend.

## Back-End deployment

1. Got to Heroku and register: [www.heroku.com](www.heroku.com)
2. Create a new app
3. Go under “Deploy” and choose the “Connect to GitHub” option
4. Select your project folder
5. Enable Automatic Deploys

So far it’s the same that we have been doing for the previous projects. Now we have to tell Heroku that what needs to be deployed is inside the server folder, and not at the root.

Go to “Settings” and under “Config Vars”, click “Reveal Config Vars”.  
Since we are at it, add all the necessary config variables (e.g: `MONGO_URI`).  
Add a new var called `PROJECT_PATH` and the value should be the name of the folder where you have your backend (server).  
Go to Buildpacks and click on “Add buildpack”.  
Add nodejs (Heroku should recognize it by itself that is a node app, but let’s try to avoid possible errors).  
Add an other one by using the Enter Buildpack URL: [https://github.com/timanovsky/subdir-heroku-buildpack.git](https://github.com/timanovsky/subdir-heroku-buildpack.git).  
Drag it to the top.

This buildpack allows us to use subdirectory configured via the environment variable as a project root.

Last but not least: at the root of your server folder, create a `Procfile` (no extension, just like this) and add this line: `web: node server.js`.
This command will tell Heroku what is the entry point of our project.
Push everything on GitHub and check if it triggers the automatic deployment. If not, you can go to “Deploy” and trigger a manual deploy (end of the page) by clicking on “Deploy Branch”.

When the deploy is finished, click on “Open app”. You will see this: `Cannot GET /`.  
That is normal because the app is trying to search for an `index.html` file that we don’t have.
At the end of your URL add one of the routes that you have defined in your backend and check if you see the JSON in the browser (don’t use a protected route!).  
If you see your data it means you have successfully deployed your backend, congratulations!  
If not, go to Heroku, click on “More” (next to “Open app”) and investigate the errors.

## Front-End deployment

Before deploying the frontend, let’s go in your `config.js` file (create one if you don’t have it) and add the following lines of code:

```js
serverURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://<url-of-your-backend>",
```

And now in all the files where you fetch your backend, import the file and change the `http://localhost:5000` into `serverURL`.

That way, when we are running in development mode we will use the localhost, when we are running in production mode (the deployed version).

In Netlify click on “New site from Git” as always and select the repository with your project.
Go in the “Deploy Settings” and add the build command (`CI= npm run build`), set the Base directory to `client/` and the Publish directory to `client/build`.

Check if it deploys and if it shows the project correctly.
