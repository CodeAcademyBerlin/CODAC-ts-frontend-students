import { Collapse, IconButton, IconButtonProps, styled } from '@mui/material';
import { ChevronDoubleDown } from 'mdi-material-ui';
import React from 'react';

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

type ExpandButtonProps = {
  onClick: () => void;
  expand: boolean;
};

function ExpandButton(props: ExpandButtonProps) {
  return (
    <div>
      <ExpandMore
        expand={props.expand}
        onClick={props.onClick}
        aria-expanded={props.expand}
        aria-label="show more"
      >
        <ChevronDoubleDown color="primary" />
      </ExpandMore>
      <Collapse in={props.expand} timeout="auto" unmountOnExit></Collapse>
    </div>
  );
}

export default ExpandButton;
