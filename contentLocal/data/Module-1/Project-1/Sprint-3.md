---
navTitle: "Sprint 3"
title: "Sprint 3"
metaTitle: "Welcome to Sprint 3"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-1/Project-1/Sprint-2'
# next: 'data/Module-1/Project-1/Sprint-4'
---

## Epic 1: Basics of Statistics

Data Science is an extensive term which includes different concepts and technologies. But before you dive deep into the big sea of data science, you must first familiarize yourself with some basics of mathematics and statistics. Please do not worry; we only need a basic understanding of Maths and Statistics.

<!-- There are important skills you need to develop and work on to become a successful data professional, for example:

Finding datasets: there are two ways to kickstart any data science project; you either have a dataset you want to use to build a project. Or you have an idea and need to find a dataset for. Exploring datasets and choosing the right one for your project is an important skill to obtain.

Initially, we will provide you with all the datasets.

Science communication: as a data person, you will need to communicate with a general audience to deliver your process and findings. So, you will need to develop your science communication skills and explain complex concepts using simple terms.

Effective visualization: the only way to validate your findings is to visualize them. Visualization plays a big role in data science, from exploring your data to delivering your results. Getting familiar with effective visualization of data can save you tons of time and effort during your project.

We discuss this as we progress in the course. -->

Data Analytics is incomplete without the knowledge of Probability and Statistics. Statistical knowledge helps you use the proper methods to collect the data and guides you about the correctness of the analysis.

Statistics is a crucial process behind how Data Analysts make decisions based on data and predictions.

### About Statistics

**Statistics**, which is a branch of mathematics, is concerned with developing and studying methods for collection, analysis, interpretation and presentation of data.

With huge amount of data being generated each day and increasing computation power, statistics has become major tool for any business to predict the market and reshape their business model based on analysis of market sentiment and customer’s behaviour.

 Often, a statistic is used to measure the value of a population parameter. For instance, consider a random sample of 100 employees from a organisation with 1000 employees. The average salary of the sampled employees will give a statistics of whole organisation.

**Uncertainty and Variation are the key concepts in the field of Probability and Statistics.**

Uncertainty, as the name suggests, is the situation where outcome **can not be determined**. For example, based on previous match’s performance, a soccer team’s chance of winning can be estimated to be very likely, however, no-one can guarantee the outcome. Also sometimes, uncertainty exists because of a lack of awareness. Suppose a candidate has been interviewed for a job offer, however, he/she can not know whether he/she has passed the interview until the employer provides the official job offer letter or publishes the results.

**There are two major branches of statistics - Descriptive and Inferential.**

Descriptive statistics helps to analyse data by describing or summarizing data in a meaningful way. It might look for some patterns which can help to reach conclusion about the data, however, it does not draw any conclusion beyond the data or about any hypotheses. There comes Inferential statistics which provides techniques that can draw a small sample from a large population to make generalizations about that population and also perform hypothesis testing to determine relationships between two datasets.

_Let’s say, the mean height of 100 students in a school is 150 cm. 100 students here represent a small sample from a large population of 2500 students in the school. This mean value is parameter of descriptive statistics. However, no conclusion can be made about rest of the students just by looking at the sample students._

Now, to make generalizations of this population of 2500 students without measuring height of each student, the task is to do proper **sampling**  and choose 100 students such that the sample accurately represents the population. However, sampling naturally consists of sampling error and thus a sample can not be considered to be the perfect representative of the whole population. For example, we could assume that all of the 2500 students are at least 135cm. But, if at least one student is found to be of less than 135 cm height, this conclusion is shown to be erroneous. So, the need is to have a conclusion with a certain accuracy level, e.g., in 80% of cases, the heights of students fall above 135 cm.

That is inferring correctness of a conclusion with a calculated measure of risk. This is referred to as Inferential Statistics.

### Descriptive Statistics

Descriptive statistics **describe, show or summarize data** so that meaningful insights can be extracted.

The parameters of descriptive statistics can be classifies into **4 categories**

##### Measures of Frequency (Count, Percent, Frequency)

In simple words, in an elecronics store, how many laptops are sold in a month? Or, what propotion of laptops sold in a month are MacBooks? Or, in a sale of 10 laptops, how many are MacBooks ?

##### Measures of Central Tendency (Mean, Median, Mode)

![stat 1](staticAsset/data/Module-1/Project-1/stat-1.jpg)

