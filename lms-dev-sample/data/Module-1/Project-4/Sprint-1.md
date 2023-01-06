---
navTitle: 'Sprint 1'
title: 'Introduction to SQL'
metaTitle: 'Welcome to Sprint 1'
metaDescription: 'Data Science Course'
access: data
# prev: 'data/Module-1/Project-4'
# next: 'data/Module-1/Project-4/Sprint-2'
---

During the next two weeks, we will be taking a little break from Machine Learning predictions and learn a very in-demand skill: SQL. For data analyst roles, there's no doubt that learning SQL should be at the top of your to-do list.

### But, what is SQL?

In order to understand SQL, we will first define three basic concepts.

**RDBMS**: RDBMS stands for Relational Database Management System. RDBMS is the basis for SQL, and for all modern database systems. The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns (fields) and rows (records).

A column (field) is a vertical entity designed to maintain specific information about every record in the table.

A row (record) is a horizontal entity in a table that stores a combination of entries corresponding to the fields. To reduce redundancy, each record is stored only once.

Let's look at an example of an individual table:
![Individual table example](staticAsset/data/Module-1/Project-4/individual-table.png)

Ideally, tables only store unique records.

**SQL**: SQL stands for Structured Query Language and is the language used to interact with said databases. These are some of the things SQL can perform on a database:

- Execute queries
- Retrieve data
- Insert, update and delete records
- Create new databases, new tables and views
- Create stored procedures
- Set permissions for all of the above

**Database design**: Database design refers to the organization of data according to a database model. The person in charge of the design determines what data must be stored, the type of data in each field and how the data elements interrelate. One of the most important aspects is understanding and identifying interrelationships between several individual tables in order to build the database.

![Database example](staticAsset/data/Module-1/Project-4/database-example.png)

Tables are connected by primary and foreign keys, and correspond to columns or fields:

- Primary key: There can be only one primary key per table. The primary key uniquely identifies records in a table but is also the primary information in this table. For example, in the above database, the primary key in the Borrower table is BorrowerID, in the Loan table is LoanID and in the Book table is BookID.

- Secondary key: All remaining keys in a table are secondary keys.

- Foreign key: A foreign key is an attribute which is a primary key in its parent table, but is included as an attribute in another host table. A foreign key generates a relationship between the parent table and the host table. In our example, the primary key BorrowerID in the Borrower table becomes a foreign key called IDBorrower in the Loan table.

For the next two weeks, you will be completing the '10 Days of SQL' challenge. As we've seen earlier, SQL is a need-to-know skill for Data Analysts and having a good command of it highers the chances of being hired. All types of companies, from Facebook and Google to a small bike store, use it to manage their data, making SQL an industry standard.

The main goal of these exercises is for you to deepen and practice your SQL skills, **not for you to complete them all**. Take into consideration there is always more than one way to solve them. So be curious and happy coding!

### Epic 1: SQL Murder Mystery

Complete this game: [SQL Murder Mystery](https://mystery.knightlab.com/)

### Epic 2: Create a database directly on SQLite

Previously, we had created the database and fed its tables with a simple engine, converting it first from an Excel file to a \*.db extension one. This time, our aim is to learn how to create both things directly from the interface of SQLite. As usual, you will use your problem-solving savviness (and Google) to achieve this and find the solution by yourself.

The first step is to create a new database. Name it 'Day 1', as you will create a different database for each day of the challenge.

After you have you've created your database for Day 1, build the two tables necessary to complete the exercise:

```sql
CREATE TABLE IF NOT EXISTS Manufacturers (
  Code INTEGER,
  Name TEXT NOT NULL,
  PRIMARY KEY (Code)
);

CREATE TABLE IF NOT EXISTS Products (
  Code INTEGER,
  Name TEXT NOT NULL,
  Price INTEGER NOT NULL,
  Manufacturer INTEGER NOT NULL,
  PRIMARY KEY (Code)
);
```

**Note: there are two ways to build the schema. You could either use the interface or execute the code in the 'Execute SQL' tab.**

Finally, you will populate your 'Manufacturers' and 'Products' tables by running this code in the 'Execute SQL' tab of your interface:

```sql
INSERT INTO Manufacturers(Code,Name) VALUES(1,'Sony');
INSERT INTO Manufacturers(Code,Name) VALUES(2,'Creative Labs');
INSERT INTO Manufacturers(Code,Name) VALUES(3,'Hewlett-Packard');
INSERT INTO Manufacturers(Code,Name) VALUES(4,'Iomega');
INSERT INTO Manufacturers(Code,Name) VALUES(5,'Fujitsu');
INSERT INTO Manufacturers(Code,Name) VALUES(6,'Winchester');

INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(1,'Hard drive',240,5);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(2,'Memory',120,6);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(3,'ZIP drive',150,4);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(4,'Floppy disk',5,6);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(5,'Monitor',240,1);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(6,'DVD drive',180,2);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(7,'CD drive',90,2);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(8,'Printer',270,3);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(9,'Toner cartridge',66,3);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(10,'DVD burner',180,2);
```

Verify that both tables have been successfully created on the 'Browse Data' tab. The tables should look like this:
![Manufacturers](staticAsset/data/Module-1/Project-4/Manufacturers_table.png)

![Products](staticAsset/data/Module-1/Project-4/Products_table.png)

### Epic 3: Answer the questions

The questions for Day 1 are as follows:

-- 1.1 Select the names of all the products in the store.

-- 1.2 Select the names and the prices of all the products in the store.

-- 1.3 Select the name of the products with a price less than or equal to $200.

-- 1.4 Select all the products with a price between $60 and $120.

-- 1.5 Select the name and price in cents (i.e., the price must be multiplied by 100).

-- 1.6 Compute the average price of all the products.

-- 1.7 Compute the average price of all products with manufacturer code equal to 2.

-- 1.8 Compute the number of products with a price larger than or equal to $180.

-- 1.9 Select the name and price of all products with a price larger than or equal to $180, and sort first by price (in descending order), and then by name (in ascending order).

-- 1.10 Select all the data from the products, including all the data for each product's manufacturer.

-- 1.11 Select the product name, price, and manufacturer name of all the products.

-- 1.12 Select the average price of each manufacturer's products, showing only the manufacturer's code.

-- 1.13 Select the average price of each manufacturer's products, showing the manufacturer's name.

-- 1.14 Select the names of manufacturer whose products have an average price larger than or equal to $150.

-- 1.15 Select the name and price of the cheapest product.

-- 1.16 Select the name of each manufacturer along with the name and price of its most expensive product.

-- 1.17 Add a new product: Loudspeakers, $70, manufacturer 2.

-- 1.18 Update the name of product 8 to "Laser Printer".

-- 1.19 Apply a 10% discount to all products.

-- 1.20 Apply a 10% discount to all products with a price larger than or equal to $120.

### Epic 4: Repeat the process for the following 9 days

Download the file from [this link](https://docs.google.com/document/d/1dUt7lbttwkC1AUrAdtHHXA0B_Mcmvcyb/edit?usp=sharing&ouid=112478853022456914671&rtpof=true&sd=true) and continue with the next days of the challenge.

Important: by answering these questions, you're intended to learn about:

- Simple queries

- JOIN statement

- Aggregate functions

- Subqueries

- Common Table Expressions (CTE) using the WITH function

**Estimated time: two weeks**
