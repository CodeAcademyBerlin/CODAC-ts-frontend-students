import {useState} from "react"

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NewsPost, NewsPostEntity } from "../cabServer/global/__generated__/types"
import { initializeApollo } from "../lib/apolloClient"
import { GetNewsDocument } from "../cabServer/queries/__generated__/news";


// type newsPosts = NewsPost[]

const News = ({ newsPosts }: { newsPosts: NewsPostEntity[]}) => {

    // const allNewsPosts = newsPosts?.newsPosts?.data || []
    console.log('newsPosts', newsPosts)
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Projets</Typography>
      </Grid>
      {newsposts.map((newspost) => <Grid item xs={12} sm={6} md={4}>
        <ProjectCard newspost={newspost} />
      </Grid>)} */}

    </Grid>
  )
}

export default News

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: GetNewsDocument
    });
      console.log('newsPostsServer', data)
    return {
      //for cleaner client side  
      props: { newsPosts: data.newsPosts.data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
};

