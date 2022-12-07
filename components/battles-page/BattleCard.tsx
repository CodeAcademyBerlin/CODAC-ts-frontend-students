// ** MUI Imports
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import { VsBattle } from '../../graphql/global/ __generated__/types'
import VoteOutline from 'mdi-material-ui/VoteOutline'
import DenseTable from './BattleTable'

type BattleCardProps = {
  vsBattle: VsBattle,
}

const BattleCard = (props : BattleCardProps) => {
  
  return (
    <Card style={{marginBottom:"2em"}}>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
        }}
      >
        <Avatar
          sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
        >
          <VoteOutline sx={{ fontSize: '2rem' }} />
        </Avatar>
        <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
          {props.vsBattle.title}
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 6 }}>
          voice your opinion 
        </Typography>
        <div>
        <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5)}}>
        {props.vsBattle.option1}
        </Button>
        <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5), marginLeft:"2em"}}>
        {props.vsBattle.option2}
        </Button>
        </div>
      </CardContent>
      <DenseTable option1={props.vsBattle?.option_1_voters.length || 0} option2={props.vsBattle?.option_2_voters.length || 0}/>
    </Card>
  )
}

export default BattleCard
