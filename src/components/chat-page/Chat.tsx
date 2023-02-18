// import './styles.module.css';

import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { TableContainer } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Chat } from 'cabServer/global/__generated__/types';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import SocketIOClient from 'socket.io-client';
import { useAuth } from 'src/hooks/useAuth';
import { useSocket } from 'src/hooks/useSocket';

import favicon from '../../../public/favicon.ico';

//! logged ibnuser

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  maxWidth: '20vw',
  color: theme.palette.text.secondary,
}));

interface IMsg {
  user: string;
  msg: string;
  ts: string;
  // rn: number;
}
//? useAuth userobject
// component
const ChatRoom: React.FC = () => {
  // const Chat: React.FC = ({ socket, roomId }) => {
  const { socket } = useSocket();
  const inputRef = useRef(null);
  // connected flag
  const [connected, setConnected] = useState<boolean>(false);

  // init chat and message
  const [chat, setChat] = useState<Chat | null>(null);
  const [msg, setMsg] = useState<string>('');
  const [ts, setTs] = useState(new Date().toLocaleDateString('de-DE'));
  const [backlog, setBacklog] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (socket) {
      socket.on('chat:update', (chatEvent: Chat) => {
        setChat(chatEvent);
      });

      socket.on('chat', (chatEvent: Chat) => {
        console.log(chatEvent);
      });
    }
  }, [socket]);

  const sendMessage = async () => {
    if (msg) {
      const message: IMsg = {
        // user: user.username,
        user: 'hi',
        msg,
        ts,
        // rn,
      };
      // build message obj

      // dispatch message to other users
      const resp = await fetch(
        '/api/chat', //? req
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }, //? res
        // roomId: 'test',
      );
      console.warn('resp', resp);
      // reset field if OK
      if (resp.ok) setMsg('');
    }
    console.warn('chat', chat, 'msg', msg);
  };

  let userLoggedIn = user;
  console.warn('user', user);
  const printMessage = (message) => {
    console.warn('message', message);
  };

  const formatDate = (timestamp) => {
    let formattedDate = timestamp.slice(0, 10);
    // let formattedDate = timestamp.toLocaleString('en-US', {
    //   weekday: 'long',
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: 'numeric',
    //   minute: 'numeric',
    //   second: 'numeric',
    //   hour12: true,
    //   timeZone: 'UTC',
    // });

    return formattedDate;
  };

  return (
    <div>
      {chat && <h1>cohort: {chat.name}</h1>}

      {chat &&
        chat.messages.map((message, i) => (
          <>
            {printMessage(message)}
            <div>
              <h6>author: {message?.authorString}</h6>
              <h6>{formatDate(message.timestamp)}</h6>

              <p>{message.body}</p>
            </div>
            <h1>author: {message?.author.data.attributes.username}</h1>
          </>
        ))}
    </div>
  );
};

//! sometimes explosion of errors? server restart?

//!
//   return (
//     <div>
//       <div>
//         {chat ? (
//           chat.messages.map((message, i) => (
//             <div key={'msg_' + i} className="mt-1">
//               <Box
//                 sx={{
//                   overflow: 'scroll',
//                   height: '100',
//                   // width: '20',
//                   my: 1,
//                   p: 1,
//                   color: (theme) =>
//                     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
//                   borderRadius: 2,
//                   fontSize: '0.875rem',
//                   fontWeight: '700',
//                 }}
//                 component="div"
//                 overflow="auto"
//                 id="scroll"
//                 flex={1}
//                 bgcolor="white"
//               >
//                 <Item2>
//                   <Image
//                     width={15}
//                     height={15}
//                     src={favicon}
//                     alt="Picture of the author"
//                   ></Image>
//                   <span>
//                     {/* {message.author.data.id === user?.id ? 'someone' : chat.user} */}
//                   </span>
//                   {message.body}
//                 </Item2>
//               </Box>
//             </div>
//           ))
//         ) : (
//           <Item2>No chat messages</Item2>
//         )}
//       </div>
//       <div
//         style={{
//           top: '20vh',
//           right: '50vw',
//         }}
//       >
//         <ToastContainer
//           className="toast-position"
//           position={toast.POSITION.BOTTOM_RIGHT}
//           newestOnTop={true}
//         />
//       </div>
//       <div
//         style={{
//           position: 'fixed',
//           bottom: '12vh',
//           right: '27vw',
//         }}
//       >
//         <Stack
//           style={{
//             justifyContent: 'center',
//             bottom: '5vh',
//           }}
//           direction={{ xs: 'column', sm: 'row' }}
//           spacing={{ xs: 1, sm: 1, md: 3 }}
//         >
//           <h1
//             style={{
//               color: '#444444',
//             }}
//           >
//             Whatsthat
//           </h1>

//           {/* <QuestionAnswerIcon
//             style={{
//               color: ' #00897d',
//               marginTop: '30',
//             }}
//           ></QuestionAnswerIcon> */}
//           <Button
//             style={{
//               display: 'inline-block',
//               minHeight: 0,
//               minWidth: 0,
//               height: 50,
//               marginTop: 12,
//               borderRadius: 5,
//               backgroundColor: ' #ffffff',
//               color: ' #00897d',
//               fontSize: '18px',
//               justifyContent: 'center',
//             }}
//             variant="contained"
//             onClick={sendMessage}
//             disabled={!connected}
//           >
//             SEND
//           </Button>
//         </Stack>
//       </div>
//       <TextField
//         fullWidth={true}
//         color="success"
//         style={{
//           width: '25vw',
//           borderRadius: 10,
//           borderColor: ' #ffffff',
//           backgroundColor: ' #ffffff',
//           position: 'fixed',
//           right: '25vw',
//           bottom: '3.5vh',

//           margin: '10px',
//           fontSize: '18px',
//         }}
//         ref={inputRef}
//         type="text"
//         value={msg}
//         placeholder={connected ? 'Write something...' : 'Connecting...'}
//         disabled={!connected}
//         onChange={(e) => {
//           setMsg(e.target.value);
//         }}
//         onKeyPress={(e) => {
//           if (e.key === 'Enter') {
//             sendMessage();
//           }
//         }}
//       ></TextField>
//     </div>
//   );
// };

export default ChatRoom;

//! QUESTIONS:
// - see line 98 & chat.ts
// - _app.tsx page props. where do they come from?
//! sorting algorithms.

//? dynamic routes to cohorts
//* tabs for

// serverside cleint side chats.

// chat component. when.

// loigin notifications.

// when establish connection? notifications post login. could logic happen in context?
//SWR tech. stay while,

// is user ID stored in token? where verified?

// const mentor = 'Mentor_' + String(new Date().getTime()).substr(-3);
// const user = 'User_' + String(new Date().getTime()).substr(-3);

{
  /* <Grid style={{ display: "flex", flex: 1 }} container spacing={3}>
          <Grid style={{ display: "flex", flex: 1 }} item xs={6}>
            <Box overflow="auto" id="scroll" flex={1} bgcolor="white"></Box> */
}
