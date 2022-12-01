---
navTitle: "Sprint 2"
title: "Sprint 2"
metaTitle: "Welcome to Sprint 2"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-1/Project-1/Sprint-1'
# next: 'data/Module-1/Project-1/Sprint-3'
---

If you're new to the technical field, then programming would be the best place to start.

Currently, the two programming languages used most in data science are Python and R.

**R:** A programming language for statistical computing. R is widely used for developing statistical software and data analysis.

**Python:** A high-level, general-purpose programming language. Python is widely used in many applications and fields, from simple programming to quantum computing. Because Python is a beginner-friendly programming language, it is a great place to start with data science and maybe more fields in the future. Due to Python's popularity, there are many resources available to learn it independently of your goal application field.

We will use Python throughout the course.

## Epic 1: What Is Python?

Python is an object-oriented, interpreted, high-level programming language with dynamic semantics. It was developed by Guido van Rossum. Most of the major online platforms, for example, Google, Dropbox, Instagram, YouTube, and Spotify — all run on Python.

For Data Science, you don't need to know all of the mentioned characteristics: object-oriented, interpreted, high-level programming.

However check other features that might be helpful for you to understand why it is so widely used:

- **Readable**: Python is a very simple language, and has a very straightforward syntax.

- **Easy to Learn**: Learning python is easy as this is an expressive and high-level programming language, which means it is easy to understand the language and thus easy to learn. Nowadays, most universities choose to teach students Python as it is best suited for beginners to learn.

- **Cross-platform**: Python is available and can run on various operating systems such as Mac, Windows, Linux, Unix etc. This makes it a cross-platform and portable language.

- **Open Source**: Python is an open-source programming language.

- **Large standard library**: Python comes with a large standard library that has some handy codes and functions which we can use while writing code in Python.

- **Free**: Python is free to download and use. This means you can download it for free and use it in your application. See: Open Source Python License. Python is an example of a FLOSS (Free-Libre / Open Source Software), which means you can freely distribute copies of this software, read its source code and modify it.

- **Supports exception handling**: If you are new, you may wonder what is an exception? An exception is an event that can occur during a program exception and can disrupt the normal flow of the program. Python supports exception handling which means we can write less error-prone code and can test various scenarios that can cause an exception later on.

- **Advanced features**: Supports generators and list comprehensions. We will cover these features later.

- **Automatic memory management**: Python supports automatic memory management which means the memory is cleared and freed automatically. You do not have to bother clearing the memory.

