---
navTitle: "Machine Learning Fundamentals"
title: "Machine Learning Fundamentals"
metaTitle: "Machine Learning Fundamentals"
metaDescription: "Data Science Course"
access: data
# prev: 'web/Module-1/Project-2/Sprint-3'
# next: 'web/Module-1/Project-2/Sprint-3'
---

This section will cover some of the main concepts about Machine Learning and explain some of the most popular algorithms.

A model is a system for mapping inputs to outputs. It represents the theory about a problem. For example, if we want to predict house prices, we could make a model that takes the square meters of a house and outputs the price. Our theoretical assumption is that there is a connection between the square meters and the price, and we create a model that learns this relationship given some inputs and can predict the outputs for new data points.

Therefore we can say that a model learns the relationship between the inputs, called features, and the outputs, called labels, from a training dataset. During the training phase, a model is given both features and labels and learns how to map the former to the latter. Afterwards, a trained model is evaluated on a testing set, where we give it only the features and expect predicted labels. Then we compare the predictions with the known labels and calculate the accuracy.

Even if this process seems straightforward at first, there are a few things you should be aware of to design a successful Machine Learning model.

## Outliers

As previously mentioned, outliers are data points that are far from other data points. They can be caused by different reasons, such as data entry measurement errors, sampling problems or natural variations. There is no general rule whether we should remove them or not. However, they will affect the accuracy of your model, so you should be confident in whatever you decide to do with them.

Usually, if we are sure that measurement errors produce the outliers, we can safely remove them.
If they exist because of sampling problems, we should either remove them (if we classified the data in the wrong sample) or re-think our samples/target (are we being too general? Or are we being too specific?).
Sometimes these distant points are not true outliers but **novelties**. In this case the goal is not to remove them or reduce their impact but to detect anomalies in new observations (for example, it is often used for fraud detection in credit card transactions).

Other times, and especially in the medical sectors, outliers should have more importance than the general data points. For example, a machine algorithm that tends to ignore outliers could have a misleading high accuracy when predicting people with diabetes (which are generally lower than the people without diabetes). This misclassification could lead to grave consequences.  
Suppose the outliers are not very important in our specific evaluation, but we don’t want to remove them because we would decrease the number of data points. In that case, we could use an algorithm that is robust to outliers. Or we could use several techniques such as:

- **Winsorizing**: setting the extreme values of an attribute to some specified value. For example, for a 90% Winsorization, the bottom 5% of values are set equal to the minimum value in the 5th percentile, while the upper 5% of values are set equal to the maximum value in the 95th percentile.

- **Imputation**: it is a method that is often used when handling missing data. However, it is also applied when dealing with extreme values. When using imputation, outliers are removed (and become missing values) and are replaced with estimates based on the remaining data.

## Overfitting and Underfitting

In any real-world process, whether natural or man-made, the data does not exactly fit a trend. There is always noise or other variables in the relationship that we cannot measure. In the example of house prices, the trend between area and price is linear, but the prices do not lie precisely on a line because of other factors influencing house prices.

![House Price Trend](staticAsset/data/Module-1/Project-2/house-price-trend.png)

