---
navTitle: 'Sprint 4'
title: 'Sprint 4'
metaTitle: 'Welcome to the Web Development course'
metaDescription: 'Web Development course'
access: web
prev: 'web/Module-2/Project-1/Sprint-3'
---

## Epic 1: Comments (Front-End & Back-End)

Update both front-end and back-end to allow users to write and read comments on your Item or Detail Screen

Key points:

- do you need a separate collection for the comments?
- each comment is associated with a user
- comments should be in chronological order (latest on top)

## Epic 2: Like/Unlike (Front-End & Back-End)

### Update your back-end to support user's likes (Back-End)

You will need to update your user model and add a get and post route for the favourites.

### Update your front-end to allow users to like items or details (Front-End)

Create a button that changes colour when the item/detail has been liked by the user (similar to Instagram).

### Create logic for like/unlike button (Front-End)

You need to think that by clicking the like button you will add this item to the user's favourites. As a consequence the button will change colour. Once you refresh the page, the button still has to show the correct colour (eg: red if liked, white if not liked). When a liked item gets clicked again, this should delete the item from the user's favourites and the button should return to its original state.

## Epic 3: Update the Profile Screen and User route (Front-End & Back-End)

Now in the Profile Screen you want to show a list of liked items too.

## Epic 4: Allow users to update and delete comments (Front-End & Back-End & Optional)

Investigate on the UD of CRUD (Create, Read, Update and Delete).

Implement server-side and client-side logic to allow users to Update or Delete their own comments.

## Epic 5: Allow users to update their account and delete it (Front-End & Back-End & Optional)

## Epic 6: Allow users to update and delete their own content (Front-End & Back-End & Optional)

## Epic 7: Login with Google (Front-End & Back-End & Optional)

Key points:

- you will need to use a different passport strategy: `npm i passport-google-oauth20` ([docs](http://www.passportjs.org/packages/passport-google-oauth20/))
- you will need to create a project on the Google Cloud Platform

### Feedback Form

<embeddediframe title="Project-1-feedback-form" height="1000px" link="https://docs.google.com/forms/d/e/1FAIpQLSdZFQeQeGVGX3PqvhA3MJsiU9QUiMinxTkXMa_sDLvHCDcz4w/viewform?embedded=true"/>
