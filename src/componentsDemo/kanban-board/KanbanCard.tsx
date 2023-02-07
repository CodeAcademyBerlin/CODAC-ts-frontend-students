import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
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
    description: 'Lore Ipsum',
    category: 'JavaScript',
    deadline: '2022-04-28T08:30:00',
  },
  {
    // header: 'IN PROGESS',
    color: 'blue',
    title: 'Redesign Landing page',
    description: 'Lore Ipsum',
    category: 'React',
    deadline: '2022-04-28T08:30:00',
  },
  {
    // header: 'COMPLETED',
    color: 'green',
    title: 'API Improvement',
    description: 'Lore Ipsum',
    category: 'Mern',
    deadline: '2022-04-28T08:30:00',
  },
];
// then we can create a useState with the columnsType to make an array and display the data in the columns.
// tutorial typescriptreact: 48:33

const KanbanCard = (title: CardsType) => {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        margin: theme.spacing(2),
        marginBottom: 20,
        borderLeft: '5px solid red',
      }}
    >
      <div
      // className={ width: '100%', display: 'flex', flexDirection: 'column' } component>Board
      >
        <CardContent sx={{ flex: '1 0 auto', paddingBottom: theme.spacing(2) }}>
          {init?.map((kanban, index) => {
            return (
              <>
                <Typography
                  sx={{ fontWeight: 600, fontSize: '1rem' }}
                  variant="overline"
                >
                  {kanban.title}
                </Typography>
                <Grid item xs={12}>
                  <Box component="small" m={1}>
                    <Typography variant="body1">Description</Typography>
                    <Typography variant="body2">
                      {kanban.description}
                    </Typography>
                    <Typography variant="body1">Deadline</Typography>
                    <Typography variant="body2">{kanban.deadline}</Typography>
                  </Box>
                </Grid>
              </>
            );
          })}
        </CardContent>
      </div>
    </Card>
  );
};

export default KanbanCard;

// const KanbanCard = (title: CardsType) => {
//   //   const [title, setTitle] = React.useState<CardsType | null>(null);
//   const theme = useTheme();
//   return (
//     <Card
//       sx={
//         {
//           // display: 'flex',
//           // flexDirection: 'row',
//           // position: 'relative',
//           // borderRadius: theme.shape.borderRadius,
//           // paddingBottom: '2px',
//         }
//       }
//     >
//       {init?.map((kanban, index) => {
//         return (
//           <Card
//             sx={
//               {
//                 // display: 'flex',
//                 // flexDirection: 'row',
//                 // position: 'relative',
//                 // borderRadius: theme.shape.borderRadius,
//                 // paddingBottom: '2px',
//               }
//             }
//             key={index}
//           >
//             <CardContent>
//               {/* <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                 }}
//               > */}
//               <Typography
//                 sx={{ fontWeight: 600, fontSize: '1rem' }}
//                 variant="overline"
//               >
//                 {kanban.title}
//               </Typography>
//               <Typography variant="body1">Description</Typography>
//               <Typography variant="body2">{kanban.description}</Typography>
//               <Typography variant="body1">Deadline</Typography>
//               <Typography variant="body2">{kanban.deadline}</Typography>
//               {/* </Box> */}
//             </CardContent>
//           </Card>
//         );
//       })}

//       {/* <Typography component="h5" variant="h5">
//           {init?.map((title, index) => {
//             return (
//               <div key={index}>
//                 <p>{title.header}</p>
//               </div>
//             );
//           })}
//         </Typography> */}
//     </Card>
//   );
// };

// export default KanbanCard;
