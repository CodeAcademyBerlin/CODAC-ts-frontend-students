---
navTitle: "Sprint 3"
title: "ML Clustering with K-means"
metaTitle: "Welcome to Sprint 3"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-2/Project-6'
# next: 'data/Module-2/Project-6/Sprint-2
---

Unsupervised learning method, which draws references from datasets consisting of input data without labeled responses. Generally, it is used as a process to find meaningful structure, explanatory underlying processes, generative features, and groupings inherent in a set of examples.

Clustering is the task of dividing the population or data points into a number of groups such that data points in the same groups are more similar to other data points in the same group and dissimilar to the data points in other groups. It is basically a collection of objects on the basis of similarity and dissimilarity between them.

In this project you will focus on the most common algorithm used for this kind of ML technique, which is the **K-means algorithm**.

The following tutorial is adapted from Manish Kumar's Kaggle Notebook ["Online Retail K-Means & Hierarchical Clustering"](https://www.kaggle.com/hellbuoy/online-retail-k-means-hierarchical-clustering/notebook). In this case, we used the e-Commerce dataset and adapted the code in order to have a better understanding on how K-means algorithm works and its business applications. The article ["Understanding K-means Clustering in Machine Learning"](https://towardsdatascience.com/understanding-k-means-clustering-in-machine-learning-6a6e67336aa1) especifies that the K-means algorithm assembles data points based on common characteristics.

