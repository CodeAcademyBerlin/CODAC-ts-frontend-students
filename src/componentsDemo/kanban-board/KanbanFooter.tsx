import { useTheme } from '@emotion/react';
import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Card, Close } from 'mdi-material-ui';
import * as React from 'react';

const KanbanFooter = () => {
  const [showInput, setShowInput] = React.useState(false);
  const theme = useTheme();

  const handleAddColumn = () => {
    setShowInput(true);
  };
  const handleCloseInput = () => {
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
          ADD NEW COLUMN
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
              // borderRadiusBottom: theme.shape.borderRadius,
              // paddingTop: '40px',
              backgroundColor: theme.palette.secondary,
            }}
          >
            <TextField
              variant="outlined"
              sx={{
                width: '300px',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleCloseInput}>
                      <Close />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <Typography variant="h5" color="white"></Typography> */}
          </Box>

          <Button variant="contained" sx={{ marginRight: 3.5 }}>
            Add
          </Button>
        </form>
      </Grid>
    );
  }
};

export default KanbanFooter;
