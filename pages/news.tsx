// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import NewsCard from "../components/news-page/NewsCard"
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NewsPost, NewsPostEntity } from "../cabServer/global/__generated__/types"
import { initializeApollo } from "../lib/apolloClient"
import { GetNewsDocument } from "../cabServer/queries/__generated__/news";


const News = ({ newsPosts}: { newsPosts: NewsPostEntity[]}) => {

console.log('newsPosts', newsPosts)
  return (
    <Grid container spacing={6} >

      {newsPosts && newsPosts.map((newsPost, index: number) =>
        <Grid item xs={12} sm={14} md={12} key={index}>
          <NewsCard newsPost={newsPost} />
        </Grid>)}
      
    </Grid>)}

      

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

