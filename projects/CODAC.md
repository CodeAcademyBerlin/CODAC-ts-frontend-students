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

### Neon Narwhals (December 22):

<BrandText variant="h4">Philipp</BrandText>
VS Battle page [vsbattle](/battles)

<!-- ![CODAC architechture diagrams](/projects/CODAC/CODAC_CSR.png) -->

<img src="/projects/CODAC/CODAC_CSR.png" width="80%" height="auto" />

#### Client-Side Rendering (CSR)

Rendering of elements in the browser, from Javascript. The browser pulls the Javascript from tne Next.js server and compile on the client into html .

<BrandText variant="h4">Alberto</BrandText>
Job page [jobs](/jobs)
<img src="/projects/CODAC/CODAC_SSR.png" width="80%" height="auto" />

#### SSR (Server-Side Rendering)

-     The HTML is generated in advance, on a server, instead of having it all done by JavaScript on the user's device.
-     This means that the HTML of the page is generated on a server for each request. The generated HTML, JSON data, and JavaScript instructions to make the page interactive are then sent to the client.
-     On the client, the HTML is used to show a fast non-interactive page, while React uses the JSON data and JavaScript instructions to make components interactive (for example, attaching event handlers to a button). This process is called hydration.
-     In Next.js, you can opt to server-side render pages by using getServerSideProps.

<BrandText variant="h4">Jan</BrandText>

- Progress bar component [dashboard](/dashboard) - My Cohort component [dashboard](/dashboard)
  <img src="/projects/CODAC/CODAC_graphql.png" width="80%" height="auto" />

#### GraphQL

GraphQL is a query language developed by facebook in 2012 and made open source in 2015
GraphQL allows you to make API requests that gets you exactly the data you need
Unlike REST APIs, there is only one endpoint in a GraphQL backend → /graphql
Every request is made as a POST
In GraphQL all the data is connected through Schemas
That means: With only one API call you can get data from multiple sources/collections

<BrandText variant="h4">Emily</BrandText>

- Lms page [lms](/lms) - Community page [community](/community) - themes design
  <img src="/projects/CODAC/CODAC_SSG.png" width="80%" height="auto" />

#### SSG (Static-Site Generation)

Static site generation describes the process of compiling and rendering a website at build time. This is how websites outside of javascript frameworks like React are traditionally built.
Next.js has the option to statically generate pages on build, if the page props are fetched using getStaticProps. This means all the HTML, CSS and Javascript are already compiled at build time, leaving only small hydration tasks for the browser when a user loads the page. It makes for a lightning fast user experience!

<!-- <Link href="/congrats">
  <p>?</p>
</Link> -->
