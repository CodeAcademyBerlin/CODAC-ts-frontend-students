---
navTitle: "Sprint 2"
title: "Sprint 2"
metaTitle: "Welcome to Sprint 2"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-1/Project-2/Sprint-1'
# next: 'data/Module-1/Project-2/Sprint-3'
---
## Epic 1: Univariate Analysis

This is perhaps one of the easiest yet a core foundational step in exploratory data analysis. Univariate analysis involves analyzing data such that at any instance of analysis you are only dealing with one variable or feature. No relationships or correlations are analyzed among multiple variables. The simplest way to easily visualize all the variables in your data is to build some histograms.

The following snippet helps visualize distributions of data values for all features. While histogram may not be an appropriate visualization in many cases, it is a good one to start with for numeric data.

```python
red_wine.hist(bins=15, color='red', edgecolor='black', linewidth=1.0, xlabelsize=8, ylabelsize=8, grid=False)

plt.tight_layout(rect=(0, 0, 1.2, 1.2))

rt = plt.suptitle('Red Wine Univariate Plots', x=0.65, y=1.25, fontsize=15)
```

It is important to note that we are using the [pandas hist() method](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.hist.html). This function calls the matplotlib hist() method, on each series in the DataFrame, resulting in one histogram per column.

Since we just want to look at the distribution, we don't really care now if the Y-Axis has different value for each histogram.

Try to do the same for white wine.

