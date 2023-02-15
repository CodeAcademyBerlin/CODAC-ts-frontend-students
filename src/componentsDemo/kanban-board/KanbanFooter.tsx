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
  const [inputCard, setInputCard] = React.useState(false);
  const theme = useTheme();

  const handleAddCard = () => {
    setInputCard(true);
  };
  const handleCloseCard = () => {
    setInputCard(false);
  };

  return (
    <>
      {inputCard ? (
        <form>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.palette.secondary,
            }}
          >
            <TextField
              variant="outlined"
              sx={{
                width: '300px',
                marginTop: 3,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleCloseCard}>
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
              marginLeft: 6,
              marginBottom: 6,
              marginTop: 2,
            }}
          >
            Add
          </Button>
        </form>
      ) : (
        <>
          <Button
            variant="text"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: 'white',
            }}
            onClick={handleAddCard}
            // startIcon={<AddIcon />}
          >
            ADD CARD
          </Button>
        </>
      )}
    </>
  );
};

export default KanbanFooter;