Source: [Towards Data Science](https://towardsdatascience.com/overfitting-vs-underfitting-a-complete-example-d05dd7e19765)

Before diving any further, let’s understand two important terms:

- **Bias**: assumptions made by a model to make a function easier to learn
- **Variance**: if you train your data on training data and obtain very low error, upon changing the data and then training the same previous model, you experience a high error, this is variance

### Undefitting

A statistical model or a machine learning algorithm is said to be underfitting when it cannot capture the underlying trend of the data. Its occurrence simply means that our model does not fit the data well enough. **It has high bias and low variance.**

It can happen when we have fewer data to build an accurate model or when we try to build a linear model with fewer non-linear data. Underfitting can be avoided by using more data and reducing the number of features by feature selection (we will discuss this in the next section, Feature importance).

### Overfitting

A statistical model or machine learning algorithm is said to be overfitted when we train it with a lot of data, so much that it starts learning from the noise and inaccurate data entries. The result is that the model does not categorise the data correctly because of too many details and noise. **It has high variance and low bias.** The model has a great score on the training data because it gets close to all the points, but the predictions on the test set will not be generic enough because the model is not learning the relation. It is just memorising the training data and the noise. It can happen especially when using non-parametric and non-linear methods because these types of machine learning algorithms have more freedom in building models based on the dataset. A solution could be to use a linear algorithm if we have linear data or Hyperparameters tuning.

Here you can find two representations of underfitting, overfitting and appropriate fitting.

![Overfitting vs Undefitting](staticAsset/data/Module-1/Project-2/overfitting-underfitting-1.jpg)

![Overfitting vs Undefitting](staticAsset/data/Module-1/Project-2/overfitting-underfitting-2.png)

Source: [Geeks For Geeks](https://www.geeksforgeeks.org/underfitting-and-overfitting-in-machine-learning/)

How can we find a balanced model and make sure that it does not underfit or overfit? Besides choosing the appropriate model or algorithm, we need to find the best setting (or hyperparameters). One prevalent technique is called validation.

## Validation and K-fold Cross-Validation

Validation is a technique used to evaluate the performance of our model already in the training phase. It consists of dividing our dataset into training and test, then taking a subset of our training set and calling it the validation set to get an early estimate of the skills of the model. It is very useful when trying to choose the best parameters for a given model. The choice of the appropriate parameters will prevent our model from overfitting or underfitting the dataset.

However, a common problem is that if we take a subset of the training data and hide it from the model, we will have fewer data points to feed our algorithm. One of the most popular examples of avoiding this problem is to use k-fold cross-validation to tune model hyperparameters.

Instead of using a separate validation set, we split the training set into several subsets, called folds. Let’s use five-folds as an example. We perform a series of train and evaluate cycles where each time we train on 4 of the folds and test on the 5th, called the hold-out set. We repeat this cycle five times, each time using a different fold for evaluation. In the end, we average the scores for each of the folds to determine the overall performance of a given model.

![k-Fold Cross Validation](staticAsset/data/Module-1/Project-2/k-fold-cross-validation.png)

Source: [Towards Data Science](https://towardsdatascience.com/overfitting-vs-underfitting-a-complete-example-d05dd7e19765)

In this way, we could create a graph or a table showing the different hyperparameters and their relative cross-validation score. The model with the lowest cross-validation score will perform best on the testing data and will achieve a balance between underfitting and overfitting.

## Feature selection

In many (business) cases, it is equally important to have, not only an accurate, but also interpretable model. Oftentimes, apart from knowing our model’s house price prediction , we also wonder why it is this high/low and which features are most important in determining the forecast.

It can benefit in multiple ways:

By getting a better understanding of the model’s logic, you can not only verify it is correct but also work on improving the model by focusing only on the important variables
The above can be used for variable selection: you can remove x variables that are not that significant and have similar or better performance in a much shorter training time
In some business cases, it makes sense to sacrifice some accuracy for the sake of interpretability. For example, when a bank rejects a loan application, it must also have a reasoning behind the decision, which can also be presented to the customer

You can use a correlation matrix to identify the features that have the highest correlation and decide to drop or to create a new feature based on the previous ones.

You can also model feature importance to see which features played the most important role in making the predictions for a specific model and drop the ones with the lowest importance.

## Machine Learning main algorithms

Machine learning algorithms are programs (math and logic) that adjust themselves to perform better as they are exposed to more data. The "learning" part of machine learning means that those programs change how they process data over time, much as humans change how they process data by learning. So a machine-learning algorithm is a program with a specific way of adjusting its parameters when given feedback on its previous performance in making predictions about a dataset.

### Support Vector Machine (SVM)

- Supervised ML algorithm
- Used mainly in classification
- Data items plotted in an n-dimensional space (n is the number of features we have), with the value of each feature being the
  value of a particular coordinate
- SVM finds the hyper-plane that differentiates the two classes very well

##### Example 1

![SVM 1](staticAsset/data/Module-1/Project-2/svm-1.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/)

Hyper-plane B is the best in this case.

##### Example 2

![SVM 2](staticAsset/data/Module-1/Project-2/svm-2.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/)

Here, maximising the distances between the nearest data point (either class) and the hyper-plane, will help us decide the right hyper-plane. The margin of hyper-place C is high compared to A and B, so we choose hyper-plane C. Another reason is robustness (if we select a hyper-plane with a low margin, there is a high chance of miss-classification.

##### Example 3

![SVM 3](staticAsset/data/Module-1/Project-2/svm-3.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/)

B has a higher margin compared to A, but it has classification errors. So the right hyper-plane is A.

##### Example 4

![SVM 4](staticAsset/data/Module-1/Project-2/svm-4.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/)

The SVM algorithm has a feature to ignore outliers and find the hyper-plane that has the maximum margin. Hence, we can say, SVM classification is robust to outliers.

##### Example 5

![SVM 5](staticAsset/data/Module-1/Project-2/svm-5.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/)

That is not a linear hyper-plane. SVM solves this problem by introducing additional features.
Here, we will add a new feature z=x^2+y^2. We don’t have to add this feature manually. SVM uses a technique called the kernel trick, a function that takes low dimensional input space and transforms it to a higher dimensional space.

Now, let’s plot the data points on axis x and z

![SVM 5.1](staticAsset/data/Module-1/Project-2/svm-5.1.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/)

Considerations:

- All values for z would be positive always because z is the squared sum of both x and y
- In the original plot, red circles appear close to the origin of x and y axes, leading to a lower value of z, and stars relatively away from the origin result in a higher value of z

Now we can create a hyper-plane to split the two classes that would look like this

![SVM 5.2](staticAsset/data/Module-1/Project-2/svm-5.2.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/)

##### Pros

1. **Performs well in higher dimension.** In the real world, there are infinite dimensions (and not just 2D and 3D). For instance, image data, gene data, medical data etc., has higher dimensions, and SVM is useful in those cases. Basically, when the number of features/columns are higher, SVM does well
2. **Best algorithm when classes are separable.** When we can use a linear hyper-plane (examples 1, 2, 3)
3. **Outliers have less impact** (example 4)

##### Cons

1. **Slow**
2. **Poor performance with overlapper classes** (example 5)
3. **Selecting appropriate hyperparameters is important for sufficient generalisation performance**
4. **Selecting appropriate kernel function can be tricky**

##### Main Applications

Bag of words applications (many features and columns), speech recognition data, classification of images (non-linear data), medical analytics (non-linear data), text classification (many features).

### Naive Bayes

- Classification technique based on Bayes’ Theorem
- It assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature. For example, a fruit may be considered to be an apple if it’s red, round and about 8cm in diameter. Even if these features depend on each other or upon the existence of other features, all these properties independently contribute to the probability that this fruit is an apple. That is why the algorithm is known as “Naive”.
- Useful for very large datasets, simple
- Primarily used in text classification and with problems having multiple classes

content\assets\data\Module-1\Project-2\naive-bayes.png

![Naive Bayes](staticAsset/data/Module-1/Project-2/naive-bayes.png)

Source: [Analytics Vidhya](http://analyticsvidhya.com/blog/2017/09/naive-bayes-explained/)

Let’s imagine we have to predict whether players will play or not based on the weather conditions. We have a dataset with weather conditions and the corresponding target variable “Play”.
We convert the dataset into a frequency table, and then create the likelihood table by finding the probabilities of playing (overcast probability is 0.29 and probability of playing is 0.64.
Then we use the Naive Bayesian equation to calculate the posterior probability for each class. The class with a higher posterior probability is the outcome of our prediction.

Here is the formula

![Naive Bayes Formula](staticAsset/data/Module-1/Project-2/nayve-bayes-formula.jpg)

Source: [Analytics Vidhya](http://analyticsvidhya.com/blog/2017/09/naive-bayes-explained/)

Example - Players will play if the weather is sunny?

**P(Yes | Sunny)** = P(Sunny | Yes) \* P(Yes) / P(Sunny)

P(Sunny | Yes) = 3/9 = 0.33
P(Yes) = 9/14 = 0.64
P(Sunny) = 5/14 = 0.36

**P(Yes | Sunny)** = 0.33 \* 0.64 / 0.36 = 0.6

**_P(No | Sunny)_** = P(Sunny | No) \* P(No) / P(Sunny)

P(Sunny | No) = 2/5 = 0.22
P(No) = 5/14 = 0.36
P(Sunny) = 5/14 = 0.36

**_P(No | Sunny)_** = 0.22 \* 0.36 / 0.36 = 0.22

The probability of playing if it’s sunny is 0.6, while the probability of not playing if it’s sunny is 0.22. The higher one is the first. Therefore, the algorithm will choose that one and predict that the players will play if it is sunny.

##### Pros

1. **Real-time predictions:** very fast and can be used in real-time
2. **Scalable with large datasets**
3. **Insensitive to irrelevant features**
4. **Multi-class prediction** is effectively done
5. **Good performance with high dimensional data** (no. of features is large)

##### Cons

1. **Independence of features does not hold:** the fundamental Naive Bayes assumption is that each feature makes an independent and equal contribution to the outcome. However, this condition is not met most of the time
2. **Bad estimator:** probability outputs are not to be taken too seriously
3. **Training data should represent the population well:** if you have no occurrences of a class label and a specific attribute value together (e.g. shape=”Overcast”, class=”No”), then the posterior probability will be zero. So if the training data is not representative of the population, Naive Bayes does not work well.

##### Main Applications

Text classification (predicts multiple classes and doesn’t mind dealing with irrelevant features), Spam filtering, Sentiment Analysis (in social media analysis, to identify positive and negative sentiments), recommendation systems (what will the user buy next)

### Logistic Regression

- Used to predict the probabilities for classification problems
- Used when the dependent variable is binary (only two outputs)

##### Logistic regression vs Linear regression

Logistic regression is used when our dependent variable is binary and Linear regression is used when the dependent variable is continuous. **Linear regression gives us a value, while logistic regression gives us the probability of a value.**

##### Example - Malignant Tumor vs size Yes/No

It’s a classification problem, so if we plot it, all values will lie on 0 and 1. If we apply linear regression, which aims at minimising the distance between the predicted value and the actual value, the line will be like this

![Linear Regression](staticAsset/data/Module-1/Project-2/linear-regression-for-classification.jpg)

Source: [Towards Data Science](https://towardsdatascience.com/understanding-logistic-regression-9b02c2aec102)

All points on the left side of the yellow line are benign tumours; all points on the right side of the yellow line are malignant tumours-all good until here.

If we introduce an outlier in the data points.

![Linear Regression With Outliers](staticAsset/data/Module-1/Project-2/linear-regression-for-classification-with-outlier.jpg)

Source: [Towards Data Science](https://towardsdatascience.com/understanding-logistic-regression-9b02c2aec102)

Here, some malignant tumours will be classified as benign ones (they are on the left side of the green line, but they are malignant). The line to classify them correctly should have been the yellow one. Just a single outlier is disturbing the whole linear regression predictions.

Logistic regression converts the straight best fit line in linear regression to an S-curve using the sigmoid function, which always gives values between 0 and 1 (probability of something being Yes or No).

Let’s check what happens when we use logistic regression

![Logistic Regression With Outliers](staticAsset/data/Module-1/Project-2/logistic-regression.jpg)

Source: [Open Classrooms](https://openclassrooms.com/en/courses/6389626-train-a-supervised-machine-learning-model/6405876-understand-the-logistic-regression-algorithm)

Let’s check what happens when we introduce an outlier

![Logistic Regression With Outliers](staticAsset/data/Module-1/Project-2/logistic-regression-with-outlier.png)

Source: [Towards Data Science](https://towardsdatascience.com/understanding-logistic-regression-9b02c2aec102)

Logistic regression will take care of it.

##### Pros

1. **Simple to implement**
2. **Effective**
3. **Feature Scaling not needed:** does not require input features to be scaled (can work with scaled features too, but doesn’t require scaling)
4. **Tuning of hyperparameters is not necessary**

##### Cons

1. **Poor performance on non-linear data**
2. **Poor performance with irrelevant and highly correlated features** (feature selection is important)
3. **Not a very powerful algorithm** and can be easily outperformed by other algorithms
4. **High reliance on proper presentation of data.** All the important features variables should be identified for it to work well

##### Main Applications

Any classification problem, preferably binary ones (it can also perform multi-class classification, but binary is preferred). Examples: cancer detection problems, whether a student will pass or fail, default/no default in case of a customer taking a loan, whether a customer will churn or not, email is spam or not.

### Decision Tree

- Used for both classification and regression problems
- It uses a flowchart like a tree structure to show the predictions that result from a series of feature-based splits
- It starts with a root node and ends with a decision made by leaves

![Decision Tree](staticAsset/data/Module-1/Project-2/decision-tree.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/08/decision-tree-algorithm/)

**Root Nodes** - It is the node present at the beginning of a decision tree; from this node the population starts dividing according to various features
**Decision Nodes** - the nodes we get after splitting the root nodes are called decision nodes
**Leaf Nodes** - the nodes where further splitting is not possible are called leaf nodes of terminal nodes
**Sub-Tree** - just like a small portion of a graph is called sub-graph; similarly a subsection of this decision tree is called sub-tree
**Pruning** - is nothing but cutting down some nodes to stop overfitting

![Decision Tree](staticAsset/data/Module-1/Project-2/decision-tree-dataset.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/08/decision-tree-algorithm/)

In this example dataset, we can see different features and below, you can see the representation of a decision tree.

![Decision Tree](staticAsset/data/Module-1/Project-2/decision-tree-representation.png)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/08/decision-tree-algorithm/)

We can see that if the weather is cloudy, we should go to play: the tree didn’t split anymore. In simple terms, we can say that the output for the training dataset is always Yes for Cloudy weather; therefore we don’t need to split the node further.

However, deciding which one is the root node, what should be the decision node, and when should I stop splitting are depending on a metric called Entropy, which is the amount of uncertainty in the dataset.

##### Entropy

Uncertainty in our dataset or measure of disorder.
For example, we are a group of friends, and we need to decide between two movies to watch, Titanic or Braveheart. After everyone votes one, we have four votes for Titanic and 5 for Braveheart. It is hard to choose which movie to watch since the votes are almost equal. This is what we call disorderness: when there is an equal number of votes, and we can’t decide which one we should watch.

We can calculate the entropy for each node using a specific formula and see whether it is high or low. The goal of Machine Learning is to decrease uncertainty or impurity in the dataset, therefore the ultimate goal of a decision tree is to reduce the entropy as much as possible.
The decision tree will reach a leaf node when the entropy is equal to 0 (example of being cloudy).
However, only measuring the entropy for each node is not going to tell us whether the entropy has decreased or not. Information Gain is what we can use to measure that.

##### Information Gain

It measures the reduction of uncertainty given some features, and it is also a deciding factor for which attribute should be selected as a decision node or root node. We can calculate it by subtracting the parent's entropy with the child's entropy, and we can do that for the whole decision tree or for the sub-tree. When the algorithm calculates it for the sub-trees, it can decide which feature is reducing entropy the most, and therefore choose what to include in the model, what the root node could be, or in which order the features should go in the decision tree.

##### Example

We have to decide whether to go to the gym based on a dataset that has two more features: energy (high and low) and motivation (no motivation, neutral, high motivation). By calculating the entropy and the information gain in the case energy is the root node, and then in the case motivation is the root node. We can conclude that there is more information gain when we use the energy as a root node (we get a lower entropy level by just having one decision node).

##### When to stop splitting

Usually, real-world datasets have many features, which will result in a large number of splits, which in turn gives a huge tree. These trees can lead to overfitting (very good accuracy for training dataset, but bad accuracy in test dataset).

There are many ways to tackle this problem through hyperparameter tuning. We can set a maximum depth for our decision tree using the max_depth parameter. The higher the max_depth, the more complex the tree will be, which may cause overfitting. There is a way to avoid this problem, and python libraries provide us with the right method to decide the best set of parameters.

##### Pruning

Pruning is another method to avoid overfitting. It helps us improve the performance of our model by cutting the nodes or sub-nodes that are not significant.
There are mainly two ways of pruning:

Pre-pruning: we can stop growing the tree earlier, which means we can prune/remove/ cut a node if it has low importance while growing the tree
Post-pruning: once our tree is built to its depth, we can start pruning the nodes based on their significance

##### Pros

1. **Normalisation or scaling of data is not needed**
2. **Handling missing values:** there is no considerable impact of missing values
3. **Easy to explain to non-technical team members**
4. **Easy visualisation**
5. **Automatic feature selection:** irrelevant features won’t affect the tree

##### Cons

1. **Prone to overfitting**
2. **Sensitive to data:** if data changes slightly, the outcomes can change to a considerable extent
3. **Higher time required to train decision trees**

##### Main Applications

Identifying buyers for products, prediction of likelihood, which strategy can maximize profit, strategy for cost minimization, which features are most important to attract or retain customers (frequency of shopping, frequency of discount), fault diagnosis in machines (keep measuring pressure, vibrations and other measures and predict before a fault occurs).

### K-Nearest Neighbors

- Used for classification and regression
- Easy to interpret
- Low calculation time

This algorithm tries to predict the class of a point based on its nearest neighbour. The “K” is the number of neighbours that we want to consider.
In the example below, to predict the class of the blue star, we decided that K = 3.

![KNN](staticAsset/data/Module-1/Project-2/knn-1.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2018/03/introduction-k-neighbours-algorithm-clustering/)

The blue circle has the blue star as the centre, and the circle will be just as big as to enclose only three data points on the plane. We can see that the three closest points to the blue star are the red circle; therefore we can say with a good confidence level that the blue star should belong to the red circle class.

The choice of the K parameter is very crucial in this algorithm.

##### How to choose the factor K

Let’s first try to understand how K influences the algorithm by checking the below example. We have four training observations that remain constant, and we just change the K value to make the boundaries of each class. These boundaries will segregate blue from red.

![KNN](staticAsset/data/Module-1/Project-2/knn-2.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2018/03/introduction-k-neighbours-algorithm-clustering/)

You can see that the boundary becomes smoother with the increasing value of K. With K increasing to infinity, the plane will become all blue or red depending on the total majority.

Now, let’s evaluate the training error rate and the validation error rate.

![KNN](staticAsset/data/Module-1/Project-2/knn-training-error.png)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2018/03/introduction-k-neighbours-algorithm-clustering/)

For training, with a value of K = 1 the error is always 0, because the closest point to any training data point is itself. Higher values of K will increase the error rate.

Let’s check the error rate for the validation.

![KNN](staticAsset/data/Module-1/Project-2/knn-validation-error.png)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2018/03/introduction-k-neighbours-algorithm-clustering/)

At K = 1, we were overfitting the boundaries; therefore the error rate is pretty high. It starts decreasing, and after reaching the minimum, it starts increasing again because we begin to underfit the model.

To get the optimal value of K, you should segregate the training and validation from the initial dataset, plot the validation error curve to get the optimal value of K and use that again for training our dataset.

##### Pros

1. **Simple to understand and implement**
2. **No assumptions about data** (for e.g., in the case of a linear regression, we assume dependent variable and independent ones are linearly related. In Naive Bayes we assure features are independent from each other, etc.)
3. **Constantly evolving model:** when exposed to new data, it changes to accommodate the new data points.
4. **Multi-class problems** can also be solved.
5. **One hyperparameter:** it may take some time to select the K parameter but, after that, the rest of the parameters are aligned to it.

##### Cons

1. **Slow for large datasets**
2. **Curse of dimensionality:** doesn’t work very well on datasets with large number of features
3. **Scaling of data is a must**
4. **Doesn’t work well on imbalanced data:** before using k-NN, either undersample majority class or oversample minority class
5. **Sensitive to outliers**
6. **Can’t deal with missing values**

##### Main Applications

Used for any classification problem when the dataset is smaller and has a small number of features reducing k-NN’s computation time. If you don’t know the same of the data and the way output and inputs are related (for example, whether classes can be separated by a line or ellipse or parabola), then you can use k-NN.

## Ensemble Modeling Methods

Ensemble models is a machine learning approach to combine multiple other models in the prediction process.
Although they most often vary in opposite directions, a low bias and a low variance are the two most fundamental features expected from a model. Therefore, we want our model to have enough degrees of freedom to resolve the underlying complexity of the data. Still, we also want it to have not too many degrees of freedom to avoid high variance and be more robust.

![Bias and Variance](staticAsset/data/Module-1/Project-2/bias-variance.png)

Source: [Towards Data Science](https://towardsdatascience.com/ensemble-methods-bagging-boosting-and-stacking-c9214a10a205)

In ensemble learning theory, we call weak learners (or base models) models that can be used as building blocks for designing more complex models by combining several. Most of the time, these basic models perform not so well by themselves either because they have a high bias or because they have too much variance to be robust. The idea of ensemble methods is to try reducing bias and/or variance of such weak learners by combining several of them to create a strong learner that achieves better performances.

### Ensemble Techniques

##### Bagging

The ensemble model tries to improve prediction accuracy by combining predictions of individual base models trained over randomly generated training samples. At any instance, an average of all predictions from the individual estimators is taken for the ensemble model to make its final prediction. Random sampling tries to reduce model variance, reduce overfitting, and boost prediction accuracy.

It’s based on a bootstrapping sampling technique. Bootstrapping creates multiple sets of the original training data with replacement. Replacement enables the duplication of sample instances in a set. Each subset has the same equal size and can be used to train models in parallel.

![Bagging](staticAsset/data/Module-1/Project-2/ensemble-model-bagging.png)

Source: [Towards Data Science](https://towardsdatascience.com/ensemble-models-5a62d4f4cb0c)

An algorithm that uses this technique is Random Forest: it uses a subset of training samples as well as a subset of features to build multiple split trees. Multiple decision trees are built to fit each training set. The distribution of samples/features is typically implemented in a random model.
Boosting
In sequential methods the different combined weak models are no longer fitted independently from each other. The idea is to fit models iteratively such that the training of models at a given step depends on the models fitted at the previous steps. “Boosting” is the most famous of these approaches and it produces an ensemble model that is in general less biased than the weak learners that compose it. Each model in the sequence is fitted giving more importance to observations in the dataset that were badly handled by the previous models in the sequence. However boosted models are prone to overfitting.

![Boosting](staticAsset/data/Module-1/Project-2/ensemble-model-boosting.png)

Source: [Towards Data Science](https://towardsdatascience.com/ensemble-models-5a62d4f4cb0c)

### Random Forest

- Ensemble model based on bagging technique
- Used in both classification and regression problems
- It builds decision trees on different samples and takes their majority vote for classification and average in case of regression

To make an example in real life, we can think of a student who wants to choose a university course, but he is confused. Therefore he asks the same kind of questions (like job opportunities with what course, course fees, etc) to different people. Finally, after consulting them all he decides on a course based on the course suggested by most of the people.
In this example, the various people act as individual decisions, the questions asked perform the activity of the decision tree and the final decision is the output of a random forest.

##### Steps involved in the random forest algorithm

1. N number of random record are taken from the dataset having k number of records
2. Individual decision trees are constructed for each sample
3. Each decision tree will generate an output
4. Final output is considered based on **Majority Voting for Classification or Averaging for Regression**

![Random Forest](staticAsset/data/Module-1/Project-2/random-forest.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/06/understanding-random-forest/)

##### Important features of random forest

1. **Diversity** - Not all attributes/variables/features are considered while making an individual tree, each tree is different
2. **Immune to curse of dimensionality** - Since each tree does not consider all the features, the feature space is reduced
3. **Parallelization** - Each tree is created independently out of different data and attributes. This means that we can make full use of the CPU to build random forests (compared to boosting algorithms)
4. **Train-Test split** - In a random forest, if the dataset is not big enough, we can avoid to split the dataset into train and test and use something called Out Of Bag Score.
5. **Stability** - Stability arises because the result is based on majority voting/averaging
   Difference between Decision Tree & Random Forest

| Decision Tree                                                                                                           | Random Forest                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| It normally suffers from the problem of overfitting if it’s allowed to grow without any control                         | Are created by subsets of data and the final output is based on average or majority ranking and hence the problem of overfitting is taken care of |
| A single decision tree is faster                                                                                        | It is comparatively slower                                                                                                                        |
| When a dataset with features is taken as input by a decision tree it will formulate some set of rules to do predictions | It selects observations, builds a decision tree and the average result is taken, It doesn’t use any set of formulas                               |

##### Important Hyperparameters

To increase predictive power:

- **n_estimators** - numbers of trees the algorithm builds before averaging the predictions
- **max_features** - maximum number of features random forest considers splitting a node
- **mini_sample_leaf** - determines the minimum number of leaves required to split an internal node

Parameters that increase the speed:

- **n_jobs** - it tells the engine how many processors it is allowed to use. If the value is 1, it can only use one processor, but if the value is -1 there is no limit
- **random_state** - controls randomness of the sample. The model will always produce the same results if it has a definite value of random state and if it has been given the same hyperparameters and the same training data
- **oob_score** - OOB means out of the bag. It is a random forest cross-validation method. If it is set to True, one-third of the sample is not used to train the data and instead is used to evaluate its performance for each tree individually. It is useful when we have a small dataset and we don’t want to take 30% off only for testing

##### Pros

1. **Random forests can decorrelate trees.** If features in a dataset are highly correlated, random forest can tackle this problem because it gets a random subset of the original set.
2. **Reduce error.** Since it is an ensemble of decision trees, it ensures that the individual errors of trees are minimized and overall variance and error is reduced.
3. **Good Performance on imbalanced datasets.** It can handle errors in imbalanced data (when a class is the majority and another class is the minority).
4. **Handling a huge amount of data with higher dimensionality of variables.**
5. **Good handling of missing data.** Even if there is a large amount of missing data in your model, it will give good results.
6. **Little impact of outliers.** As the final outcome is taken by consulting many decision trees, certain data points which are outliers will not have a very big impact.
7. **No problem with overfitting.** Since a random forest considers only a subset of features and the final result depends on all the trees, there is more generalization and less overfitting.
8. **Useful to extract feature importance.**

##### Cons

1. **Features need to have some predictive power** else they won’t work.
2. **Predictions of the trees need to be uncorrelated.**
3. **Appears as a Black Box.** It is difficult to know what is happening. At best, you can try different parameters and random seeds to change outcomes and performance.

##### Main Applications

Credit card fraud, identification if a patient has a disease, recommendation system for ecommerce websites.

### AdaBoost

AdaBoost is a Gradient Boosting Algorithm, which means it works on collecting the errors of previous models by building a new model from the error.

- Ensemble boosting model
- Higher points are assigned to the data points which are miss-classified or incorrectly predicted by the previous model. Each successive model will get a weighted input

Let’s look at one example.

![AdaBoost](staticAsset/data/Module-1/Project-2/adaboost-1.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/03/introduction-to-adaboost-algorithm-with-python-implementation/)

Say, this is my complete data. Here, I have the blue positives and red negatives. Now the first step is to build a model to classify this data.

![AdaBoost](staticAsset/data/Module-1/Project-2/adaboost-2.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/03/introduction-to-adaboost-algorithm-with-python-implementation/)

Suppose the first model gives the following result, where it is able to classify two blue points on the left side and all red points correctly. But the model also miss-classifies the three blue points here.

Now, these miss- classified data points will be given higher weight. So these three blue positive points will be given higher weights in the next iteration. For representation, the points with higher weight are bigger than the others in the image. Giving higher weights to these points means my model is going to focus more on these values. Now we will build a new model.

![AdaBoost](staticAsset/data/Module-1/Project-2/adaboost-3.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/03/introduction-to-adaboost-algorithm-with-python-implementation/)

In the second model you will see, the model boundary has been shifted to the right side in order to correctly classify the higher weighted points. Still, it’s not a perfect model. You will notice three red negatives are miss-classified by model 2.

Now, these miss-classified red points will get a higher weight. Again we will build another model and do the predictions. The task of the third model is two focus on these three red negative points. So the decision boundary will be something as shown here.

![AdaBoost](staticAsset/data/Module-1/Project-2/adaboost-4.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/03/introduction-to-adaboost-algorithm-with-python-implementation/)

This new model again incorrectly predicted some data points. At this point, we can say all these individual models are not strong enough to classify the points correctly and are often called weak learners.

The next step is to aggregate these models. One of the ways could be taking the weighted average of the individual weak learners. So our final model will be the weighted mean of individual models.

![AdaBoost](staticAsset/data/Module-1/Project-2/adaboost-5.jpg)

Source: [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2021/03/introduction-to-adaboost-algorithm-with-python-implementation/)

After multiple iterations, we will be able to create the right decision boundary with the help of all the previous weak learners. As you can see the final model is able to classify all the points correctly. This final model is known as a strong learner.

##### Important Hyperparameters

- **base_estimator**: the model to the ensemble, the default is a decision tree.
- **n_estimators**: number of models to be built.
- **learning_rate**: shrinks the contribution of each classifier by this value.
- **random_state**: the random number seed, so that the same random numbers are generated every time.

##### Pros

1. Less prone to overfitting than other boosting algorithm in low noise datasets

##### Cons

1. It needs a quality dataset. Noisy data and outliers have to be avoided before using this algorithm

##### Main Applications

Used mainly to classify text and images rather than binary classification problems.

## Conclusions

As the models came later , they became more and more advanced. So usually if you look at a model strictly from the performance perspective, then neural networks, XGBoost etc. are the best models since they are relatively recent. However, different models work better for different data.

For e.g. if features are highly independent then Naive Bayes will work great. If there are too many features and the dataset is medium sized, SVM is good. If there is a linear relationship between dependent and independent variables, then linear regression, logistic regression, SVM are good. If the dataset is small and you don’t know the relationship between the dependent and independent variable, then you can use k-NN. Hence before you decide on which ML algorithm to use, you must know and analyse the data. If you are unable to choose one machine learning algorithm, then you can evaluate all the models and check their accuracies on training and test set and then finalize one model.
