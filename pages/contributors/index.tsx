// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { GetServerSideProps } from 'next'
import { Contributor } from '../../@types'
import CardGithub from '../../components/contributors-page/CardGithub'




const Contributors = ({ data }: any) => {
  console.log('data', data)
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Contributors</Typography>
      </Grid>
      {data.map((contributor: Contributor) => <Grid item xs={12} sm={6} md={4}>
        <CardGithub contributor={contributor} />
      </Grid>)}
    </Grid>
  )
}

export default Contributors

export const getServerSideProps: GetServerSideProps = async () => {
  const req = await fetch(`https://api.github.com/repos/CodeAcademyBerlin/CODAC-ts-frontend-students/contributors`);
  const data = await req.json();

  return {
    props: { data },
  }
}