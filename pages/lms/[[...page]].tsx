// ** React Imports
import Head from 'next/head';

// ** MUI Components
import Box from '@mui/material/Box'

import { getPage, getPaths } from '../../lib/content'
import LmsContentContainer from '../../components/LmsContentContainer';
import { redirect } from 'next/dist/server/api-utils';

export interface PageData {
  access: string,
  contentHtml: string,
  navTitle: string,
  order: number,
  page: string,
  title: string,
  metaTitle?: string,
  next?: string,
  prev?: string
}

const lms = ({ pageData }: { pageData: PageData }) => {

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <>
          <h1>{pageData.title}</h1>

          <LmsContentContainer content={pageData.contentHtml} next={pageData.next} prev={pageData.prev} />
        
          {/* {console.log(pageData)} */}

        </>
      </Box>
    </>

  )
}

export async function getStaticProps({ params }: { params: { page: string[] } }) {
  const pageData = await getPage(params.page.join("/"));
  return { props: { pageData } };
}

export async function getStaticPaths() {
  //maps 'content' folder and creates a route for every .md file
  const paths = await getPaths();
  return {
    paths,
    fallback: false,
  };
}

export default lms