// ** MUI Imports
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PencilOutline from 'mdi-material-ui/PencilOutline';
//import useRouter
import { useRouter } from 'next/router';
import React, { useState } from 'react';

//import types
import { CodacOverflowEntity } from '../../../cabServer/global/__generated__/types';
//import the mutation update comment
import { useUpdateCodacOverflowCommentMutation } from '../../../cabServer/mutations/__generated__/updateOverflowComment';
//import auth to get the actual user information
import { useAuth } from '../../hooks/useAuth';
import EditOverflow from './EditOverflow';

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
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [commentId, setCommentId] = useState('');
  const [newComment, setNewComment] = useState('');
  /* console.log('result', result); */
  const { user } = useAuth();
  const router = useRouter();

  console.log('newComment is updating >>>>>>', newComment);

  const handleClose = () => {
    setOpen(false);
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [updateOverflowCommentMutation, { data, loading, error }] =
    useUpdateCodacOverflowCommentMutation({
      variables: {
        codacOverflowId: result?.id!,
        commentId: commentId,
        comment: newComment,
      },
    });

  const handleUpdate = async () => {
    try {
      const { data } = await updateOverflowCommentMutation();

      if (data) {
        console.log('data', data);
        refreshData();
      }

      setNewComment('');
    } catch (e) {
      ({ error: 'e.message' });
    }

    setOpen(false);
  };

  const styles = {
    py: 2,
    px: 4,
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary',
    },
  };

  const handleEditComment = () => {
    setOpen(true);
  };

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
                      src={
                        eachComment?.author?.data?.attributes?.avatar?.data
                          ?.attributes?.url || ''
                      }
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
                  <p
                    style={{
                      textAlign: 'left',
                      padding: '0',
                      margin: '0px 0px 0px 5px',
                      width: '95%',
                    }}
                    id="overflow-text-style"
                  >
                    {eachComment?.message!}
                  </p>
                </Item>
              </Stack>
              {eachComment?.author!.data?.id === user?.id ? (
                <MenuItem
                  sx={{ p: 0 }}
                  onClick={() => {
                    setMessage(eachComment?.message!);
                    setCommentId(eachComment?.id!);
                    handleEditComment();
                  }}
                >
                  <Box sx={styles}>
                    <PencilOutline sx={{ marginRight: 2 }} />
                  </Box>
                </MenuItem>
              ) : (
                <></>
              )}
              {open ? (
                <EditOverflow
                  handleClose={handleClose}
                  handleUpdate={handleUpdate}
                  open={open}
                  message={message}
                  setNewComment={setNewComment}
                />
              ) : (
                <></>
              )}
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
