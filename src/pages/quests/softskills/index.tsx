// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { GetStaticProps } from 'next/types';
import NextBreadcrumbs from 'src/components/breadcrumb/NextBreadcrumbs';
import SkillsQuestCard from 'src/components/Quests/SkillsQuestCard';
import { SOFTSKILLS_PATH } from 'src/definitions/contentFilePaths';
import { getFrontmatters } from 'src/lib/markdown';
import { Contributor, Quests } from 'src/types';

const Softskills = ({ softskills }: { softskills: Quests[] }) => {
  console.log('softskills', softskills);
  return (
    <>
      <NextBreadcrumbs />
      {softskills.map((softskillsQuest, i) => {
        return <SkillsQuestCard key={i} softskillsQuest={softskillsQuest} />;
      })}
    </>
  );
};

export default Softskills;

export const getStaticProps: GetStaticProps = async () => {
  const softskills = await getFrontmatters(SOFTSKILLS_PATH);
  console.log('softskills path', softskills);
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
    props: { softskills },
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
