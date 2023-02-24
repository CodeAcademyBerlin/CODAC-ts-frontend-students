import { Box, Button, IconButton, TextField, useTheme } from '@mui/material';
import { Close, Plus } from 'mdi-material-ui';
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
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <TextField
              variant="standard"
              sx={{
                width: '300px',
                marginTop: 3,
              }}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleCloseCard}>
                    <Close />
                  </IconButton>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <Button
              variant="text"
              sx={{
                color: 'white',
              }}
              onClick={handleAddCard}
            >
              {' '}
              <IconButton>
                <Plus
                  sx={{
                    color: 'white',
                  }}
                />
              </IconButton>
              ADD CARD
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default KanbanFooter;
