// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { NewsPostEntity } from "../../cabServer/global/__generated__/types"


const ProjectCard = ({ newsPost }: { newsPost: NewsPostEntity }) => {
    console.log('news post component', newsPost)
    
  const updatedDate: String = new Date(newsPost.attributes?.updatedAt).toLocaleString("en-UK", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
    
    
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Box>
          <Typography variant='caption'>{newsPost.attributes?.author?.data?.attributes?.username}</Typography> 
          <br />
          <Typography variant='caption'>{updatedDate}</Typography>
        </Box>
      </CardContent>
      <CardMedia component={"img"} image={newsPost.attributes?.image?.data?.attributes?.url || "no image"} />
      <CardContent>
        <Box sx={{ mr: 2, mb: 2, ml: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6'>{newsPost.attributes?.title}</Typography>
          <Typography variant='body2'>{newsPost.attributes?.post}</Typography> <br/>
                  
          <Typography variant='caption'>Liked by:</Typography> 
                  {newsPost.attributes?.likes?.data?.map((like, i: number) =>
               <Box key={i}>
                          <Typography variant='caption'>{like.attributes?.username}</Typography>
                           </Box>
                  )}
                 
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
