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
import * as React from 'react';
import KanbanCard from 'src/componentsDemo/kanban-board/KanbanCard';
import KanbanFooter from 'src/componentsDemo/kanban-board/KanbanFooter';

// we do an interface to create the types of my array
interface KanbanData {
  header: string;
}
// then we do an type to expecify that this is an array.
type CardsType = KanbanData[];

// we make a array of type "columnsType" as an example of our data (that will come from the database, later)
const init: CardsType = [
  {
    header: 'TODO',
  },
  {
    header: 'IN PROGESS',
  },
  {
    header: 'COMPLETED',
  },
];
// then we can create a useState with the columnsType to make an array and display the data in the columns.
// tutorial typescriptreact: 48:33

const Kanban = (title: CardsType) => {
  const theme = useTheme();

  return (
    <Grid container spacing={6}>
      {/* <Grid
        container
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'row',
          overflowX: 'auto',
          overflowY: 'hidden',
          height: '100%',
        }}
      > */}
      {/* <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: '24px',
          paddingBottom: '24px',
          height: '100%',
        }}
      > */}
      {/* <Box
        sx={{
          p: theme.spacing(3, 4),
          borderRadius: 3,
          backgroundColor: theme.palette.background.paper,
        }}
      > */}
      {init?.map((kanban, index) => {
        return (
          <Card
            elevation={0}
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
            <KanbanCard />
            {/* <Divider /> */}
            <KanbanFooter />
          </Card>
        );
      })}
      {/* </Box> */}
      {/* </Grid> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default Kanban;
