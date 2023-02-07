import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { AvatarGroup } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import clsx from 'clsx';
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
type CardsType = KanbanData[];

// we make a array of type "columnsType" as an example of our data (that will come from the database, later)
const init: CardsType = [
  {
    header: 'TODO',
    color: 'red',
    title: 'Develop Mobile App',
    description: 'Lore Ipsum',
    category: 'JavaScript',
    deadline: '2022-04-28T08:30:00',
  },
  {
    header: 'IN PROGESS',
    color: 'blue',
    title: 'Redesign Landing page',
    description: 'Lore Ipsum',
    category: 'React',
    deadline: '2022-04-28T08:30:00',
  },
  {
    header: 'COMPLETED',
    color: 'green',
    title: 'API Improvement',
    description: 'Lore Ipsum',
    category: 'Mern',
    deadline: '2022-04-28T08:30:00',
  },
];
// then we can create a useState with the columnsType to make an array and display the data in the columns.
// tutorial typescriptreact: 48:33

const Kanban = (title: CardsType) => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={3}
      sx={{
        p: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        // flex: '1 1 auto',
        height: '100%',
      }}
    >
      <Grid
        container
        sx={{
          // display: 'flex',
          // flex: '1 1 auto',
          // flexDirection: 'row',
          overflowX: 'auto',
          overflowY: 'hidden',
          height: '100%',
        }}
      >
        <Grid
          sx={{
            // display: 'flex',
            // flexDirection: 'row',
            paddingTop: '24px',
            paddingBottom: '24px',
            height: '100%',
          }}
        >
          <Box
            sx={{
              p: theme.spacing(3, 4),
              borderRadius: 3,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            {init?.map((kanban, index) => {
              return (
                <Paper
                  elevation={3}
                  key={index}
                  sx={{
                    width: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '100%',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    marginLeft: '8px',
                    marginRight: '8px',
                    [theme.breakpoints.down('sm')]: {
                      width: '300px',
                    },
                  }}
                >
                  <Typography variant="h5">{kanban.header}</Typography>
                  <Divider />
                  <KanbanCard />
                  <Divider />
                  <KanbanFooter />
                </Paper>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Kanban;
