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
  const contentHtml = processedContent.toString();

  return {
    page,
    contentHtml,
    ...matterResult.data,
  };
}

//trying to automate the paths.... almost there..
const getPathsList = (dir) => {
  const fileNames = fs.readdirSync(dir);

  const test = fileNames.map((fileName) => {

    const filePath = path.join(dir, fileName);
    const isDir = (fs.statSync(filePath)).isDirectory();
    if (isDir) {
      getPathsList(filePath);
    }
    if (!isDir && (path.extname(fileName) == ".md") && (!fileName.includes("guidelines"))) {   //why oh why won't you ignore guidelines
      const rootDirectory = path.dirname(filePath);
      const ci = rootDirectory.indexOf("content") + 8;
      const subDirectory = rootDirectory.slice(ci);
      return {
        params: {
          path: subDirectory.replace(/\.md$/, '').split("\\")
        },
      };
    }
  }).filter(Boolean);

  test.map(e => console.log("map result: ", e.params));
  // return test.reduce((list, flatpaths) => list.concat(flatpaths), []);
}

export async function getPaths () {
  return getPathsList(contentDirectory);
}


//lucas function
export async function listFiles (dir) {
  const entries = await fs.readdir(dir);

  // Build an array of arrays with all sub-files
  const paths = await Promise.all(
    entries.map(async (entry) => {
      const filePath = path.join(dir, entry);
      const isDir = (await fs.stat(filePath)).isDirectory();
      return isDir ? listFiles(filePath) : [filePath];
    })
  );
  // Return the flattened array
  return paths.reduce((list, flatpaths) => list.concat(flatpaths), []);
}

export async function callListFiles () {
  return listFiles(contentDirectory)
}