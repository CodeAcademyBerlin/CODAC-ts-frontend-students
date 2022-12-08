import fs from 'fs'
import matter from 'gray-matter'
import Box from '@mui/material/Box'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import LmsContentContainer from '../../components/lms-page/LmsContentContainer'
import mdxComponents from '../../components/mdx'
import CustomLink from '../../components/mdx/CustomLink'
import Layout from '../../components/mdx/Layout'
import { projectsFilePaths, PROJECTS_PATH } from '../../lib/contentFilePaths'
import { getPageMdx } from '../../lib/markdown'
import { PageData } from '../lms/lms'

const Projects = ({ pageData }: { pageData: PageData }) => {

  return (
    <Box sx={{ mt: 0, p: 5, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
      <LmsContentContainer content={pageData.contentHtml} />
    </Box>
  )
}
export default Projects
export const getStaticProps = async ({ params }: { params: { project: string } }) => {
  console.log('project', params.project)
  const pageData = await getPageMdx(params.project, PROJECTS_PATH);

  return { props: { pageData } };
}

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
  const paths = projectsFilePaths
    .map((path) => path.replace(/\.md?$/, ''))
    .map((project) => ({ params: { project } }))

  return {
    paths,
    fallback: false,
  }
}
