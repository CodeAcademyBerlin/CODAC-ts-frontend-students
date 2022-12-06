// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Github from 'mdi-material-ui/Github'
import Group from 'mdi-material-ui/AccountGroup'
import Link from 'next/link'
import { Contributor } from '../../@types'

const CardGithub = ({ contributor }: { contributor: Contributor }) => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'primary.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar alt={contributor.login} src={contributor.avatar_url} sx={{ width: 34, height: 34, marginRight: 2.75 }} />


          <Typography
            variant='h6'
            sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          >
            {contributor.login}

          </Typography>
        </Box>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
          With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is
          directed.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Group sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                {contributor.contributions}
              </Typography>
            </Box>
            <Link style={{ textDecoration: "none" }} href={contributor.html_url}>
              <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: "none" }}>
                <Github sx={{ marginRight: 2.5 }} />
              </Box>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardGithub
