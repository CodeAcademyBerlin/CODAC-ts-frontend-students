---
navTitle: "Project 7"
title: "Data Pipeline"
metaTitle: "Project 5: Data Pipeline"
metaDescription: "Data Engineer course"
access: data
# prev: 'web/Module-2'
# next: 'web/Module-2/Project-5/Sprint-1'
---

Welcome to the **Project 7**.

In this 1 week project you will have to build what the community refers to as Data Pipeline. A data pipeline is a series of data processing steps. Data pipelines consist of three key elements: a source, a processing step or steps, and a destination. Any time data is processed between point A and point B (or points B, C, and D), there is a data pipeline between those points.

Usually the data source is either something we can scrape from the web, or something we can get from an API.

**Web scraping** is the process of extracting data from websites and store them in order to analyze them or use them in some way. During web scraping, texts are read from websites in order to obtain and store information. This is comparable to an automatic copy-and-paste process. For image searches, this technique is referred to as image scraping. Scraping is not always legal and scrapers must first consider the copyrights of a website.  
There are several difficulties when it comes to web scraping, therefore there are several libraries that helps you overcome these problems. The easiest libraries for python to use are called Scrapy and Beautiful Soup, however they will not work with dynamic web pages, but only with static pages. Dynamic means the data is generated from a request after the initial page request. Static means all the data is there at the original call to the site. An other library widely used that overcome the problem of scraping dynamic page (most of the modern websites are acting in a dynamic way) is called Selenium.

**API** means "Application Programming Interface" and it is a set of programming code that enables data transmission between one software and another.

![What's an API](staticAsset/data/Module-3/API.jpg)

The software that needs to access information (i.e., X hotel room rates for certain dates) or functionality (i.e., a route from point A to point B on a map based on a user’s location) from another software, calls its API while specifying the requirements of how data/functionality must be provided. The other software returns data/functionality requested by the former application.  
And the interface by which these two applications communicate is what the API specifies. There are different kinds of API, but the most common class of API is the Web API. These APIs mainly deliver requests from web applications and responses from servers using Hypertext Transfer Protocol (HTTP).

In this short project we will use a free and public Web API to get some data, then we will save them on a Google spreadsheet. After that, we will read them and display them in a plot using a popular library of python called [Streamlit](https://streamlit.io/). After this we will deploy the streamlit app to the cloud, to make our plots accessible through the web. And at the end, we will deploy the python code to get data from the API using Amazon Web Services Lambda, which will allow us to run automatically the code every day.

It sounds complicated, but step by step you will see its power and advantages.
