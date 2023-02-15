import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ComponentKanbanCard } from 'cabServer/global/__generated__/types';
import { Close } from 'mdi-material-ui';
import React from 'react';

// type cardArray = ComponentKanbanCard[];

function KanbanCard({
  card,
  index,
}: {
  card: ComponentKanbanCard[];
  index: number;
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      key={index}
      sx={{
        position: 'relative',
        paddingBottom: '2px',
      }}
    >
      <CardActionArea>
        <CardContent>
          <Box
            sx={{
              mb: 5,
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6">{card.task}</Typography>
            </Box>

            <Button
              sx={{
                color: theme.palette.mode,
                backgroundColor: theme.palette.primary.light,
                position: 'absolute',
                bottom: 16,
                right: 16,
              }}
              variant="contained"
              onClick={handleOpen}
            >
              MORE
            </Button>
          </Box>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default KanbanCard;
