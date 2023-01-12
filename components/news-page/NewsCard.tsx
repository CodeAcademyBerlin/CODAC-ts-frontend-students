// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
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
        <CardHeader
        avatar={<Avatar>U</Avatar>}
        title={newsPost.attributes?.author?.data?.attributes?.username}
        subheader={updatedDate}
         />
      </CardContent>
          {newsPost.attributes?.image?.data?.map((oneimage, i: number) =>
              <CardMedia component={"img"} height={"274"} image={oneimage.attributes?.url || "no image"} key={i} />
          )}
      <CardContent>
        <Box sx={{ mr: 1, mb: 2, ml: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{newsPost.attributes?.title}</Typography> <br/>
          <Typography variant='body2'>{newsPost.attributes?.post}</Typography> <br/>

        {/* show likes if likes exist */}
       
            {newsPost.attributes?.likes?.data && newsPost.attributes?.likes?.data?.length > 0 ?
                (<div>
                    <Typography variant='caption'>Liked by:</Typography> 
                    {newsPost.attributes?.likes?.data?.map((like, i: number) =>
                    <div key={i}>
                        <Typography variant='caption'>{like.attributes?.username}</Typography>
                    </div>
                        )}
                </div>) : ""
                }
                 
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
