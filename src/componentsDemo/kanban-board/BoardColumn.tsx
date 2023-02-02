import { Grid } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import React, { useState } from 'react';

// import { Board } from './Board';

// we do an interface to create the types of my array
interface ColumnType {
  name: string;
}
// then we do an type to expecify that this is an array.
type ColumnsType = ColumnType[];

// we make a array of type "columnsType" as an example of our data (that will come from the database, later)
const init: ColumnsType = [
  {
    name: 'TODO',
  },
  {
    name: 'IN PROGESS',
  },
  {
    name: 'COMPLETED',
  },
];
// then we can create a useState with the columnsType to make an array and display the data in the columns.
// tutorial typescriptreact: 48:33
const BoardColumn = (props: ColumnsType) => {
  const [columns, setColumns] = useState<ColumnsType | null>(null);

  return <div>BoardList</div>;
};

export default BoardColumn;
// const useStyles = makeStyles((theme: any) => ({
//   boardContent: {
//     overflowY: 'auto',
//     height: '100%',
//   },
// }));

// export const BoardsList = ({ boards }) => {
//   const classes = useStyles();
//   return (
//     <Grid className={classes.boardContent}>
//       {boards.map((board) => (
//         <Grid key={board.id} item xs={12}>
//           <Board board={board} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };
