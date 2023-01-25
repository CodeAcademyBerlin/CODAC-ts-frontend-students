import { Box, Tooltip, useTheme, Zoom } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// ** MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ApexOptions } from 'apexcharts';
import VoteOutline from 'mdi-material-ui/VoteOutline';
import * as React from 'react';
import { useEffect } from 'react';

// ** Icons Imports
import {
  UsersPermissionsMe,
  VsBattleEntity,
} from '../../../cabServer/global/__generated__/types';
import ReactApexcharts from '../libs/react-apexcharts/dynamicimport';
import ApexChartWrapper from '../libs/react-apexcharts/wrapper';
import DenseTable from './BattleTable';
import VotersList from './VotersList';

type BattleCardProps = {
  vsBattle: VsBattleEntity;
  handleVote: (vsBattleId: string, option: number) => void;
  user: UsersPermissionsMe | null;
  showChart: boolean;
};

const BattleCard = (props: BattleCardProps) => {
  const theme = useTheme();
  useEffect(() => {}, [props.user]);

  const option1IsVoted = () => {
    const option1Voters = props.vsBattle.attributes?.option_1_voters?.data;
    if (
      option1Voters?.filter((item) => item.id === props.user?.id).length === 0
    ) {
      return false;
    } else if (props.user === null) {
      return false;
    } else return true;
  };

  const option2IsVoted = () => {
    const option2Voters = props.vsBattle.attributes?.option_2_voters?.data;
    if (
      option2Voters?.filter((item) => item.id === props.user?.id).length === 0
    ) {
      return false;
    } else if (props.user === null) {
      return false;
    } else return true;
  };

  const archived = () => {
    if (props.vsBattle.attributes?.archived === false) {
      return true;
    } else return false;
  };

  const option1voters =
    props.vsBattle?.attributes?.option_1_voters?.data.length || 0;
  const option2voters =
    props.vsBattle?.attributes?.option_2_voters?.data.length || 0;
  const option1title = props.vsBattle?.attributes?.option1!;
  const option2title = props.vsBattle?.attributes?.option2!;
  const color1 = theme.palette.primary.main;
  const color2 = theme.palette.secondary.main;
  console.log(color1);

  const series: ApexOptions['series'] = [option1voters, option2voters];

  const options: ApexOptions = {
    // chart: {
    //   width: 250,
    //   type: 'donut',
    // },
    colors: [color1, color2],
    labels: [option1title, option2title],
    // responsive: [
    //   {
    //     breakpoint: 200,
    //     options: {
    //       // chart: {
    //       //   width: 200,
    //       // },
    //       // legend: {
    //       //   position: 'bottom',
    //       // },
    //     },
    //   },
    // ],
  };

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
        {props.user?.id ? (
          <Typography variant="body2" sx={{ marginBottom: 6 }}>
            {archived() ? 'voice your opinion' : 'voting is now closed'}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ marginBottom: 6 }}>
            Log in to voice your opinion
          </Typography>
        )}
        <div>
          <Tooltip
            title={props.user?.id ? '' : 'Log in to vote'}
            TransitionComponent={Zoom}
            placement="top"
            arrow
          >
            <Button
              variant="contained"
              sx={{
                padding: (theme) => theme.spacing(1.75, 5.5),
                marginLeft: '2em',
              }}
              onClick={() => {
                if (props.user?.id && archived()) {
                  props.handleVote(props.vsBattle.id!, 1);
                  console.log('onClick button');
                }
              }}
              color={option1IsVoted() ? 'secondary' : 'primary'}
            >
              {props.vsBattle.attributes?.option1}
            </Button>
          </Tooltip>
          <Tooltip
            title={props.user?.id ? '' : 'Log in to vote'}
            TransitionComponent={Zoom}
            placement="top"
            arrow
          >
            <Button
              variant="contained"
              sx={{
                padding: (theme) => theme.spacing(1.75, 5.5),
                marginLeft: '2em',
              }}
              onClick={() => {
                if (props.user?.id && archived()) {
                  props.handleVote(props.vsBattle.id!, 2);
                  console.log('onClick button');
                }
              }}
              color={option2IsVoted() ? 'secondary' : 'primary'}
            >
              {props.vsBattle.attributes?.option2}
            </Button>
          </Tooltip>
        </div>
      </CardContent>
      {/* {props.user?.id && ( */}
      {/* <div> */}
      {(option1IsVoted() || option2IsVoted()) && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {props.showChart ? (
            <DenseTable
              option1={
                props.vsBattle?.attributes?.option_1_voters?.data.length || 0
              }
              option2={
                props.vsBattle?.attributes?.option_2_voters?.data.length || 0
              }
            />
          ) : (
            <ApexChartWrapper>
              <Box
                id="chart"
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <ReactApexcharts
                  type="donut"
                  options={options}
                  series={series}
                  width={250}
                  height={'100%'}
                ></ReactApexcharts>
              </Box>
            </ApexChartWrapper>
          )}
          <VotersList vsBattle={props.vsBattle} />
        </Box>
      )}
      {/* </div> */}
      {/* )} */}
    </Card>
  );
};

export default BattleCard;
