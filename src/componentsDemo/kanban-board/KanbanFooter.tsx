import { useTheme } from '@emotion/react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Card, Close } from 'mdi-material-ui';
import * as React from 'react';

const KanbanFooter = () => {
  const [showInput, setShowInput] = React.useState(false);
  const theme = useTheme();

  const handleAddColumn = () => {
    setShowInput(true);
  };
  const handleCloseColumnInput = () => {
    setShowInput(false);
  };

  if (!showInput) {
    return (
      <Grid
        container
        sx={{
          marginTop: '40px',
        }}
      >
        <Button
          variant="contained"
          sx={{ marginRight: 3.5 }}
          onClick={handleAddColumn}
        >
          ADD COLUMN
        </Button>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        sx={{
          marginTop: '40px',
        }}
      >
        <form>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextField
              variant="outlined"
              sx={{
                width: '350px',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleCloseColumnInput}>
                      <Close />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              marginBottom: 6,
              marginTop: 2,
            }}
          >
            Add
          </Button>
        </form>
      </Grid>
    );
  }
};

export default KanbanFooter;
