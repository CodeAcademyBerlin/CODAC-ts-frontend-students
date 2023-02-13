import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Grid,
  Modal,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { AvatarGroup } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import { ComponentKanbanCard } from 'cabServer/global/__generated__/types';
import * as React from 'react';
// import KanbanCard from 'src/componentsDemo/kanban-board/KanbanCard';
import KanbanFooter from 'src/componentsDemo/kanban-board/KanbanFooter';

import { useGetKanbanBoardQuery } from '../../../cabServer/queries/__generated__/kanban';

const KanbanBoard = () => {
  const { data, loading, error } = useGetKanbanBoardQuery({
    variables: {},
  });

  const column = data?.usersData?.data[0].attributes?.kanban?.columns;
  console.log('dataColumns', column);
  // console.log('dataCards', column[0].cards);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {column?.map((column, index) => {
        return (
          <Card
            elevation={0}
            key={index}
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
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadiusBottom: theme.shape.borderRadius,
                padding: '20px',
                backgroundColor: theme.palette.primary.light,
              }}
            >
              <Typography variant="h5" color="white">
                {column?.title}
              </Typography>
            </Box>
            {/* <Divider /> */}
            {column?.cards?.map((card, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    position: 'relative',
                    // borderRadius: theme.shape.borderRadius,
                    paddingBottom: '2px',
                    borderLeft: '5px solid red',
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
                          <Typography variant="h6">{card?.task}</Typography>
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
                            width: 600,
                            height: 500,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 14,
                            p: 4,
                          }}
                        >
                          <Typography variant="h6">{card.task}</Typography>
                          <Typography variant="body1">
                            Task description
                          </Typography>
                          <Typography variant="body2">
                            {card.description}
                          </Typography>
                        </Box>
                      </Modal>
                      {/* <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    alignItems: 'start',
                  }}
                >
                  {' '}
                  <Typography
                    variant="subtitle2"
                    sx={{
                      whiteSpace: 'nowrap',
                      color: 'text.primary',
                      fontSize: '0.8rem',
                    }}
                  >
                    {' '}
                    <span className="boldText">Category</span>{' '}
                    {kanban.category.replace('_', ' ')}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      whiteSpace: 'nowrap',
                      color: 'text.primary',
                      fontSize: '0.8rem',
                    }}
                  >
                    {' '}
                    <span className="boldText">Deadline</span> {kanban.deadline}
                  </Typography>
                </Box> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}

            {/* <Divider /> */}
            <KanbanFooter />
          </Card>
        );
      })}
    </Grid>
  );
};

export default KanbanBoard;
