// ** MUI Imports
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';

//import types
import { CodacOverflowEntity } from '../../../cabServer/global/__generated__/types';

type CommentsProps = {
  result?: CodacOverflowEntity;
};

//Paper Styling from MUI
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const OverflowAnswers = ({ result }: CommentsProps) => {
  console.log('result', result);
  return (
    <>
      {result?.attributes?.comments?.length ? (
        result.attributes?.comments?.map((eachComment) => (
          <div
            key={eachComment?.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Box
              component="span"
              sx={{
                width: '60%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Stack
                style={{
                  margin: '10px 0px 10px 0px',
                }}
              >
                <Item
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '5px',
                  }}
                >
                  <Badge
                    overlap="circular"
                    sx={{ ml: 2, cursor: 'pointer' }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                    <Avatar
                      alt={
                        eachComment?.author?.data?.attributes?.firstname || ''
                      }
                      sx={{ width: 40, height: 40 }}
                      src={/* user.userData?.avatar ||  */ ''}
                    />
                  </Badge>
                  <h3 style={{ color: '#26a69a' }}>
                    {
                      // eslint-disable-next-line prettier/prettier
                      eachComment?.author?.data?.attributes?.firstname
                    }{' '}
                    {
                      // eslint-disable-next-line prettier/prettier
                      eachComment?.author?.data?.attributes?.lastname
                    }
                  </h3>
                </Item>
              </Stack>
            </Box>

            <Box
              component="span"
              sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Stack
                style={{
                  margin: '10px 0px 10px 0px',
                  marginLeft: '20%',
                  width: '60%',
                }}
              >
                <Item>
                  <p id="overflow-text-style">{eachComment?.message!}</p>
                </Item>
              </Stack>
            </Box>
          </div>
        ))
      ) : (
        <p style={{ marginLeft: '20%' }}>No Answers have been given so far.</p>
      )}
    </>
  );
};

export default OverflowAnswers;
