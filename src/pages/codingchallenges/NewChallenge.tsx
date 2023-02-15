import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type Props = {};

const NewChallenge = (props: Props) => {
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
                    // value={course}
                    label="Course"
                    // onChange={handleCourseChange}
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
                    // value={course}
                    label="Course"
                    // onChange={handleCourseChange}
                  >
                    <MenuItem value={'HTML & CSS'}>1</MenuItem>
                    <MenuItem value={'Javascript'}>2</MenuItem>
                    <MenuItem value={'HTML & CSS'}>3</MenuItem>
                    <MenuItem value={'Javascript'}>4</MenuItem>
                    <MenuItem value={'HTML & CSS'}>5</MenuItem>
                    <MenuItem value={'Javascript'}>6</MenuItem>
                    <MenuItem value={'HTML & CSS'}>7</MenuItem>
                    <MenuItem value={'Javascript'}>8</MenuItem>
                    <MenuItem value={'HTML & CSS'}>9</MenuItem>
                    <MenuItem value={'Javascript'}>10</MenuItem>
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
                    // onChange={handleTitleChange}
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
                  // value={description}
                  // onChange={handleMessageChange}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    // onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                    type="submit"
                    variant="contained"
                  >
                    Add
                  </Button>
                </Box>
              </div>
            </Paper>
          </Paper>
          <p>Add the below and clear the input in the message text boxes:</p>
          <p>message: challenge added, you can add another one or :</p>
          <p>go back to the challenges menu</p>
        </Box>
      </div>
    </>
  );
};

export default NewChallenge;
