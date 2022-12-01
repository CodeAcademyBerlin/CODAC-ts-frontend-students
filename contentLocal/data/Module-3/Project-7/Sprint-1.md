---
navTitle: "Sprint 1"
title: "Data Pipelines"
metaTitle: "Welcome to Sprint 1"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-2/Project-5'
# next: 'data/Module-2/Project-5/Sprint-2'
---

## Epic 1: Get data from an API

We will use a free Stock API, that will provide us with informations about the current value of Tesla in the stock market.

First you need to sign up on [this platform](https://iexcloud.io/) and request an **API Token**. An API token is an unique serie of characters and numbers associated to your account. It is very common for free API to ask you for an API Token or API Key, because in this way they can track the number of requests a user do. If you exceed the amount of requests allocated for the free plan, they will block you for some time. Evey API has different policies and amount of usage per second / day / week / month, so when working with APIs you will always have to spend a big amount of time reading their documentation. For this specific API, you can find the documentation [here](https://iexcloud.io/docs/api/). Don't start by reading everything, we will guide you through the next steps.

APIs have always one **base URL** and several **endpoints**. That means that from the same API you can get different data, depending on which enpoint you use.

**Let's make a down to earth example**

You are at a university canteen and want to order some food and something to drink. You need to first order something to drink at the bar, then go where the food is and get some food. The canteen space is our API, so let's say that the **www.TUBerlinCanteen.com is our base URL**. First, you go to the bar, which is going to be the first endpoint. Once you are there, you first go to the cashier to say what you want and to pay. The cashiere is our API endpoint. Let's call it **www.TUBerlinCanteen.com/drinks**. What happens next is, the cashiere takes your money, then it goes to the person responsible for making your drink (which is our server) and when the drink is ready, the cashiere will bring you back the drink you ordered.  
Of course there could be a lot of things that can go wrong in this process, for example you ordered a strawberry drink and they are out of strawberries, or the barista can make some mistakes in creating your drink. If something like this happen, you will get notified by the cashiere.

After you successfully got your favourite drink, you head to the food section, and you repeat the process. In this case, the cashiere of the food section is an other person, so an other API endpoint. Let's call it **www.TUBerlinCanteen.com/food**. What happens when you ask for your favourite pizza is the same as when you ask for your favourite drink.

The act of asking for a drink or for some food can be translate into what we call **GET request**. We ask to a specific endpoint for something, and we get it back in return.

Now, how can we translate in technical terms the fact that we did not ask for just any drink or any pizza, but for a Mojito and a Margherita?

Some API endpoints (but not all!) give you the possibility to specify a **query parameter**, which is a way to specify exactly what we want. Back to our example, we can say that when we ordered the Mojito we made a GET request to **www.TUBerlinCanteen.com/drinks?name=Mojito**. The **?** means that from that character on we will start to list query parameters. Of course we cannot specify any query parameter. If we send a GET request to **www.TUBerlinCanteen.com/drinks?name=Margherita**, the cashiere will come back to us with an error.

We can do the same for the food section, we send a request to **www.TUBerlinCanteen.com/food?name=Margherita**.

We are missing only one thing here: you can get drinks and food from the TU canteen only if you are a student or a teacher of the university. On top of that, you can only get some 2 drinks and 2 pizzas per day. So when you order something, you need to show the university card to the cashier. On the card there is a number, assigned to you only. When the cashier insert this registration number into their app, the app will tell them whether the registration number is valid and if the person can still get something to eat or to drink. This is our **API Token**. Each API has a slightly different way of calling it, or a slightly different way of reading it. To make it simple, let's just use the same name and way of reading it as the API we are going to use in the project.

Now in order to get something to drink or to eat, we have to include our registration number in every GET request we do. So when we want to order our Mojito, we will have to make a request like this: **www.TUBerlinCanteen.com/drinks?name=Mojito&token=iahsvèqehrvèhqrv546646**. The same goes for the food.

Now that you understand better what we will be doing, create an account on [Postman](https://www.postman.com/) and make your first request to [this endpoint](https://iexcloud.io/docs/api/#previous-day-price).

Postman is a very useful software for testing APIs, because it doesn't require you to write any code. You just have to write the request URL correctly and it will work.

Create a new GET request, and try to compose the correct url in order to get back the price of Tesla stocks from yesterday.

Remember that the base URL is **https://cloud.iexapis.com/stable** and that the Tesla symbol is **tsla**. You API token will be referred as **token**.

Once you managed to get back a successful response, it is time to code it in Python!

## Epic 2: Create a new Anaconda environment

For this project, there will be an optional part that will ask you to install a library for predicting Tesla stock value. This library has not been updated yet to the newest vestion of Python, therefore we need to use Python 3.8.

The easiest thing is to open you Anaconda navigator, go in the Environments tab, create a new environment, name it how you want and select Python 3.8. From the navigator open Visual Studio Code and make sure that you are using the newly created environment.

## Epic 3: Code the GET request in Python

There are a lot of libraries in Python to make http requests. We will use one called `urllib3`. Make sure it is installed in the project environment, if not install it. The easiest way to install a new library on an Anaconda Environment, is to use the Anaconda Navigator. However, some libraries will not be available from the list. So it is better if you start to get familiar with the command line. Go on google and search for _anaconda urllib3_. You should find the command line for installing this library using the command line interface.

Open the anaconda prompt (this has been automatically installed when you installed Anaconda Navigator) and paste the code you found.

Now create a `main.py` file and paste this code:

```python
import urllib3
import json
def get_data():
    http = urllib3.PoolManager()
    url = "https://cloud.iexapis.com/stable/stock/tsla/previous?token=<YOUR_TOKEN_HERE>"
    resp = http.request("GET", url)
    values = json.loads(resp.data)
    print(values)
    return values
get_data()
```

Remove the `<YOUR_TOKEN_HERE>` and put your personal API Token.

Run the file from the terminal with `python main.py`. You should be seeing the response data in a [JSON format](https://www.w3schools.com/whatis/whatis_json.asp) in the terminal.

## Epic 4: Store your values in a Google Spreadsheet

Start by creating a new Google spreadsheet with 2 columns, date and price.

The go to the Google Cloud Platform and create a new project. Go in the API and Services tab, and under Credentials click on Create Credentials. Select the Service Account. Once you have created the Service Account credentails, copy the email and add it in the sharing settings of your Google Spreadsheet.

In the same page, click on the email of Service Accounts, then go in the Keys tab and click on Add Key. Select the JSON type. This will download a file containing all the necessary keys for your code to communicate with the Service Account. Move the file in the project folder and rename it as `service_account.json`.

Go back to the Dashboard of the API and Services and click on Enable APIs and Services. Search for Google Drive API and Google Spreadsheet API and enable both.

Now we can start using these 2 APIs in order to save our data into the google spreadsheet. There are again several libraries to do that and we will use one called `gspread`, so install it with the [anaconda prompt](https://anaconda.org/conda-forge/gspread).

Now create a new file called `google_service.py`, and paste the following code:

```python
from main import get_data
import gspread

def save_data():
    data = get_data()
    gc = gspread.service_account(filename="./service_account.json")

    wks = gc.open("<NAME_OF_YOUR_GOOGLE_SPREADSHEET>").sheet1

    wks.append_row([data["date"],
                    data["close"]])
save_data()
```

Run the google_service file from the terminal and check that a new row gets added to your google spreadsheet.

## Epic 5: Install and use Streamlit to display the data from the Google Spreadsheet

Create a new file called `streamlit_app.py`.

In this file we will create two functions: one to get the data from our google spreadsheet and one to display them using a line chart from streamlit.

Import gspread at the top of your file and create a function called `get_data()`.

Check the [gspread documentation](https://docs.gspread.org/en/latest/index.html) to write the code to get the values from a spreadsheet.

Once you manage to create a dataframe with all the necessary informations, [install streamlit](https://docs.streamlit.io/library/get-started/installation).

Now you are all set to create your first interactive chart. Check in the documentation how to write the code for a [line chart](https://docs.streamlit.io/library/api-reference/charts/st.line_chart).

Try to run it and the chart should appear in your browser.

## Epic 6: Build your first automated data pipeline

For now, everything that you have build run and exists only on your laptop. Certainly, if you want to collect the price for Tesla everyday, you don't want to always have to manually run your code from your laptop. That's when automated data pipeline comes to the rescue!

A data pipeline is a set of tools and processes used to automate the movement and transformation of data between a source system and a target repository.

In other words, it means that we can use serverless functions to do exactly what we have done locally so far, and add a trigger to run the process every day.

There are 2 big players that offer these sevices for a very low price, AWS (Amazon Web Services) or Google Cloud Platform.

In this project we will use two of the AWS services, specifically AWS Lambda functions (serverless functions) and AWS Event Bridge (our trigger). Google Cloud offers the same, but with other names.

Create and account on [AWS](https://aws.amazon.com/). During the Sign Up process, you will be asked to insert a credit card. That is because if you exceed the free limit, you will be billed at the end of the month. Don't worry, the project we will should not exceed the free limits.

What we have to do next, is to upload our code and all the libraries that we used into [AWS Lambda Function](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) service through a `.zip` file.

We will have to create 2 different `.zip` files: one for the API request, one for writing the result in our Google Spreadsheet.

You will have to change a bit the code as well in order to make it work for Lambda functions.

- from your **Anaconda prompt** (make sure you're in the root folder of your project) run the following line

```cmd
pip install --target ./api_request_package urllib3
```

This code should create a new folder called `api_request_package`, in which the library `urllib3` will be installed.

- create a copy of the `main.py` file and name it `main_lambda.py`

- change the code like this

```python
import urllib3
import json
def get_data_lambda(event, context):
    http = urllib3.PoolManager()
    url = "https://cloud.iexapis.com/stable/stock/tsla/previous?token=<YOUR_TOKEN_HERE>"
    resp = http.request("GET", url)
    values = json.loads(resp.data)
    return values
```

We simply removed the print and the function call, because it will be triggered by some events that we will define later

Now move the `main_lambda.py` into the `api_request_package` folder and create a zip file from all the files. Open the folder and create the package by selecting the file and the libraries folder. **Do no create the package from the `api_request_package` folder, otherwise your package will not have the `main_lambda.py` file at the root of the package.**

Our first package is ready to be uploaded on AWS Lambda functions, and this is going to be the first point of our data pipeline.

Go on AWS, search for **Lambda** and click on **Create function**, select Python 3.8 and create it. When it is created, click on Upload and upload your `.zip` file. In the Runtime settings, change the handler into `main_lambda.get_data_lambda`. Test it to check if it runs correctly.

Now repeat all the steps for the google upload. Remember to use different names.

Change the code in this way

```python
import gspread

def save_data(event, context):
    gc = gspread.service_account(filename="./service_account.json")

    wks = gc.open("<NAME_OF_YOUR_GOOGLE_SPREADSHEET>").sheet1

    wks.append_row([event["responsePayload"]["date"],
                    event["responsePayload"]["close"]])
```

We will extract the values of the previous lambda function from the event object. Create a zip file of the files and remember to include your `service_account.json` file.

Create a new lambda function and upload the zip file. Change the Runtime settings handler.

## Epic 7: Connect the lambda functions

It's now time to automate our serverless functions.

We will use 2 more tools: EventBridge and Lambda destination.

Open your API call lambda function and add a destination. Select Asynchronous invocation, On Success, Lambda function as destination type and select the function responsible for saving our data into google.

Now, let's create the event that will trigger the entire data pipeline. Search for Amazon EventBridge and under Rules, create a new rule. For testing purposes, schedule it to run every minute. Choose the API lambda function as target.

Congratulations, you have created your first pipeline!

**After you see that everything works correctly and that the datas get correctly loaded into the google spreadsheet, change the rule to trigger the lambda function once per day**

## Epic 8: Deploy your Streamlit app with Heroku or Streamlit Cloud

### Heroku

Install Heroku CLI if you don't have it and Sign Up on their platform. You can find the instructions here: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

Every application deployment is slightly different, so here you can find some instructions to successfully deploy a streamlit app.

You will need to add 2 files.

A `Procfile` in which you will have to write the following:

```Procfile
web: sh setup.sh && streamlit run ./<NAME_OF_YOUR_STREAMLIT_FILE>.py
```

And a `setup.sh` file in which you will have the following:

```sh
mkdir -p ~/.streamlit/
echo "\
[server]\n\
headless = true\n\
port = $PORT\n\
enableCORS = false\n\
\n\
" > ~/.streamlit/config.toml
```

The Procfile is a text file in the root directory of your project that declares what commands should be executed when you start the app.

Add a `requirements.txt` file where you'll specify the libraries that Heroku needs to insall in order to successfully build your streamlit app.

Your file should then look like this:

```txt
gspread
numpy
pandas
streamlit
```

Please follow the instructions from the documentation to successfully deploy your app: [https://devcenter.heroku.com/articles/getting-started-with-python#deploy-the-app](https://devcenter.heroku.com/articles/getting-started-with-python#deploy-the-app)

### Streamlit

Follow the instructions [here](https://docs.streamlit.io/streamlit-cloud/get-started/deploy-an-app) to deploy your app using the Streamlit Cloud service.

## Optional Epic 9: Integrate Facebook Prophet to forecast the price of Tesla in the stock market

Facebook Prophet is a Python and R library developed by Facebook to forecast time series data. You can change only few parameters when using it, therefore we can really see it as a black box that we can hardly inspect to understand what's happening behind.

The reason why we have it here it is defenetly not for its relevance in the job market, nor for its reliability when trying to predict something. See it as an exercise of integration, for which you will have to read and understand the documentation, search on google how to integrate it with Streamlit and how to successfully deploy your app.
