import { useTheme } from '@emotion/react';
import {
  Button,
  CardActionArea,
  CardContent,
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

  const handleAddCard = () => {
    setShowInput(true);
  };
  const handleCloseInput = () => {
    setShowInput(false);
  };

  if (!showInput) {
    return (
      <CardActionArea>
        <CardContent onClick={handleAddCard}>
          <Typography variant="h6">Add column</Typography>
        </CardContent>
      </CardActionArea>
      /* <Card
        elevation={0}
        sx={{
          width: '350px',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
          overflowX: 'hidden',
          overflowY: 'hidden',
          margin: '4px',
          borderRadius: theme.shape.borderRadius,
          [theme.breakpoints.down('sm')]: {
            width: '300px',
          },
        }}
      >
        <KanbanFooter />
      </Card> */
    );
  } else {
    return (
      <form>
        <TextField
          variant="outlined"
          fullWidth
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
        <Button variant="contained" sx={{ marginRight: 3.5 }}>
          Add
        </Button>
      </form>
    );
  }
};

export default KanbanFooter;
