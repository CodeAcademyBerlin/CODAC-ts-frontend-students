// ** React Imports
import Box, { BoxProps } from '@mui/material/Box';
// ** MUI Components
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// ** Next Import
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import SocketIOClient from 'socket.io-client';
import { io } from 'socket.io-client';

import ChatRooms from '../../components/chat-page/ChatRooms';
import { useSocket } from '../../hooks/useSocket';

const ChatPage = () => {
  const { socket, connectSocket } = useSocket();

  useEffect(() => {
    connectSocket();
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
      <Typography variant="h4">Whatsthat</Typography>
      {socket && <ChatRooms />}
    </Box>
  );
};

export default ChatPage;
