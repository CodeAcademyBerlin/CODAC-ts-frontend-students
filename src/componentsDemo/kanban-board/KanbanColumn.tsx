import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Close } from 'mdi-material-ui';
import * as React from 'react';

import { useGetKanbanByUserQuery } from '../../../cabServer/queries/__generated__/kanban';
import KanbanCard from './KanbanCard';
import KanbanFooter from './KanbanFooter';

const KanbanColumn = () => {
  const { data, loading, error } = useGetKanbanByUserQuery({
    variables: {},
  });
  const column = data?.usersPermissionsUser?.data?.attributes?.kanban?.columns;
  console.log('dataColumns', column);

  const theme = useTheme();

  const [inputColumn, setInputColumn] = React.useState(false);

  const handleAddColumn = () => {
    setInputColumn(true);
  };
  const handleCloseColumn = () => {
    setInputColumn(false);
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
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                padding: '20px',
                backgroundColor: theme.palette.primary.light,
              }}
            >
              <Typography variant="h5" color="white">
                {column?.title}
              </Typography>
            </Box>

            {column?.cards?.map((card, index) => {
              // console.log('cards', column.cards);
              return <KanbanCard card={card} index={index} key={index} />;
            })}
            <KanbanFooter />
            {/* {inputCard ? (
              <form>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.secondary,
                  }}
                >
                  <TextField
                    variant="outlined"
                    sx={{
                      width: '300px',
                      marginTop: 3,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleCloseCard}>
                            <Close />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    marginLeft: 6,
                    marginBottom: 6,
                    marginTop: 2,
                  }}
                >
                  Add
                </Button>
              </form>
            ) : (
              <>
                <Card
                  sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    justifyContent: 'center',
                    padding: '20px',
                    backgroundColor: theme.palette.secondary.main,
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      color: 'white',
                    }}
                    onClick={handleAddCard}
                  >
                    ADD CARD
                  </Button>
                </Card>
              </>
            )} */}
          </Card>
        );
      })}
      {inputColumn ? (
        <Card
          elevation={0}
          sx={{
            width: '350px',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden',
            margin: '4px',
            borderRadius: theme.shape.borderRadius,
          }}
        >
          <form>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center',
              }}
            >
              <TextField
                variant="standard"
                sx={{
                  width: '300px',
                  marginTop: 3,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleCloseColumn}>
                        <Close />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                marginLeft: 6,
                marginBottom: 6,
                marginTop: 2,
              }}
            >
              Add
            </Button>
          </form>
        </Card>
      ) : (
        <>
          <Card
            elevation={0}
            sx={{
              width: '350px',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '100%',
              overflowX: 'hidden',
              overflowY: 'hidden',
              margin: '4px',
              borderRadius: theme.shape.borderRadius,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                padding: '20px',
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: 'white',
                }}
                onClick={handleAddColumn}
              >
                ADD COLUMN
              </Button>
            </Box>
          </Card>
        </>
      )}
    </Grid>
  );
};

export default KanbanColumn;
