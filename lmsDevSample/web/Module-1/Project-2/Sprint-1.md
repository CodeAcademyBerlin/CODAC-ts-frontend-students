---
navTitle: 'Sprint 1'
title: 'Sprint 1'
metaTitle: 'Welcome to the Web Development course'
metaDescription: 'Web Development course'
access: web
prev: 'web/Module-1/Project-2'
next: 'web/Module-1/Project-2/Sprint-2'
tags:
  [
    'js-excercise',
    'js-excercises',
    'javascript-exercise',
    'javascript-exercises',
    'project-2',
    'module-1',
    'sprint-1',
  ]
---

## Epic 1: JavaScript Basics

### Problem Solving

Problem Solving is the most important skill that you will practice during this course, and you will keep practicing for your entire life! It does not matter which programming language you are learning, as long as you have the right way of looking at a problem you will be able to learn any syntax.

Here you can find a very nice article about problem.solving, please read it carefully: [https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/)

In the next days, you will have to solve some exercises. In the beginning, the problems will be small, and the more you will progress the bigger the problems will get. This will be the point where you will have to train your ability to divide a big problem into sub-problems and solve them.

Google is always our best friend, but we will ask you not to google the solution to those problems. It will defeat the purpose of training your problem-solving skill. Only once you solved it or at least tried to solve it several times you are allowed to search for the solution. You will see that there are many ways to solve the same problem and we want to encourage you to find your own. Of course, you can use Google to search for the syntax, we don't expect you to learn it by memory!

As Richard mentioned in his article, making a schema out of a problem or even talk about it is the key to solve it. Therefore first try to explain to yourself what the problem is and make sure you understand it. Then try to draw a flowchart out of it. If you don't know what it is you can have a look here: [https://www.cybermedian.com/flowchart-a-quick-guide/](https://www.cybermedian.com/flowchart-a-quick-guide/)

