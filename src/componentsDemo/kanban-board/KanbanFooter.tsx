import {
  Button,
  CardActionArea,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Close } from 'mdi-material-ui';
import * as React from 'react';

const KanbanFooter = () => {
  const [showInput, setShowInput] = React.useState(false);

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
          <Typography variant="h6">Add card</Typography>
        </CardContent>
      </CardActionArea>
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
