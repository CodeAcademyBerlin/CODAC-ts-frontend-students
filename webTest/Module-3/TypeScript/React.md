---
navTitle: "TypeScript React"
title: "TypeScript with React"
metaTitle: "TypeScript with React"
metaDescription: "TypeScript with React"
access: web
order: 30
prev: "web/Module-3/TypeScript/Basics"
---

## create TS React app

We can use the same boilerplate starter command previously used and add the template option `--template typescript` to generate a project with the tsconfig.json already configured.

```cmd
npx create-react-app my-app --template typescript
```

## Functionnal components

Let's create a new functional component. For instance, one called "Profile.tsx". It will render information about a user. We will name the file extension '.tsx" to specify that it's a react typescript file.

```ts
import React from "react";

const Profile: React.FC = () => {
  return <div></div>;
};
export default Profile;
```

We here assign our component to FC for functional component. The type is imported from the React type definition library,we don't need to define anything ourselves.

## Passing props

The typed component will throw an error for anything that's not a valid prop and autocomplete everything else by default the only known react prop is `children` but we can define the shape of our own props using a typescript interface.
Let's now improve our components to receive props about a user. In order to make sure that our components receive the correct props. We will explicitly type in an interface the different properties of the user.

```ts
import React from "react";

interface Props {
  firstName: string;
  lastName: string;
}

const Profile: React.FC<Props> = ({ firstName, lastName, isAdult }) => {
  return (
    <div>
      <h6>{firstName}</h6>
    </div>
  );
};

export default Profile;
```

We here have made sure that our Profile component needs to receive two string and when called.
Let's test this behaviour by importing and calling the components in the App component.
We can use here TypeScript auto import capabilities and add `<Profile/>` in the JSX of App.tsx. It should then suggest automatically import the component.

Before we even try to run the web server. We are now able the get errors specifyings that the profile component is missing props: "Type '{}' is missing the following properties from type 'Props': firstName, lastName, isAdultts"

TypeScript helps us make sure that the correct props are being passed between components.
If we want to specify that a prop is optional we can declara it using the optional property "?".
To make the lastName property:

```ts
interface Props {
  firstName: string;
  lastName?: string;
}
```

## automatic type infering & any

It is possible to bypass type checkin by simply using the `any` type. That allows you to opt out of typescript but also negates all of its benefits. It's also worth noting that typescript can provide automatic documentation for your code because the editor will automatically pick up the type definitions.
Anybody using your code will get intellisense on the shape and purpose of it and making it way more efficient to work collaboratively without having to write or read documentation.
In many cases typescript can automatically infer the type from usage. For this simply hover on the suggested code and generate the types. Make sure to check the types generated as TS might have used a wrong shape of type or the type `any`.

## implicicit and explicit typing

In some case TS can automatically infer the type from usage. This can sometimes be really helpfull.
Let's create a state for a username variable with useState in the App component. We can ensure that only a string will be used for the username as follows:

```ts
const [username, setUserName] = useState("coolguy420");
```

Now if we try to set username to something that is not a string `setUserName(23)` TS will show an error as username was implicitely type as string
We can however use angle brackets `< >` to explicitly type the state.
If our state needs to have more than one type, we can use the "|" operator to describe all the types. For example, if the value can be "null":

```ts
const [username, setUserName] = useState<string | null>();
```

Note that the type null and undefined are two different types.

## definition files

We can create definition files to store all the custom definitions using '.d' in the filename. In React we can add a folder named "@types" in the src folder of our app and a file named index.d.ts.  
This file will centralize all the types and interface that we created and can be accessed by all components.
To group types in categories in the index.d.ts, we can create namespaces:

```ts
namespace PersonsN {
  interface Person {
    firstName: string;
    lastName?: string;
    age: number;
  }
  type Persons = Person[];
}
```

Our Profile component would then be declared as follow:

```ts
const Profile: React.FC<PersonsN.Person> = ({ firstName, lastName, age }) => {
```

## Understanding the types definitions

TypeScript provides us a lot of information on type errors to help us undestand what it is expecting.
These errors might seem very hard to undertand at first but if you try to analyse them you will see that the provide you with a lot of information.

Let's install a third party library e.g react-bootstrap. In order to access the types definitions for this library, we also nee to install the associated type deninition package:

```cmd
npm i react-bootstrap @types/react-bootstrap
```

Note that if try to import from a library that has not been installed, TS will throw an error.
Now we create a card component that we import from react-bootstrap:

```ts
<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
```

If your click on "Card" in the imports while holding the control key. You will be redirected to the type definition for the bootstap card located in the file `Card.d.ts` in the node modules.

````ts
declare type Card = BsPrefixRefForwardingComponent<'div', CardProps> & {
    Img: typeof CardImg;
    Title: typeof CardTitle;
    Subtitle: typeof CardSubtitle;
    Body: typeof CardBody;
    Link: typeof CardLink;
    Text: typeof CardText;
    Header: typeof CardHeader;
    Footer: typeof CardFooter;
    ImgOverlay: typeof CardImgOverlay;
};
```
````