In words, in an elecronics store, what is the average price of a Samsung laptop? Or, what is the price of the laptop model that divides Samsung laptops into two equal groups: high end models & low end models. (here, model 5)
Or, which laptop model is sold highest in number this year?

##### Measures of Variation (Range, Variance, Standard Deviation)

Range measure the difference between highest and lowest value. Therefore, the range of price for Samsung laptops in the store is $1230 – $389 = $841.

The parameters **Variance** and **Standard deviation** shows how "spread out" the data is.

Variance and Standard Deviation measures the difference between observed score and mean value. In the store, the mean value is $822.

<!-- $$
s^2={\frac {\sum (X - \overline{x})}{n - 1}}
$$

s² = sample variance
∑ = sum of...
X = each value
$\overline{x}$ = sample mean
n = number of values in the sample -->

Variance = ((389 - 822)^2 + (400 - 822)^2 + (500 - 822)^2 + (780 - 822)^2 + (800 - 822)^2 + (1000 - 822)^2 + (1100 - 822)^2 + (1200 - 822)^2 + (1230 - 822)^2) / (9-1) = 111227 (approx)

**Standard deviation = Square root of Variance = 333 (approx)**

##### Measures of Relative Position (Percentile, Quartile)

It describes how data points fall in relation to one another.

Descriptive statistics would help to answer the below questions:

- What kind of distributions the data points have?
- Do the dataset contain a wide range of values or there are a lot of similar values?
- What value is in the center of the data points?
- Where does a particular value stand with respect to other values in the dataset?
- Is there any particular region where data points are more concentrated?
- With the more and more collection of data points, what is the change in overall distribution?

### Inferential Statistics

**Inferential statistics use a random sample of data taken from a population and looks for patterns and insights to describe and make inferences about the population.**

To understand concepts of Inferential Statistics, you will have to be acquainted with the following terminologies.

##### Confidence Interval

A 'Confidence Interval' is a range of values we are fairly sure our true value lies in.

Statisticians and other analysts use confidence intervals to understand the statistical significance of their estimations, inferences, or predictions.

Usually we use a confidence level of 95% or 99%, and we calculate the interval in which, under repeated sampling of the same population, we would find the true value 95% or 99% of the time.

Confidence *level* is expressed as a percentage, while confidence *interval* is a range of values.

Sounds complicated but it's not! Let's make an example.

We measure the heights of 240 randomly chosen men and we find out that the mean height is 175cm. We also know that the standard deviation is 20cm.

We decide that we want to calculate the confidence interval for a confidence level of 95%.

We use [this great calculator](https://www.mathsisfun.com/data/confidence-interval-calculator.html) and find out that our confidence interval is (168.8cm, 181.2cm). This means that if we would take another random sample of men, 95% of the times their height would fall between these 2 values.

Try to use a smaller confidence level and see what happens to the confidence interval! Then try with a higher confidence level.

##### Hypothesis Testing

A hypothesis, a type of statistical inference, can be termed as an educated guess about any topic. However, one should be able to test it, either by conducting an experiment or observation.

The key is to understand how to formulate the hypothesis statement. The below format is one of the most widely used ways to describe a hypothesis statement:

**If (change in independent variable), then (change in dependent variable).**

Examples:

- If (students are more exposed to a "learning by doing" methodology) then (increase in student engagement in the subjects)
- If (increase in the amount of water given to plants) then (increase in growth of the plants).

Now that we have 2 hypotheses, we need to figure out the **null hypothesis** for both of them.

A null hypothesis says there is no statistical significance between the two events in the hypothesis.

Obviously our goal is to disprove it.

The null hypothesis for the examples above are:

- There is no statistical significance between "learning by doing" methodologies and student engagment
- There is no statistical significance between water and plant growth

Now, the task is to challenge the null hypothesis and usually disprove it to demonstrate that there is a relationship between the two events.

Therefore, the alternative hypothesis would state the following:

- The "learning by doing" methodology brings higher engagement
- The more water the greater the growth of the plants

Now let's perform our tests!

Refuting / Accepting the null hypothesis would require showing statistical significance, which can be found using a variety of tests. The p-value (which is basically a measure of probability that the null hypotheses is true) can be used to determine the statistical significance of the results.

A p-value that is less than or equal to 0.05 usually indicates that there is strong evidence against the null hypothesis.

If we conduct one of these tests, we will find out that the p-value is indeed smaller for the first hypothesis (learning by doing DOES bring higher engagement) and for the second it is higher (the amount of water is not directly related to the growth of plants).

In the next project, you will perform hypothesis testing and all these concepts will become more clear. For now it's just important to remember that every statement you make needs to be statistically valid to be taken into consideration.

### Some Exercises

Now it's time to solve some problems. Each problem can be solved both by hand (or by observation) and by using a Python library called Numpy. We encourage you to first try understand the solution by observing (or calculating) and then confirm it by using the library.

A library is a collection of modules. You can think of packages as the directories on a file system and modules as files within directories.

A module is a file consisting of Python code that performs a specific task. Therefore, a module is similar to a function that allows you to perform many actions without writing your own code.

To install Numpy on your conda virtual environment, follow this documentation: [https://anaconda.org/anaconda/numpy](https://anaconda.org/anaconda/numpy).

**Hint:** The line of code that you will find in the link needs to be pasted into the Anaconda Prompt!

Get familiar with the basic concepts of Numpy: [https://cs231n.github.io/python-numpy-tutorial/#numpy](https://cs231n.github.io/python-numpy-tutorial/#numpy)

##### Exercise 1

Given, there are 5 numbers in the data set: (8, 12, 16, 24, 4).
What is the standard deviation?
And, what will be the sum of deviations of individual data points from their mean?

##### Exercise 2

If some outliers are introduced to the dataset, what will happen to the Standard Deviation? Will it increase, decrease or remain the same?

##### Exercise 3 - no Numpy

Suppose the below positively skewed distribution has a median of 30, which of the following statement is true?

A) Mean is greater than 30  
B) Mean is less than 30  
C) Mode is greater than 30  
D) Mode is less than 30  
E) Both A and D  
F) Both B and C

