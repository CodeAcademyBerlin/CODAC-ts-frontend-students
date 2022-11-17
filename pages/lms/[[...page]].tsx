// ** React Imports
import Head from 'next/head';

// ** MUI Components
import Box from '@mui/material/Box'

import { getPage, getPaths } from '../../lib/content'
import LmsContentContainer from '../../components/LmsContentContainer';
import { useEffect } from 'react';
import { LMSPage, LMSPages, PageData } from './lms';

interface LMSProps {
  pageData: PageData,
  links: LMSPages
}

const lms = ({ pageData, links }: LMSProps) => {

  console.log("links: ", links);

  const findByPath = (page: LMSPage) => {
    return links.find(link => {
      return link.path === page.page.slice(0, -1).join("/");
    })
  }

  const buildNestedPages = () => {
    const result: LMSPages = [];
    let i = links.length;

    while (i--) {
      if (links[i].page.length > 1) {
        const parent = findByPath(links[i]);
        // parent && parent.children.unshift(links[i]);
        parent && [links[i], ...parent.children];
      } else {
        result.unshift(links[i])
      }
    }
    return result
  }

  useEffect(() => {
    const nestedPages = buildNestedPages();
    console.log("nestedPages: ", nestedPages)
  }), [];


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
  console.log('pagePaths', getPaths)
  const pageData = await getPage(params.page.join("/"));
  const result = await getPaths();
  const links = result.links
  return { props: { pageData, links } };
}

export async function getStaticPaths() {
  //maps 'content' folder and creates a route for every .md file
  const result = await getPaths();
  const paths = result.paths;
  return {
    paths,
    fallback: false,
  };
}

export default lms