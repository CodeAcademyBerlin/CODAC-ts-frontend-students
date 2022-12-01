---
navTitle: "Sprint 4"
title: "Tableau: Data Visualisation (e-Commerce)"
metaTitle: "Welcome to Sprint 4"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-2/Project-5/Sprint-1'
# next: 'data/Module-2/Project-6'
---

![Tableau](staticAsset/data/Module-2/Project-5/tableau.jfif)

As per their official site, 'Tableau is a visual analytics BI tool transforming the way we use data to solve problems—empowering people and organizations to make the most of their data.' Tableau has an intuitive design to create dashboards, and gives user ranging from Junior BI Analyst to senior executives a simple way to tap into large datasets for **interactive visualizations and reports** within minutes. It also offers a free version of its software, making it accessible for more people. As a result, Tableau is becoming the preferred BI software for presentations, reports, and actionable insights.

Non-technical users find this kind of software very useful to publish interactive data visualizations on any topic and deploy customized dashboards.

**What is Tableau and how it helps businesses**

Tableau Desktop comes with a trial period, however,Tableau Public is a free platform to publicly share and explore data visualizations online. For this sprint, you can [download Tableau Public](https://public.tableau.com/en-us/s/). You will need to create an account.

Although relatively easy to use, mastering a software like Tableau takes quite a lot of time and requires practicing to get acquainted with the more advanced functionalities. Tableau offers great resources: browse around the tutorial videos as they will be crucial to get started. You can find their tutorials' section here: [Video tutorials for Tableau Public](https://public.tableau.com/en-us/s/resources).

There will be a little box linking you to [Tableau Public's Viz of the Day](https://public.tableau.com/app/discover/viz-of-the-day). It is good idea to check them out to have a sense what people can do with Tableau.

Once you have gone through the tutorials, you would be able to connect to your data source and start basic visualisation.

For example, the below plot shows country wise sales count.
![Viz1](staticAsset/data/Module-2/Project-5/tab-1.jfif)

If you notice carefully, this does not add much value to the visualisation as this only shows Germany is largest consumer and this is very obvious. It would be nice to exclude Germany to compare other countries like below:
![Viz2](staticAsset/data/Module-2/Project-5/tab-2.jfif)

As you can see, Tableau allows you easily have control of your graphs and make them more meaningful.

### Epic 1: Upload the database to Tableau Public

Tableau Public does have a downside: many of the advanced functionalities are limited. To give you an example, Tableau Public only allows a handful of files extensions to be uploaded, and neither .csv nor .db files are on that list, but you can upload *.xlsx files, which is the original format of the database.

Download the file from [this link](https://docs.google.com/spreadsheets/d/1-qZFoAnH4S3Xvl0k5_mGQX1czt_BRyEA/edit?usp=sharing&ouid=112478853022456914671&rtpof=true&sd=true). It is the same e-Commerce database, but we've put all the data into a single table.

Your first task is to upload the sales database to Tableau Public. It may take a few minutes...

![tableau-uploading](staticAsset/data/Module-2/Project-5/uploading-tableau.png)

### Epic 2: Create your visualisations

**Using filters**

Let's first learn how to use filters. Filters restrict the number of records and allow you to narrow down to a particular data set, based on the conditions you provide. Tableau offers several ways to filter your data. For a comprehensive article about this, please visit [this link](https://help.tableau.com/current/pro/desktop/en-us/filtering.htm).

Create a bar chart showing the total amount of sales per product type in Europe, except for Germany. 

Display a filter on the visualisation to let the end user choose to visualise either the year 2018 or 2019, as a drop-down menu.

Order the bars in ascending order.

It should look something like this:
![bar-chart](staticAsset/data/Module-2/Project-5/bar-chart.png)

Play around with the colours and the orientation. **Come up with two simple viz on your own that require the use of filters.**

**Using parameters and calculated fields**

A parameter is a variable in an equation whose value can be controlled by the end user. They’re different from Filters, as they do not exclude data. Usually, they're used in combination with _calculated fields_.

Calculated fields allow you to create new data from data that already exists in your data source. When you create a calculated field, you are essentially creating a new field (or column) in your data source, the values or members of which are determined by a calculation that you control. In this sense, they're similar to the window functions that we saw earlier with SQL.

When you're introduced to new concepts, it's very important to visit the official documentation. Tableau's website includes comprehensive articles and video tutorials to guide you when you're creating any visualisation. Click on the links for more on [parameters](http://www.tableau.com/learn/tutorials/on-demand/parameters?_fsi=UhVCDAkG&_fsi=UhVCDAkG&_ga=2.62024236.1809894839.1632301686-1639006025.1632301686) and [calculated fields](https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_create.htm).

As an example, we're going to create a parameter that, combined with a calculated field, will allow the end user to have control over the date granularity with which they want to see the sales numbers: yearly, quarterly, monthly, by week of the year or daily. They will be able to control this via a drop down menu.

**Let's create a date granularity viz.**

_Step 1:_ Right click on Invoice Date (Tables) > Create > Custom Date > Detail: Years as Date Part > OK

![custom-date](staticAsset/data/Module-2/Project-5/custom-date.png)

_Step 2:_ Repeat for Quarters, Months, Week numbers and Days

_Step 3:_ Create a 'Date granularity' parameter.

- In the Data tab, click on the ▼ icon next to the Search box, choose 'Create parameter'.

- In the pop-up window, fill the Name field as 'Date granularity'.

- Choose String as Data type and List from Allowable values.

- Fill up the list of values (Year, Quarter, Month, Week number, Day). Press OK.

![parameter](staticAsset/data/Module-2/Project-5/parameter.png)

_Step 4:_ Create the calculated field 'Date'.

- In the Data tab, click on the ▼ icon next to the Search box, choose 'Create calculated field'.

- In the pop-up window, fill the Name field as 'Date'.

- Enter the following code:

```sql
CASE [Date granularity]
WHEN 'Year' THEN STR([Invoice Date (Years)])
WHEN 'Quarter' THEN STR([Invoice Date (Quarters)])
WHEN 'Month' THEN STR([Invoice Date (Months)])
WHEN 'Week number' THEN STR([Invoice Date (Week numbers)])
WHEN 'Day' THEN STR([Invoice Date (Days)])
END
```

![calculated-field](staticAsset/data/Module-2/Project-5/calculated-field.png)

_Step 5:_

- In Parameters, click on the ▼ icon of the 'Date granularity' pill and show parameter.

- From the Tables list, double-click on Date and on Total Sale.

Voilà! Now you've made a visualisation that allows the end user to have control over the date granularity with which they want to see the sales numbers.
![date-granularity](staticAsset/data/Module-2/Project-5/date-granularity.png)

**Using LODs**

Level of Expressions (LOD) allow to perform aggregations involving multiple levels of granularity in a single visualization. There are three types of LODs:

- **Exclude:** used to exclude a specified dimension from the view.

- **Include:** used to include a specified dimension along with other dimensions within the view.

- **Fixed:** unlike exclude and include, fixed doesn’t depend on what is on the view rather focuses more on calculations. Thus it produces a fixed value for the specified dimensions.

For more information about Tableau’s LODs expressions, watch [this video](https://www.youtube.com/watch?v=yush1yNz9VM) and visit [this link](https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod.htm).

**We're now going to create a visualisation with the Top 10 European countries by new customer acquisition per month (outside of Germany)**

_Step 1:_

a. Create a filter for the dimension Country that only includes countries in Europe, except for Germany. Put the Country pill in the Rows and Filters shelves.

b. Add Invoice Date to Rows. Right click, select the second Day option. Right click again, convert to discrete measure.

_Step 2:_

a. Create a calculated field with each customer's first purchase date by fixing the minimum order date to customer ID and name it 'First Order Date'. This will replicate the first purchase date across all rows for the customer. 
We'll be using the LOD expression 'FIXED'.

![LOD-1](staticAsset/data/Module-2/Project-5/LOD-1.png)

b. Add the 'First Order Date' pill into the Rows shelf. Right click, select the second Day option. Right click again, convert to discrete measure.

_Step 3:_ Create a calculated field named 'New or Existing' that has the following logic: if the order date is equal to the day of first purchase for that customer, flag that row as new, otherwise flag it as existing. Add the pill in the Rows shelf and also as a filter.

Drag the 'New or Existing' pill into the the Filters pane, select 'New' only.

![LOD-2](staticAsset/data/Module-2/Project-5/LOD-2.png)

Your table should look like this:

![LOD-3](staticAsset/data/Module-2/Project-5/LOD-3.png)

**Now that you have all of your calculated fields, it's time to build your visualisation.**

_Step 4:_
a. From Rows, take out the Country, New or Existing, DAY(Invoice Date) pills.

b. Bring First Order Date to Columns and convert it to continuous. Right click, select second Month option.

c. Right click on CustomerID, select Measure > Count (Distinct).

d. Right click on CustomerID again, select Quick Table Calculation > Running Total.

e. Drag Country into Marks > Color and Marks > Label.

![LOD-7](staticAsset/data/Module-2/Project-5/LOD-7.png)

_Step 5:_ In the Filters pane, click on the ▼ icon of the Country pill. Select Edit Filter > Top tab > By Field: Top 10 > CustomerID: Count (Distinct).

![LOD-5](staticAsset/data/Module-2/Project-5/LOD-5.png)

Your final visualisation should look like this:
![LOD-8](staticAsset/data/Module-2/Project-5/LOD-8.png)

Now that you've practiced how to use filters, parameters and calculated fields and LODs expressions, it's time for you to come up with **your own** visualisations. In case you need some inspiration, check out [this article](https://www.tableau.com/about/blog/LOD-expressions?_ga=2.180296992.567830548.1628238676-87390196.1628238673).

### Epic 3: Build a dashboard

Now that you have your first visualisations, put the worksheets together in a dasboard. A worksheet is where you build individual visualiations by dragging and dropping fields onto shelves. A dashboard is a combination of several views that you can arrange for presentation.

Here's a very [famous dashboard](https://www.tableau.com/data-insights/dashboard-showcase/superstore), put together by Tableau Zen Master, Ryan Sleeper. It is not expected for you to have that level of proficiency but it is important to understand the possibilities Tableau offers and to get inspired!

![superstore](staticAsset/data/Module-2/Project-5/superstore.png)

Be mindful about the presentation:

- Add a general title.

- Make sure all of your views have their own title and subtitle, if necessary. 

- Show the necessary filters to allow the viewer to interact with the visualisations.

- Choose your colour palette properly.

- Most importantly, **tell a story with your dashboard**. Focus on the information you are trying to convey. What is your goal? Do the visualisations help you carry that message?

Important: in this module, you're intended to learn about:

- Uploading databases in Tableau Public

- Getting familiar with the Tableau Public interface

- Creating basic visualisations with Tableau Public

- Using filters, parameters and calculated fields

- Create a dashboard that tells a story

- Optional: Using Level of Detail (LOD) expressions

## Epic 4: the final presentation

The VS Electronics team does not have a proper technical background. Your aim is to make the presentation as business oriented as possible. For that purpose, you should show beautiful plots accompanid by a very short explanation, without going much into technical details. Do not forget to add a slide explaining the usefulness of having a centralised database.

This time, when you're doing your presentation, try to engage the audience by asking them questions. It will let you know if they're paying attention. As a rule of thumb, select very easy topics or questions so that the audience can answer correctly and has a small feeling of success.

The presentation is supposed to include, **but not limited to**, below guidelines (not in order):

- Cover slide

- Agenda

- Context or general information about the e-commerce market in Germany

- Your database schema and the importance of having a centralised database

- Exploratory data analysis with minimum of 3 interesting insights

- 2-4 relevant KPIs

- Closing slide

The presentation time will be of 25 mins maximum. **Harness the power of storytelling in your presentation.**

**Estimated time: one week**
