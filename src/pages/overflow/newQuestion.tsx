// ** MUI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import React, { MouseEvent, useState } from 'react';

//import Mutation
import { useCreateCodacOverflowMutation } from '../../../cabServer/mutations/__generated__/createoverflow';
//import auth to get the actual user information
import { useAuth } from '../../hooks/useAuth';

type Props = {};

//Paper Styling from MUI
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const NewQuestion = (props: Props) => {
  //States
  const [course, setCourse] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  //imports
  const router = useRouter();
  const { user } = useAuth();
  console.log('user', user);

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
  let setDate = year + '-' + month + '-' + day;

  const [overflowMutation, { data, loading, error }] =
    useCreateCodacOverflowMutation({
      variables: {
        slug: slug,
        title: title,
        description: description,
        date: setDate,
        author: user?.id || '',
        course: course,
        publishedAt: currentDate.toISOString(),
      },
    });

  const handleCourseChange = (event: SelectChangeEvent) => {
    setCourse(event.target.value as string);
  };

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setTitle(event.target.value);
    handleSlugChange(event);
  };

  const handleSlugChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setSlug(event.target.value.replace(/\s/g, '-').toLowerCase());
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => setDescription(event.target.value);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const { data } = await overflowMutation();

      if (data) {
        console.log('data', data);
        router.push(`/overflow/${data.createCodacOverflow?.data?.id}`);
      }

      setDescription('');
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
              marginLeft: '20%',
            }}
          >
            <Item>
              <h3 style={{ color: '#26a69a' }}>Ask a public question</h3>
            </Item>
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
                marginLeft: '20%',
                width: '60%',
              }}
            >
              <FormControl fullWidth variant="filled">
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={course}
                  label="Course"
                  onChange={handleCourseChange}
                >
                  <MenuItem value={'HTML & CSS'}>HTML & CSS</MenuItem>
                  <MenuItem value={'Javascript'}>Javascript</MenuItem>
                  <MenuItem value={'React'}>React</MenuItem>
                  <MenuItem value={'MERN'}>MERN</MenuItem>
                  <MenuItem value={'PERN'}>PERN</MenuItem>
                  <MenuItem value={'Typescript'}>Typescript</MenuItem>
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
                  onChange={handleTitleChange}
                />
              </Box>
              <TextField
                autoFocus
                multiline
                rows={6}
                margin="dense"
                id="open_feedback"
                label="Your question ..."
                type="text"
                fullWidth
                variant="filled"
                value={description}
                onChange={handleMessageChange}
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
          </Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default NewQuestion;
