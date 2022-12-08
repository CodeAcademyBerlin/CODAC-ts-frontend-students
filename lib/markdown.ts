import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { LinkSingle, Links } from '../pages/lms/lms';
import { serialize } from 'next-mdx-remote/serialize'
import imageSize from "rehype-img-size";
import { projectsFilePaths } from './contentFilePaths';

interface Paths { params: { page: string[] } };


export async function getPage(pagePath: string, directory: string) {
  const fullPath = path.join(directory, `${pagePath}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  let contentHtml = processedContent.toString();
  contentHtml = buildImgUrl(contentHtml, "/lms");
  // contentHtml = buildImgUrl(contentHtml, "https://caberlin-lms-v3.herokuapp.com");
  return {
    pagePath,
    contentHtml,
    ...matterResult.data,
  };
}
export async function getPageMdx(pagePath: string, directory: string) {
  const fullPath = path.join(directory, `${pagePath}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // let contentHtml = processedContent.toString();
  // contentHtml = buildImgUrl(contentHtml, "/lms");
  // contentHtml = buildImgUrl(contentHtml, "https://caberlin-lms-v3.herokuapp.com");
  const escapeComments = removeComments(fileContents)

  const { content, data } = matter(escapeComments)
  const contentHtml = buildImgUrl(content, "/lms")

  const mdxSource = await serialize(contentHtml, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      //   remarkPlugins: [],
      // rehypePlugins: [[imageSize, { dir: "public" }]],
      // },

    },
    scope: data
  })

  return {
    pagePath,
    contentHtml: mdxSource,
    ...data,
  };
}
export async function getFrontmatters(filePaths: string[], directory: string) {

  const frontmatters = filePaths
    .map((filePath) => {
      const fullPath = path.join(directory, filePath);
      const content = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(content)
      return data
    })

  return frontmatters
}

// Include server in img url
const buildImgUrl = (markdownBody: string, serverUrl: string) => {
  return markdownBody.replace(/staticAsset\//ig, serverUrl + "/assets/")
};
const removeComments = (markdownBody: string) => {
  return markdownBody.replace(/(?=<!--)([\s\S]*?)-->/gm, "")
};


// export async function getPaths(subDirPath?: string) {
//   const paths: Array<Paths> = [];
//   const links: Links = [];
//   const directory = subDirPath ? path.join(contentDirectory, subDirPath) : contentDirectory;

//   if (subDirPath) {
//     paths.push({
//       params: {
//         page: [subDirPath]
//       },
//     });
//   }
//   const getPathsList = (dir: string) => {
//     const files = fs.readdirSync(dir);
//     files.map((file) => {
//       const fullDir = path.join(dir, file);
//       const dirArray = subDirPath ? fullDir.split(subDirPath)[1].replace(".md", '').split("\\").filter(e => e !== "")
//         : fullDir.slice(fullDir.indexOf("content") + 8).replace(".md", '').split("\\")
//       if ((path.extname(file) === ".md") && (!file.includes("guidelines"))) {
//         paths.push({
//           params: {
//             page: dirArray
//           },
//         });
//         if (!file.includes("welcome")) {
//           links.push({
//             path: dirArray.join("/"),
//             page: dirArray,
//             title: displayNicely(dirArray[dirArray.length - 1]),
//             children: []
//           })
//         }

//       } else {
//         const isDir = (fs.statSync(fullDir)).isDirectory();
//         if (isDir) {
//           getPathsList(fullDir);
//         }
//       }
//     }).filter(Boolean);
//   }

//   getPathsList(directory);
//   return { paths: paths, links: links }
// }

// const displayNicely = (string: string) => {
//   let noHyphens = string.replaceAll("-", " ");
//   let result = "";
//   for (let i = 0; i < noHyphens.length; i++) {
//     if (i === 0 || noHyphens.charAt(i - 1) === " ") {
//       result += noHyphens.charAt(i).toUpperCase();
//     } else {
//       result += noHyphens.charAt(i);
//     }
//   }
//   return result;
// }

// export const buildNestedPages = async () => {
//   const { links } = await getPaths();
//   const result = [];
//   let i = links.length;

//   while (i--) {
//     if (links[i].page.length > 1) {
//       const parent = findByPath(links, links[i]);
//       parent && parent.children.unshift(links[i]);
//       // parent && [links[i], ...parent.children];
//     } else {
//       result.unshift(links[i])
//     }
//   }
//   return result
// }

// const findByPath = (pages: Links, page: LinkSingle) => {
//   return pages.find(p => {
//     return p.path === page.page.slice(0, -1).join("/");
//   })
// }