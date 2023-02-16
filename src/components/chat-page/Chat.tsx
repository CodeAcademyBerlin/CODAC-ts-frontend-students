// import './styles.module.css';

import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { TableContainer } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import SocketIOClient from 'socket.io-client';
import { useAuth } from 'src/hooks/useAuth';

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
const Chat: React.FC = ({ socket, roomId }) => {
  const inputRef = useRef(null);

  // connected flag
  const [connected, setConnected] = useState<boolean>(false);

  // init chat and message
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>('');
  const [ts, setTs] = useState(new Date().toLocaleDateString('de-DE'));
  const [backlog, setBacklog] = useState([]);
  const { user } = useAuth();

  useEffect((): any => {
    console.log('socket in Chat component', socket);

    socket.on('connect', () => {
      console.log('newSocket.id in Chat component', socket.id);
      console.log('newSocket in Chat component', socket);
      setConnected(true);
      // socket.join(roomId);
    });

    //! chat calls chatroom. roomid/

    // update chat on new message dispatched
    socket.on('message', (message: IMsg) => {
      chat.push(message);
      setChat([...chat]);
    });

    //? if (socket)?
    // if (socket) return () => socket.disconnect();
  }, []);

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
      const body = { message, roomId: roomId };
      console.warn('roomid', roomId);

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

  return (
    <div>
      <div>
        {chat.length ? (
          chat.map((chat, i) => (
            <div key={'msg_' + i} className="mt-1">
              <Box
                sx={{
                  overflow: 'scroll',
                  height: '100',
                  // width: '20',
                  my: 1,
                  p: 1,
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
                component="div"
                overflow="auto"
                id="scroll"
                flex={1}
                bgcolor="white"
              >
                <Item2>
                  <Image
                    width={15}
                    height={15}
                    src={favicon}
                    alt="Picture of the author"
                  ></Image>
                  <span>
                    {chat.user === user?.username ? 'someone' : chat.user}
                  </span>
                  : {chat.msg} {chat.ts}
                </Item2>
              </Box>
            </div>
          ))
        ) : (
          <Item2>No chat messages</Item2>
        )}
      </div>
      <div
        style={{
          top: '20vh',
          right: '50vw',
        }}
      >
        <ToastContainer
          className="toast-position"
          position={toast.POSITION.BOTTOM_RIGHT}
          newestOnTop={true}
        />
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '12vh',
          right: '27vw',
        }}
      >
        <Stack
          style={{
            justifyContent: 'center',
            bottom: '5vh',
          }}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 1, md: 3 }}
        >
          <h1
            style={{
              color: '#444444',
            }}
          >
            Whatsthat
          </h1>

          {/* <QuestionAnswerIcon
            style={{
              color: ' #00897d',
              marginTop: '30',
            }}
          ></QuestionAnswerIcon> */}
          <Button
            style={{
              display: 'inline-block',
              minHeight: 0,
              minWidth: 0,
              height: 50,
              marginTop: 12,
              borderRadius: 5,
              backgroundColor: ' #ffffff',
              color: ' #00897d',
              fontSize: '18px',
              justifyContent: 'center',
            }}
            variant="contained"
            onClick={sendMessage}
            disabled={!connected}
          >
            SEND
          </Button>
        </Stack>
      </div>
      <TextField
        fullWidth={true}
        color="success"
        style={{
          width: '25vw',
          borderRadius: 10,
          borderColor: ' #ffffff',
          backgroundColor: ' #ffffff',
          position: 'fixed',
          right: '25vw',
          bottom: '3.5vh',

          margin: '10px',
          fontSize: '18px',
        }}
        ref={inputRef}
        type="text"
        value={msg}
        placeholder={connected ? 'Write something...' : 'Connecting...'}
        disabled={!connected}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}
      ></TextField>
    </div>
  );
};

export default Chat;

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
