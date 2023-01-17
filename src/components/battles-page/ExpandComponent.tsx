import {
  Box,
  CardContent,
  Collapse,
  Divider,
  List,
  Typography,
  useTheme,
} from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ChevronDoubleDown from 'mdi-material-ui/ChevronDoubleDown';
import React from 'react';

import VotersList from './VotersList';

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

function ExpandComponent() {
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
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <VotersList></VotersList>
            <VotersList></VotersList>
          </Box>
        </CardContent>
      </Collapse>
    </Box>
  );
}

export default ExpandComponent;
