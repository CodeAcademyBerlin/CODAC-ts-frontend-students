import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { LMSPage, LMSPages } from '../pages/lms/lms';



const contentDirectory = path.join(process.cwd(), 'content/web');


export async function getPage(pagePath: string) {
  const fullPath = path.join(contentDirectory, `${pagePath}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  let contentHtml = processedContent.toString();
  contentHtml = buildImgUrl(contentHtml, "https://caberlin-lms-v3.herokuapp.com");
  return {
    pagePath,
    contentHtml,
    ...matterResult.data,
  };
}

// Include server in img url
const buildImgUrl = (markdownBody: string, serverUrl: string) => {
  return markdownBody.replace(/staticAsset\//ig, serverUrl + "/assets/")
};

export async function getPaths() {
  interface Paths { params: { page: string[] } };
  interface Links { path: string, title: string, page: string[], children: Array<Links> };
  const paths: Array<Paths> = [];
  const links: Array<Links> = [];

  const getPathsList = (dir: string) => {
    const files = fs.readdirSync(dir);
    files.map((file) => {
      const fullDir = path.join(dir, file);
      const dirArray = fullDir.slice(fullDir.indexOf("content") + 8).replace(".md", '').split("\\")
      if ((path.extname(file) === ".md") && (!file.includes("guidelines"))) {
        paths.push({
          params: {
            page: dirArray
          },
        });
        links.push({
          path: dirArray.join("/"),
          page: dirArray,
          title: dirArray[dirArray.length - 1],
          children: []
        })
      } else {
        const isDir = (fs.statSync(fullDir)).isDirectory();
        if (isDir) {
          getPathsList(fullDir);
        }
      }
    }).filter(Boolean);
  }

  getPathsList(contentDirectory);
  return { paths: paths, links: links }
}

const findByPath = (pages: LMSPages, page: LMSPage) => {
  console.log('pages', pages)
  return pages.find(p => {
    return p.path === page.page.slice(0, -1).join("/");
  })
}

export const buildNestedPages = (flatLinks: LMSPages) => {
  const result: LMSPages = [];
  let i = flatLinks.length;

  while (i--) {
    if (flatLinks[i].page.length > 1) {
      const parent = findByPath(flatLinks, flatLinks[i]);
      // parent.children.unshift(flatLinks[i]);
      parent && [flatLinks[i], ...parent.children];
    } else {
      result.unshift(flatLinks[i])
    }
  }
  return result
}
// const buildNestedPages = () => {
//   const result: LMSPages = [];
//   let i = links.length;

//   while (i--) {
//     if (links[i].page.length > 1) {
//       const parent = findByPath(links[i]);
//       // parent && parent.children.unshift(links[i]);
//       parent && [links[i], ...parent.children];
//     } else {
//       result.unshift(links[i])
//     }
//   }
//   return result
// }