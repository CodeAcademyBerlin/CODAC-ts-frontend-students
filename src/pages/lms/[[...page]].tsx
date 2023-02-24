import { Breadcrumbs, Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Head from 'next/head';
import Link from 'next/link';
import CommentsParent from 'src/components/lms-page/comments';
import LmsSearchBar from 'src/components/lms-search/LmsSearchBar';
import { createIndexArray } from 'src/lib/lms-index';
import { getPaths } from 'src/lib/paths';

import lmspages from '../../../public/assets/lmspages.json';
import LmsContentContainer from '../../components/lms-page/LmsContentContainer';
// ** Custom Components
import ContentRating from '../../components/lms-page/ratings/ratingScale';
import {
  LMS_ASSETS_PATH,
  LMS_CONTENT_PATH,
} from '../../definitions/contentFilePaths';
import { getPage, getPageMdx } from '../../lib/markdown';
import { PageData } from './lms';

const lms = ({ pageData, slug }: { pageData: PageData; slug: string }) => {
  return pageData ? (
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
          <Divider style={{ width: '75%' }} />
          <ContentRating slug={slug} message={''} />
          <Divider style={{ width: '75%' }} />
          <CommentsParent slug={slug} />
        </>
      </Box>
    </>
  ) : (
    <Box className="content-center">
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h5" sx={{ mb: 1, fontSize: '1.5rem !important' }}>
          Page Not Found
        </Typography>
        <Typography variant="body2">
          We couldn&prime;t find the page you are looking for.
        </Typography>
      </Box>
    </Box>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { page: string[] };
}) {
  try {
    const slug = params.page.join('/');
    const pageData = await getPageMdx(
      '/' + params.page.join('/'),
      LMS_CONTENT_PATH,
      LMS_ASSETS_PATH,
    );
    return { props: { pageData, slug } };
  } catch (e) {
    return { props: { pageData: null, slug: '' } };
  }
}

export async function getStaticPaths() {
  //maps 'content' folder and creates a route for every .md file
  // const { paths } = lmspages;
  // const filter = paths.filter(path => ["welcome", "web"].includes(path.params.page[0]))
  const { paths } = getPaths(LMS_CONTENT_PATH);
  createIndexArray(LMS_CONTENT_PATH);

  return {
    paths,
    fallback: false,
  };
}

export default lms;