According to the [documentation](https://scikit-learn.org/stable/modules/clustering.html#k-means), _"(the) KMeans algorithm clusters data by trying to separate samples in n groups of equal variance, minimizing a criterion known as the inertia or within-cluster sum-of-squares... This algorithm requires the number of clusters to be specified,"_ which is what the _k_ stands for in the name of the algorithm. Inertia, on the other hand, _"... can be recognized as a measure of how internally coherent clusters are."_ For more information about these concepts, visit the official documentation link we have provided. **We will only see the _K-means clustering method_ because it is the most widely used.**

**In order to follow this tutorial, we recommend that you work with another dataset that would solve a similar business problem where you need to create some sort of classification, for example, to predict customer churn.**

## Tutorial

![Customer segmentation](staticAsset/data/Module-2/Project-6/cust-segmentation.jpeg)

As mentioned before, we will segment the customers in our e-Commerce dataset according to their buying patterns. In general, customer segmentation has many benefits for businesses. Namely, it allows them to improve customer satisfaction and experience, optimize their marketing budget with actions tailored to the customer profile, target their communication efforts, create a loyalty program, and so on.

```python
# import required libraries for dataframe and visualization
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import datetime as dt

# import required libraries for clustering
import sklearn
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from collections import Counter
from sklearn.metrics import silhouette_score
from scipy.cluster.hierarchy import linkage
from scipy.cluster.hierarchy import dendrogram
from scipy.cluster.hierarchy import cut_tree
```

```python
# Reading the data on which analysis needs to be done
retail = pd.read_excel(r'C:\path\file_name.xlsx')

# Replace string 'Null' with null value
retail=retail.replace({'Null': None})
retail.head()
```

![Import head](staticAsset/data/Module-2/Project-6/import-head.png)

```python
retail.info()
```

![Info](staticAsset/data/Module-2/Project-6/info.png)

```python
retail.isnull().sum()
```

![Null values](staticAsset/data/Module-2/Project-6/isnull.png)

```python
retail.shape
```

![Shape 1](staticAsset/data/Module-2/Project-6/shape1.png)

```python
# Dropping rows having missing values
retail = retail.dropna()
retail.shape
```

![Shape 2](staticAsset/data/Module-2/Project-6/shape2.png)

```python
# Changing the datatype of Customer Id as per Business understanding
retail.loc['CustomerID'] = retail['CustomerID'].astype(str)
```

## Buying pattern analysis

We are going to analysis the Customers based on below 3 factors:

R (Recency): Number of days since last purchase

F (Frequency): Number of transactions

M (Monetary): Total amount of transactions (revenue contributed)

```python
# New Attribute : Monetary
# retail.loc['Amount'] = retail['Quantity']*retail['UnitPrice']
rfm_m = retail.groupby('CustomerID')['total_sale'].sum()
rfm_m = rfm_m.reset_index()
rfm_m.head()
```

![monetary](staticAsset/data/Module-2/Project-6/monetary.png)

```python
# New Attribute : Frequency
rfm_f = retail.groupby('CustomerID')['InvoiceNo'].count()
rfm_f = rfm_f.reset_index()
rfm_f.columns = ['CustomerID', 'Frequency']
rfm_f.head()
```

![frequency](staticAsset/data/Module-2/Project-6/frequency.png)

```python
# Merging the two dfs
rfm = pd.merge(rfm_m, rfm_f, on='CustomerID', how='inner')
rfm.head()
```

![merge1](staticAsset/data/Module-2/Project-6/merge1.png)

```python
# Compute the maximum date to know the last transaction date
max_date = max(retail['invoice_date'])
max_date

# Compute last transaction date to get the recency of customers
rfm_p = retail.groupby('CustomerID')['Diff'].min()
rfm_p = rfm_p.reset_index()
rfm_p.head()

# Extract number of days only
rfm_p['Diff'] = rfm_p['Diff'].dt.days
rfm_p.head()
```

![Days difference](staticAsset/data/Module-2/Project-6/days-diff.png)

```python
# Merge tha dataframes to get the final RFM dataframe
rfm = pd.merge(rfm, rfm_p, on='CustomerID', how='inner')
rfm.columns = ['CustomerID', 'Amount', 'Frequency', 'Recency']
rfm.head()
```

![final merge](staticAsset/data/Module-2/Project-6/final-merge.png)

```python
# Outlier Analysis of Amount Frequency and Recency
attributes = ['Amount','Frequency','Recency']
plt.rcParams['figure.figsize'] = [10,8]
sns.boxplot(data = rfm[attributes], orient="v", palette="Set2" ,whis=1.5,saturation=1, width=0.7)
plt.title("Outliers Variable Distribution", fontsize = 14, fontweight = 'bold')
plt.ylabel("Range", fontweight = 'bold')
plt.xlabel("Attributes", fontweight = 'bold')
```

![Outlier distribution](staticAsset/data/Module-2/Project-6/outlier-dist.png)

```python
# Removing (statistical) outliers for Amount
Q1 = rfm.Amount.quantile(0.05)
Q3 = rfm.Amount.quantile(0.95)
IQR = Q3 - Q1
rfm = rfm[(rfm.Amount >= Q1 - 1.5*IQR) & (rfm.Amount <= Q3 + 1.5*IQR)]

# Removing (statistical) outliers for Recency
Q1 = rfm.Recency.quantile(0.05)
Q3 = rfm.Recency.quantile(0.95)
IQR = Q3 - Q1
rfm = rfm[(rfm.Recency >= Q1 - 1.5*IQR) & (rfm.Recency <= Q3 + 1.5*IQR)]

# Removing (statistical) outliers for Frequency
Q1 = rfm.Frequency.quantile(0.05)
Q3 = rfm.Frequency.quantile(0.95)
IQR = Q3 - Q1
rfm = rfm[(rfm.Frequency >= Q1 - 1.5*IQR) & (rfm.Frequency <= Q3 + 1.5*IQR)]

# Check the shape
rfm.shape
```

![Shape after outliers](staticAsset/data/Module-2/Project-6/outliers-shape.png)

#### Rescaling the Attributes

It is extremely important to rescale the variables so that they have a comparable scale.| There are two common ways of rescaling:

- Min-Max scaling

- Standardisation (mean-0, sigma-1)

Here, we will use Standardisation Scaling.

```python
# Rescaling the attributes
rfm_df = rfm[['Amount', 'Frequency', 'Recency']]

# Instantiate
scaler = StandardScaler()

# fit_transform
rfm_df_scaled = scaler.fit_transform(rfm_df)
rfm_df_scaled.shape

rfm_df_scaled = pd.DataFrame(rfm_df_scaled)
rfm_df_scaled.columns = ['Amount', 'Frequency', 'Recency']
rfm_df_scaled.head()
```

![Rescaled dataframe](staticAsset/data/Module-2/Project-6/rescaled-df.png)

### Step 4: Building the model

#### K-Means Clustering

K-means clustering is one of the simplest and popular unsupervised machine learning algorithms. The algorithm works as follows:

- First we initialize _k_ points, called means, randomly. In this case, we will use 4 as a value.

- We categorize each item to its closest mean and we update the mean’s coordinates, which are the averages of the items categorized in that mean so far.

- We repeat the process for a given number of iterations and, at the end, we have our clusters.

```python
# k-means with some arbitrary k
kmeans = KMeans(n_clusters=4, max_iter=50)
kmeans.fit(rfm_df_scaled)
```

```python
# Assign the labels to each data point, execute the following script.
kmeans.labels_
label_list=kmeans.labels_
sorted(Counter(label_list).items())
```

![Labels dictionary](staticAsset/data/Module-2/Project-6/labels_dict.png)

### Finding the optimal number of clusters (parameters) with the Elbow Method

According to the article [Elbow Method for optimal value of k in KMeans](https://www.geeksforgeeks.org/elbow-method-for-optimal-value-of-k-in-kmeans/), _"a fundamental step for any unsupervised algorithm is to determine the optimal number of clusters into which the data may be clustered. The Elbow Method is one of the most popular methods to determine this optimal value of k."_

Although our first thought might be that increasing the number of parameters (_k_) will improve the fit of our model, we risk over-fitting it. The Elbow Curve will help us identify when, if we were to add more clusters, won't add much information to our model. The optimal _k_ value will be where the average distance falls suddendly, which is when the curve starts to become parallel to the x-axis. In this case, we could assume that the optimal number of clusters is 3, but it's not really clear.

```python
# Elbow-curve /SSD
ssd = []
range_n_clusters = [2, 3, 4, 5, 6, 7, 8]
for num_clusters in range_n_clusters:
    kmeans = KMeans(n_clusters=num_clusters, max_iter=50)
    kmeans.fit(rfm_df_scaled)
    
    ssd.append(kmeans.inertia_)
    
# plot the SSDs for each n_clusters
plt.plot(ssd)
```

![Elbow curve](staticAsset/data/Module-2/Project-6/elbow_curve.png)

### Silhouette Analysis

Another way to determine the number of clusters is using the silhouette analysis. According to the [scikit-learn documentation](https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html), _"can be used to study the separation distance between the resulting clusters. The silhouette plot displays a measure of how close each point in one cluster is to points in the neighboring clusters and thus provides a way to assess parameters like number of clusters visually."_ Some people argue [that the silhouette analysis is better](https://towardsdatascience.com/silhouette-method-better-than-elbow-method-to-find-optimal-clusters-378d62ff6891) than the Elbow Method.

![silhouette score](staticAsset/data/Module-2/Project-6/sil-score.png)

_p_ is the mean distance to the points in the nearest cluster that the data point is not a part of \
_q_ is the mean intra-cluster distance to all the points in its own cluster.

- The value of the silhouette score range lies between -1 to 1.

- A score closer to 1 indicates that the data point is very similar to other data points in the cluster,

- A score of 0 indicates that the sample is on or very close to the decision boundary between two neighboring clusters,

- A score closer to -1 indicates that the data point is not similar to the data points in its cluster.

```python
# Silhouette analysis
range_n_clusters = [2, 3, 4, 5, 6, 7, 8]

for num_clusters in range_n_clusters:
    
    # intialise kmeans
    kmeans = KMeans(n_clusters=num_clusters, max_iter=50)
    kmeans.fit(rfm_df_scaled)
    
    cluster_labels = kmeans.labels_
    
    # silhouette score
    silhouette_avg = silhouette_score(rfm_df_scaled, cluster_labels)
    print("For n_clusters={0}, the silhouette score is {1}".format(num_clusters, silhouette_avg))
```

![Silhouette score results](staticAsset/data/Module-2/Project-6/sil-score2.png)

You could also plot the silhouettes, if you want to have a visualisation of the score results. For more information, visit the [official documentation](https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html).

**In this particular case, we will train our final model with _k_=3.**

```python
# Final model with k=3
kmeans = KMeans(n_clusters=3, max_iter=50)
kmeans.fit(rfm_df_scaled)

# Assign the labels to each data point, execute the following script.
kmeans.labels_
label_list=kmeans.labels_
sorted(Counter(label_list).items())
```

![Labels dictionary 2](staticAsset/data/Module-2/Project-6/labels_dict2.png)

```python
# assign the label
rfm['Cluster_Id'] = kmeans.labels_
rfm.head()
```

![Cluster ID labels](staticAsset/data/Module-2/Project-6/cluster-id-labels.png)

```python
# Box plot to visualize Cluster Id vs Amount
sns.boxplot(x='Cluster_Id', y='Amount', data=rfm)

# Box plot to visualize Cluster Id vs Frequency
sns.boxplot(x='Cluster_Id', y='Amount', data=rfm)

# Box plot to visualize Cluster Id vs Recency
sns.boxplot(x='Cluster_Id', y='Recency', data=rfm)
```

![Boxplots](staticAsset/data/Module-2/Project-6/cluster-boxplots.png)

Now that you've gone through both tutorials, try to answer a these questions:

a. why did we use the original, un-scaled dataset to fit the model?

b. What do you think the boxplots are telling us about the behaviour of the three groups of clients?
