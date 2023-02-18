// ** React Imports
import Box, { BoxProps } from '@mui/material/Box';
// ** MUI Components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useGetChatsQuery } from 'cabServer/queries/__generated__/chats';
import { forEach } from 'lodash';
import Image from 'next/image';
// ** Next Import
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import SocketIOClient from 'socket.io-client';
import { io } from 'socket.io-client';
import Chat from 'src/components/chat-page/Chat';
import { useSocket } from 'src/hooks/useSocket';

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
  const { socket, connectSocket } = useSocket();
  const [test, setTest] = useState();
  const { data, loading, error } = useGetChatsQuery({
    variables: {},
  });

  useEffect(() => {
    connectSocket();
  }, []);
  //! once connection. then chat rooms to choose. connection after choosing

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('chat:update', (chat: Chat) => {
  //       console.log('chat', chat);
  //       console.warn('data', data);
  //       setTest(chat);
  //     });
  //   }
  // }, [socket]);
  // console.warn('data', data);
  // console.warn('chat', test);

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
      {socket && <Chat />}
      {/* <Typography variant="h6">{data.chats.data}</Typography> */}

      {/* {socket && <Chat socket={socket} roomId={'test'} />} */}
    </Box>
  );
};

export default ChatPage;

//! Q
// is users_permissions_user a term you used to refer to the author? or does this not exist yet?

//! graphql mutations

//prefix / graphql for playground