More details on that can be found [here](https://www.geeksforgeeks.org/python-features/)

### What can Python do?

- Python is used for desktop GUI applications, websites and web applications.
- Python can be used alongside software to create workflows.
- Python can connect to database systems and modify the contents of the database.
- Python can be used to handle big data and perform complex mathematics.
- Python can be used for rapid prototyping, or for production-ready software development.

## Epic 2: Install Python

The recent major version of Python is Python 3, which we will use throughout our course. You can find it here: [https://www.python.org/downloads/](https://www.python.org/downloads/)

Python can be written in a simple text editor. It is possible to write Python in an Integrated Development Environment (IDEs), such as Pycharm, Spyder, Netbeans or Eclipse which are particularly useful when managing large collections of Python files.

However, in the beginning, you will start writing Python code using **Visual Studio Code** as it offers advanced editing, analysis, debugging, and profiling functionality. You can find it here: [Visual Studio Code](https://code.visualstudio.com/Download).

Python, like many other programming languages, has different versions. And sometimes when we create software, the software needs to run on a specific version of the language because our software expects a certain behavior that is present in older versions but changes in newer versions.

Likewise, we may need to use specific versions of the libraries for similar reasons. But we may have many projects on our computer, perhaps a Flask app that runs on version 0.11 (the first one you made!) and Python 2.7 and even a more modern Flask app that runs on version 0.12 and Python 3.4. If I try running both at once on Python 2 or Python 3, one of them may break because some of the code that runs on Python 2 doesn't run on Python 3 or vice versa. This is where virtual environments become useful.

Virtual environments keep these dependencies in separate "sandboxes" so you can switch between both applications easily and get them running. For those more familiar with programming, virtual environments are analogous to Docker containers. Additionally, package managers for other languages, like JavaScript's NPM (Node Package Manager), take care of most of these details for you, but you'll have to get your hands dirty in Python and deal with the environments yourself.

In this course we will **conda**, the package manager associated with **Anaconda**.

To install Anaconda for Windows, please follow these [steps](https://docs.anaconda.com/anaconda/install/windows/).

To install Anaconda for macOS, please follow these [steps](https://docs.anaconda.com/anaconda/install/mac-os/).

After the installation please verify it following these instructions: [https://docs.anaconda.com/anaconda/install/verify-install/](https://docs.anaconda.com/anaconda/install/verify-install/)

Once you finished with the installation and verified it was successfull, open Visual Studio Code and create a file called `test.py`. Go in the View section of VS Code and select the Comman Palette. In the Command Palette type _Python: Select Interpreter_ and select the Python installed in the conda environment.

Now in the Text Editor space type

```python
print("Hello World")
```

And now click on the Play Symbol (▶️). This will show the result of print in the integrated terminal of Visual Studio Code. If not, book a Calendly with your mentor to help you with the settings.

## Epic 3: Python in action

Congratulations on setting up the necessary tools. Now, you would start with learning the core concepts of Python. This week, you will have to solve some exercises using Python.

For these exercises and for the future projects, we will use an **IPYNB file**. It is a notebook created by Jupyter Notebook, an interactive computational environment that helps using and analyzing data using Python.  
So go ahead and create create a file called `exercises.ipynb`. You will see that automatically one cell will appear in your text editor. You can run each cell separately, so for each exercise create a new cell below and run it.

### Writing expressions with variables

To get started, here are some simple exercises to create and use variables and expressions. Variables are how you store data and results of calculations. Expressions are how you calculate values.

##### Exercise 1

In your file create a variable called my_name with your name as the value. Put your name inside string quotes, e.g., "my name". Then add a line of code to print the variable name.

Save your file file in your editor and run the cell. You should see your name printed. If not, investigate and fix it.

##### Exercise 2

Create a variable called age with a number that is your age. Do not use string quotes for numbers.

Add a line to print that variable. Save the file and run the cell. You should see your age.

##### Exercise 3

Create a variable called julia_age with a value 32. Create another variable called age_diff and set it to an expression that calculates your age minus Julias's age. Print the value of age_diff.
Save the file and run the cell. You should see your age and the age difference. If you are younger than Julia, you should see a negative number.

### Writing code with conditionals

Conditionals are forms used programming to tell the computer to do different things, depending on some test, e.g., "if the user is logged in, say "Hi" else say "Please log in."

The most basic conditional form is if...else...

##### Exercise 4

Write a conditional that compares the variable holding your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age.
Save your file and run the cell. Make sure you see the correct message. Try changing your age in the file to make sure the other message prints when it should.

##### Exercise 5

Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", Julia is younger than you", or "You have the same age as Julia".

Save your changes and run the cell.

### Lists and Loops

##### Exercise 6

Create a list with all the names of your class (including mentors). Sort the list alphabetically.
Then print the first element of the list.
On the next line, print the last element of the list.
On the next line, print all the elements of the list (use a "for" loop).
Save the file and run the cell. You should see the first element of the sorted list, the last element of the sorted list, and all the elements in order in the list.

##### Exercise 7

Create a list with all the ages of the students in your class. Iterate through the list using a for loop, and then print every age. Add a conditional inside the loop to only print even numbers.
Save your changes and run the cell. You should see every age printed, then only the even numbers printed. If not, investigate and fix it. Then do the same using a while loop.

##### Exercise 8

Write a list containing numbers and print the lowest number.

##### Exercise 9

Write a list containing numbers and print the highest number.

##### Exercise 10

Given below is a list of 10 customers with year of birth, however, the list can be as large as several thousands of customers.

```python
[1999, 1995, 2005, 2010, 2007, 2006, 1994, 1996, 1979, 2008]
```

Use a loop to iterate over the list and print the age of each customer.

##### Exercise 11

Given below is a list of 10 customers with name and year of birth, however, the list can be as large as several thousands of customers.

```python
customer_list = [
                    {"name": "Bob", "age": 1999},
                    {"name": "Jack", "age": 1995},
                    {"name": "Lisa", "age": 2005},
                    {"name": "Maria", "age": 2010},
                    {"name": "Ben", "age": 2007},
                    {"name": "Emma", "age": 2006},
                    {"name": "Oscar", "age": 1994},
                    {"name": "Amy", "age": 1996},
                    {"name": "Paul", "age": 1979},
                    {"name": "Etta", "age": 2008}
                ]
```

Use a loop to iterate over the list and print the name and age of each customer.  
Afterwards, for each customer try to print the sentence "*customer_name* is *customer_age* years old".  
customer_name and customer_age should correspond to each customer's name and age.

##### Exercise 12

Given a list of ages, remove the youngest and the oldest person.

```python
ages = [20, 24, 14, 9, 12, 13, 25, 23, 40, 11]
```

For this exercise try not to use the max() and min() methods.

##### Exercise 13

You have two lists with ages of customers from different cities.

```python
berlin = [15, 13, 16, 18, 19, 10, 12 ]
munich = [7, 13, 15, 20, 19, 18, 10, 16]
```

The task is to create an other list with the common ages.

##### Exercise 14

You have a list with ages.

```python
[15,13,16,18,19,15,10]
```

Remove the duplicates.

### Functions

##### Exercise 15

Write a function that works like below:

Function name: **welcome**

welcome('Evelyn') would print- 'Welcome Evelyn, have a nice day!'

welcome('Jost'), it would print - 'Welcome Jost, have a nice day!'

##### Exercise 16

Write a function that takes a string as input and calculates the length.

Function name: **get_length**

get_length('Hello') would print / return 5.

get_length('Hi') would print / return 2.

##### Exercise 17

Write a function which checks whether a number is even.

**Hint:** Think about the modulus operator

Function name: **check_even**

check_even(6) would print / return 'Yes'

check_even(5) would print / return 'No'

##### Exercise 18

Rewrite exercises 11, 12, 13, 14, 15 in a function.

##### Exercise 19

Write a function that takes an input list and value of age to find as input and return true or false if the age value is present or not in the list.

##### Extra exercises

Do the intermediate exercises in this document (optional).

[Link of assignment](https://drive.google.com/file/d/1QXg2VVJSBZPDfIUtpIFsgIIzaD6ROYBc/view?usp=sharing)

### Looking for more challenges ?

[Code Wars](https://www.codewars.com/)

## Epic 5: Version Control

In software development in general and data science, one of the most important concepts to master — or try to — is version control.
Whenever you work on a data science project, you will need to write different code files, explore datasets, and collaborate with other data scientists.
Manging, all changes in the code, is done via version control, namely, using Git.

Install [Git](https://git-scm.com/downloads) on your computer.