This is an example of a JavaScript loop in a flowchart: [https://www.javascripttutorial.net/javascript-for-loop/](https://www.javascripttutorial.net/javascript-for-loop/)

⚠️ Be careful to look for JavaScript and not just Java during your research as these are two completely different languages

### Set up a JavaScript playground

Since you'll be learning to write JavaScript for web pages, the best way to experiment is by making a very simple web page that loads and runs some JavaScript. You may find this page useful when testing out ideas in later tasks.

- Create a directory for your code, e.g., JS-exercises
- Inside that directory, create an HTML file, e.g., index.html
- In the HTML file, put some simple HTML to show some text that will let you know you're looking at the right file, e.g., an h1 tag for the title
- In the same directory, create the file main.js
- Add a script element to your index.html to load JavaScript from the file main.js: [https://www.digitalocean.com/community/tutorials/html-script-tag](https://www.digitalocean.com/community/tutorials/html-script-tag)  
  **Tip**: in this case, the script tag should be right before the closing `</body>` tag
- In the JavaScript file, add a line into your JavaScript file to print the following text in the console: "Starting javascript...". In programming, printing to some console window is often called "logging". Hence the function to use in JavaScript is console.log: [https://www.geeksforgeeks.org/javascript-console-log-with-examples/](https://www.geeksforgeeks.org/javascript-console-log-with-examples/)
- Open your HTML file in a browser
- Open the developer console. Is your message there? If not, try reloading the file

**Tip**: if you still don't see the message, check your HTML and JavaScript file for typos. Make sure the file names match exactly, including case. Make sure the JavaScript file is in the same directory as the HTML file.

**Tip**: as you do the exercises below, keep adding new code for each exercise

### JavaScript Basics Exercises

#### Writing expressions with variables (1 to 3)

To get started, here are some simple exercises to create and use variables and expressions. Variables are how you store data and results of calculations. Expressions are how you calculate values.

##### Exercise 1

In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "my name". Then add a line of code to print the variable name to the console after the previous message.

Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix it.

##### Exercise 2

Create a variable called age with a number that is your age. Do not use string quotes for numbers.

Add a line to print that variable in the console. Save the file and reload the page. You should see your name and your age.

##### Exercise 3

Create a variable called juliaAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff.
Save the file and reload the page. You should see your age and the age difference. If you are younger than Julia, you should see a negative number.

#### Writing code with conditionals (4 and 5)

Conditionals are forms used programming to tell the computer to do different things, depending on some test, e.g., "if the user is logged in, say "Hi" else say "Please log in."

The most basic conditional form is if...then...else...

##### Exercise 4

Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age.
Save your JavaScript file and reload the page. Make sure you see the correct message. Try changing your age in the JavaScript file to make sure the other message prints when it should.

##### Exercise 5

Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", Julia is younger than you", or "You have the same age as Julia".

Save your changes and reload the file.

### JavaScript Array (6 to 12)

#### Sorting an Array

##### Exercise 6

Create an array with all the names of your class (including mentors). Sort the array alphabetically.
Then print the first element of the array in the console.
On the next line, print the last element of the array in the console.
On the next line, print all the elements of the array in the console (use a "for" loop).
Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.

#### Looping over an Array

##### Exercise 7

Create an array with all the ages of the students in your class. Iterate the array using a while loop, and then print every age in the console. Add a conditional inside the while loop to only print even numbers.
Write again a loop but use a "for" loop instead of a "while" loop.
Save your changes to your JavaScript file. Reload the HTML page in your browser. You should see every age printed, then only the even numbers printed. If not, investigate and fix it.

#### Functions that use Arrays

For the following exercises, you cannot sort your array. Be sure your solution works for any array that it is passed!

##### Exercise 8

Write a function that receives an array as a parameter and prints the lowest number in the array to the console.
Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the lowest number in the array printed in the console. If not, investigate and fix it.

##### Exercise 9

Write a function that receives an array as a parameter and prints the biggest number in the array to the console.
Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the biggest number in the array printed in the console. If not, investigate and fix it.

##### Exercise 10

Write a function that receives two parameters, an array, and an index. The function will print the value of the element at the given position (one-based) to the console.
For example, given the following array and index, the function will print '6'.  
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
Save the changes to your JavaScript file and check your browser console. You should see the number at the correct index printed in the console. If not, investigate and fix it.

##### Exercise 11

Write a function that receives an array and only prints the values that repeat.

For example, given the following array and index, the function will print '6,23,33,100'.

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console. If not, investigate and fix it.

**Tip**: this is considered by many students the most difficult exercise, therefore dedicate max. an hour to find a solution and if you can't leave it for tomorrow. Most of the time we need to take breaks and we will be able to see problems from different angles with a fresh mind.

##### Exercise 12

Write a simple JavaScript function to join all elements of the following array into a string.

myColor = ["Red", "Green", "White", "Black"];

Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console:

"Red", "Green", "White", "Black"

If not, investigate and fix it.

#### JavaScript String (13 to 16)

##### Exercise 13

Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.
Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.

##### Exercise 14

Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string.
Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.

##### Exercise 15

Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".
Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.

##### Exercise 16

Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".
Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.

## Epic 2: DOM Manipulation

Manipulate the document structure is one of the most common things you'll want to do when writing web pages and apps.
There are 3 parts of a website that you can access from JavaScript (window, navigator, and document) represented in JavaScript by objects. [Here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) you can find the documentation for it.

The next exercises will focus only on how to access the Document Object and add, change, or remove elements and attributes.

### DOM manipulation exercises (17 and 18 )

##### Exercise 17

Now let's add content to an HTML document instead of writing to the console. Write a function called addBands myBandList) that will list your favorite bands. Start with an empty HTML page that contains a level 1 heading "My Favorite Bands" and an empty unordered list with ID band-list.

Your function should use the JavaScript DOM to create list items and add them to the unordered list, with one list item for each string in array myBandList.

For example, if I call:

addBands(['Dire Straits', 'Kansas', 'Steely Dan']);

The function will add three list items to the unordered list.

##### Exercise 18

Write a function called addMultTable(rows, cols) that will create a multiplication table like this. Start with an empty HTML page that only contains a level 1 heading.

Your function should use the JavaScript DOM to insert an HTML table after the heading.

For example, if I call:

addMultTable(4, 8);

It will create an HTML table with 4 rows and 8 columns, and append it after the level 1 heading.

### Extra: add JavaScript to your first project

We can now use JavaScript to display a summary of options that the user selected in the Registration/Reservation Page.
If you haven't created a Confirmation Page file do it now and add it to the action attribute of the form (check Epic-2 from Sprint-1 in the previous project).

Create a javascript file and link it to the Confirmation page through the `script` tag.

To get the name and values of the input from the Registration/Reservation Page follow this example: [https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams#Examples](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams#Examples)

The string that you have to insert in the params.get method from the example above needs to correspond to the name attribute of your html inputs (this is the argument that is taken as variable name).

Once you have all the data that you want to display, use JavaScript to create html element and DOM manipulation to add them to your html page.

### Extra: Function exercises (19 to 28)

##### Exercise 19

Write a JavaScript function that returns nothing and has no parameters. This function should print the result of the multiplication of two numbers (the numbers that you want).

##### Exercise 20

Write a JavaScript function with no parameters. This function should return the result of the multiplication of two numbers (the numbers that you want), and in your main program, you should print the result.

**Tip**: if a function returns something, you can assign the function call to a variable. In this way, the value of the return will be held by this variable.

##### Exercise 21

Write a JavaScript function with two parameters. These parameters are the numbers that have to be multiplied. The function should return the result of the multiplication of both numbers (the numbers that you want), and in your main program, you should print the result. Test the function with 3 examples.

##### Exercise 22

Write a function that determines the type of a triangle given the length of its three sides.

##### Exercise 23

Write a function that receives as a parameter an array of characters and replaces all "a" by "1". e.g.: JavaScript will become J1v1Script.

##### Exercise 24

Write two functions. The first one should return the sum of all the elements of an array and the second one should return the smallest number in the array. Print the result in the main program.

##### Exercise 25

Write a function that adds the even numbers of an array. For example, the array: 1 2 8 3 2 would result in the sum of 2 + 8 + 2, since they are even numbers. Return the result and print it in the main program.

##### Exercise 26

Write a function that adds the even positions of an array. For example, the array: 1 2 8 3 2 3 4 would result in the sum of 8 + 2 + 4 since they are in even positions in the array (position 2,4,6). Return the result and print it in the main program.

##### Exercise 27

Write a function that by sending a number as parameter, tells you all the even numbers before it. For example, if you send to the function the number 9, it should print 2,4,6,8.

##### Exercise 28

Write a function that by sending two numbers as parameters, it tells you the odd numbers between these. For instance, if you send the numbers 1 and 13 as parameters, it should print 1,3,5,7,9,11,13.
