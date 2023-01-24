import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
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

interface Data {
  map(arg0: (newsPostTag: any, i: number) => JSX.Element): any;
  data?: Object;
  push: any;
  includes: any;
}
//helper functions
//radio button filter
const isInRadioFilter = (newsPost: NewsPostEntity, tagValue: string) => {
  // console.log('tagvalue', tagValue);
  if (tagValue === 'All') return newsPost;
  else return newsPost.attributes?.tags === tagValue;
};
//search filter
const isInSearch = (newsPost: NewsPostEntity, inputValue: string) => {
  return (
    newsPost?.attributes
      ?.title!.toLowerCase()
      .includes(inputValue.toLowerCase()) ||
    newsPost?.attributes
      ?.post!.toLowerCase()
      .includes(inputValue.toLowerCase()) ||
    newsPost?.attributes?.tags!.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const News = ({ newsPosts }: { newsPosts: NewsPostEntity[] }) => {
  const [inputValue, setInputValue] = useState('');
  const [tagValue, setTagValue] = useState('All');
  const { user } = useAuth();
  const uniqueFields: Data = [];

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  //combining filters
  let searchedResult = newsPosts?.filter((newsPost) => {
    // console.log('tagvalue', tagValue);
    return (
      isInSearch(newsPost, inputValue) && isInRadioFilter(newsPost, tagValue)
    );
  });

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
      <Grid>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={tagValue}
            onChange={(e) => {
              setTagValue(e.target.value);
            }}
          >
            <FormControlLabel
              control={<Radio id="All" />}
              label="All"
              value="All"
              id="AllForm"
            />

            {newsPosts &&
              newsPosts.map((newsPost) => {
                if (!uniqueFields?.includes(newsPost.attributes?.tags)) {
                  uniqueFields.push(newsPost.attributes?.tags);
                }
              })}

            {uniqueFields &&
              uniqueFields.map((tags, i) => {
                return (
                  <FormControlLabel
                    key={i}
                    value={tags}
                    control={<Radio />}
                    label={tags}
                  />
                );
              })}
          </RadioGroup>
        </FormControl>
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
