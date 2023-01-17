// ** MUI Imports
import Grid from '@mui/material/Grid';
import { NewsPostEntity } from 'cabServer/global/__generated__/types';
import { GetNewsDocument } from 'cabServer/queries/__generated__/newspost';
import { GetServerSideProps } from 'next/types';
import React, { ChangeEvent, useState } from 'react';

import NewsCard from '../components/news-page/NewsCard';
import SearchBar from '../components/news-page/SearchBar';
import { initializeApollo } from '../lib/apolloClient';

const News = ({ newsPosts }: { newsPosts: NewsPostEntity[] }) => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  let searchedResult = newsPosts?.filter((newsPost) => {
    return (
      newsPost?.attributes
        ?.title!.toLowerCase()
        .includes(inputValue.toLowerCase()) ||
      newsPost?.attributes
        ?.post!.toLowerCase()
        .includes(inputValue.toLowerCase()) ||
      newsPost?.attributes
        ?.tags!.toLowerCase()
        .includes(inputValue.toLowerCase())
    );
  });

  console.log('newsPosts', newsPosts);
  return (
    <div>
      <SearchBar handleChange={handleChange} />
      <Grid container spacing={6}>
        {searchedResult &&
          searchedResult.map((newsPost, index: number) => (
            <Grid item xs={12} sm={14} md={12} key={index}>
              <NewsCard newsPost={newsPost} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default News;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: GetNewsDocument,
    });
    console.log('newsPostsServer', data);
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
