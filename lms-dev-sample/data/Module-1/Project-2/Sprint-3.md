---
navTitle: 'Sprint 3'
title: 'Getting your data ready'
metaTitle: 'Welcome to Sprint 3'
metaDescription: 'Data Science Course'
access: data
# prev: 'data/Module-1/Project-2/Sprint-2'
# next: 'data/Module-1/Project-2/Sprint-4'
---

## Epic 1: Intro to Machine Learning

The idea of making intelligent, sentient, and self-aware machines is not something that suddenly came into existence in the last few years. A large amount of lore from Greek mythology talks about intelligent machines and inventions having self-awareness and intelligence of their own.

Computers started evolving with the invention of the Analytical Engine by Babbage. Ada Lovelace wrote the first computer program in 1842. People started wondering and contemplating if there could be a time when computers or machines truly become intelligent and start thinking for themselves. The renowned computer scientist, Alan Turing, was highly influential in the evolution of theoretical computer science, algorithms, and formal language and addressed concepts like artificial intelligence and Machine Learning as early as the 1950s. This brief insight into the evolution of making machines learn can give you an idea of something that has been out there for centuries but has recently started gaining a lot of attention and focus.

With faster computers, better processing, better computation power, and more storage, we have been living in what has is referred to as the Age of Data.

You can read about some statistical inference about ML: [https://seedscientific.com/how-much-data-is-created-every-day/](https://seedscientific.com/how-much-data-is-created-every-day/)

### Machine Learning Methods

Data is used to solve real-world problems via Machine Learning algorithms, techniques, and methodologies.

The following are some of the two broad areas of Machine Learning methods.

- Supervised learning
- Unsupervised learning

You can find more about this here: [A basic introduction to Machine Learning](https://jakevdp.github.io/PythonDataScienceHandbook/05.01-what-is-machine-learning.html)

During the program, we will only cover Supervised Machine Learning methods, and your first project will be a classification task.

You can dig deeper into Machine Learning concepts and different algorithms in the corresponding Machine Learning Fundamentals chapter. It is not necessary to read everything now. As we refer to new ideas, you can go to that chapter and read about them.

## Epic 2: Preparing your data

Machine Learning is a fascinating area, currently in very high demand across all industries because of its versatility to solve a wide range of challenges. Its multiple applications include:

- Optimising internal processes.
- Predicting credit card fraud.
- Identifying skin cancer.
- Forecasting demand of products.
- Managing air traffic, among many others.

Although ML is not the solution to all our problems (one of the main challenges is knowing when to use ML), its application is extensive. More companies are hiring Machine Learning experts, who are responsible for implementing the required models.

To do that, you must follow several steps to ensure a successful ML project. The workflow is continuous: you either need to improve the model or retrain it with newer data when you reach the last stage. It's a wash-rinse-repeat process.

It is also not linear, meaning that sometimes you may have to revisit a particular stage to fix or modify something and then continue to the next step.

**This guide is for classification problems. Some methods and metrics for regression and prediction problems may vary.**

Please be aware that this guide is by no means exhaustive or the only way to go about the process. If you research online or refer to a book, you will find that the order of the steps differ, or even additional or fewer stages. There is a diversity of ways with which you can approach projects. We encourage you to explore and read other people's code, to discover and implement different methods.

So far, you've performed the two first steps of the ML workflow: collect and wrangle the data and the Exploratory Data Analysis (EDA). Here's a brief review:

### Collect your data

Throughout this course, we will provide you with the data sets. But in real life, you might find yourself in a situation where you have to retrieve the data yourself. Before you proceed, it is crucial to understand the question that needs to be answered, as this will indicate where you have to collect the data:

- What kind of problem are you trying to solve?
- What data sources exist inside or outside your company?
- Is the data readily available in the different databases of your company (sales, customer service, website analytics, HR, shipping and delivery, etc.)?
- Do you need to retrieve it from public sources, like government websites and publications? Is it public?
- Do you need to buy data to answer these questions?
- Maybe you need to scrape your competition's website?
- Are there any privacy concerns with the data you are using?

After you've uploaded your data and converted it into a DataFrame, display the first rows with the .head( ) method to overview your features and the data, and check for inconsistencies.

_Upload:_

- Did the data upload correctly?
- The default delimiter of csv files is a comma ( , ) but it may happen that when the data was captured, they used a different delimiter. You will need to specify which delimiter to use to display the data correctly.

_Labels:_

- Are all labels written consistently? (underscore, space between words, capitalisation)
- Are there spelling mistakes?

_Values:_

- Are there any columns that you would like to merge or split? For example, separate first name and last name into two different columns.
- You could also think of adding a new feature. For example, if you have sales data and the columns include the price of a unit and the number of units bought, you can add a column with the total, where total = price \* quantity.
- You can also decide to drop unnecessary columns.

Always write down the steps you have taken and your observations. You will soon have to decide what to do with them.

### Wrangle your data

Wrangling the data is a series of processes designed to transform raw data into usable data by cleaning, structuring and enriching it for analysis. The goal of this step is to increase the data quality. You will proceed to act upon the observations you made on the previous step.

_Data structuring:_

- Separate single columns into several columns or even several rows.

- Merge data sets.

- Find the number of rows and columns with the .shape() method.

_Data cleaning:_

- Handle missing values by dropping, imputing or flagging them.

- Drop duplicates.

- Drop unnecessary information (drop highly correlated features and drop features that do not help in the prediction).

- Standardise formats and input ranges (covert all measures to the same format, i.e. celsius instead of Fahrenheit).

- Change data to its correct type (make sure that numbers are of type int or float and not of type string, date types are of type date, etc).

- Correct misspellings.

- Remove outliers.

An example of technique used to remove outliers is by using the IQR scores (Interquatile Range Scores), following the [IQR Rule](<https://www.thoughtco.com/what-is-the-interquartile-range-rule-3126244#:~:text=Using%20the%20Interquartile%20Rule%20to%20Find%20Outliers&text=Multiply%20the%20interquartile%20range%20(IQR,IQR)%20from%20the%20first%20quartile.>).

Here you can find some examples of Outliers detection and removal: [https://www.pluralsight.com/guides/cleaning-up-data-from-outliers](https://www.pluralsight.com/guides/cleaning-up-data-from-outliers).

_Data enriching:_

- Create new variables, like "quality_label" and "wine_type".

You are already familiarised with these operations because you applied a few of these processes to the wine datasets. Because this is our first project, the data sets were well-structured and clean. In later projects, you will have to deepen your knowledge of the data wrangling process.

Albeit tedious, data scientists estimate that data wrangling takes between 40% and 80% of their time.

### Explore your data

As the name suggests, during the Exploratory Data Analysis (EDA), you will explore data sets and summarise their main characteristics. It uses statistical and data visualisation methods to help you discover relationships between the different variables, understand patterns, interpret the information and achieve insights. It is during the EDA that you confirm or discard your hypothesis.

_Know your data:_

Before you start working on your Machine Learning project, you need to understand your data set. In the LMS, we provided the descriptions of the variables of the red and white wine data sets, but this is not always the case, and sometimes you have to figure them out yourself. Please take a moment to look and understand them.

_Review the statistical summary with .describe():_

As you know, .describe() generates a summary of descriptive statistics (count, mean, standard deviation, maximum and minimum values, percentiles) for numeric values, excluding NaN values, and presents them in the form of a table.

Write down some of your findings; you will revisit them later.

_Perform univariate and multivariate analysis with visualisations:_

Tables filled with numbers can be challenging to understand. Visualisations make our findings more palatable. In a glimpse, plots and charts allow you to take in powerful insights.

- Univariate analysis

First, you will perform univariate analysis, which means you will evaluate each variable independently. For example, in Sprint 1, you created several plots to analyse and compare the distribution of the data points of the "quality_label" feature, and in Sprint 2, you reviewed the residual sugar content in wine.

Histograms and boxplots are commonly used for that type of analysis. With practice, histograms are one of the best ways to quickly learn a lot about your data, including central tendency, spread, modality, shape and outliers. On the other hand, boxplots show robust measures of location and spread and provide information about symmetry and outliers.

Write down interesting findings that you could use for the presentation or that help you answer the project's questions.

- Multivariate analysis

As you may have guessed, multivariate analysis helps you map and understand interactions between two or more variables in the data. It involves checking out distributions and potential relationships, patterns, and correlations amongst these attributes.

Density and scatter plots are good ways to visualise these relationships. Scatter plots help understand the relationship between continuous, numeric variables. You already did a couple when working with the movie data set in RapidMiner.

_Create a correlation matrix:_

Analysing variables with a correlation matrix is the fastest way to develop a general understanding of their relationships. Correlation is a measurement that describes the relationship between two variables; thus, a correlation matrix is a table that shows the correlation coefficients between many variables.

A simple way of visualising these correlations is through a heatmap, like the one below. You can observe that the correlation between two random variables is a number that runs from -1 to +1.

Some tips for reading a heatmap:

- A value of 1 means that both variables move in the same direction (robust direct linear relationship).

- A value of 0 means that the variables are not correlated (no linear relationship).

- A value of -1 means the variables move in opposite directions (strong inverse linear relationship).

- Look out for the variables that are not correlated with each other but **with the target variable.**

- Collinearity between variables is often insightful because it may uncover surprising variable relationships.

- If you spot strongly correlated variables, you can pick one to drop to avoid "feature leakage". Usually, a value of 0.9 is a reasonable threshold.

_Calculate Analysis of Variance (ANOVA):_

As you saw in the LMS, ANOVA is a statistical method used to determine whether two or more data samples have a significant difference. Moreover, ANOVA is used when one variable is numeric and the other categorical, because it calculates the variance between samples and within samples.

Examples of when you might want to test different groups are:

- A group of psychiatric patients are trying three different therapies: counselling, medication and biofeedback. You want to see if one type of therapy is better than the others.
- A manufacturer has two different processes to make light bulbs. They want to compare them.
- Students from different colleges take the same exam. You want to see if one college outperforms the other.

Taking the last example case, usually, you would make two hypotheses:

- **Null Hypothesis:** There is NO significant difference between the average score of the students for the exam between colleges.
- **Alternative Hypothesis:** There IS a statistical difference between the average score of the students for the exam between colleges.

The ANOVA test gives us two measures as a result:

- **F-test score:** It calculates the variation between sample group means divided by variation within the sample group.
- **P-value:** It shows us the confidence degree. In other words, it tells us whether the obtained result is statistically significant or not.

A p-value above 0.05 (as we chose 95% as confidence level) indicates that no difference can be found. But, if the value is below, there is a statistically significant difference between the students of these two colleges.

There are two kinds of ANOVA tests:

- **One-Way ANOVA:** you are testing if there is a difference among samples considering only one independent variable that affects the dependent variable.
- **Two-Ways ANOVA test:** you are testing if there is a difference among samples considering two independent variables that affect the dependent variable.

SciPy package has a built-in function to calculate ANOVA. For the sake of this programme, we will only be working with the **one-way ANOVA test**.

In machine learning, you can use the results of this test for feature selection, where you can remove those features independent of the target variable from the dataset. For example, your wine data set has twelve numeric variables and one categorical variable. The results of the ANOVA test will let you know.

It is now time to continue with your first ML project using the wine datasets.

So far, you have performed all of the steps listed above. We're now going to move forward in the roadmap to develop an ML project.

_Calculate skewness and kurtosis:_

Two helpful univariate descriptors are skewness and kurtosis. Skewness measures asymmetry in the data distribution, while kurtosis measures _peakedness_. Use them for quantitative data.

The skewness reflects the shape and distribution of the data. As you will see later on, asymmetrical data (with negative or positive skewness) may negatively influence your Machine Learning model. Therefore, you will have to use data transformation tools to normalise the distribution artificially. For more information about skewness, visit [this article](https://www.analyticsvidhya.com/blog/2020/07/what-is-skewness-statistics/).

```python
print(df['total_bill'].astype(float).skew())
```

Kurtosis identifies outliers: data with high kurtosis (heavy-tailed data) is proof of outliers, and data with low kurtosis (light-tailed data) lacks them.

```python
print(df['total_bill'].astype(float).kurt())
```

Both these measures will be helpful when you're preparing your data to implement an ML model.

## Epic 3: Predictive modelling

Data preprocessing refers to preparing the raw data to make it suitable for building and training Machine Learning models. This preparation entails several steps and is essential to enhance the quality of the data and extract meaningful insights from it.

For some of the steps that follow, you will use the ScikitLearn library, especially the [sklearn.preprocessing package](https://scikit-learn.org/stable/modules/preprocessing.html), to transform raw features into a representation that is more suitable for ML models.

You will follow all the following steps to predict first the type of wine (red or white), and then you will have to repeat them to predict the quality (low, medium, high or however you have decided to label your wines).

### Encoding categorical variables

Machine learning models cannot handle categorical data, meaning that to make categorical data useful, you will be required to encode the data or transform it into numerical values.
There are several techniques to encode your data, and using one over the other depends on several factors, for example:

_a. Is your variable nominal or ordinal?:_

- **Nominal variable:** the values have no relationship between them. For example, if we represent a list of countries with a number, the number won't have any 'weight', meaning that no country is more important than the other.
- **Ordinal variable:** This variable has an order or rank associated with it, like the "low", "medium", and "high" quality labels of your win data set.

_b. Is the variable that you're trying to encode the target or a feature?:_

- **One-Hot Encoder:** The One-Hot Encoder converts each category value into a new column and assigns a 1 or 0 (True/False) value to the corresponding column. The encoder prevents the model from weighting a value improperly. To illustrate this, if we have a list of wines, a wine of the category "white" will have 0 in the "red" and a 1 in the "white" category. As you can see, these categories **are nominal**. According to the [documentation](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html), use the One-Hot Encoder for the input values X.

- **Ordinal Encoder:** The Ordinal Encoder class is similar to LabelEncoder, but you use it for **input values X that can be ranked**.

- **Label Binarizer:** use the Label Binarizer for target value y in nominal categories.

- **Label Encoder:** Contrary to the One-Hot Encoder, the Label Encoder is not binary but converts every categorical value to a number. Use it to encode ordinal data. According to the [documentation](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html), you should use the Label Encoder for the target value y.

For more information on transforming the prediction target, refer to [this article](https://scikit-learn.org/stable/modules/preprocessing_targets.html#preprocessing-targets).

In this project you you will need to use the One-Hot Encoder for the _wine type_ and the Label Encoder for the _quality label_.

### Split your data

Now that you've encoded your categorical values, we can proceed to the next step, which is splitting our data set into a train and a test group. You will be using Scikit-learn's [train_test_split function](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html?highlight=train%20test%20split#).
The purpose of this split is to use a portion of the data to create the model (train), while the other part is to check the model's performance (test).

```python
X = df # --> the features we will keep to build our model
y = target # --> what you're trying to predict

# Example:
y=X.SalePrice
X.drop(['SalePrice'],axis=1,inplace=True)
print(y)

X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2, random_state=42)
```

Another more advanced and precise technique is to split your data into three parts, especially when comparing several models: the train, validation, and test groups.
The article ["What is the Difference Between Test and Validation Datasets?"](https://machinelearningmastery.com/difference-test-validation-datasets/) by Jason Brownlee describes each group as follows:

- **Training dataset:** The sample of data used to fit the model.
- **Validation dataset:** The sample of data used to provide an unbiased evaluation of a model fit on the training dataset while tuning model hyperparameters (...).
- **Test dataset:** The sample of data used to provide an unbiased evaluation of a final model fit on the training dataset.

Scikit-learn still doesn't have a way to create these three groups automatically. The train_test_split function only splits the data set into two: training and testing data.

For now, you can simply split your dataset into 2 (train and test).

### Perform Feature scaling

Feature scaling transforms the values of numeric columns in the dataset to a common scale, without distorting differences in the ranges of values, to avoid the model giving more importance to one variable over the other. For example, if your data contains the variables of age and hair follicle density, the ranges can go from 0 to 100 and from 0 to a hundred thousand.

There are two ways of approaching this challenge: normalisation and standardisation. Let's dive deeper into these concepts.

**Normalisation** rescales the values into a range of [ 0, 1 ]:

- **MinMaxScaler:** This estimator scales and translates each feature individually from the original range so that all values are between 0 and 1. As with StandardScaler, it is susceptible to the presence of outliers.

**Standardisation** typically rescales data with a mean of 0 and a standard deviation of 1 (unit variance). The most common scalers are:

- **StandardScaler:** It shrinks the range of the feature values. However, this scaler doesn't work correctly in the presence of outliers.
- **RobustScaler:** If your data set contains outliers, this scaler is more appropriate because it works with the 1st and 3rd quantiles and not the mean and variance scaling.

If you're wondering when to normalise or standardise your data, it all goes down to its distribution:

- Use **normalisation** techniques when you know that the distribution of your **data is skewed**.

- On the other hand, **standardisation** can be helpful in cases where the data follows a Gaussian distribution (**normal distribution**). Also, outliers will not be affected by standardisation.

Please refer to "[Feature Scaling for Machine Learning: Understanding the Difference Between Normalisation vs Standardisation](https://www.analyticsvidhya.com/blog/2020/04/feature-scaling-machine-learning-normalization-standardization/)" by Aniruddha Bhandari for more information on the matter.

One common misconception is that feature scaling should be done **before** the split. Still, the recommendation is to do it individually on the train and test sets to avoid data leakage. [This article](https://towardsdatascience.com/preventing-data-leakage-in-your-machine-learning-model-9ae54b3cd1fb) explains better the concept of data leakage and the reasons to do scaling after the split.

After defining which scaler best suits your needs, it's time to implement it to your data:

```python
# data normalisation with sklearn
from sklearn.preprocessing import MinMaxScaler

# fit scaler on training data
norm = MinMaxScaler().fit(X_train)

# transform training data
X_train_norm = norm.transform(X_train)

# transform testing data
X_test_norm = norm.transform(X_test)
```

Your data is now ready to be used in a Machine Learning algorithm! Continue by reading Sprint 4 to know what to do next.
