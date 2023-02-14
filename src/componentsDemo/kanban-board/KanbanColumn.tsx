import {
  Box,
  Button,
  Card,
  Grid,
  Modal,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import * as React from 'react';

import { useGetKanbanBoardQuery } from '../../../cabServer/queries/__generated__/kanban';
import KanbanCard from './KanbanCard';

const KanbanColumn = () => {
  const { data, loading, error } = useGetKanbanBoardQuery({
    variables: {},
  });

  const column = data?.usersData?.data[0].attributes?.kanban?.columns;
  console.log('dataColumns', column);

  const theme = useTheme();

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

            {column?.cards?.map((card, index) => {
              console.log('cardss', column.cards);
              return <KanbanCard card={card} index={index} key={index} />;
            })}
          </Card>
        );
      })}
    </Grid>
  );
};

export default KanbanColumn;
