// ** React Imports
import Box, { BoxProps } from '@mui/material/Box';
// ** MUI Components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// ** Next Import
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import SocketIOClient from 'socket.io-client';
import { io } from 'socket.io-client';
import Chat from 'src/components/chat-page/Chat';

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}));

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const ChatPage = () => {
  const [socket, setSocket] = useState<any>(null);

  useEffect((): any => {
    if (!socket) {
      const newSocket = SocketIOClient({
        path: '/api/socketio',
      });
      setSocket(newSocket);

      //? here we listed for 'connect', but this property doesn't exist on newSocket?
      newSocket.on('connect', () => {
        console.log('newSocket.id', newSocket.id);
        console.log('newSocket', newSocket);
      });
    }
  }, []);
  return (
    <Box
      sx={{
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1">Chat</Typography>
      {socket && <Chat socket={socket} roomId={'test'} />}
    </Box>
  );
};

export default ChatPage;

//! Q
// - why does communication with out API folder look different for each file? with socketio.ts  it is 'path: '/api/socketio'' but with chat.ts we use fetch?
// - i'm a bit confused how, for example, we can invoke the socketio function with

//! taje useeffect  from context.
// graphql mutation to add message to chat
//
