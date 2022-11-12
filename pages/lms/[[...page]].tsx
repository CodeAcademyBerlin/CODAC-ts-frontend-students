// ** React Imports
import { ReactNode } from 'react'
import Head from 'next/head';

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
// import  '../styles/lms-styles.css';
import { getPage, getPaths } from '../../lib/content'


// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

interface PageData {
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
      
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <>
          <h1>{pageData.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />

          <div>
            {pageData.prev && <Link passHref href={pageData.prev}>
              <Button component='a' variant='contained' sx={{ px: 5.5 }}>
                Previous
              </Button>
            </Link>}
            {pageData.next && <Link passHref href={pageData.next}>
              <Button component='a' variant='contained' sx={{ px: 5.5 }}>
                Next
              </Button>
            </Link>}
          </div>
        
        {console.log(pageData)}

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