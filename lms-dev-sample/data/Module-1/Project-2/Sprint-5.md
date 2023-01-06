---
navTitle: 'Sprint 5'
title: 'Final presentation'
metaTitle: 'Welcome to Sprint 5'
metaDescription: 'Data Science Course'
access: data
# prev: 'data/Module-1/Project-2/Sprint-4'
# next: 'data/Module-1/Project-3'
---

## Epic 1: Prepare for the final presentation

BlueBerry Winery's primary goal is to sell their product at a proper price based on the quality. They requested **CODE Analytics** to create a **Wine Quality Analytics System** to help them **determine the quality of the wines produced based on their composition**.

Your Machine Learning model is ready, but you now need to present it to BlueBerry Winery's marketing team. Prepare some slides to showcase your model and your findings, including:

- Most meaningful insights from the exploratory analysis (EDA) that had an impact on this part of the project
- (Very) brief explanation of the steps you followed in your process. Select the most important.
- What features did you choose for your model and why?
- Is there any additional data needed in order to deepen on a certain aspect or to corroborate your findings?
- How accurate was your model?
- Name 2 or 3 business recommendations for BlueBerry Winery

Remember that you're presenting to a non-technical audience so avoid jargon, difficult terms or getting too much into the details of the process. What they need is an overview of how you reached your conclusions.

**You already know what are the basic guidelines for a presentation and also do not forget to come up with a storyline to convey your message**

Generally, a data analytics presentation lasts for 12 - 15 minutes and consists of 6 - 12 slides.

## Optional

BlueBerry Winery has a primary goal of giving a proper price tag to their wine based on the quality. You can try to estimate the price along with the assessment of quality for a sample of wine prior to bottling. The current dataset doesn't include any pricing information. Data analysts often search for other datasets to enrich their research and strengthen the analytics outcome. However, this being your first project, you are provided with the dataset containing wine reviews.

You can find it here: https://drive.google.com/file/d/148ndWjamqPBlWsk5yofmmAB9XcikP0bJ/view?usp=sharing

This dataset requires a few modifications before one can really use it for this project.

### Filter the data

1. Focus on 'Portugal' and 'Vinho Verde' region.

2. Remove Price outliers (hint: Take prices between (Q1-1.5(IQR) and Q3+1.5(IQR)).

3. You can use this data set assuming price will increase with wine quality.

Cut ratings or prices into 3 levels (or n levels depending on how many quality labels you have). For each level, check the price range (min_price, max_price) and mean_price/median_price.

Lastly, try to estimate the price of wines in your original dataset and provide suggestions on the price per quality label.

You do not need a Machine Learning algorithm to complete this part of the project. Also, this part of the project is not mandatory.
