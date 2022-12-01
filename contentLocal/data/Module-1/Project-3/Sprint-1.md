---
navTitle: "Sprint 1"
title: "Sprint 1"
metaTitle: "Welcome to Sprint 1"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-1/Project-3'
# next: 'data/Module-1/Project-3/Sprint-2'
---

## Epic 1: Data Wrangling

As you have seen in the previous project, you always do the basic steps which would include the following:

- Check the shape of datasets and column names (does it sound appropriate? Change if required)
- Look out for missing values.
- Is there any data types conversion required.

The attribute dteday would require type conversion from object (or string type) to timestamp. That is, 'dteday' should be a 'datetime' object.

[Pandas datetime](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.to_datetime.html)

Also, attributes like season, holiday, weekday, and so on are inferred as integers by pandas, and they would require conversion to categoricals for proper understanding.

Look out for more changes you would require to do before moving to data visualization.

Also, consider renaming values to make them look appropriate.

Holidays:

```python
hdf.loc[hdf['is_holiday'] == 0, 'is_holiday'] = 'No'
hdf.loc[hdf['is_holiday'] == 1, 'is_holiday'] = 'Yes'
```

Season:

```python
hdf.loc[hdf['season'] == 1, 'season'] = 'Winter'
hdf.loc[hdf['season'] == 2, 'season'] = 'Spring'
hdf.loc[hdf['season'] == 3, 'season'] = 'Summer'
hdf.loc[hdf['season'] == 4, 'season'] = 'Fall
```

Sometimes it helps to create new features. For example, it would be interesting to have a feature called 'warm days' and you can decide whether it is 'yes' or 'no' based on the temperature of the day.

There are lots of such option. Think what else you think would help you in next steps, however, you can always revisit and create features as you require later.

## Epic 2: Exploratory Data Analysis

This time for plotting you will use a Python library called Seaborn. You can find the documentation here: [https://seaborn.pydata.org/](https://seaborn.pydata.org/)

### Formulate some hypothesis

Here are some of the hypotheses which could influence the demand for bikes:

- **Hourly trend**: most of the businesses have rush hours and weak hours. It should not be an exception for bike rentals as well.

- **Daily Trend**: weekdays vs weekends and registered users vs casual users.

- **Rain**: the demand for bikes might be changed on a rainy day as compared to a sunny day. Similarly, people prefer to go out on less humid days.

- **Temperature**: in warm countries, temperature generally keeps people inside. You have to check Washington DC's temperature for making any guess.

- **Business model**: businesses often rely on registered customers more than casual users. There might be some interesting insights that can strengthen this assumption.

### Create some proofs

The dataset after preprocessing (which you performed in the previous step) is ready for some visual inspection.

You have already performed many visualisation techniques in previous project. This time its your job to think what kind of plots would be interesting for a Bike rental company.

**Examples**

![Seasons](staticAsset/data/Module-1/Project-3/seasons.jpg)

If you observe that people are using more bikes in Winter, you have to question about the quality of the data.

Here you can find an article about Data Quality: [https://www.lotame.com/why-is-data-quality-important/](https://www.lotame.com/why-is-data-quality-important/)

Similarly, below plots can be created

![Holiday](staticAsset/data/Module-1/Project-3/holiday.jpg)

Monthly average total count for 12 months.

![Monthly](staticAsset/data/Module-1/Project-3/monthly.jpg)

The below plot requires creation new feature 'is_weekend'

![Weekend](staticAsset/data/Module-1/Project-3/weekend.jpg)

![Temperature](staticAsset/data/Module-1/Project-3/temp.jpg)

Explore more on these kind of visualisations and come up with 5 or more insights.

### Epic 3: Time Series

Time series is a sequence of observations recorded at regular time intervals.

Depending on the frequency of observations, a time series may typically be hourly, daily, weekly, monthly, quarterly and annual. Sometimes, you might have seconds and minute-wise time series as well, like, number of clicks and user visits every minute etc.

It is a necessary preparatory step before developing a forecast.

You can read more here: [https://www.machinelearningplus.com/time-series/time-series-analysis-python/](https://www.machinelearningplus.com/time-series/time-series-analysis-python/)

Here you can find more informations on how to handle Time Series in pandas: [https://pandas.pydata.org/docs/user_guide/timeseries.html](https://pandas.pydata.org/docs/user_guide/timeseries.html)

Once you have gone through the basics, you will be able to create some detailed analysis (daywise, monthwise, particular day, time etc).

**Examples**

![January](staticAsset/data/Module-1/Project-3/jan_2011.jpg)

![August](staticAsset/data/Module-1/Project-3/28aug2012.jpg)
