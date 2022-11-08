import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getPage(page) {
  console.log(page);
  
  //need to replace commas with slash for params
  for (let i = 0; i < page.length; i++) {
    if (page[i] === ',') {
      page[i] = '/'
    }
    return page
  }
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