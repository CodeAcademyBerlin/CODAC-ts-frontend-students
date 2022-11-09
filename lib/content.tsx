import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

//trying to automate the paths.... it doesn't work yet.
export function getPaths() {
  const fileNames = fs.readdirSync(contentDirectory);

  return fileNames.map((fileName) => {
    if (fileName.includes('.md')) {
      return {
        params: {
          path: fileName.split("/")
        },
      };
    }
  });
}

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