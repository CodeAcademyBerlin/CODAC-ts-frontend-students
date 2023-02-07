// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { GetStaticProps } from 'next/types';
import QuestCard from 'src/components/Quests/questsCard';
import { ENROLLING_PATH } from 'src/definitions/contentFilePaths';
import { getFrontmatters } from 'src/lib/markdown';
import { Contributor, EnrollQuest } from 'src/types';

const Enrollings = ({ enrolling }: { enrolling: EnrollQuest[] }) => {
  console.log('enrolling', enrolling);
  return (
    <>
      {enrolling.map((enrollQuest, i) => {
        return <QuestCard key={i} enrollQuest={enrollQuest} />;
      })}
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
