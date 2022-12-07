// ** React Imports
import Head from 'next/head';

// ** MUI Components
import Box from '@mui/material/Box'
import LmsContentContainer from '../../components/lms-page/LmsContentContainer';
import { PageData } from './lms';
import lmspages from "../../public/assets/lmspages.json"
import { getPage, getPageMdx } from '../../lib/lmsContent';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { LMS_CONTENT_PATH } from '../../lib/contentFilePaths';


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
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <>
          <h1>{pageData.title}</h1>

          <LmsContentContainer content={pageData.contentHtml} next={pageData.next} prev={pageData.prev} />

        </>
      </Box>
    </>

  )
}

export async function getStaticProps({ params }: { params: { page: string[] } }) {
  const pageData = await getPageMdx("/" + params.page.join("/"), LMS_CONTENT_PATH);
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

export default lms