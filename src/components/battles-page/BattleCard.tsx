import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// ** MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ChevronDoubleDown from 'mdi-material-ui/ChevronDoubleDown';
import VoteOutline from 'mdi-material-ui/VoteOutline';
import * as React from 'react';

// ** Icons Imports
import {
  UsersPermissionsMe,
  VsBattleEntity,
} from '../../../cabServer/global/__generated__/types';
import { useVoteVsBattleMutation } from '../../../cabServer/mutations/__generated__/battles';
import DenseTable from './BattleTable';

type BattleCardProps = {
  vsBattle: VsBattleEntity;
  handleVote: (vsBattleId: string, option: number) => void;
  user: UsersPermissionsMe;
};
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BattleCard = (props: BattleCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const option1IsVoted = () => {
    const option1Voters = props.vsBattle.attributes?.option_1_voters?.data;
    if (
      option1Voters?.filter((item) => item.id === props.user.id).length === 0
    ) {
      return false;
    } else return true;
  };

  const option2IsVoted = () => {
    const option2Voters = props.vsBattle.attributes?.option_2_voters?.data;
    if (
      option2Voters?.filter((item) => item.id === props.user.id).length === 0
    ) {
      return false;
    } else return true;
  };

  const option1Voters = props.vsBattle.attributes?.option_1_voters?.data;
  const option2Voters = props.vsBattle.attributes?.option_2_voters?.data;

  // console.log('user', props.user);
  console.log('props.vsBattle', props.vsBattle);

  return (
    <Card style={{ marginBottom: '2em' }}>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: (theme) => `${theme.spacing(9.75, 5, 9.25)} !important`,
        }}
      >
        <Avatar
          sx={{
            width: 50,
            height: 50,
            marginBottom: 2.25,
            color: 'common.white',
            backgroundColor: 'primary.main',
          }}
        >
          <VoteOutline sx={{ fontSize: '2rem' }} />
        </Avatar>
        <Typography variant="h6" sx={{ marginBottom: 2.75 }}>
          {props.vsBattle.attributes?.title}
        </Typography>
        {props.user.id ? (
          <Typography variant="body2" sx={{ marginBottom: 6 }}>
            voice your opinion
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ marginBottom: 6 }}>
            Log in to voice your opinion
          </Typography>
        )}
        <div>
          {/* {option1Voters?.filter((item) => item.id === props.user.id).length ===
          0 ? (
            <Button
              variant="contained"
              sx={{ padding: (theme) => theme.spacing(1.75, 5.5) }}
              onClick={() => {
                props.handleVote(props.vsBattle.id!, 1);
              }}
            >
              {props.vsBattle.attributes?.option1}
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                padding: (theme) => theme.spacing(1.75, 5.5),
              }}
              color="secondary"
              onClick={() => {
                props.handleVote(props.vsBattle.id!, 1);
              }}
            >
              {props.vsBattle.attributes?.option1}
            </Button>
          )}
          {option2Voters?.filter((item) => item.id === props.user.id).length ===
          0 ? (
            <Button
              variant="contained"
              sx={{ padding: (theme) => theme.spacing(1.75, 5.5) }}
              onClick={() => {
                props.handleVote(props.vsBattle.id!, 1);
              }}
            >
              {props.vsBattle.attributes?.option2}
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                padding: (theme) => theme.spacing(1.75, 5.5),
              }}
              color="secondary"
              onClick={() => {
                props.handleVote(props.vsBattle.id!, 1);
              }}
            >
              {props.vsBattle.attributes?.option2}
            </Button>
          )} */}
          <Button
            variant="contained"
            sx={{
              padding: (theme) => theme.spacing(1.75, 5.5),
              marginLeft: '2em',
            }}
            onClick={() => {
              props.user
                ? () => {
                    props.handleVote(props.vsBattle.id!, 1);
                  }
                : null;
            }}
          >
            {props.vsBattle.attributes?.option1}
          </Button>

          <Button
            variant="contained"
            sx={{
              padding: (theme) => theme.spacing(1.75, 5.5),
              marginLeft: '2em',
            }}
            onClick={() => {
              props.user
                ? () => {
                    props.handleVote(props.vsBattle.id!, 2);
                  }
                : null;
            }}
          >
            {props.vsBattle.attributes?.option2}
          </Button>
        </div>
      </CardContent>
      {props.user.id && (
        <div>
          <DenseTable
            option1={
              props.vsBattle?.attributes?.option_1_voters?.data.length || 0
            }
            option2={
              props.vsBattle?.attributes?.option_2_voters?.data.length || 0
            }
          />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ChevronDoubleDown color="primary" />
          </ExpandMore>
        </div>
      )}
    </Card>
  );
};

export default BattleCard;
