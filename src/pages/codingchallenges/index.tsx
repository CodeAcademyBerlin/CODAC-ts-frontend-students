// Working ish
// from here i will link to a dynamic page (in folder codingchallange) [] that has the name of the id
// When you clikc it would have the dynamic routes (whihc you get from the poarams)

// Then on this isngle page you would have a separste fetch that fetches with id
// fetches using the id that is found in the ciontext for serversideporps (like job postin g)
import { Typography } from '@mui/material';
import {
  CodingChallengeEntity,
  CodingChallengeEntityResponseCollection,
} from 'cabServer/global/__generated__/types';
import {
  GetChallengesExtendedDocument,
  GetChallengesQuery,
} from 'cabServer/queries/__generated__/challenges';
import { Grid } from 'mdi-material-ui';
import Link from 'next/link';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next/types';
import React, { useEffect, useState } from 'react';
import { initializeApollo } from 'src/lib/apolloClient';

// import Challenge from './codingchallenges/[challenge]';

// data here in JS

// interface Data {
//   title: string;
//   text: string;
//   description: string;
//   number: number;
// }
// type dataArray = Data[];

// { data } is props.data
// give it a tyo0e array iof data
// type of is array if dat { data: Data[] }

// const Codingchallenges = ({ data }: { data: dataArray }) => {

// it generated the typoe from what the staic props retuened (line 41)

// any so doenst know if they do existis

// interface Data {
//   title: string;
//   text: string;
//   description: string;
//   number: number;
// }
// type dataArray = Data[];

export const ChallengeContent = () => {
  <p>hi</p>;
};

const Codingchallenges = ({
  codingChallenges,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Set with <> if you need to sswithc between
  const [challenges, setChallenges] = useState(codingChallenges);

  console.log('codingChallenges', codingChallenges);
  console.log('codingChallenges[0]attributes', codingChallenges[0].attributes);
  console.log(
    'codingChallenges.attributes.title',
    codingChallenges?.attributes?.title,
  );

  // need to use useefect to avoid renders first tiem and runs to set the chalklnages

  // title could be unique (in strappi force uniqe on titkle) When you create challnge check ll the names and make sure it doents exists on front end

  // funtion

  useEffect(() => {
    setChallenges(codingChallenges);
  }, []);

  return (
    <>
      <div>Challenges</div>
      <div>
        {codingChallenges.map((challenge: CodingChallengeEntity) => {
          return (
            <>
              <Link
                key={challenge?.attributes?.title}
                href={{
                  // pathname: `/codingchallenges/${challenge?.attributes?.title}`,
                  pathname: `/codingchallenges/${challenge?.id}`,
                }}
              >
                <p>{challenge?.attributes?.title}</p>
                <p>{challenge?.id}</p>
              </Link>
              {console.log('challenge', challenge)}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Codingchallenges;

// GetChallengesQuery full query object
// getstaicprops runs at buildtime so no context, so initliaze with null

// So we cannot have autorization on challanges, but we can create token based server side autoetication. everyitng static vannot have user, so specific token
// for comments add client side

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  // const id = ctx.params;
  console.log('context', ctx.params);
  try {
    const client = initializeApollo(null, null);
    const { data, error } = await client.query<GetChallengesQuery>({
      query: GetChallengesExtendedDocument,
      variables: { id: 1 },
    });
    // get the challanges with restrucitn

    console.log('data from server', data?.codingChallenges?.data);
    {
      data?.codingChallenges?.data?.map((item) => {
        console.log('item', item?.attributes?.comments);
      });
    }

    const codingChallenges = data?.codingChallenges?.data;
    if (codingChallenges) {
      return {
        props: { codingChallenges },
      };
    }
    if (error || !codingChallenges) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

//

// in query
// chained attributes to get to that aray thats what you be apassign in data

// add later
// {/* <div>
//   {/* challenge will be one obejct in the array so you can type it */}
//   {data.map((challenge: Data) => {
//     return (
//       <Typography key={challenge.number}>{challenge.title}</Typography>
//       // pass it in the link
//     );
//   })}
// </div> */}

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

// for typescript knoledge

// Working ish
// from here i will link to a dynamic page (in folder codingchallange) [] that has the name of the id
// When you clikc it would have the dynamic routes (whihc you get from the poarams)

// Then on this isngle page you would have a separste fetch that fetches with id
// fetches using the id that is found in the ciontext for serversideporps (like job postin g)
// import { Typography } from '@mui/material';
// import { CodingChallengeEntityResponseCollection } from 'cabServer/global/__generated__/types';
// import { GetChallengesExtendedDocument } from 'cabServer/queries/__generated__/challenges';
// import { Grid } from 'mdi-material-ui';
// import { GetStaticProps, GetStaticPropsContext } from 'next/types';
// import React, { useEffect, useState } from 'react';
// import { initializeApollo } from 'src/lib/apolloClient';

// // data here in JS

// interface Data {
//   title: string;
//   text: string;
//   description: string;
//   number: number;
// }
// type dataArray = Data[];

// // { data } is props.data
// // give it a tyo0e array iof data
// // type of is array if dat { data: Data[] }
// const Codingchallenges = ({ data }: { data: dataArray }) => {
//   // Set with <> if you need to sswithc between
//   const [challenges, setChallenges] = useState<Data[]>([]);
//   console.log('data here', data);
//   console.log(typeof data);

//   // need to use useefect to avoid renders first tiem and runs to set the chalklnages

//   useEffect(() => {
//     setChallenges(data);
//   }, []);

//   return (
//     <>
//       <div>Challenges</div>
//       <div>
//         {/* challenge will be one obejct in the array so you can type it */}
//         {data.map((challenge: Data) => {
//           return (
//             <Typography key={challenge.number}>{challenge.title}</Typography>
//             // pass it in the link
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Codingchallenges;

// const data = [
//   {
//     title: 'Codingchallenge1',
//     text: 'This will be usefull',
//     description: 'longer description here',
//     number: 1,
//   },
//   {
//     title: 'Codingchallenge2',
//     text: 'This will be usefull',
//     description: 'longer description here',
//     number: 2,
//   },
//   {
//     title: 'Codingchallenge3',
//     text: 'This will be usefull',
//     description: 'longer description here',
//     number: 3,
//   },
// ];

// export const getStaticProps = async (ctx: GetStaticPropsContext) => {
//   const id = ctx.params;
//   console.log('context', ctx.params);
//   try {
//     const client = initializeApollo(null, ctx.params);
//     const { data } =
//       await client.query<CodingChallengeEntityResponseCollection>({
//         query: GetChallengesExtendedDocument,
//         variables: { id: 1 },
//       });
//     return {
//       props: { data },
//     };
//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     props: {
//       data: null,
//     },
//   };
// };
