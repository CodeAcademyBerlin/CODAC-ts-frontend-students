import { Draggable } from '@hello-pangea/dnd';
import {
  Box,
  Button,
  Card,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ComponentKanbanCard } from 'cabServer/global/__generated__/types';
import { Close, Pencil } from 'mdi-material-ui';
import React from 'react';

function KanbanCard({
  card,
  index,
}: {
  card: ComponentKanbanCard;
  index: number;
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setInput(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInput(false);
  };

  const handleEdit = () => {
    setInput(false);
  };

  return (
    <Draggable draggableId={card.id.toString()} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={card?.id}
          sx={{
            position: 'relative',
            paddingBottom: 10,
          }}
        >
          <Box
            sx={{
              m: 4,
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6">{card?.task}</Typography>
          </Box>

          <Button
            sx={{
              backgroundColor: theme.palette.primary.light,
              position: 'absolute',
              bottom: 42,
              right: 16,
            }}
            variant="contained"
            onClick={handleOpen}
          >
            MORE
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 450,
                height: 300,
                bgcolor: 'background.paper',
                borderRadius: '20px',
                borderRadiusBottom: theme.shape.borderRadius,
                padding: '35px',
              }}
            >
              {input ? (
                <>
                  <IconButton
                    sx={{
                      position: 'absolute',
                      width: '700px',
                      height: '25px',
                    }}
                  >
                    <Pencil onClick={handleEdit} />
                  </IconButton>

                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      paddingBottom: '20px',
                    }}
                    variant="h5"
                  >
                    {card?.task}
                  </Typography>
                  <Typography variant="body2">{card?.description}</Typography>
                </>
              ) : (
                <form>
                  <TextField
                    variant="standard"
                    sx={{
                      width: '300px',
                      marginTop: 3,
                    }}
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <Close />
                        </IconButton>
                      ),
                    }}
                  />
                </form>
              )}
            </Box>
          </Modal>
        </Card>
      )}
    </Draggable>
  );
}

export default KanbanCard;
