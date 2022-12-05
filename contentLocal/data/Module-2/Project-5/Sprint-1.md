---
navTitle: "Sprint 1"
title: "Intermediate SQL"
metaTitle: "Welcome to Sprint 1"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-1/Project-4/Sprint-1'
# next: 'data/Module-1/Project-4/Sprint-3'
---

This week, we'll be performing intermediate SQL exercises.

## Epic 1

Go to your LinkedIn account to the job search section. Search for 'SQL' and filter the results by the territory of your choice (Berlin, Germany or any other). Add another filter for 'Experience level' to set it to 'Entry level'. Read through some of the postings and save them for later reference when you're applying for jobs.

## Epic 2: Design your first database

As a VS Group BI analyst, you've received a csv document with all the sales data. You can download the file **[here](https://drive.google.com/file/d/1j3BVqD5_KDfvXdljnZ7beV-G-FVS8df5/view?usp=share_link)**.

Open the file and try to understand how are the fields related. Now, make a suggestion about how you would design a database with these information. This article gives you very useful tips to design your first database: [Database design basics](https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5). Be aware that the basic database and its design principles are mastered over years and experience. Also, carefully select your primary and foreign keys.

Use PowerPoint, or a program of your preference, that will allow you to make a sketch, in order to present your diagram.

Now that you have designed your ERD:

- Can you try to explain why it is preferable to divide the information into several tables instead of keeping it in single table?

**You can decide if you prefer to use SQLite, MySQL or PostgreSQL**

- [MySQL](https://dev.mysql.com/downloads/workbench/)
- [SQLite](https://www.sqlite.org/index.html)
- [PostgreSQL](https://www.postgresql.org/download/)

**Some of the DB do not support generating an ERD, which is why we're asking you to do it on PowerPoint.**

## Epic 3: Loading your database into a RDBMS

Not all RDBMS support Excel files or CSV. If this is the case, you must convert them into a *.db files to use them in your RDBMS. You will frequently find yourself in the situation where you're new to a program or you're performing a task you've never completed before. It is important to be self-reliant and be able to read the program's documentation or find a solution online. There are even times when you will follow every step as it is written and the code will still don't work. In this instance, look in several sources, perform trial and error until you figure it out.

We solved the conversion using these two articles: [Turn Your Excel Workbook Into a SQLite Database](https://towardsdatascience.com/turn-your-excel-workbook-into-a-sqlite-database-bc6d4fd206aa) and [SQLite using Python](https://www.geeksforgeeks.org/sql-using-python/).
The process may differ depending on the RDBMS you use, so read the documentation and different tutorials to complete the task successfully.

## Epic 4: Perform some queries

After you've loaded your database in your RDBMS, the priority is to solve all the business questions using SQL queries instead of Pandas dataframe commands:

- What is the category generating the maximum sales revenue? And about the profit?

- What are 5 the states generating the max sales revenue?

- What are the 3 products in each product segment with the highest sales?

- Are they the 3 most profitable products as well?

- What are the 3 best-sellers products in each product segment? (Quantity wise)

- What are the first and second worst-selling products in every category? (Quantity wise)

- Unique customers per month for the year 2016. There's a catch here: contrary other 'heavier' RDBMS, SQLite does not support the functions YEAR() or MONTH() to extract the year or the month in a date. You will have to create two new columns: yr and mnth.

Important: by answering these questions, you're intended to learn about:

- Review previous SQL knowledge

- Window function and PARTITION BY clause

**Estimated time: one week**
