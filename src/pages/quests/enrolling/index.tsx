// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { GetStaticProps } from 'next/types';
import NextBreadcrumbs from 'src/components/breadcrumb/NextBreadcrumbs';
import EnrollingQuestCard from 'src/components/Quests/EnrollingQuestCard';
import { ENROLLING_PATH } from 'src/definitions/contentFilePaths';
import { getFrontmatters } from 'src/lib/markdown';
import { Contributor, Quests } from 'src/types';

import styles from '../../../components/Quests/quests.module.css';

const Enrollings = ({ enrolling }: { enrolling: Quests[] }) => {
  console.log('enrolling', enrolling);
  return (
    <>
      <NextBreadcrumbs />
      <div className={styles.wrapper}>
        {enrolling.map((enrollQuest, i) => {
          return <EnrollingQuestCard key={i} enrollQuest={enrollQuest} />;
        })}
      </div>
    </>
  );
};

export default Enrollings;

export const getStaticProps: GetStaticProps = async () => {
  const enrolling = await getFrontmatters(ENROLLING_PATH);
  console.log('enrolling path', enrolling);
  // const projects = [
  //   {
  //     name: 'CODAC',
  //     description: 'Coda Academy Berlin Community Platform',
  //     github_username: 'CodeAcademyBerlin',
  //     github_repo: 'CODAC-ts-frontend-students',
  //     image: '/assets/screenshot.png'
  //   }
  // ]
  return {
    props: { enrolling },
  };
};
// export const getServerSideProps: GetServerSideProps = async () => {
//   const projects = await getFrontmatters(PROJECTS_PATH);
//   // console.log('projects', projects)
//   // const projects = [
//   //   {
//   //     name: 'CODAC',
//   //     description: 'Coda Academy Berlin Community Platform',
//   //     github_username: 'CodeAcademyBerlin',
//   //     github_repo: 'CODAC-ts-frontend-students',
//   //     image: '/assets/screenshot.png'
//   //   }
//   // ]
//   return {
//     props: { projects },
//   };
// };
