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
          <Box>
            <List dense={true}>
              <ListItem>
                <Avatar
                  sx={{
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: 15,
                    color: theme.palette.common.white,
                    backgroundColor: theme.palette.primary.light,
                    mr: 3,
                  }}
                >
                  {' '}
                  AJ
                </Avatar>
                <ListItemText></ListItemText>
              </ListItem>
              <Divider />
            </List>
          </Box>
        </CardContent>
      </Collapse>
    </Box>
  );
}

export default ExpandComponent;
