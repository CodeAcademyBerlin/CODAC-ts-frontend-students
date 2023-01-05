// ** React Imports
import { Breadcrumbs } from '@mui/material';
// ** MUI Components
import Box from '@mui/material/Box';
import Head from 'next/head';
import Link from 'next/link';

import lmspages from '../../../public/assets/lmspages.json';
import LmsContentContainer from '../../components/lms-page/LmsContentContainer';
import {
  LMS_ASSETS_PATH,
  LMS_CONTENT_PATH,
} from '../../definitions/contentFilePaths';
import { getPage, getPageMdx } from '../../lib/markdown';
import { PageData } from './lms';

const lms = ({ pageData }: { pageData: PageData }) => {
  // console.log('pageData', pageData)

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      {/* <Breadcrumbs aria-label="breadcrumb">
          {pageData.pagePath.split("/").map((path, i, arr) => (
            <Link
              href={`/lms/${pageData.pagePath.substring(
                0,
                pageData.pagePath.indexOf(path) + path.length
              )}`}
              key={path}
            >
              {path}
            </Link>
          ))}
        </Breadcrumbs> */}
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <>
          <h1>{pageData.title}</h1>

          <LmsContentContainer
            content={pageData.contentHtml}
            next={pageData.next}
            prev={pageData.prev}
          />
        </>
      </Box>
    </>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { page: string[] };
}) {
  const pageData = await getPageMdx(
    '/' + params.page.join('/'),
    LMS_CONTENT_PATH,
    LMS_ASSETS_PATH,
  );
  return { props: { pageData } };
}

export async function getStaticPaths() {
  //maps 'content' folder and creates a route for every .md file
  const { paths } = lmspages;
  // const filter = paths.filter(path => ["welcome", "web"].includes(path.params.page[0]))
  // const { paths } = await getPaths();

  return {
    paths,
    fallback: false,
  };
}

export default lms;
