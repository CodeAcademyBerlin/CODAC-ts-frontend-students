import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Socket } from 'dgram';
import * as React from 'react';
import SocketIOClient from 'socket.io-client';
import { io } from 'socket.io-client';
import Chat from 'src/components/chat-page/Chat';

import socketio from './api/socketio';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface IMsg {
  user: string;
  msg: string;
  ts: string;
  // rn: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [connected, setConnected] = React.useState<boolean>(false);
  const [msg, setMsg] = React.useState<string>('');
  const [chat, setChat] = React.useState<IMsg[]>([]);
  const [socket, setSocket] = React.useState<any>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log('tabs value', value);
  console.log('socket value', socket);

  React.useEffect((): any => {
    const newSocket = SocketIOClient({
      path: '/api/socketio',
    });
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('newSocket.id', newSocket.id);
      // const roomId = `${value}`;
      // socket.join(roomId);
      // and then later
      // socket.to(roomId).emit('hi');
    });
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Room One" {...a11yProps(0)} />
          <Tab label="Room Two" {...a11yProps(1)} />
          <Tab label="Room Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Room One
        {socket && <Chat socket={socket} roomId={value} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Room Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Room Three
      </TabPanel>
    </Box>
  );
}
