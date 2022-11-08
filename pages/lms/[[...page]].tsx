// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import { getPage } from '../../lib/content'


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

const lms = ({ pageData, nestedPageCheck }) => {
  return (
    
    <Box>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <>
          {console.log(nestedPageCheck)}
        </>

        <StyledLink href='/dashboard'>
          
            Back to Home
          
        </StyledLink>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </Box>
    </Box>

  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { page: ['welcome'] } },
      { params: { page: ['career'] } },
        { params: { page: ['career', 'Step-1'] } },
          { params: { page: ['career', 'Step-1', 'Chapter-1'] } },
      //     { params: { page: 'career/Step-1/Chapter-2' } },
      //     { params: { page: 'career/Step-1/Chapter-3' } },
      //     { params: { page: 'career/Step-1/Chapter-4' } },
      //   { params: { page: 'career/Step-2' } },
      //     { params: { page: 'career/Step-2/Task-1' } },
      //     { params: { page: 'career/Step-2/Task-2' } },
      //     { params: { page: 'career/Step-2/Task-3' } },
      //   { params: { page: 'career/Step-3' } },
      //     { params: { page: 'career/Step-3/Task-1' } },
      //     { params: { page: 'career/Step-3/Task-2' } },
      // { params: { page: 'data' } },
      // { params: { page: 'web' } },
  ];
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPage(params.page);
  const nestedPageCheck = await getPage('career/Step-1');
  console.log(nestedPageCheck);

  return {
    props: {
      pageData,
      nestedPageCheck
    },
  };
}

export default lms