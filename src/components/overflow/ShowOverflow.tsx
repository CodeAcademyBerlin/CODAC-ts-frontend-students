// ** MUI Imports
import { useTheme } from '@mui/material';
import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
//import from next
import Link from 'next/link';
import React, { useState } from 'react';

import { useFilterCodacOverflowsQuery } from '../../../cabServer/queries/__generated__/overflowsFilter';
//import for the Styled Link, which not refreshes
import StyledLink from '../../components/common/StyledLink';

type Props = {};

//Paper Styling from MUI
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ShowOverflow = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchedTopic, setSearchedTopic] = useState('');
  const theme = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('searchedTopic via handleSearch', searchedTopic);
  };

  const { data, loading, error, refetch } = useFilterCodacOverflowsQuery({
    variables: {
      title: searchedTopic,
    },
  });

  const searchedResults = data?.codacOverflows?.data || [];

  console.log('searchedResults', searchedResults);

  return (
    <>
      <form onSubmit={handleSearch}>
        <TextField
          id="outlined-search"
          value={searchedTopic}
          label="Search for topics..."
          name="search"
          type="search"
          onChange={(e) => {
            setSearchedTopic(e.target.value);
          }}
        />
      </form>
      <Divider style={{ width: '100%' }} />
      <Stack
        spacing={2}
        style={{
          margin: '10px 0px 10px 0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {searchedResults &&
          searchedResults.map((oneOverflowTopic) => (
            <Item
              key={oneOverflowTopic.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '90%',
                maxWidth: '90%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '3px',
                  right: '3px',
                  padding: '3px 2px 3px 2px',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#312D4B' : '',
                  borderRadius: '5px',
                }}
              >
                {oneOverflowTopic.attributes?.course}
              </div>
              <StyledLink href={`overflow/${oneOverflowTopic.id}`}>
                <h3 id="dynamic-overflow-link">
                  {oneOverflowTopic.attributes?.title}
                </h3>
              </StyledLink>
              <Divider style={{ width: '75%' }} />
              <p
                style={{
                  display: '-webkit-box',
                  textAlign: 'left',
                  padding: '0',
                  margin: '0px 0px 0px 5px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  WebkitLineClamp: '2',
                  lineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  width: '95%',
                }}
              >
                {oneOverflowTopic.attributes?.description}
              </p>
            </Item>
          ))}
      </Stack>
    </>
  );
};

export default ShowOverflow;
