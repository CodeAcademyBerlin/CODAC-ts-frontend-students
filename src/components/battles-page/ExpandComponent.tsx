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
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { VsBattleEntity } from 'cabServer/global/__generated__/types';
import ChevronDoubleDown from 'mdi-material-ui/ChevronDoubleDown';
import React, { ReactElement } from 'react';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

type ExpandComponentProps = {
  vsBattle: VsBattleEntity;
};

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

function ExpandComponent(props: ExpandComponentProps) {
  const theme = useTheme();

  const [expanded, setExpanded] = React.useState(false);

  const option1Voters = props.vsBattle.attributes?.option_1_voters?.data;
  const option2Voters = props.vsBattle.attributes?.option_2_voters?.data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ChevronDoubleDown color="primary" />
      </ExpandMore>

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
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <List dense={true}>
              {option1Voters?.map((voter) => {
                if (option1Voters) {
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
                            fontSize: 15,
                            color: theme.palette.common.white,
                            backgroundColor: theme.palette.primary.light,
                            mr: 3,
                          }}
                        ></Avatar>
                        <ListItemText>
                          {voter.attributes?.firstname}
                          {''} {voter.attributes?.lastname}
                        </ListItemText>
                      </ListItem>
                      <Divider />
                    </>
                  );
                }
              })}
            </List>
            <List dense={true}>
              {option2Voters?.map((voter) => {
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
                            fontSize: 15,
                            color: theme.palette.common.white,
                            backgroundColor: theme.palette.primary.light,
                            mr: 3,
                          }}
                        ></Avatar>
                        <ListItemText>
                          {voter.attributes?.firstname}
                          {''} {voter.attributes?.lastname}
                        </ListItemText>
                      </ListItem>
                      <Divider />
                    </>
                  );
                }
              })}
            </List>
          </Box>
        </CardContent>
      </Collapse>
    </Box>
  );
}

export default ExpandComponent;
