---
name: CODAC
description: Coda Academy Berlin Community Platform
github_username: CodeAcademyBerlin
github_repo: CODAC-ts-frontend-students
image: /assets/screenshot.png
---

<!-- [CODAC](/projects/CODAC/CODAC3_logo3D.png) -->

<img src="/projects/CODAC/CODAC3_logo3D.png" width="30%" height="auto" />
## By Students of the Academy

[Kanban Board](https://github.com/orgs/CodeAcademyBerlin/projects/4)
[Open Issues](https://github.com/codeacademyberlin/codac-ts-frontend-students/issues)

### Built With

- React.js
  Client side JavaScript Library

- Next.js
  Full-Stack JavaScript Framework implementing rendering methods: - CSR (Client-Side Rendering) - SSR (Server-Side Rendering) - SSG (Static-Site Generation)

- Strapi.js
  Backend JavaScript Framework

- GraphQL
  GraphQL is an open-source data query and manipulation language for APIs

- Typescript
  Syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript

### Architecture

<!-- ![CODAC architechture diagrams](/projects/CODAC/CODAC_architechture_diagrams.png) -->

<img
  src="/projects/CODAC/CODAC_architechture_diagrams.png"
  width="80%"
  height="auto"
/>

## Contributions:

### - Neon Narwhals (December 22):

### - Orange Pumas (January 23):

<BrandText variant="h4">Antje</BrandText>

#### LMS feedbacks

<BrandText variant="h4">Anastasiia</BrandText>

#### Student/Mentors profiles pages [community](/community)

<img src="/projects/CODAC/Anastasiia_CODAC diagrams.png" width="80%" height="auto" />

- The HTML is generated in advance, on a server, instead of having it all done by JavaScript on the user's device.
- This means that the HTML of the page is generated on a server for each request. The generated HTML, JSON data, and JavaScript instructions to make the page interactive are then sent to the client.
- In order to redirect view the page of a specific user, I used dynamic routes which on click will redirect you from a community page to a profile of a student or a mentor. The matched path parameter will be sent as a query parameter to the page, and it will be merged with the other query parameters. In this case it was students or mentors id.

<BrandText variant="h4">Katia</BrandText>

#### News Post (SSR) [News Posts](/news)

<img src="/projects/CODAC/CODAC diagrams Katia.png" width="80%" height="auto" />
The content of the news page is generated on the server, then sent to the browser.

<BrandText variant="h4">Agnita</BrandText>

#### VS Battles (Client Side) [VSBattles](/battles)

 <img src="/projects/CODAC/CODAC diagrams Agnita.png" width="80%" height="auto" />

- Client Side Rendering - The server(NEXT.JS in our case) sends basic skeleton of html file, css properties and JS functions to the client machine and the putting of those together aka rendering happens on the client side/ browser. As opposed to client side receiving already put together HTML file with CSS and JS ( server side rendering). We are making a graphQL query to retrieve data from our strapi database.

- Client side rendering is preferred in Vs Battles feature because it expects high user interactivity and thus needs to refresh data more often. Content is dynamic here, more so than in other parts of the CODAC platform. E.g. when user votes or changes their choice they need to see results of their vote immediately. We also need to display results of other voters in real time.

<BrandText variant="h4">Sarah</BrandText>

#### CODAC Overflow (Client Side & SSR) [Codac Overflow](/overflow)

<img src="/projects/CODAC/CODAC diagrams_Sarah.png" width="80%" height="auto" />
.

<BrandText variant="h4">Joanne</BrandText>

#### Achievements page & dashboard component - SSR

[Achievements](/achievements)

<img src="/projects/CODAC/CODAC diagrams Jo.png" width="80%" height="auto" />

For these I used the next.js method getServersideprops, which only runs on server-side and never runs on the browser, getServersideprops runs at request time, and this page will be pre-rendered with the returned props.

This method is used for any page that needs data before rendering component, which was my case
I had a table and a card which needed the data before rendering
I could use this method on the two collections I had in the Strapi database
Achievements collection, Students collection

The method is quite straightforward, it fetches on every request we make, every page load, every refresh of the page, it makes the graphql call to our database and returns JSON which is used to render the page and so our components. All this work will be handled automatically by Next.js.

<img src="/projects/CODAC/CODAC diagrams Jo2.png" width="80%" height="auto" />

#### API Routes - Unlocking achievements

To unlock the achievements I used Next.js API Routes functionality, which lets you combine backend code along with your frontend code, and access or store data in your database as if you were using a separate backend application.
Any file inside the folder pages/api is mapped to /api/\* and will be treated as an API endpoint instead of a page

On creation of a new student in the database Strapi, the course is selected, Webdev or Data, which triggers the assignment of all achievements for that course to the student. By default the achievements are all locked.

The unlockAchievements route contains the API call to unlock the achievements, and uses the NextApiHandler
Firstly, (request)
To query StudentachievementsDocument with the variable user, to fetch the logged in student data
From there the daysPassed are calculated, from the current date and the students start date
This is then used to filter the achievements to unlock, the achievements that meet the condition are passed as variables to a mutation (response), to modify the server-side data, the unlocking of the achievements in the db.

This route is called on Login, so that when a student logs in their achievements are always up to date.

<!-- <Link href="/congrats">
  <p>?</p>
</Link> -->
