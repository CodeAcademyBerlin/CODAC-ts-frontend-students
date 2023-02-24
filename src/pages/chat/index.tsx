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
import Chat from 'src/components/chat-page/ChatRooms';
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
      {socket && <Chat />}
    </Box>
  );
};

export default ChatPage;

//! Q
// does this create a new socket when we change room?
// todo: chat room options generated also for staff
// todo: fetching chat history for a specific room
// todo: see how the listen events are configured
//? is there any way i can get a single use of various nextjs USPs into this project? getStaticProps etc etc
//? room join?
//? get history. if we know the chat.length, then we can retrieve the last 10 messages, or just the last one
// i need to get chats based on cohort name
// what's this schema for: createChat(data: ChatInput!): ChatEntityResponse
// what is variables in useGetChatsQuery?
// todo: create room options based on permissions of the user
// is ther best structure for this when we query the chat history for a specific cohort after a 'room' has been chosen, instead of gettiing all chat histories?

//* postChatMessage mutation created

//! graphql mutations

//prefix / graphql for playground
