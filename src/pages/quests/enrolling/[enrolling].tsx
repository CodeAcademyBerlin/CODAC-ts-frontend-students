import Box from '@mui/material/Box';
import fs from 'fs';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import NextBreadcrumbs from 'src/components/breadcrumb/NextBreadcrumbs';
import LmsContentContainer from 'src/components/lms-page/LmsContentContainer';
import { ENROLLING_PATH } from 'src/definitions/contentFilePaths';
import { getPageMdx, mdxFilesPaths } from 'src/lib/markdown';
import { PageData } from 'src/pages/lms/lms';

const Enrollings = ({ pageData }: { pageData: PageData }) => {
  console.log('pageData', pageData);

  return (
    <>
      <NextBreadcrumbs />
      <Box
        sx={{
          mt: 0,
          p: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LmsContentContainer content={pageData.contentHtml} />
      </Box>
    </>
  );
};
export default Enrollings;
export const getStaticProps = async ({
  params,
}: {
  params: { enrolling: string };
}) => {
  const pageData = await getPageMdx(
    params.enrolling,
    ENROLLING_PATH,
    '/assets/',
  );

  return { props: { pageData } };
};

// const { content, data } = matter(source)
// const mdxSource = await serialize(content, {
//   scope: data,
// })

// return {
//   props: {
//     source: mdxSource,
//     frontMatter: data,
//   },
// }

export const getStaticPaths = async () => {
  const paths = mdxFilesPaths(ENROLLING_PATH)
    .map((path) => path.replace(/\.md?$/, ''))
    .map((enrolling) => ({ params: { enrolling } }));
  console.log('paths', paths);
  return {
    paths,
    fallback: false,
  };
};
