---
navTitle: "Sprint 4"
title: "Sprint 4"
metaTitle: "Welcome to Sprint 4"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-1/Project-1/Sprint-3'
# next: 'data/Module-1/Project-2'
---

## Epic 1: The 5 steps of Data Analysis

Now that you have a good overview of statistical concepts and python, it is time to put all that in practice.

Analysing a dataset always involves several steps to follow:

1. **Asking the right questions:** The first step towards any sort of data analysis is to ask the right question(s) from the given data. Identifying the objective of the analysis, it becomes easier to decide on the type(s) of data we will be needing to draw conclusions.

2. **Data Wrangling:** Data wrangling, sometimes referred to as data munging, or Data Pre-Processing, is the process of gathering, assessing, and cleaning of "raw" data into a form suitable for analysis.

3. **Exploratory Data Analysis:** Once the data is collected, cleaned, and processed, it is ready for Analysis. As you manipulate data, you may find you have the exact information you need, or you might need to collect more data. During this phase, you can use data analysis tools and software which will help you to understand, interpret, and derive conclusions based on the requirements.

4. **Conclusion:** After the analysis phase is completed, the next step is to interpret our analysis and draw conclusions from it. As we interpret the data, there are 3 key questions which should be asked by us:

   - Did the analysis answer my original question?
   - Was there any limitation in my analysis which would affect my conclusions?
   - Was the analysis sufficient enough to help decision making?

5. **Communicating results:** now that data has been explored, conclusions have been drawn; it's time to communicate your findings to the concerned people or communicating to mass employing data storytelling, writing blogs, making presentations or filing reports. Great communication skills are a plus in this stage since your findings need to be communicated in a proper way to other people.

Note that the five steps of data analysis are not followed linearly, it is actually non-linear in nature. To explain this, let's consider an example. Supposedly, you have done your analysis, drawn conclusions, then suddenly you find the possibility of representing a feature in a better way, or to construct a new feature out of other features present in the data set. In this case, you would go back to step 3, perform feature engineering, and again perform the EDA with the new features added.

## Epic 2: Data Wrangling

During the first task with RapidMiner, you have been working on almost all the steps mentioned above. Today, with the help of a new Python library called Pandas, you will focus on the second step.

Data Wrangling has 3 sub-process:

- **Gathering of data:** collect the necessary data required by us to draw appropriate conclusions.

- **Assessing of data:** after the data has been gathered, stored in a supported format, and assigned to a variable in Python. It's time to gain some high-level overview of the type of data we are dealing with.

- **Data Cleaning:** data cleaning is the process of detecting and correcting missing, or inaccurate records from a data set. In this process, data present in the "raw" form (having missing, or inaccurate values) are cleaned appropriately so that the output data is void of missing and inaccurate values. Since no two data sets are same, therefore the method of tackling missing and inaccurate values vary greatly between data sets, but most of the time, we either fill up the missing values or remove the feature which cannot be worked upon.