![stat 2](staticAsset/data/Module-1/Project-1/stat-2.jpg)

##### Exercise 4

Which value can be the possible value for the median of the below distribution?

![stat 3](staticAsset/data/Module-1/Project-1/stat-3.jpg)

Assume the data are distributed as follows:

```python
[10, 10, 10, 10, 11, 11, 12, 13, 14 ]
[15, 15, 15, 16, 16, 16, 16, 16, 17, 18, 19, 19]
[20, 20, 20, 21, 21, 21, 21, 21, 22, 22, 22, 23, 23, 23, 24, 24, 24]
[26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 29, 29, 29, 29, 29, 29, 29, 29, 29]
[30, 30, 30, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34]
[35, 35, 35, 37, 37, 37, 37, 39, 39, 39]
[40, 40, 43, 43, 44, 44]
[46, 46, 46, 47, 49]
[52, 53, 54]
```

##### Exercise 5-6-7

Given the following distribution:

![stat 4](staticAsset/data/Module-1/Project-1/stat-4.jpg)

What is the shape of the distribution? (no Numpy)

What would you consider to be the most appropriate measure of the center for this data?

If Y axis represents the number of individuals and X axis – salary of the individual in thousands. How many individuals have salary less than 10 thousands? (no Numpy)

##### Exercise 8

We have a set of positive numbers. If a single value of the set is altered what must change?

A) Mean  
B) Median  
C) Mode  
D) All of these

Hint: try to create a Numpy array and calculate mean median and mode, then alter it and see what changes

##### Exercise 9

The chart shows hourly consultancy rate of 10 people. 

Calculate the standard deviation of the salaries of the 10 employees.

![stat 5](staticAsset/data/Module-1/Project-1/stat-5.jpg)

##### Exercise 10 (no Numpy)

Which of the following random variables is discrete?

A) the length of time a battery lasts  
B) the number of pens purchased by a student in a year  
C) the percentage of cows in a cattle firm that have been vaccinated  
D) the distance between a pair of towns

##### Exercise 11 (no Numpy)

Which of the below normal distributions will have the greatest spread?

A) mu=5,  sigma =1.5  
B) mu=10, sigma =1.0  
C) mu=5,  sigma =1.65  
D) mu=8,  sigma =1.2  
E) mu=10, sigma =1.6

##### Other Exercise

Here you will find a list of 100 Numpy exercises to do: [https://github.com/rougier/numpy-100/blob/master/100_Numpy_exercises.md](https://github.com/rougier/numpy-100/blob/master/100_Numpy_exercises.md)

This is to be considered optional and can be done only if you have solved the previous ones.
