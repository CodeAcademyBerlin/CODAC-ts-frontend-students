---
navTitle: 'GraphQL Basics'
title: 'GraphQL Basics'
metaTitle: 'GraphQL Basics'
metaDescription: 'Web Development course'
access: web
order: 20
next: 'web/Module-3/GraphQL/Client'
---

## GraphQL: History

GraphQL is an open source query language created by Facebook. Before GraphQL went open source in 2015, Facebook had used it internally for their mobile applications since 2012 as an alternative to the common REST architecture. As a result, network usage was reduced dramatically for Facebook’s mobile applications because GraphQL made it more efficient with data transfers.

Let’s say you want to fetch data from the Rest API and you say, “Hey REST API, give me the titles of the available courses on Educative”. How this works is that you have a specific endpoint or URL (in our case, Educative) that you are hitting and that URL determines what data comes back. With the REST API, you fetch a URL and that URL is returning typically something like JSON or a Javascript object full of data. This results in either unwanted data that we must filter through to fetch our required data or multiple trips (requests) to cater to different queries. However, GraphQL is different.

## How is GraphQL Different?

Instead of an API where you hit a URL and accept whatever data comes back, GraphQL allows you to ask for specific data, giving clients more control over what information is sent.

The Sandwich Comparison #
Think of it like this; you want a sandwich with only bread, cheese, cucumbers, and lettuce. You walk into a RESTaurant where the only option on the menu is ‘sandwich’; you place an order and receive a sandwich with bread, salami, lettuce, tomatoes, cucumbers, and cheese. You then remove everything you don’t want, to be able to eat the sandwich you wanted; this is how the REST API works. However, when you visit GraphQL cafe, you realize you can specify which toppings you want in your sandwich and receive exactly what you wanted.

![qraphQl-sanwich.jpg](staticAsset/web/qraphQl-sanwich.jpg)

 ## Overfetching

In the RESTful architecture, the backend defines what data is available for each resource on each URL, while the frontend always has to request all the information in a resource, even if only a part of it is needed.

In the worst case scenario, a client application has to read multiple resources through multiple network requests. This is called overfetching. A query language like GraphQL on the server-side and client-side lets the client decide which data it needs by making a single request to the server.

## Specification…NOT Implementation

GraphQL is a query language, it is a way to get data from an API to your application hence, it is a specification rather than an implementation. Initially, Facebook open-sourced the GraphQL specification and its reference implementation in JavaScript. Now, along with Javascript, several libraries have been incorporated in implementation. The ecosystem around GraphQL is growing horizontally by offering multiple programming languages, but also vertically, with libraries on top of GraphQL like Apollo and Relay.

## Queries & Mutations 

Currently, GraphQL operations can be divided into two broad categories, a query (read) and mutation (write). Each of these operations is only a string that needs to be constructed according to the GraphQL query language specification.

Queries are used for data fetching and mutations are used to modify server-side data. In the example below, you will see that a query has the exact same shape as the result. This essential GraphQL feature always provides you with the expected results because it lets the server know exactly what the client is asking for.

12345678910111213141516171819
//GraphQL Query:
```graphql
query{
  course(id: "5"){
    id
    name
    author
  }
}
```
## Relational Queries

With GraphQL, we can make relational queries of multiple fields which results in us getting all the data required in one trip (query), unlike the REST architecture in which we would need to make multiple requests (one for each field).
The data could be comming from different collections of the database.

## Downside

The implementation of a GraphQl app is a lot more work than a simple REST Api and can be sometimes dismissed for this reason.
REST is still by far the main technology when it comes to exchanging from backend to frontend.