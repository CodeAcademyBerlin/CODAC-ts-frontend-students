---
navTitle: 'TypeScript'
title: 'TypeScript'
metaTitle: 'Web Development'
metaDescription: 'Web Development course'
access: web
order: 10
next: 'web/Module-3/TypeScript/Basics'
---

## What is TypeScript?

TypeScript is a language on top of JavaScript. Everything possible in JavaScript is available in TypeScript – it is a superset of JavaScript. It provides two strong advantages. The first one is that it transpiles TypeScript into JavaScript so the advanced ECMAScript features not available to all web browsers can be used by providing a polyfill.

![TypeScript](staticAsset/web/TypeScript.JPG)

TypeScript was made public on October 1st 2012, but its inception started at Redmond two years prior as an internal product (2010) at Microsoft. The project is open-source, hosted on Github.

TypeScript is far from being used only by its creator, Microsoft. While it’s true that many Microsoft products use TypeScript, such as Microsoft Teams, Visual Studio Team Services (VSTS), the online version of Office, and Visual Studio Code (VSCode), to say the least, other technology giants have been borrowing the advantages of static typing. Google has been using TypeScript since Angular 2, Slack has migrated their JavasScript codebase to TypeScript as well, and other companies like Ubisoft, Asana, Ericsson, Upwork, Bloomberg, and Lyft are following suit. The reason I mention these companies that use TypeScript is to highlight the investment of thousands of developers and the millions of lines in these technologies. Most of them come from different backgrounds. Aside from the tremendous amount of work and knowledge poured across the industry, it illustrates that many people before you had to decide whether to go with TypeScript or not—and chose to do so. While most of the examples provided are big projects, they all have one thing in common, i.e. some people must write and maintain the code. Static typing shines in these areas, from small to big projects.

TypeScript is all about having a strongly-typed language at design time, but the code produced doesn’t contain any type. The type gets erased because Typescript removes types, interfaces, aliases at transpilation, and ends up with a common JavaScript file. The removal may sound logical but the lack of type at runtime results in a design that must not rely on the type dynamically at runtime.

## Why TypeScript?

### TypeScript is fast

Even if it has a compilation phase called “transpile,” it scales well with large codebases. You do not need to transpile every TypeScript file, since you can transpile a subset, like a file that has changed, or a directory. Being fast is crucial to the development flow. JavaScript has the advantage of being a runtime language and having a middle ground which is not a burden; it reduces the friction for people who want fast results in their browser. Similarly, automatic build on files change by a third party is available. The combination of TypeScript and other tools transform the experience into a quasi-seamless flow.

### TypeScript brings static typing

To not be strict remains an available option. It’s a wise choice when a hybrid model may be the only viable option. When starting a new project, it is recommended to enable the strict mode which will enforce type. Nevertheless, having TypeScript letting you progressively add type is a nice touch for people who are just starting, to be able to bring TypeScript into an existing JavaScript project. The hybrid option can introduce static type slowly without having to halt existing development because of a huge migration. You can go at your pace. In fact, TypeScript can run against existing JavaScript code and even provide inference and a minimum set of validation in the boundary of what is realizable.

### TypeScript is easier to maintain

This is because reading the code is easier than JavaScript. For example, an object that initializes with an option would not explicitly define all the potential options in JavaScript. Normally, if you are new to a piece of code that uses a parameter that is an object, you need to look inside the function and follow it as much as you can. . You could also look at the unit tests or the documentation if they are available. In all cases, this is time-consuming. With TypeScript, you can look at the type, click on it, and see the definition. It’s quick, self-documented, and provides insight without digging.s

### TypeScript reduces debugging and testing time

Checking for types (structures) or expected members on the object, or a type that passed by parameter for undefined and null value are all cases that TypeScript checks on the compilation with static types. Less code means less code to maintain. The unit tests only focus on meaningful things like logic or actual algorithms.

### TypeScript is a low risk to take

Finally, TypeScript is a low risk to take since it produces human-readable JavaScript which is like an exit door wide open to start and stop in the future. It’s low risk since it is open-source, which means that in the event that Microsoft stops maintaining the language, anyone can jump on it. That being said, Microsoft, Google, and other big corporations have invested millions in TypeScript, which should also be a good indicator for smaller companies. Finally, the risk is low because the learning curve is gentle for a JavaScript developer.

## TS Bible

Anything you will ever need to now about TypeScript is gathered on website [TypeScriptLand(https://www.typescriptlang.org)]