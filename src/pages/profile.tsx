// ** React Imports
// ** Demo Tabs Imports
// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import MuiTab, { TabProps } from '@mui/material/Tab';
// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline';
import InformationOutline from 'mdi-material-ui/InformationOutline';
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline';
import { GetServerSideProps } from 'next/types';
import { SyntheticEvent, useState } from 'react';

import { UsersPermissionsMe } from '../../cabServer/global/__generated__/types';
import { GetMeDocument } from '../../cabServer/queries/__generated__/user';
import TabAccount from '../components/profile-page/TabAccount';
import TabInfo from '../components/profile-page/TabInfo';
import TabSecurity from '../components/profile-page/TabSecurity';
import { initializeApollo } from '../lib/apolloClient';

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
}));

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const AccountSettings = (user: UsersPermissionsMe) => {
  // ** State
  const [value, setValue] = useState<string>('account');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="account-settings tabs"
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value="account"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Account</TabName>
              </Box>
            }
          />
          {/* <Tab
            value="security"
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LockOpenOutline />
                <TabName>Security</TabName>
              </Box>
            }
          />
          <Tab
            value="info"
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <InformationOutline />
                <TabName>Info</TabName>
              </Box>
            }
          /> */}
        </TabList>

        <TabPanel sx={{ p: 0 }} value="account">
          <TabAccount user={user} />
        </TabPanel>
        {/* <TabPanel sx={{ p: 0 }} value="security">
          <TabSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="info">
          <TabInfo />
        </TabPanel> */}
      </TabContext>
    </Card>
  );
};

export default AccountSettings;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const { data, error } = await client.query({ query: GetMeDocument });

    const user = data.me;
    console.log(data);
    return {
      props: user,
    };
  } catch (error) {
    return {
      props: { user: null },
    };
  }
};
