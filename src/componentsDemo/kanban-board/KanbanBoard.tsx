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
import * as React from 'react';
import KanbanCard from 'src/componentsDemo/kanban-board/KanbanCard';
import KanbanFooter from 'src/componentsDemo/kanban-board/KanbanFooter';

// we do an interface to create the types of my array
interface KanbanData {
  header: string;
  color: string;
  title: string;
  description: string;
  category: string;
  deadline?: Date | string;
}
// then we do an type to expecify that this is an array.
// type CardsType = KanbanData[];

// we make a array of type "columnsType" as an example of our data (that will come from the database, later)
const init: CardsType = [
  {
    header: 'COMPLETED',
    color: 'red',
    title: 'Develop Mobile App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'JavaScript',
    deadline: '2022-04-28T08:30:00',
  },
  {
    header: 'IN PROGESS',
    color: 'blue',
    title: 'Redesign Landing page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'React',
    deadline: '2022-04-28T08:30:00',
  },
  {
    header: 'TODO',
    color: 'green',
    title: 'API Improvement',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Mern',
    deadline: '2022-04-28T08:30:00',
  },
];
// then we can create a useState with the columnsType to make an array and display the data in the columns.
// tutorial typescriptreact: 48:33

const KanbanBoard = (kanban: CardsType) => {
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
      {init?.map((kanban, index) => {
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
                {kanban.header}
              </Typography>
            </Box>
            {/* <Divider /> */}
            <Card
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
                      <Typography variant="h6">{kanban.title}</Typography>
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
                      <Typography variant="h6">{kanban.title}</Typography>
                      <Typography variant="body1">Task description</Typography>
                      <Typography variant="body2">
                        {kanban.description}
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
            {/* <Divider /> */}
            <KanbanFooter />
          </Card>
        );
      })}
    </Grid>
  );
};

export default KanbanBoard;
