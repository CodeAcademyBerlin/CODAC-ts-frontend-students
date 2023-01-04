// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { GetServerSideProps } from 'next/types'
import { Contributor, Project } from '../../types'
import CardGithub from '../../components/projects-page/GitHubContributors'
import ProjectCard from '../../components/projects-page/ProjectCard'
import { projectsFilePaths, PROJECTS_PATH } from '../../lib/contentFilePaths'
import { getFrontmatters } from '../../lib/markdown'



const Projects = ({ projects }: { projects: Project[] }) => {
  console.log('projects', projects)
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Projets</Typography>
      </Grid>
      {projects.map((project) => <Grid key={project.name} item xs={12} sm={6} md={4}>
        <ProjectCard project={project} />
      </Grid>)}

    </Grid>
  )
}

export default Projects

export const getServerSideProps: GetServerSideProps = async () => {

  const projects = await getFrontmatters(projectsFilePaths, PROJECTS_PATH)

  return {
    props: { projects }
  }
}