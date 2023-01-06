---
navTitle: 'Sprint 3'
title: 'ML Regression'
metaTitle: 'Welcome to Sprint 3'
metaDescription: 'Data Science Course'
access: data
# prev: 'data/Module-2/Project-6'
# next: 'data/Module-2/Project-6/Sprint-2
---

Regression is a supervised learning method. These models are applied to ML when we are trying to predict a continuous numeric value.

It serves two purposes:

- Interpolation: you can estimate missing data within your data range

- Extrapolation: you can estimate future data outside your data range

They are often used in finance to establish the relationship between a single dependent variable and several independent ones. An example could be predicting house prices or salary of an employee.

Generally the output of the algorithms is the average of the predicted values.

## Epic 1: Linear Regression

Linear Regression is used when we have a relationship between one dependent variable and one independent. We use the line equation to find the best fit for the data points.

The square of the difference between the predicted and actual output represents the algorithm loss.

If we use more than one independent variable, we call it Multiple Linear Regression.

Multiple Linear Regression and simple Linear Regression make the same assumptions:

- Homogeneity of variance (homoscedasticity): the size of the error in our prediction doesn’t change significantly across the values of the independent variable.

- Independence of observations: the observations in the dataset were collected using statistically valid methods, and there are no hidden relationships among variables.

In multiple linear regression, it is possible that some of the independent variables are actually correlated with one another, so it is important to check these before developing the regression model. If two independent variables are too highly correlated (r2 > ~0.6), then only one of them should be used in the regression model.

- Normality: The data follows a normal distribution.

- Linearity: the line of best fit through the data points is a straight line, rather than a curve or some sort of grouping factor.

Now choose some other algorithms to apply to our regression problem. We want to calculate the number of bikes depending on the season, working day/holiday, etc information we have explored in the Capital Bike Sharing project. Use the historical data, which are the ones with temperature and weather informations.

Use the R2 score and the Mean Square Error (MSE) and/or Mean Absolute Error (MAE) for evaluating your model performance. You can find an explaination here: [https://towardsdatascience.com/what-are-the-best-metrics-to-evaluate-your-regression-model-418ca481755b](https://towardsdatascience.com/what-are-the-best-metrics-to-evaluate-your-regression-model-418ca481755b)

## Epic 2: Prepare for the presentation

Create a report for your client's management in the form of a presentation. Your report should include:

- Cover Slide
- Agenda – What will be discussed in the presentation?
- Background – What is the context of this project?
- Descriptions and location of related data.
- Any known issues with the data and how you plan to address them.
- Descriptive/ Inferential statistics you gathered as an initial step in analysis.
- High-Level Recommendations – Three or more recommendations about the existing data. What would you change or add to the data?
- Closing Slide

DO NOT forget to tell a story with your Analysis!

The presentation is supposed to include but not limited to below guidelines(these are not in order):

- Visualizations with Analysis. Minimum of 3 interesting insights consisting of Day, Week and a time period of your choice.
- Present the attributes which help understand the users behaviour and preferences in context of the business.
- Time series visualisations
- Supply and Demand analysis (based on bike stations). For example, many bike riders choose to start from 'bike station 1' and there might be less availability of bikes. Similarly, the opposite might happen in other stations.
- A good analysis on KPIs and how the business can harness the power of analytics to improve on those KPIs.
