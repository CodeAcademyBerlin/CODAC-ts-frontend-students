// ** React Imports
// ** MUI Imports
import { SvgIconProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactNode } from 'react';

interface UserIconProps {
  iconProps?: SvgIconProps;
  icon:
    | string
    | ReactNode
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string });
}

const UserIcon = (props: UserIconProps) => {
  // ** Props
  const { icon, iconProps } = props;

  const IconTag = icon;

  let styles;

  /* styles = {
    color: 'red',
    fontSize: '2rem'
  } */

  // @ts-ignore
  return <IconTag {...iconProps} style={{ ...styles }} />;
};

export default UserIcon;
