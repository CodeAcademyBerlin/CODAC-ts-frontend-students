//MUI imports
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

export interface Props {
  handleClose: () => void;
  handleUpdate: () => void;
  open: boolean;
  message: string;
  setNewComment: (arg0: string) => void;
}

const EditOverflow = (props: Props) => {
  const { handleClose, handleUpdate, open, message, setNewComment } = props;
  const [comment, setComment] = useState(message);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please adjust your answer / comment:
          </DialogContentText>
          <TextField
            autoFocus
            multiline
            rows={6}
            margin="dense"
            id="comment"
            label="Your comment"
            type="text"
            value={comment}
            variant="standard"
            style={{ width: '500px' }}
            onChange={(e) => {
              setComment(e.target.value);
              setNewComment(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleUpdate()}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditOverflow;
