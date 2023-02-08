import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Divider,
  Grid,
  Modal,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
  useTheme,
} from '@mui/material';
import ChevronDown from 'mdi-material-ui/ChevronDown';
import ChevronUp from 'mdi-material-ui/ChevronUp';
import * as React from 'react';
import KanbanFooter from 'src/componentsDemo/kanban-board/KanbanFooter';

// we do an interface to create the types of my array
interface KanbanData {
  // header: string;
  color: string;
  title: string;
  description: string;
  category: string;
  deadline?: Date | string;
}
// then we do an type to expecify that this is an array.
type CardsType = KanbanData[];

// we make a array of type "columnsType" as an example of our data (that will come from the database, later)
const init: CardsType = [
  {
    // header: 'TODO',
    color: 'red',
    title: 'Develop Mobile App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'JavaScript',
    deadline: '2022-04-28T08:30:00',
  },
  {
    // header: 'IN PROGESS',
    color: 'blue',
    title: 'Redesign Landing page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'React',
    deadline: '2022-04-28T08:30:00',
  },
  {
    // header: 'COMPLETED',
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

const actions = [
  // { icon: <FileCopyIcon />, name: 'Copy' },
  { name: 'HTML/CSS ' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Mern' },
];
const style = {
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
};

const KanbanCard = (title: CardsType) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  return (
    <div>
      {init?.map((kanban, index) => {
        return (
          <>
            <Card
              sx={{
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                paddingBottom: '2px',
              }}
            >
              <CardContent
                sx={{
                  paddingBottom: '0px',
                }}
              >
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
                  <Box sx={style}>
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
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default KanbanCard;
