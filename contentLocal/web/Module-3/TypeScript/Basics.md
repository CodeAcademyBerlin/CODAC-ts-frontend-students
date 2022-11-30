---
navTitle: 'TypeScript Basics'
title: 'TypeScript Basics'
metaTitle: 'TypeScript Basics'
metaDescription: 'TypeScript Basics'
access: web
order: 20
prev: 'web/Module-3/TypeScript'
next: 'web/Module-3/TypeScript/React'
---
## Spike recorded on 16/04/2021 - Yellowpards

<video src="https://storage.googleapis.com/lms-codeacademyberlin/spikes/TypeScript%20Part%201.mp4"/>


## Why TypeScript

- Advanced development features in IDE - **Tooling**
- Catch bugs in advance - **Intellisense**
- No learning curve from JS - **Superset**
- Future ready code - **Transpiling**

## Setting up

## install TS globaly

`npm i -g typescript`

## check version

`tsc --version`

## create index.ts file

Start by writing some plain JS code e.g. `console.log("Hello TypeScript")`

## compile to JS file

Browsers only understand JS so we need to compile our TS file.
Type the command `tsc index.ts` to run the TS compiler.
You should see a index.js file created in your repository that we can now run in our browser.
For now it looks identical as we only wrote plain JS supported for a long time.

## compile modern JS

Let's add some modern JS code to our index.ts file. For ewample a async function (version ES6 of JS).

```js
async function helloWorld() {
    return 'hello'
}
```

Now run the compiler. In the index.js file generated you should the a lot of code generated to interpret the async function.
That is because by default TS is compiling to verison ES3 of JS. 
Indeed the compiler is able the generate code for different verisons of JS in a process called **Transpling**.

## Compiler configuration

In order to generate modern JS code as well as changing various configuration in the conpile we need to created a tsconfig.json file.
This file can seem complicated at first but there is only a few settings that will interest us.
Lets create the following object :

```json
{
    "compilerOptions": {
        "target": "esnext",
        "watch": true,
        "lib": ["dom", "es2020"]
    }
}
```

If we review these settings:

- target specifies the verison of JS to be compiled to. esnext means we are targeting the latest version of js.
- watch set to true will recompile our TS code to JS everytime we save so we don't have to run the tsc command.
- lib lets us include libraries in our editor. Here we include the dom library in order to have support when user ts to build websites.

simply run the command `tsc` to run the compiler with the config.

Plenty of other options are available, for instance choose to include or exclude files or folder into the build or even remove comments in order to have a clean production code.
[TypeScript compiler configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Strong Typing

- implicit: in the index.ts file declare a new variable `let age = 23`. Then try to assign a string to the variable `age = 'young'`.
You should see right away an error promting that "Type 'string' is not assignable to type 'number'." where JS wouldn't have considered any errors here untill we actually ran the code in a browser.

- explicit: If we declare a variable that is not assigned right away but we still want to strong type, we can do so by using a colon followed by the type: `let weekday : string`.
In TS this is called an annotation.
If a variable is implicitely typed there is no need to explicitely type it `let age : number = 23` is redundant.

- any: we can use the type 'any' to skip type checking on specific values. Idealy you would want to avoid skipping type checks but TS provides this flexibility that can sometimes be needed.
A varable that is not explicitely or implicitely typed will have a type 'any'

## Creating our own types

Let's create our own type as follow:

```ts
type Mentor = 'Lucas' | 'Ottavia'
```

We here use a union '|' to declare the type Mentor consists of either one of two strings.

Now  declare a variable of type 'Mentor' and try to give it a different name.

```ts
let bestMentor: Mentor
bestMentor = 'Jost'
```

will trigger the following error: "Type '"Jost"' is not assignable to type 'Mentor'.t"

## interfaces

In web and JS frameworks, we most frequently work with objects rather than signe variables. In order to strong type the shape of objects, we can user interfaces.

```ts
interface Person {
    firtname: string;
    lastname: string;
    [key: string] : any;
}
```

We here declare a Person inteface that is an object consisting at least of two properties 'firstnam' ans 'lastname'. We can add other properties of any type using `[key: string] : any;`
Now we can decares persons variable enforcing the Person interface:

```ts
const personLambda : Person = {
    firstname : 'Marco',
    lastname : 'Polo',
    job: 'explorer',
    alive: false
}
```

## functions

let's start by crating a function without enforcing any type and making a call tat doesn't make sense. Here the function multipies two numbers toguether but we will call it using strings.

```js
function multiply(x, y) {
    return x * y
}
const res = multiply('one', 'two')

console.log(`res`, res)
```

Without explicit typing, we do not get any error until ru the code in the browser when there is a clear problem.
Now if we explicitely declare types:

```ts
function multiply(x: number, y: number) : number {
    return x * y
}
```

This way we make sure that our function will only receive two numbes as parameters and return itself a number.

A function that has no return statement can be type as a `:void`.

## Arrays

We can force arrays to only receive certain types by using explicite types and brackets to signify that it's an array:

```ts
const arr : number[] = []
arr.push(1) //ok
arr.push("1") //error
arr.push(true) //error
```

This will prove very usefull in web develomment working with arrays of objects.
For instance we could make sure an list of persons coming from a databases enforces our definition of the interface Person declared earlier

```ts
const people : Person[]
```

a specific type of typed array called **Tuple** to declare the exact shape of the array

```ts
type MyList = [number, string, boolean]
const list1: MyList = [1, 'hi', true]
```

## Optional

The question mark placed after a type specifies that this type is optional.
In our previous example of list, if we wanted to be able to push one by one the values in an empty array rather than declaring everything up front, we would have to set the variables as optional: 

```ts
type MyList = [number?, string?, boolean?]
const list1: MyList = []
arr.push(1) //ok
arr.push("1") //ok
arr.push(true) //ok
```

Same goes for objects 

```ts
interface: Person {
    firtname: string;
    lastname: string;
    [key: string] : any;
}
```
Means that a person does not specifically require to have a firstname.
