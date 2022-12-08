import fs from 'fs'
import matter from 'gray-matter'
import { Box } from 'mdi-material-ui'
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
import { contributorsFilePaths, CONTRIBUTORS_PATH } from '../../lib/contentFilePaths'
import { getPageMdx } from '../../lib/lmsContent'
import { PageData } from '../lms/lms'

const Contributors = ({ pageData }: { pageData: PageData }) => {

  // const Contributors = ({ source, frontMatter }: any) => {
  return (
    <>

      <LmsContentContainer content={pageData.contentHtml} />


      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <MDXRemote {...contentHtml} components={mdxComponents} /> */}

      </Box>
    </>

  )
}
export default Contributors
export const getStaticProps = async ({ params }: { params: { contributor: string } }) => {
  // const source = path.join(CONTRIBUTORS_PATH, `${params.contributor}`)
  const pageData = await getPageMdx(params.contributor, CONTRIBUTORS_PATH);
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
  const paths = contributorsFilePaths
    .map((path) => path.replace(/\.md?$/, ''))
    .map((contributor) => ({ params: { contributor } }))

  return {
    paths,
    fallback: false,
  }
}
