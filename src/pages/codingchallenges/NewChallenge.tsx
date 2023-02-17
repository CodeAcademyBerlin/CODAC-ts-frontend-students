import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Enum_Codingchallenge_Tags } from 'cabServer/global/__generated__/types';
import { useCreateCodingChallengeMutation } from 'cabServer/mutations/__generated__/addChallenge';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type Props = {};

// Create Date
const date = new Date();

const NewChallenge = (props: Props) => {
  const [tags, setTags] = useState<Enum_Codingchallenge_Tags | undefined>(
    undefined,
  );

  const [difficulty, setDifficulty] = useState<number>();
  const [title, setTitle] = useState<string>('');
  const [challenge, setChallenge] = useState<string>('');

  const router = useRouter();

  const [createCodingChallengeMutation, { data, loading, error }] =
    useCreateCodingChallengeMutation();

  // Using mui so need to import types from that library
  const handleTag = (event: SelectChangeEvent<Enum_Codingchallenge_Tags>) => {
    setTags(Enum_Codingchallenge_Tags.Data);
  };

  const handleDifficulty = (event: SelectChangeEvent<number>) => {
    // inputs are always a string so need to convert it
    setDifficulty(Number(event.target.value));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChallenge = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setChallenge(event.target.value);
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    try {
      const { data } = await createCodingChallengeMutation({
        variables: {
          title: title,
          challenge: challenge,
          difficulty: difficulty,
          tags: tags,
          publishedAt: date,
        },
      });
      if (data) {
        router.push(`/codingchallenges/${data?.createCodingChallenge?.data?.id}
`);
      }
    } catch (error) {}
  };

  return (
    <>
      <div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
          }}
        >
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
            <Stack
              style={{
                margin: '10px 0px 10px 0px',
                marginLeft: '20%',
              }}
            >
              <Item>
                <h3 style={{ color: '#26a69a' }}>Add your challenge</h3>
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
                    value={tags}
                    label="Course"
                    onChange={handleTag}
                  >
                    <MenuItem value={'Web'}>Web</MenuItem>
                    <MenuItem value={'Data'}>Data</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="filled">
                  <InputLabel id="demo-simple-select-label">
                    difficulty level
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={difficulty}
                    label="Difficulty"
                    onChange={handleDifficulty}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
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
                  value={challenge}
                  onChange={handleChallenge}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    onClick={handleSubmit}
                    sx={{
                      mt: 3,
                      ml: 1,
                    }}
                    type="submit"
                    variant="contained"
                  >
                    Add
                  </Button>
                </Box>
              </div>
            </Paper>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default NewChallenge;
