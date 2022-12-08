// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import Github from 'mdi-material-ui/Github'
import Group from 'mdi-material-ui/AccountGroup'
import Link from 'next/link'
import { Contributor } from '../../@types'
import { Button, AvatarGroup } from '@mui/material'
import { Suspense, useEffect, useState } from 'react'

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const GitHubContributors = ({ repo, username }: { repo: string, username: string }) => {
  const [contributors, setContributors] = useState<Contributor[] | null>(null)
  console.log('contributors', contributors)
  useEffect(() => {
    const getGitHubContributors = async () => {
      const req = await fetch(`https://api.github.com/repos/${username}/${repo}/contributors`);
      const data = await req.json();
      setContributors(data)
    }
    getGitHubContributors()
  }, [])

  return (
    <Suspense fallback={<p>Loading GitHub Data...</p>}>


      <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
          {contributors?.length} contributors
        </Typography>

        <AvatarGroup max={10}>
          {contributors && contributors.map(contributor => <Avatar src={contributor.avatar_url} alt='Alice Cobb' />)}
        </AvatarGroup>

      </Box>
    </Suspense>
  )
}

export default GitHubContributors
