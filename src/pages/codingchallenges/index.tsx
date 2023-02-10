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
import ChallengesLanding from 'src/components/coding-challenges-page/ChallengesLanding';
import { initializeApollo } from 'src/lib/apolloClient';

import ChallengeCard from '../../components/coding-challenges-page/ChallengeCard';

// data here in JS

// interface Data {
//   title: string;
//   text: string;
//   description: string;
//   number: number;
// }
// type dataArray = Data[];

const Codingchallenges = ({
  codingChallenges,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Set with <> for empty?
  const [challenges, setChallenges] = useState(codingChallenges);

  console.log(
    'codingChallenges.attributes.title',
    codingChallenges?.attributes?.title,
  );

  // To just render first time and when changes
  useEffect(() => {
    setChallenges(codingChallenges);
  }, []);

  return (
    <>
      <ChallengesLanding />
      <div>
        {codingChallenges.map((challenge: CodingChallengeEntity) => {
          return (
            <>
              {/* <Link
                key={challenge?.id}
                href={{
                  pathname: `/codingchallenges/${challenge?.id}`,
                }}
              ></Link> */}
              <ChallengeCard key={challenge?.id} challenge={challenge} />
            </>
          );
        })}
      </div>
    </>
  );
};

// put challknge within loop !
// you don t have to name it props={challnge}, naming it challnege will have it send it as prop.challnge and you will recive it as prop.challenge in the challnge card

export default Codingchallenges;

// GetChallengesQuery is the full query object
// getStaticProps runs at buildtime so no context so need to initalize with null
// Cannot have autorization on challanges since static build, but we can create token based server side autoetication
// Comments - do client side rendering

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  console.log('context', ctx.params);
  try {
    const client = initializeApollo(null, null);
    const { data, error } = await client.query<GetChallengesQuery>({
      query: GetChallengesExtendedDocument,
      variables: { id: 1 },
    });

    // console.log('data from server', data?.codingChallenges?.data);
    // {
    //   data?.codingChallenges?.data?.map((item) => {
    //     console.log('item', item?.attributes?.comments);
    //   });
    // }

    const codingChallenges = data?.codingChallenges?.data;

    if (codingChallenges) {
      return {
        props: { codingChallenges },
        revalidate: 10,
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

// Extra

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

// // Working ish
// // from here i will link to a dynamic page (in folder codingchallange) [] that has the name of the id
// // When you clikc it would have the dynamic routes (whihc you get from the poarams)

// // Then on this isngle page you would have a separste fetch that fetches with id
// // fetches using the id that is found in the ciontext for serversideporps (like job postin g)
// import { Typography } from '@mui/material';
// import {
//   CodingChallengeEntity,
//   CodingChallengeEntityResponseCollection,
// } from 'cabServer/global/__generated__/types';
// import {
//   GetChallengesExtendedDocument,
//   GetChallengesQuery,
// } from 'cabServer/queries/__generated__/challenges';
// import { Grid } from 'mdi-material-ui';
// import Link from 'next/link';
// import {
//   GetStaticProps,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from 'next/types';
// import React, { useEffect, useState } from 'react';
// import ChallengesLanding from 'src/components/coding-challenges-page/ChallengesLanding';
// import { initializeApollo } from 'src/lib/apolloClient';

// import ChallengeCard from '../../components/coding-challenges-page/ChallengeCard';

// // data here in JS

// // interface Data {
// //   title: string;
// //   text: string;
// //   description: string;
// //   number: number;
// // }
// // type dataArray = Data[];

// const Codingchallenges = ({
//   codingChallenges,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   // Set with <> for empty?
//   const [challenges, setChallenges] = useState(codingChallenges);

//   console.log(
//     'codingChallenges.attributes.title',
//     codingChallenges?.attributes?.title,
//   );

//   // To just render first time and when changes
//   useEffect(() => {
//     setChallenges(codingChallenges);
//   }, []);

//   return (
//     <>
//       <ChallengesLanding />
//       <div>
//         {codingChallenges.map((challenge: CodingChallengeEntity) => {
//           return (
//             <>
//               <Link
//                 key={challenge?.id}
//                 href={{
//                   pathname: `/codingchallenges/${challenge?.id}`,
//                 }}
//               >
//                 <p>{challenge?.attributes?.title}</p>
//                 <p>{challenge?.id}</p>
//               </Link>
//               {console.log('challenge', challenge)}

//               <ChallengeCard challenge={challenge} />
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// // put challknge within loop !
// // you don t have to name it props={challnge}, naming it challnege will have it send it as prop.challnge and you will recive it as prop.challenge in the challnge card

// export default Codingchallenges;

// // GetChallengesQuery is the full query object
// // getStaticProps runs at buildtime so no context so need to initalize with null
// // Cannot have autorization on challanges since static build, but we can create token based server side autoetication
// // Comments - do client side rendering

// export const getStaticProps = async (ctx: GetStaticPropsContext) => {
//   console.log('context', ctx.params);
//   try {
//     const client = initializeApollo(null, null);
//     const { data, error } = await client.query<GetChallengesQuery>({
//       query: GetChallengesExtendedDocument,
//       variables: { id: 1 },
//     });

//     // console.log('data from server', data?.codingChallenges?.data);
//     // {
//     //   data?.codingChallenges?.data?.map((item) => {
//     //     console.log('item', item?.attributes?.comments);
//     //   });
//     // }

//     const codingChallenges = data?.codingChallenges?.data;

//     if (codingChallenges) {
//       return {
//         props: { codingChallenges },
//         revalidate: 10,
//       };
//     }
//     if (error || !codingChallenges) {
//       return {
//         notFound: true,
//       };
//     }
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// };

// // Extra

// // <Grid container spacing={6}>
// //   <Grid item xs={12} sx={{ paddingBottom: 4 }}>
// //     <Typography variant="h5">Projets</Typography>
// //   </Grid>
// //   {Data.map((challenge) => (
// //     <Grid key={project.title} item xs={12} sm={6} md={4}>
// //       {/* <ProjectCard project={project} /> */}
// //     </Grid>
// //   ))}
// // </Grid>
