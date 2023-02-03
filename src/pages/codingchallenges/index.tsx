// Working ish
// from here i will link to a dynamic page (in folder codingchallange) [] that has the name of the id
// When you clikc it would have the dynamic routes (whihc you get from the poarams)

// Then on this isngle page you would have a separste fetch that fetches with id
// fetches using the id that is found in the ciontext for serversideporps (like job postin g)
import { Typography } from '@mui/material';
import { Grid } from 'mdi-material-ui';
import React, { useEffect, useState } from 'react';

// data here in JS

interface Data {
  title: string;
  text: string;
  description: string;
  number: number;
}
type dataArray = Data[];

// { data } is props.data
// give it a tyo0e array iof data
// type of is array if dat { data: Data[] }
const Codingchallenges = ({ data }: { data: dataArray }) => {
  // Set with <> if you need to sswithc between
  const [challenges, setChallenges] = useState<Data[]>([]);
  console.log('data here', data);
  console.log('data.individual challenges', data);
  console.log(typeof data);

  // need to use useefect to avoid renders first tiem and runs to set the chalklnages

  useEffect(() => {
    setChallenges(data);
  }, []);

  return (
    <>
      <div>Challenges</div>
      <div>
        {/* challenge will be one obejct in the array so you can type it */}
        {data.map((challenge: Data) => {
          return (
            <Typography key={challenge.number}>{challenge.title}</Typography>
            // pass it in the link
          );
        })}
      </div>
    </>
  );
};

export default Codingchallenges;

const data = [
  {
    title: 'Codingchallenge1',
    text: 'This will be usefull',
    description: 'longer description here',
    number: 1,
  },
  {
    title: 'Codingchallenge2',
    text: 'This will be usefull',
    description: 'longer description here',
    number: 2,
  },
  {
    title: 'Codingchallenge3',
    text: 'This will be usefull',
    description: 'longer description here',
    number: 3,
  },
];

export const getStaticProps = async () => {
  return {
    props: { data },
  };
};

// in query
// chained attributes to get to that aray thats what you be apassign in data

// HERE

// from here i will link to a dynamic page (in folder codingchallange) [] that has the name of the id
// When you clikc it would have the dynamic routes (whihc you get from the poarams)

// Then on this isngle page you would have a separste fetch that fetches with id
// fetches using the id that is found in the ciontext for serversideporps (like job postin g)
// import { Typography } from '@mui/material';
// import { Grid } from 'mdi-material-ui';
// import React, { useState } from 'react';

// // data here in JS

// interface Data {
//   title: string;
//   text: string;
//   description: string;
// }

// const Codingchallenges = ({ data }: { data: Data[] }) => {
//   const [challenges, setChallenges] = useState('');
//   console.log('data here', data);
//   console.log(data);
//   console.log(typeof data);

//   return (
//     <>
//       <div>Challenges</div>
//       <div>
//         {data.map((challenge) => {
//           return (
//             <Typography key={challenge.title}>{challenge.title}</Typography>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Codingchallenges;

// const data: Data[] = [
//   {
//     title: 'Codingchallenge1',
//     text: 'This will be usefull',
//     description: 'longer description here',
//   },
//   {
//     title: 'Codingchallenge2',
//     text: 'This will be usefull',
//     description: 'longer description here',
//   },
//   {
//     title: 'Codingchallenge3',
//     text: 'This will be usefull',
//     description: 'longer description here',
//   },
// ];

// export const getStaticProps = async () => {
//   return {
//     props: { data },
//   };
// };

// Here

// <Grid container spacing={6}>
//   <Grid item xs={12} sx={{ paddingBottom: 4 }}>
//     <Typography variant="h5">Projets</Typography>
//   </Grid>
//   {Data.map((challenge) => (
//     <Grid key={project.title} item xs={12} sm={6} md={4}>
//       {/* <ProjectCard project={project} /> */}
//     </Grid>
//   ))}
// </Grid>

// working with lucas
// Ask about the export default data and (props: Data[])

//       interface Data {
//   title: string;
//   text: string;
//   description: string;
// }

// const Codingchallenges = (props: Data[]) => {
//   const [challenges, setChallenges] = useState('');
// console.log('props.individual_challeges', props.individual_challenges);
//   console.log(props);
//   console.log(typeof props);

//   return (
//     <>
//       <div>hello</div>
//       { }
//     </>
//   );
// };

// export default Codingchallenges;

// const data = {
//   individual_challenges: [
//     {
//       title: 'Codingchallenge1',
//       text: 'This will be usefull',
//       description: 'longer description here',
//     },
//     {
//       title: 'Codingchallenge2',
//       text: 'This will be usefull',
//       description: 'longer description here',
//     },
//     {
//       title: 'Codingchallenge3',
//       text: 'This will be usefull',
//       description: 'longer description here',
//     },
//   ],
// };

// export const getStaticProps = async () => {
//   return {
//     props: data,
//   };
// };

// ASK

// from here i will link to a dynamic page (in folder codingchallange) [] that has the name of the id
// When you clikc it would have the dynamic routes (whihc you get from the poarams)

// Then on this isngle page you would have a separste fetch that fetches with id
// fetches using the id that is found in the ciontext for serversideporps (like job postin g)
// import { Typography } from '@mui/material';
// import { Grid } from 'mdi-material-ui';
// import React, { useState } from 'react';

// // data here in JS

// interface Data {
//   title: string;
//   text: string;
//   description: string;
//   number: number;
// }

// const Codingchallenges = ({ data }: { data: Data[] }) => {
//   const [challenges, setChallenges] = useState('');
//   console.log('data here', data);
//   console.log('data.individual challenges', data.individual_challenges);
//   const challengesArray: object[] = data.individual_challenges;
//   console.log('challengesArray', challengesArray);
//   console.log(typeof data);

//   return (
//     <>
//       <div>Challenges</div>
//       <div>
//         {challengesArray.map((challenge) => {
//           return (
//             <Typography key={challenge.number}>{challenge.title}</Typography>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Codingchallenges;

// const data = {
//   individual_challenges: [
//     {
//       title: 'Codingchallenge1',
//       text: 'This will be usefull',
//       description: 'longer description here',
//       number: 1,
//     },
//     {
//       title: 'Codingchallenge2',
//       text: 'This will be usefull',
//       description: 'longer description here',
//       number: 2,
//     },
//     {
//       title: 'Codingchallenge3',
//       text: 'This will be usefull',
//       description: 'longer description here',
//       number: 3,
//     },
//   ],
// };

// export const getStaticProps = async () => {
//   return {
//     props: { data },
//   };
// };

// // Working ish
// // from here i will link to a dynamic page (in folder codingchallange) [] that has the name of the id
// // When you clikc it would have the dynamic routes (whihc you get from the poarams)

// // Then on this isngle page you would have a separste fetch that fetches with id
// // fetches using the id that is found in the ciontext for serversideporps (like job postin g)
// import { Typography } from '@mui/material';
// import { Grid } from 'mdi-material-ui';
// import React, { useState } from 'react';

// // data here in JS

// interface Data {
//   title: string;
//   text: string;
//   description: string;
//   number: number;
// }

// const Codingchallenges = ({ data }: { data: Data[] }) => {
//   const [challenges, setChallenges] = useState('');
//   console.log('data here', data);
//   console.log('data.individual challenges', data.individual_challenges);
//   const challengesArray = data.individual_challenges;
//   console.log('challengesArray', challengesArray);
//   console.log(typeof data);

//   return (
//     <>
//       <div>Challenges</div>
//       <div>
//         {challengesArray.map((challenge) => {
//           return (
//             <Typography key={challenge.number}>{challenge.title}</Typography>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Codingchallenges;

// const data = {
//   individual_challenges: [
//     {
//       title: 'Codingchallenge1',
//       text: 'This will be usefull',
//       description: 'longer description here',
//       number: 1,
//     },
//     {
//       title: 'Codingchallenge2',
//       text: 'This will be usefull',
//       description: 'longer description here',
//       number: 2,
//     },
//     {
//       title: 'Codingchallenge3',
//       text: 'This will be usefull',
//       description: 'longer description here',
//       number: 3,
//     },
//   ],
// };

// export const getStaticProps = async () => {
//   return {
//     props: { data },
//   };
// };
