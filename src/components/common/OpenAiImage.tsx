import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import RobotExcited from 'mdi-material-ui/RobotExcited';
import React, { useState } from 'react';

const OpenAiImage = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('small');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log('promt', prompt);
    const response = await fetch('api/open-ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });
    if (!response.ok) {
      throw new Error('That image could not be generated');
    }

    const data = await response.json();
    setImage(data.data);
    setLoading(false);
  };

  return (
    <Card
      sx={{
        maxWidth: '18rem',
        borderRadius: 3,
        borderStyle: 'solid',
        borderWidth: 2,
        // borderColor: "primary",
        pt: 1,
        pb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          mx: 0,
          pb: 2,
        }}
      >
        <Box px={3} py={2}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <RobotExcited />
            <Typography
              sx={{
                fontVariant: 'all-small-caps',
              }}
            >
              Open AI
            </Typography>
          </Stack>

          <Typography variant="h6">Describe An Image</Typography>
        </Box>

        <CardMedia
          component="img"
          src={image || ''}
          sx={{
            borderRadius: 0,
            borderStyle: 'solid none',
            borderWidth: 2,
          }}
        />
      </Box>

      <CardActions
        sx={{
          py: 0,

          mb: 0,
        }}
      >
        <FormControl sx={{ px: 2 }} fullWidth>
          <OutlinedInput
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type={'text'}
          />
        </FormControl>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button onClick={handleGenerate} variant="contained">
            Generate
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default OpenAiImage;