Install Pandas in your conda environment: [https://anaconda.org/anaconda/pandas](https://anaconda.org/anaconda/pandas)

Gathering the data has been done already for you. We will again use the movie dataset that you have explored in your first days. You can find it here: [movies_2.csv](https://drive.google.com/file/d/1yFtA1E_kPkcMjKwwQafV0h3YsRig122S/view?usp=sharing).  
Please download it again as few changes has been done to improve the learning experience.

Get familiar with some basics concept of Pandas here: [Basics of Pandas](https://drive.google.com/file/d/1LegiAniq3boQuEvjdozA0AVw1CBh_O1E/view?usp=sharing)

Pandas official docs reference: [https://pandas.pydata.org/docs/](https://pandas.pydata.org/docs/).

Now let's start to explore the concepts of Data Wrangling on the provided dataset.

```python
import numpy as np
import pandas as pd

df = pd.read_csv('movies_2.csv') # Gathering data
df.head(5)
```

### Assessing of Data

After you have completed all the steps above, you should be able to finally see the movies dataset in a form of a table.

It is now time to assess the data. This process includes gaining information such as:

- the number of rows and columns present in the data set ([shape](https://pandas.pydata.org/pandas-docs/version/0.23/generated/pandas.DataFrame.shape.html) of the dataframe)

- columns present in the data set, along with the data type ([info](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html) method or [dtypes](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dtypes.html) method)

- check for MPAA Rating, Budget, Gross, Release Date, Genre, Runtime, Rating and Rating Count columns how many [NaN we have](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isna.html)

- understanding which kind of information each column represents

Please try to understand all these things using Pandas methods.

## Epic 3: Data Cleaning & Exploratory Data Analysis

Data Analysts usually spend about 70% of their time cleaning data. There are several methods to clean your dataset. They always depend on what was the original question, therefore in the next steps we will talk about Data Cleaning and Exploratory Data Analysis together.

As mentioned before Exploratory Data Analysis is where you start exploring your data with the help of charts and plots. We will not do that in the its extensive meaning during this assignment as it requires you to use other Python libraries, but we will get there with the next project. For now we will just try to get informations about this dataset without visual help.

### Irrelevant data

Remove all irrelevant data in the dataset.

- Get rid of the Summary column (use the [drop()](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop.html) method)

### Standardize

Our duty is to not only recognize the typos but also put each value in the same standardized format. For strings, make sure all values are either in lower or upper case. For numerical values, make sure all values have a certain measurement unit. The height, for example, can be in meters and centimetres, or feet and inches.

In this case, it is recommended that column names have no space between words, but an underscore. Also, it is common to find column names as all lower case.

- use the [rename](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.rename.html) method to change all columns names lowercase and add an underscore if they are made of 2 words

### Missing values

Given the fact the missing values are unavoidable leaves us with the question of what to do when we encounter them. Ignoring the missing data is the same as digging holes in a boat; It will sink.

There are three, or perhaps more, ways to deal with them.

##### Drop

If the missing values in a column rarely happen and occur at random, then the easiest and most forward solution is to drop observations (rows) that have missing values. If most of the column's values are missing, and occur at random, then a typical decision is to drop the whole column. This is particularly useful when doing statistical analysis, since filling in the missing values may yield unexpected or biased results.

- Get rid of the last row, the one containing NaN for each column (use [drop()](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop.html) method and row index)

##### Impute

It means to calculate the missing value based on other observations. There are quite a lot of methods to do that.

**First.** Using statistical values like **mean, median**. However, none of these guarantees unbiased data, especially if there are many missing values.  
Mean is most useful when the original data is not skewed, while the median is more robust, not sensitive to outliers, and thus used when data is skewed.  
In a normally distributed data, one can get all the values that are within 2 standard deviations from the mean. Next, fill in the missing values by generating random numbers between `(mean — 2 * std) & (mean + 2 * std)`

**Second.** Using a **linear regression**. Based on the existing data, one can calculate the best fit line between two variables, say, house price vs. size m².

**Third.** **Hot-deck**: copying values from other similar records. This is only useful if you have enough available data. And, it can be applied to numerical and categorical data.  
One can take the random approach where we fill in the missing value with a random value. Taking this approach one step further, one can first divide the dataset into two groups (strata), based on some characteristic, say gender, and then fill in the missing values for different genders separately, at random.

**Three.** **Flag**: some argue that filling in the missing values leads to a loss in information, no matter what imputation method we used. That's because saying that the data is missing is informative in itself, and the algorithm should know about it. Otherwise, we're just reinforcing the pattern already exist by other features.  
This is particularly important when the missing data doesn't happen at random. Take for example a conducted survey where most people from a specific race refuse to answer a certain question.  
Missing numeric data can be filled in with say, 0, but has these zeros must be ignored when calculating any statistical value or plotting the distribution.  
While categorical data can be filled in with say, "Missing": A new category which tells that this piece of data is missing.

**Things to take into consideration**: missing values are not the same as default values. For instance, zero can be interpreted as either missing or default, but not both. Missing values are not "unknown". A conducted research where some people didn't remember whether they have been bullied or not at the school, should be treated and labelled as unknown and not missing. Every time we drop or impute values we are losing information. So, flagging might come to the rescue.

We will deal with missing data using the first approach.

##### Rating

We are not going to create a Machine Learning model out of this dataset, therefore we could simply ignore the missing data for now. However let's try one of the methods described above.

![Rating Distribution](staticAsset/data/Module-1/Project-1/rating-distribution.png)

As you can see the Rating column has a negatevly skewed distribution. So we will use the median to replace the missing values for the Rating column.

- use fillna() method to replace the missing values of Rating with their median

```python
df["Rating"].fillna(value=df["Rating"].median(), inplace=True)
```

##### Rating Count

![Rating Count Distribution](staticAsset/data/Module-1/Project-1/rating-count-distribution.png)

The Rating Count column is also skewed, use the same method to fill the missing values.

### Duplicates

- [Drop the duplicates](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html), if any

### Type conversion

Make sure numbers are stored as numerical data types. A date should be stored as a date object, or a Unix timestamp (number of seconds, and so on.

- Convert Budget into integer type (use [astype()](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.astype.html) method)

- Convert Gross into integer type

- Convert Release Date into date type (use [to_datetime](https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html) method)

### Syntax Errors

There are no syntax errors here, but it is something you should always check.

### Outliers

They are values that are significantly different from all other observations. Any data value that lies more than (1.5 \* IQR) away from the Q1 and Q3 quartiles is considered an outlier.

Outliers are innocent until proven guilty. With that being said, they should not be removed unless there is a good reason for that.
For example, one can notice some weird, suspicious values that are unlikely to happen, and so decides to remove them. Though, they worth investigating before removing.

It is also worth mentioning that some models, like linear regression, are very sensitive to outliers. In other words, outliers might throw the model off from where most of the data lie.

### In-record & cross-datasets errors

These errors result from having two or more values in the same row or across datasets that contradict with each other.
For example, if we have a dataset about the cost of living in cities. The total column must be equivalent to the sum of rent, transport, and food.

Now we can start with the exploratory analysis.

Answer the following questions:

- show the movies with more than 7 in **Rating** & greater than 50 million **Gross**

- show the movies with more than 7 in **Rating** & greater than 50 million **Gross** & with Parental guidance as **MPAA Rating**

- **count** of **Animation** movies with more than 7 in **Rating** (use the shape() function)

- show the list of **top 5 movies** based on Budget

- show the **top 5 Comedy movies** by Rating

- top 5 movie names by Rating

- top 3 high Gross Romance movies released after 1999, not included (typecast it to datetime)

- how many Genres are present in the dataframe? (use the function value_counts() which applies to Series, not Dataframe)

- top 5 expensive movies released after 1999, not included (measured by Budget)

- most & least frequent MPAA Rating in the dataset in terms of occurances

- most and least expensive Genre (take an average of all Budget measures grouped by Genre - use groupBy() method)

- which Genre is favored the most by the people?
