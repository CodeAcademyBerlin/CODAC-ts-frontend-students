---
navTitle: 'Sprint 1'
title: 'Sprint 1'
metaTitle: 'Welcome to Sprint 1'
metaDescription: 'Data Science Course'
access: data
# prev: 'data/Module-1/Project-2'
# next: 'data/Module-1/Project-2/Sprint-2'
---

Congratulations for finishing all the preliminary Python & Statistics challenges. You have already mastered a few tools which are your day-to-day weapons for any kind of Analysis. Therefore, We welcome you on-board as Data Analyst (Intern) in the department of Analytics & Research of BlueBerry Winery.

Now that you have a good overview of statistical concepts and python, it is time to put all that in practice.

## Epic 1: Understanding the Data

Before you start loading in the data, it might be a good idea to check how much you really know about wine and its composition.

There are several varieties of wine, however, as per the business, this analysis will be limited to only red and white wine distinction.

Download the dataset from here: [https://archive.ics.uci.edu/ml/datasets/wine+quality](https://archive.ics.uci.edu/ml/datasets/wine+quality)

There are 3 data files:

- the file named **winequality-red.csv** contains the dataset pertaining to 1599 records of red wine samples

- the file named **winequality-white.csv** contains the dataset pertaining to 4898 records of white wine samples

- the file named **winequality.names** consists of detailed information and the data dictionary pertaining to the datasets

The dataset contains physicochemical and sensory variables which require a bit more understanding.

**Fixed acidity:** acids are major wine properties and contribute greatly to the wine’s taste. Usually, the total acidity is divided into two groups: the volatile acids and the nonvolatile or fixed acids. Among the fixed acids that you can find in wines are the following: tartaric, malic, citric, and succinic. This variable is expressed in **g(tartaricacid)/dm3** in the data sets.

**Volatile acidity:** the volatile acidity is basically the process of wine turning into vinegar. In the U.S, the legal limits of Volatile Acidity are 1.2 g/L for red table wine and 1.1 g/L for white table wine. In these data sets, the volatile acidity is expressed in **g(aceticacid)/dm3**.

**Citric acid** is one of the fixed acids that you’ll find in wines. It’s expressed in **g/dm3** in the two data sets. **Residual sugar** typically refers to the sugar remaining after fermentation stops, or is stopped. It’s expressed in **g/dm3** in the red and white data.

**Chlorides** can be a significant contributor to saltiness in wine. Here, you’ll see that it’s expressed in **g(sodiumchloride)/dm3**.

**Free sulfur dioxide:** the part of the sulfur dioxide that is added to a wine and that is lost into it is said to be bound, while the active part is said to be free. The winemaker will always try to get the highest proportion of free sulfur to bind. This variable is expressed in **mg/dm3** in the data.

**Total sulfur dioxide** is the sum of the bound and the free sulfur dioxide (SO2). Here, it’s expressed in **mg/dm3**. There are legal limits for sulfur levels in wines: in the EU, red wines can only have 160mg/L, while white and rose wines can have about 210mg/L. Sweet wines are allowed to have 400mg/L. For the US, the legal limits are set at 350mg/L, and for Australia, this is 250mg/L.

**Density** is generally used as a measure of the conversion of sugar to alcohol. Here, it’s expressed in **g/cm3**.

**pH** or the potential of hydrogen is a numeric scale to **specify the acidity or basicity** the wine. As you might know, solutions with a pH less than 7 are acidic, while solutions with a pH greater than 7 are basic. With a pH of 7, pure water is neutral. Most wines have a **pH between 2.9 and 3.9** and are therefore acidic.

**Sulfates** are to wine as gluten is to food. You might already know sulfites from the headaches that they can cause. They are a regular part of winemaking around the world and are considered necessary. In this case, they are expressed in **g(potassiumsulphate)/dm3**.

**Alcohol**: wine is an alcoholic beverage, and as you know, the percentage of alcohol can vary from wine to wine. It shouldn’t be surprised that this variable is included in the data sets, where it’s expressed in **% vol**.

**Quality**: wine experts graded the wine quality **between 0 (very bad) and 10 (very excellent)**. The eventual number is the mean of at least three evaluations made by those same wine experts. **Some analysts might combine these levels to Low, Medium & High-Quality wines**.

## Epic 2: Load the Data

Use the Pandas [read_csv](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html) function to read the data.

The below code tries to read the red wine file into a dataframe called "red-wine"

```python
red_wine = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/winequality-red.csv')
```

If you get any error/unusual data format, please check the **sep argument**.

**DO NOT forget to load the necessary libraries.**

## Epic 3: Data Wrangling

Now let's start to explore the concepts of Data Wrangling on the provided dataset.

Let's start by assessing the data:

- print the first 10 and the last 10 records (use [head()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.head.html) and [tail()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.tail.html?highlight=tail#pandas.DataFrame.tail) methods)

- chech the info and the shape (use [info()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.info.html) and [shape](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.shape.html) methods)

- observe if there are missing values (use [isna()](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isna.html), isnull()[https://pandas.pydata.org/docs/reference/api/pandas.isnull.html])

- check for Descriptive Statistics for both red and white wine datasets (use [describe()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.describe.html) method)

Let's now group our qualities into 3 categories: low, medium and high quality wines.

```python
# we are creating a new column called "quality_label", we define a range and associate that range with a label
red_wine['quality_label'] = red_wine['quality'].apply(lambda value: 'low'
if value <= 5 else 'medium'
if value <= 7 else 'high')

# here we are transforming these labels into categrical data type (specific to pandas) instead of simple string
red_wine['quality_label'] = pd.Categorical(red_wine['quality_label'],
categories=['low', 'medium', 'high'])
```

Do the same with the white wine.

Now we want to create a third dataset, in which we have both red and white wines together. It might be useful for more complex analysis and plots, and we will use it further on to create our first Machine Learning algorithm that will be able to predict the wine type based on its composition.

<!-- Let's start by labelling each dataset with its wine type. -->

<!-- ```python
red_wine['wine_type'] = 'red'
```

Do the same for white wines.

Then combine the two datasets into one: **wines**.

```python
wines = pd.concat([red_wine, white_wine])

# re-shuffle records just to randomize data points
wines = wines.sample(frac=1, random_state=42).reset_index(drop=True)
``` -->

The original datasets have been modified to contain one new attribute:

<!--
- **wine_type:** since originally there were two datasets for red and white wine and after combining them the dataset contains this extra column to identify wine type. One of the predictive models can be built to predict the type of wine by looking at the other 12 attributes. -->

- **quality_label:** This is a derived attribute from the quality attribute contain three labels - low, medium, and high.

Wines with a quality score of 3, 4, and 5 are low quality, score of 6 and 7 are medium quality, and score of 8 and 9 are high quality wines.

<!--
Now we have 3 dataset we can work with. Sometimes it will be easier to use the red and white divided, some other times instead it will be better to use the combined dataset. -->

## Epic 3: Exploratory Analysis

Using the red_wine and white_wine datasets,create a table like the one below to compare Descriptive Statistics between red and white wines.

```python
pd.concat([red_wine.describe(), white_wine.describe()], axis=1, keys=["Red Wines Stats", "White Wines Stats"])
```

The code above will produce statistics for all features, however **notice that only few columns have been taken into considerations in the image below.** So change the code accordingly.

![Stats comparison](staticAsset/data/Module-1/Project-2/stat_comp.jpg)

You can observe that the mean value of sulfates and volatile acidity seem to be higher in red wine as compared to white wine.

Come up with few more observation and write them down in the form of `#comment` in your VSCode. This will help you undestand which features is worth investigating further, keeping in mind that we are trying first to understand the difference between red and white wines, and then their respective relations with the quality label.

### Let's start plotting!

Use matplotlib and seaborn to explore relations between features.

The first plot you should do is a [pie chart](https://matplotlib.org/3.1.1/gallery/pie_and_polar_charts/pie_features.html#sphx-glr-gallery-pie-and-polar-charts-pie-features-py), showing the quantity of red wines compared to the quantity of white wines.

Now create a plot to show the distribution of qualities. It should look similar to the one below

![Wine quality barplot](staticAsset/data/Module-1/Project-2/wine-quality-barplot.png)

Try using the [seaborn histplot](https://seaborn.pydata.org/generated/seaborn.histplot.html).

You have to make sure that both plots have the same order in the X-Axys.

<!-- Matplotlib doesn't offer us the option of ordering the labels on the X-Axys when using the hist() method. Therefore we will use a bar() method (it will create a bar plot, instead of a histogram). -->

<!-- The easiest way is to create 2 new dataframes (one for the red and one for the white), where we group only the informations we need for the plot. Try to make them look like this one

![Wine quality dataframe](staticAsset/data/Module-1/Project-2/dataframe-wines-quality.jpg)

Here you can find the documentation for the barplot in matplotlib: [https://matplotlib.org/stable/api/\_as_gen/matplotlib.axes.Axes.bar.html?highlight=bar#examples-using-matplotlib-axes-axes-bar](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.bar.html?highlight=bar#examples-using-matplotlib-axes-axes-bar) -->

Once you manage to create it, try playing with the colors and the titles too.

Now try to compare the quality with some other features. For example, try reproducing the following box plot.

![Boxplot-compare-quality](staticAsset/data/Module-1/Project-2/boxplot-compare-quality.jpg)

Remember that for some features it makes sense to distinguish between white and red wines, for some others we can simply explore them together.

**Come up with at least 3 more charts with explanations.**
