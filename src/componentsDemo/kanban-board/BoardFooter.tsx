import { Button, CardActionArea, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import * as React from 'react';

// import { InputAdd } from './InputAdd';

type Props = {};

const BoardFooter = (props: Props) => {
  return <div>BoardFooter</div>;
};

export default BoardFooter;

// const useStyles = makeStyles((theme: any) => ({
//   boardButton: {
//     padding: theme.spacing(2),
//     justifyContent: 'center',
//   },
// }));

// export const BoardFooter = () => {
//   const classes = useStyles();
//   const [showInput, setShowInput] = React.useState(false);

//   const handleAddCard = () => {
//     setShowInput(true);
//   };
//   const handleCloseInput = () => {
//     setShowInput(false);
//   };

//   if (!showInput) {
//     return (
//       <CardActionArea>
//         <CardContent onClick={handleAddCard}>
//           <Typography component="span" variant="h6">
//             Add another card
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     );
//   } else {
//     return (
//       <form className={classes.boardButton}>
//         <InputAdd handleClose={handleCloseInput} />
//         <Button color="primary">Add</Button>
//       </form>
//     );
//   }
// };
