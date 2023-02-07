import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import * as React from 'react';

const KanbanHeader = (title: ColumnsHeader) => {
  //   const [title, setTitle] = React.useState<ColumnsHeader | null>(null);
  const theme = useTheme();
  return (
    <>
      {init?.map((title, index) => {
        return (
          <Card
            sx={
              {
                // display: 'flex',
                // flexDirection: 'row',
                // position: 'relative',
                // borderRadius: theme.shape.borderRadius,
                // paddingBottom: '2px',
              }
            }
            key={index}
          >
            {/* <CardContent> */}
            {/* <Typography component="h5" variant="h5">
                {title.name}
              </Typography> */}
            {/* </CardContent> */}
          </Card>
        );
      })}
    </>
  );
};

export default KanbanHeader;
