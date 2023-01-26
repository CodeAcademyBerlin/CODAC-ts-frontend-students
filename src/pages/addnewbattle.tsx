import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Stack,
  TextField,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useCreateVsBattleMutation } from 'cabServer/mutations/__generated__/addbattle';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function AddNewBattle() {
  const theme = useTheme();
  const [option1, setOption1] = useState<string>('');
  const [option2, setOption2] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const currentDate = new Date();
  const router = useRouter();

  const [createVsBattleMutation, { data, loading, error }] =
    useCreateVsBattleMutation();

  const handleAddBattle = () => {
    createVsBattleMutation({
      variables: {
        option1: option1,
        option2: option2,
        title: title,
        description: description,
        archived: false,
        publishedAt: currentDate.toISOString(),
      },
    });
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

            height: 'auto',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: (theme) => theme.spacing(1.75, 5.5),
            rowGap: 5,
          }}
        >
          <TextField
            id="filled-basic"
            label="Battle title"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            id="filled-basic"
            label="Option 1"
            variant="filled"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            required
          />
          <TextField
            id="filled-basic"
            label="Option 2"
            variant="filled"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            required
          />
          <TextField
            id="filled-basic"
            label="Description"
            variant="filled"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Button variant="contained" type="submit" onClick={handleAddBattle}>
          ADD BATTLE
        </Button>
      </Box>
    </div>
  );
}

export default AddNewBattle;
