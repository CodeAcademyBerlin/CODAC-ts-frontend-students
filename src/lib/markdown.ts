import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import imageSize from 'rehype-img-size';
import { remark } from 'remark';
import html from 'remark-html';
import { Links, LinkSingle } from 'src/pages/lms/lms';

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
  contentHtml = buildImgUrl(contentHtml, '/lms');
  // contentHtml = buildImgUrl(contentHtml, "https://caberlin-lms-v3.herokuapp.com");
  return {
    pagePath,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getPageMdx(
  pagePath: string,
  directory: string,
  assetsDir: string,
) {
  const fullPath = path.join(directory, `${pagePath}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const escapeComments = removeComments(fileContents);
  const { content, data } = matter(escapeComments);
  const contentHtml = buildImgUrl(content, assetsDir);
  const mdxSource = await serialize(contentHtml, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      // development: false,
      //   remarkPlugins: [],
      // rehypePlugins: [[imageSize, { dir: "public" }]],
      // },
    },
    scope: data,
  });

  return {
    pagePath,
    contentHtml: mdxSource,
    ...data,
  };
}
export async function getFrontmatters(dir: string) {
  const filePaths = mdxFilesPaths(dir);
  const frontmatters = filePaths.map((filePath) => {
    const fullPath = path.join(dir, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(content);
    return data;
  });
  return frontmatters;
}

// Include server in img url
const buildImgUrl = (markdownBody: string, assetsDir: string) => {
  return markdownBody.replace(/staticAsset\//gi, assetsDir);
};
const removeComments = (markdownBody: string) => {
  return markdownBody.replace(/(?=<!--)([\s\S]*?)-->/gm, '');
};

// list of all mdx files inside path directory
export const mdxFilesPaths = (dir: string): string[] => {
  return (
    fs
      .readdirSync(dir)
      // Only include md(x) files
      .filter((path) => /\.md?$/.test(path))
  );
};
