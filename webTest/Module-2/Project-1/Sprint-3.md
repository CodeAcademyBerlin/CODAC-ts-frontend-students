---
navTitle: "Sprint 3"
title: "Sprint 3"
metaTitle: "Welcome to the Web Development course"
metaDescription: "Web Development course"
access: web
prev: "web/Module-2/Project-1/Sprint-2"
next: "web/Module-2/Project-1/Sprint-4"
---

## Epic 1: Profile Screen (Front-End & Back-End)

Key points:

- users should be able to access this screen only when logged in
- authorization on the server-side should be implemented (go back to Sprint 2 - Epic 6 to check the example of authorization)
- for now you should only show the name of the user, the email and the profile picture

**When sending back to the client side the user's information, make sure you are not including the password!**

## Epic 2: Update your schemas, collections and Components to link each item or detail with a specific user (Front-End & Back-End)

Key points:

- use `populate()` to show the associated user too
- update your front-end to show who was the author of the content

## Epic 3: Create new content (Front-End & Back-End)

The main goal of your app should be to allow users to interact with the existing posts and to create new ones. Based on your theme, decide whether you want them to be able to post more Items or Details.

### Create a new POST route on your item route file or your detail route file (Back-End)

Key points:

- depending on your project, you may have to check for duplicates
- in any case your POST route should save a reference of the current logged in user (in other words, the one that is creating the new content)
- server-side authorization for this route

### Create a Screen with a Form to send a POST request (Front-End)

Key points:

- user should click on a button and access the screen
- if the user is not logged in, it should not see the button
- in the request you need to send all the information that you server is expecting (including the user's information)

## Epic 4: Update the Profile Screen and User model/collection/route (Front-End & Back-End)

In the Profile Screen now you should be able to see the Content created by you.
