import {
  Avatar,
  Box,
  CardContent,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { VsBattleEntity } from 'cabServer/global/__generated__/types';
import React, { ReactElement } from 'react';

import ExpandButton from '../common/ExpandButton';

type ExpandComponentProps = {
  vsBattle: VsBattleEntity;
};

function VotersList(props: ExpandComponentProps) {
  const theme = useTheme();

  const [expanded, setExpanded] = React.useState(false);

  const option1Voters = props.vsBattle.attributes?.option_1_voters?.data;
  const option2Voters = props.vsBattle.attributes?.option_2_voters?.data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <ExpandButton onClick={handleExpandClick} expand={expanded} />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider>
            <Typography
              sx={{
                fontVariant: 'all-small-caps',
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1.15rem',
              }}
            >
              Voters
            </Typography>
          </Divider>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <List dense={true} disablePadding={true}>
                {option1Voters?.slice(0, 5).map((voter) => {
                  if (option1Voters) {
                    return (
                      <>
                        <ListItem sx={{ lineHeight: 1 }}>
                          <Avatar
                            src={
                              voter.attributes?.avatar?.data?.attributes?.url ||
                              ''
                            }
                            sx={{
                              fontWeight: theme.typography.fontWeightBold,
                              fontSize: 15,
                              color: theme.palette.common.white,
                              backgroundColor: theme.palette.primary.light,
                              mr: 3,
                              height: 20,
                              width: 20,
                            }}
                          ></Avatar>
                          <ListItemText>
                            {voter.attributes?.firstname}
                            {''} {voter.attributes?.lastname}
                          </ListItemText>
                        </ListItem>
                        <Divider sx={{ margin: 0 }} />
                      </>
                    );
                  }
                })}
              </List>
              <List dense={true} disablePadding={true}>
                {option2Voters?.slice(0, 5).map((voter) => {
                  if (option2Voters) {
                    return (
                      <>
                        <ListItem>
                          <Avatar
                            src={
                              voter.attributes?.avatar?.data?.attributes?.url ||
                              ''
                            }
                            sx={{
                              fontWeight: theme.typography.fontWeightBold,
                              color: theme.palette.common.white,
                              backgroundColor: theme.palette.primary.light,
                              mr: 3,
                              height: 20,
                              width: 20,
                            }}
                          ></Avatar>
                          <ListItemText>
                            {voter.attributes?.firstname}
                            {''} {voter.attributes?.lastname}
                          </ListItemText>
                        </ListItem>
                        <Divider sx={{ margin: 0 }} />
                      </>
                    );
                  }
                })}
              </List>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
    </Box>
  );
}

export default VotersList;
