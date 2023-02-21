// ** React Imports
import Box, { BoxProps } from '@mui/material/Box';
// ** MUI Components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useGetChatsQuery } from 'cabServer/queries/__generated__/chats';
import { useGetCohortsQuery } from 'cabServer/queries/__generated__/cohorts';
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
  const { data, loading, error } = useGetCohortsQuery({
    variables: {},
  });
  const { socket, connectSocket } = useSocket();
  const [test, setTest] = useState();
  // const { data, loading, error } = useGetChatsQuery({
  //   variables: {},
  // });

  useEffect(() => {
    connectSocket();
    let cohorts = data?.cohorts.data;
    console.log(cohorts);
  }, []);
  //! once connection. then chat rooms to choose. connection after choosing

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
      {/* <Typography variant="h6">{data.chats.data}</Typography> */}
      {/* {socket && <Chat socket={socket} roomId={'test'} />} */}
    </Box>
  );
};

export default ChatPage;

//! Q
// i need to get chats based on cohort name
// it seems the nested user permissions/author relation is not working. it only accesses a count.
// attempted getCohorts query. didn't work
// what's this schema for: createChat(data: ChatInput!): ChatEntityResponse
// create chat message mutation
// what is variables in useGetChatsQuery?
// is chatHistory necessary?
// is role.id a placeholder for cohort id? if not maybe we could add that field?
// todo: create room options based on permissions of the user
// is ther best structure for this when we query the chat history for a specific cohort after a 'room' has been chosen, instead of gettiing all chat histories?

//* postChatMessage mutation created

//! graphql mutations

//prefix / graphql for playground
