import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Close, WhiteBalanceAuto } from 'mdi-material-ui';
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
  const [input, setInput] = React.useState(false);
  const handleAddCard = () => {
    setInput(true);
  };
  const handleCloseCardInput = () => {
    setInput(false);
  };

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

            {input ? (
              <form>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderRadiusBottom: theme.shape.borderRadius,
                    // paddingTop: '40px',
                    backgroundColor: theme.palette.secondary,
                  }}
                >
                  <TextField
                    variant="outlined"
                    sx={{
                      width: '300px',
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleCloseCardInput}>
                            <Close />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {/* <Typography variant="h5" color="white"></Typography> */}
                </Box>

                <Button variant="contained" sx={{ marginRight: 3.5 }}>
                  Add
                </Button>
              </form>
            ) : (
              <>
                <Card
                  sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderRadiusBottom: theme.shape.borderRadius,
                    padding: '20px',
                    backgroundColor: theme.palette.secondary.main,
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      color: 'white',
                    }}
                    // sx={{ marginRight: 3.5 }}
                    onClick={handleAddCard}
                  >
                    ADD CARD
                  </Button>
                </Card>
              </>
            )}
          </Card>
        );
      })}
    </Grid>
  );
};

export default KanbanColumn;
