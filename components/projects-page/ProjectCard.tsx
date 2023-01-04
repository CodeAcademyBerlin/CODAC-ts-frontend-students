// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Project } from '../../types'
import { first } from 'lodash'
import { useEffect, Suspense } from 'react'
import GitHubContributors from './GitHubContributors'
import Link from 'next/link'
import StyledLink from '../common/StyledLink'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia sx={{ height: '12.625rem' }} image={project.image} />
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>{project.name}</Typography>
            <Typography variant='caption'>{project.description}</Typography>
          </Box>
          <StyledLink href={`/projects/${project.name}`}>
            <Button variant='contained'>see more</Button>
          </StyledLink>
        </Box>
        {project.github_username && project.github_repo &&
          <GitHubContributors repo={project.github_repo} username={project.github_username} />}
      </CardContent>
    </Card>
  )
}

export default ProjectCard
