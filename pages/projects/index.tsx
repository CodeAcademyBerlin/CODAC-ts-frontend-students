// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { GetServerSideProps } from 'next'
import { Contributor } from '../../@types'
import CardGithub from '../../components/contributors-page/CardGithub'
import { projectsFilePaths } from '../../lib/contentFilePaths'




const Projects = ({ projectsFilePaths }: any) => {
  console.log('projectsFilePaths', projectsFilePaths)
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Contributors</Typography>
      </Grid>
      {projectsFilePaths.map((contributor: Contributor) => <Grid item xs={12} sm={6} md={4}>
        {/* <CardGithub key={contributor.login} contributor={contributor} /> */}
      </Grid>)}
    </Grid>
  )
}

export default Projects

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: projectsFilePaths
  }
}