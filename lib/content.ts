import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getPage(page:string) {
  const fullPath = path.join(contentDirectory, `${page}.md`);
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
    page,
    contentHtml,
    ...matterResult.data,
  };
}

// Include server in img url
const buildImgUrl = (markdownBody: string, serverUrl: string) => {
  return markdownBody.replace(/staticAsset\//ig, serverUrl + "/assets/")
};

export async function getPaths () {
  interface Paths { params: { page: string[] } };
  const paths: Array<Paths> = [];

  const getPathsList = (dir: string) => {
    const files = fs.readdirSync(dir);
    files.map((file) => {
      const fullDir = path.join(dir, file);
      if (path.extname(file) === ".md") {
        paths.push({
          params: {
            page: fullDir.slice(fullDir.indexOf("content") + 8).replace(".md", '').split("\\")
          },
        });
      } else {
        const filePath = path.join(dir, file);
        const isDir = (fs.statSync(filePath)).isDirectory();
        if (isDir) {
          getPathsList(fullDir);
        }
      }
    }).filter(Boolean);
  }

  getPathsList(contentDirectory);
  return paths
}