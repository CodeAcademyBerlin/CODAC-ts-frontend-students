import { Draggable } from '@hello-pangea/dnd';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Modal,
  Typography,
  useTheme,
} from '@mui/material';
import { ComponentKanbanCard } from 'cabServer/global/__generated__/types';
import React from 'react';

// type cardArray = ComponentKanbanCard[];

function KanbanCard({
  card,
  index,
}: {
  card: ComponentKanbanCard;
  index: number;
}) {
  // console.log('card', typeof card.id);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={card.id}
          sx={{
            position: 'relative',
            paddingBottom: 10,
          }}
        >
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6">{card.task}</Typography>
          </Box>

          <Button
            sx={{
              backgroundColor: theme.palette.primary.light,
              position: 'absolute',
              bottom: 26,
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
                padding: '20px',
              }}
            >
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  paddingBottom: '20px',
                }}
                variant="h5"
              >
                {card.task}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
            </Box>
          </Modal>
        </Card>
      )}
    </Draggable>
  );
}

export default KanbanCard;
