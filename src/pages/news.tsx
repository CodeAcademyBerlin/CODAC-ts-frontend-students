// ** MUI Imports
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { GetServerSideProps } from 'next/types';
import React, { ChangeEvent, useState } from 'react';

import { NewsPostEntity } from '../../cabServer/global/__generated__/types';
import { GetNewsDocument } from '../../cabServer/queries/__generated__/news';
import StyledLink from '../components/common/StyledLink';
import NewsCard from '../components/news-page/NewsCard';
import SearchBar from '../components/news-page/SearchBar';
import { useAuth } from '../hooks/useAuth';
import { initializeApollo } from '../lib/apolloClient';

const News = ({ newsPosts }: { newsPosts: NewsPostEntity[] }) => {
  const [inputValue, setInputValue] = useState('');
  const { user } = useAuth();

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
      {user ? (
        <>
          <Grid item xs={4} maxWidth={300}>
            <StyledLink href={'/addnewspost'}>
              <Button
                sx={{
                  mt: 16,
                  ml: 1,
                  position: 'absolute',
                  top: '0',
                  right: '20px',
                }}
                type="submit"
                variant="contained"
              >
                Add News
              </Button>
            </StyledLink>
          </Grid>
          <br />
          <br />
        </>
      ) : (
        ' '
      )}
      <Grid item xs={12}>
        <SearchBar handleChange={handleChange} />
      </Grid>
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
