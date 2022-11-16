// ** React Imports
import Head from 'next/head';

// ** MUI Components
import Box from '@mui/material/Box'

import { getLinks, getPage, getPaths } from '../../lib/content'
import LmsContentContainer from '../../components/LmsContentContainer';
import { useEffect } from 'react';

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

const lms = ({ pageData, links }) => {

  console.log("links: ", links);

  const findByPath = (page) => {
    return links.find(link => {
      return link.path === page.page.slice(0, -1).join("/");
    })
  }

  const buildNestedPages = () => {
    const result = [];
    let i = links.length;

    while (i--) {
      if (links[i].page.length > 1) {
        const parent = findByPath(links[i]);
        parent.children.unshift(links[i]);
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