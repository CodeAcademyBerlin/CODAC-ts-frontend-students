// ** React Imports
import Head from 'next/head';

// ** MUI Components
import Box from '@mui/material/Box'
import LmsContentContainer from '../../components/LmsContentContainer';
import { getPage, getPaths } from '../../lib/content';
import { PageData } from './lms';
import lmspages from "../../public/assets/lmspages.json"


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

        </>
      </Box>
    </>

  )
}

export async function getStaticProps({ params }: { params: { page: string[] } }) {
  const pageData = await getPage("/" + params.page.join("/"));
  return { props: { pageData } };
}

export async function getStaticPaths() {
  //maps 'content' folder and creates a route for every .md file
  const { paths } = lmspages;
  // const { paths } = await getPaths();

  return {
    paths,
    fallback: false,
  };
}

export default lms