// ** MUI Imports
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { IncomingMessage } from 'http';
//import serverSideProps
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextApiRequest,
} from 'next/types';
import React, { ChangeEvent, MouseEvent, useState } from 'react';

//import types
import { CodacOverflowEntity } from '../../../cabServer/global/__generated__/types';
//import types
import { CodacOverflow } from '../../../cabServer/global/__generated__/types';
//import types
import { ComponentCommentsComments } from '../../../cabServer/global/__generated__/types';
//import generated query
import { CodacOverflowByIdDocument } from '../../../cabServer/queries/__generated__/overflowOne';
//import Apollo für ServerSideProps
import { initializeApollo } from '../../lib/apolloClient';

//Paper Styling from MUI
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const OverflowTopic = ({
  codacOverflow,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [result, setResult] = useState(codacOverflow);
  const [message, setMessage] = useState<string>('');
  console.log('result data', result);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setMessage(event.target.value);
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      console.log('It works to send a message');
      console.log('message:', message);
      setMessage('');
    } catch (e) {
      ({ error: 'e.message' });
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Paper
          elevation={0}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {result && (
            <>
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
                  }}
                >
                  <Item>
                    <h3 style={{ color: '#26a69a' }}>
                      {result.attributes?.title}
                    </h3>
                  </Item>
                </Stack>
              </Box>
              <Box
                component="span"
                sx={{
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
                    width: '70%',
                  }}
                >
                  <Item>
                    <p id="overflow-text-style">
                      {result.attributes?.description}
                    </p>
                  </Item>
                </Stack>
              </Box>
            </>
          )}
        </Paper>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Paper
          elevation={0}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
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
            <h3
              style={{
                color: '#26a69a',
                margin: '10px 0px 10px 0px',
                marginLeft: '20%',
              }}
            >
              Answers
            </h3>
          </Box>

          {result.attributes?.comments?.length &&
            result.attributes?.comments?.map((eachComment) => (
              <>
                <Box
                  component="span"
                  sx={{
                    borderBottom: (theme) =>
                      `1px solid ${theme.palette.divider}`,
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
                            eachComment?.author?.data?.attributes?.student?.data
                              ?.attributes?.firstname || ''
                          }
                          sx={{ width: 40, height: 40 }}
                          src={/* user.userData?.avatar ||  */ ''}
                        />
                      </Badge>
                      <h3 style={{ color: '#26a69a' }}>
                        {
                          // eslint-disable-next-line prettier/prettier
                          eachComment?.author?.data?.attributes?.student?.data?.attributes?.firstname
                        }{' '}
                        {
                          // eslint-disable-next-line prettier/prettier
                          eachComment?.author?.data?.attributes?.student?.data?.attributes?.lastname
                        }
                      </h3>
                    </Item>
                  </Stack>
                </Box>

                <Box
                  component="span"
                  sx={{
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
                      width: '70%',
                    }}
                  >
                    <Item>
                      <p id="overflow-text-style">{eachComment?.message!}</p>
                    </Item>
                  </Stack>
                </Box>
              </>
            ))}
        </Paper>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Paper
          elevation={0}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Box
            component="form"
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <div
              style={{
                margin: '10px 0px 10px 0px',
                marginLeft: '20%',
                width: '70%',
              }}
            >
              <TextField
                autoFocus
                multiline
                rows={6}
                margin="dense"
                id="open_feedback"
                label="Your answer / comment"
                type="text"
                fullWidth
                variant="filled"
                value={message}
                onChange={handleChange}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  onClick={handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Send
                </Button>
              </Box>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default OverflowTopic;

export const getServerSideProps: GetServerSideProps<{
  codacOverflow: CodacOverflowEntity;
}> = async (ctx) => {
  try {
    const overflowId: string | string[] = ctx?.params?.overflowId || '';
    console.log('overflowId', overflowId);
    const idNumber = 1;
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({
      query: CodacOverflowByIdDocument,
      variables: { id: idNumber },
    });
    const codacOverflow = data.codacOverflow.data;
    console.log('Fetch was successful, see success:', data);
    return {
      props: { codacOverflow },
    };
  } catch (error) {
    console.log('Fetch was not successful, see error:', error);
    return {
      props: { codacOverflow: null },
    };
  }
};