Read this article too: [https://www.kaggle.com/residentmario/univariate-plotting-with-pandas](https://www.kaggle.com/residentmario/univariate-plotting-with-pandas)

The power of packages like matplotlib and pandas enable you to easily plot variable distributions. Do you notice any interesting patterns across the two wine types?

You can choose single features and analyse them.

For example, take the feature named residual sugar and plot the distributions across data pertaining to red and white wine samples.

![Red white wine residual sugar comparison](staticAsset/data/Module-1/Project-2/residual-sugar-white-red-comparison.png)

Try to reproduce the same [histograms](https://seaborn.pydata.org/generated/seaborn.histplot.html): include the title, the labels, and make sure this time the Y-Axis have the same limit. **Also, notice how the values on the x-axis have been binned.**

**Hint:** title, labels and Y-Axis limit are all features of the [axes class](https://matplotlib.org/stable/api/axes_api.html)!

Do the same with other features to see if there are more interesting observations.

## Epic 2: Multivariate Analysis

Analyzing multiple feature variables and their relationships is what multivariate analysis is all about. Check if there are any interesting patterns and relationships among the physicochemical attributes of our wine samples, which might be helpful in your modeling process in the future.

One of the best ways to analyze features is to build a pairwise correlation plot depicting the correlation coefficient between each pair of features in the dataset.

This is how your heatmap could look like

![Wines heatmap](staticAsset/data/Module-1/Project-2/heatmap-sns.png)

You can follow [this example](https://towardsdatascience.com/seaborn-heatmap-for-visualising-data-correlations-66cbef09c1fe) to create a similar one.

You can increase the plot size using `sns.set(rc = {'figure.figsize':(15,8)})`. This will increase the size of all your plots, so having this line in every cell you're using seaborn and change their values according to the size of the plot would be a good idea.

<!-- In the example there are 3 variables: _vegetables, farmers and harvest._

_Vegetables_ and _farmers_ are the strings that will go on the x and y axis. In our case, these are the same and correspond to the column names in our dataset (but only of the numeric values).

So the first step is to select from our dataframe the column names of only numeric values (use google to search how you can do it).

The _harvest_ variable is a numpy array containing the numeric values. You can use [this Pandas method corr()](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.corr.html) to compute pairwise correlation of columns, and then the [to_numpy()](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_numpy.html) method to transform the resulting dataframe into a numpy array.

Once you have all the necessary variables, use the code in the example, change the appropriate parameters, and run the cell.

Note that:

- the plot is too small (use [set_figheight() and set_fighwidth()](https://matplotlib.org/stable/api/figure_api.html?highlight=fig#module-matplotlib.figure#set_figheight) to increase the size of your heatmap)

- our correlation numbers have more than 3 decimal numbers. Round the numbers of the NumPy array to 2 decimal numbers (use [round() method](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.round.html)) -->

You can use similar plots on other variables and features to discover more patterns and relationships. To observe relationships among features with a more microscopic view, joint plots are excellent visualization tools specifically for multivariate visualizations. The following plot explores the relation between sulphates and quality rating for red wine. We have combined one scatterplot and two histogram.

![Red Wines Jointplot](staticAsset/data/Module-1/Project-2/joint-plot.png)

Try to follow [this example](https://seaborn.pydata.org/generated/seaborn.jointplot.html). Remember to add a title!

After you managed to create this jointplot, do the same for white wines.

What if you would have wanted to visualize a higher number of features and determine patterns from them?

We can use a scatterplot with 3 variables, like the one below.

![Red Wines Scatterplot](staticAsset/data/Module-1/Project-2/scatter-sulphates-alcohol-quality.png)

<!-- ```python
import matplotlib.patches as mpatches

colors = {"low": "khaki", "medium": "orange", "high": "navy"}

fig, ax = plt.subplots()
scatter = ax.scatter(red_wine["alcohol"], red_wine["sulphates"],
           c=red_wine['quality_label'].map(colors), alpha=0.5)
ax.set_xlabel("alcohol", fontsize=10)
ax.set_ylabel("sulphates", fontsize=10)
ax.set_title('Red Wines - Sulphates, Alcohol and Quality')

low_quality = mpatches.Patch(color='khaki', label='low')
medium_quality = mpatches.Patch(color='orange', label='medium')
high_quality = mpatches.Patch(color='navy', label='high')

ax.legend(handles=[low_quality, medium_quality, high_quality])

plt.show()
``` -->

<!-- This is the code that produced it, first we define a dictionary where we associate a color to each quality_label, then in the `c` (color) parameter of the scatterplot we map them (we associate each quality_label in the dataset with the corresponding color), and for the legend we use a special matplotlib class called patches.  -->
You can find [here](https://seaborn.pydata.org/generated/seaborn.scatterplot.html) an example of how to produce a scatterplot.

Try to play with the code, change colors if you want and produce more scatterplot for both red and white wines where you explore 3 variables at the same time.

## Epic 3: Statistical Significance

This is a branch of inferential statistics which draws inferences and propositions of a population using a data sample. The idea is to use statistical methods and models to draw statistical inferences from a given hypotheses. Each hypothesis consists of a null hypothesis and an alternative hypothesis.

Before you move forward, it is a good idea to clear your concept.
You can find more details: [https://www.statisticshowto.com/probability-and-statistics/hypothesis-testing/#Hypothesis](https://www.statisticshowto.com/probability-and-statistics/hypothesis-testing/#Hypothesis)

Therefore, based on statistical test results, if the result is statistically significant based on pre-set significance levels (e.g., if obtained p-value is less than 5% significance level), one can reject the null hypothesis in favor of the alternative hypothesis.

Otherwise, if the results is not statistically significant, one can conclude that the null hypothesis was correct.

A great statistical model to prove or disprove the difference in mean among subsets of data is to use the one-way ANOVA test.

ANOVA stands for "analysis of variance", which is a nifty statistical model and can be used to analyze statistically significant differences among means or averages of various groups. This is basically achieved using a statistical test that helps one determine whether or not the means of several groups are equal. During this programme, we will only be working with the **one-way ANOVA test**.

<youtube title="Puppet video" height="500px" link="-yQb_ZJnFXw"/>

You can also read this article for more details: [https://www.statisticshowto.com/probability-and-statistics/hypothesis-testing/anova/](https://www.statisticshowto.com/probability-and-statistics/hypothesis-testing/anova/)

Once the concepts are clear, let's try to ask ourself some questions and test them.

**Can you think of applying this to prove if mean alcohol level vary significantly among the low quality, medium quality and high quality red wines?**

The below line of code implements that for alcohol level.

[ScyPy](https://docs.scipy.org/doc/scipy/reference/stats.html) is the most widely used Python library for Statistical analysis.

```python
from scipy import stats

F, p = stats.f_oneway(red_wine[red_wine['quality_label'] == 'low']['alcohol'],
red_wine[red_wine['quality_label'] == 'medium']['alcohol'],
red_wine[red_wine['quality_label'] == 'high']['alcohol'])
print('ANOVA test for mean alcohol levels across wine samples with different quality ratings')
print('F Statistic:', F, '\tp-value:', p)
```

Check the output. The p-value is less than 0.05 in the first test. This tells us that there is a statistically significant difference in alcohol level means for at least two groups out of the three (hence, **rejecting the null hypothesis** in favor of the alternative).

As you probably remember from previous days, the box plot for alcohol levels show significant difference.

![Boxplot alcohol and quality](staticAsset/data/Module-1/Project-2/boxplot-alcohol-quality.jpg)

Find Statistical Significance between other features.
Try to explore few more features and save your results for the final project presentation.

## Epic 4: Prepare a preliminary presentation

Create few slides with your findings (4-8 slides). This is a preliminary presentation for you to get familiar with talking in front of an audience. The focus of this presentation should be on domain knowledge, therefore present your findings and plots in the most simple way you can, as it is intended to be for a non-technical audience. Remember to check [this guide](https://www.storytellingwithdata.com/chart-guide) if you are unsure about the kind of plot you should use for the presentation. Read this article for further inspiration about story telling: [https://medium.com/swlh/storytelling-with-data-part-1-a3bdd5138958](https://medium.com/swlh/storytelling-with-data-part-1-a3bdd5138958).
