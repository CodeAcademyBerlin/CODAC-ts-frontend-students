// ** MUI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useCreateNewsPostMutation } from 'cabServer/mutations/__generated__/newspost';
import { useRouter } from 'next/router';
import React, { ChangeEvent, ElementType, MouseEvent, useState } from 'react';
import UploadFile from 'src/components/common/UploadFile';

import { Enum_Newspost_Tags } from '../../cabServer/global/__generated__/types';
import { useAuth } from '../hooks/useAuth';

type Props = {};

const AddNewsPost = (props: Props) => {
  //States
  const [post, setPost] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<Enum_Newspost_Tags>(Enum_Newspost_Tags.Cab);
  const [fileId, setFileId] = useState<string>('');

  //imports
  const router = useRouter();
  const { user } = useAuth();

  //editting the publishedAt date
  const currentDate = new Date();
  let year = currentDate.getFullYear();
  let month =
    currentDate.getMonth() + 1 < 10
      ? '0' + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1;
  let day =
    currentDate.getDate() < 10
      ? '0' + currentDate.getDate()
      : currentDate.getDate();

  const [newsPostMutuation, { data, loading, error }] =
    useCreateNewsPostMutation({
      variables: {
        title: title,
        post: post,
        author: user?.id || '',
        tags: tags!,
        image: fileId,
        publishedAt: currentDate.toISOString(),
      },
    });

  const handlePostChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => setPost(event.target.value);

  const handleTagsChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setTags(event.target.value as Enum_Newspost_Tags);
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      console.log('fileid', fileId);
      const { data } = await newsPostMutuation();
      if (data) {
        router.push('/news');
      }
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
          <Stack
            style={{
              margin: '10px 0px 10px 0px',
              marginLeft: '10%',
            }}
          >
            <h3 color="primary">Add News Post</h3>
          </Stack>
          <Box
            component="span"
            sx={{
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              width: '100%',
            }}
          ></Box>

          <Paper
            elevation={0}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <div
              style={{
                margin: '10px 0px 10px 0px',
                marginLeft: '10%',
                width: '80%',
              }}
            >
              <FormControl fullWidth variant="filled">
                <InputLabel id="demo-simple-select-label" required>
                  Tag
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tags}
                  label="Tag"
                  onChange={handleTagsChange}
                >
                  <MenuItem value={'CAB'}>CAB</MenuItem>
                  <MenuItem value={'data'}>Data</MenuItem>
                  <MenuItem value={'leisure'}>Leisure</MenuItem>
                  <MenuItem value={'web'}>Web</MenuItem>
                </Select>
              </FormControl>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { width: '100%', marginTop: '8px' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="Title"
                  variant="filled"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
              <TextField
                autoFocus
                multiline
                required
                rows={6}
                margin="dense"
                id="open_feedback"
                label="News post description"
                type="text"
                fullWidth
                variant="filled"
                value={post}
                onChange={handlePostChange}
              />
              <UploadFile setFileId={setFileId} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  onClick={handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Post
                </Button>
              </Box>
            </div>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default AddNewsPost;
