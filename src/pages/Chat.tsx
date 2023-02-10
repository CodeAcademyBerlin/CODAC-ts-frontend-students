import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { TableContainer } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Server as NetServer } from 'http';
import { Grid, Table } from 'mdi-material-ui';
import { NextServer } from 'next/dist/server/next';
import { relative } from 'path';
import React, { useEffect, useRef, useState } from 'react';
import SocketIOClient from 'socket.io-client';
import { io } from 'socket.io-client';
import { useAuth } from 'src/hooks/useAuth';

import chat from './styles.module.css';

// client side API manager. version issue.
// import className from 'classNamein.macro';
//! toastify

//! logged ibnuser

// loigin notifications.

// when establish connection? notifications post login. could logic happen in context?
//SWR tech. stay while,

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(),
  textAlign: 'center',
  verticalAlign: 'center',
  horizontalAlign: 'center',

  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

const Item4 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // boxShadow: '0',
}));

let URL = 'http://localhost:3000/';

interface IMsg {
  user: string;
  msg: string;
  ts: string;
  // ts: number;
}

// create random user

//? useAuth userobject
// component
const Chat: React.FC = () => {
  const inputRef = useRef(null);

  //! sorting algorithms.

  // connected flag
  const [connected, setConnected] = useState<boolean>(false);

  // init chat and message
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>('');
  const [ts, setTs] = useState(new Date().toLocaleDateString('de-DE'));
  const [backlog, setBacklog] = useState([]);
  // const [ts, setTs] = useState(Date.now());
  const { user } = useAuth();
  // const mentor = 'Mentor_' + String(new Date().getTime()).substr(-3);
  // const user = 'User_' + String(new Date().getTime()).substr(-3);

  function createManager(url) {}

  //* time elapsed since mid Friday February 10th 2023; the moment when WHATSTHAT was born.
  const calcWhatsThatEpoch = (date: any) => {
    let whatsThatEpoch = date - 1676034942000;
    return whatsThatEpoch;
  };
  console.warn('whatsThatEpoch', calcWhatsThatEpoch(Date.now()));

  useEffect((): any => {
    const socket = SocketIOClient({
      path: '/api/socketio',
    });

    // log socket connection
    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id);
      setConnected(true);
    });

    // update chat on new message dispatched
    socket.on('message', (message: IMsg) => {
      chat.push(message);
      setChat([...chat]);
    });

    if (socket) return () => socket.disconnect();

    if (!connected) {
      backlog.push(chat);
      setBacklog([...backlog]);
    }
  }, [chat, backlog, connected]); //!! added 'chat' and 'backlog'

  const sendMessage = async () => {
    console.log('hello');

    if (msg) {
      // build message obj
      const message: IMsg = {
        user: user.username,
        msg,
        ts,
      };

      // dispatch message to other users
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      // reset field if OK
      if (resp.ok) setMsg('');
    }

    // focus after click
    // inputRef?.current?.focus();
  };

  let userLoggedIn = user;

  return (
    <div
      style={{
        borderRadius: 10,
        borderColor: ' #00897d',
        backgroundColor: ' #00897d',
        borderWidth: '23px',
        width: '30vw',
        height: '55vh',

        position: 'fixed',
        bottom: '25vh',
        right: '25vw',
        // paddingTop: '100%',
      }}
    >
      <div
        style={{
          borderRadius: 10,
          borderColor: ' #00897d',
          backgroundColor: ' #ffffff',
          borderWidth: '23px',
          width: '96%',
          height: '90%',
          position: 'relative',
          bottom: '-0.5vh',
          right: '-0.6vw',
          // paddingTop: '100%',
        }}

        // className="flex flex-col w-full h-screen"
      >
        <Stack direction="row" spacing={0}>
          <Item3
            style={{
              paddingLeft: '100',
              // position: 'absolute',
              // right: '100',
              // paddingTop: '100%',
            }}
            className="title"
          >
            <h1>Whatsthat</h1>
          </Item3>
          <Item3>
            <QuestionAnswerIcon
              style={{
                borderRadius: 35,
                color: ' #00897d',
                paddingTop: '100%',
                // fontSize: '18px',
              }}
            ></QuestionAnswerIcon>
          </Item3>
        </Stack>
        {/* <div className="flex flex-col flex-1 bg-gray-200"> */}
        {/* <div className="flex-1 p-4 font-mono"> */}

        {chat.length ? (
          chat.map((chat, i) => (
            <div key={'msg_' + i} className="mt-1">
              <Box
                sx={{
                  overflow: 'scroll',
                  height: '100',
                  my: 1,
                  p: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  // border: '1px solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
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
                  <span>
                    {chat.user === user.username ? 'someone' : chat.user}
                  </span>
                  : {chat.msg} {chat.ts}
                </Item2>
              </Box>
            </div>
          ))
        ) : (
          <div className="text-sm text-center text-gray-400 py-6">
            No chat messages
          </div>
        )}
      </div>
      <div>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}></Stack>

          {/* <div className="flex flex-row flex-1 h-full divide-gray-200 divide-x"> */}
          <div className="pr-2 flex-1">
            <Item>
              <TextField
                fullWidth={true}
                color="success"
                style={{
                  width: '90%',
                  borderRadius: 35,
                  borderColor: ' #00897d',
                  // padding: '18px 36px',
                  fontSize: '18px',
                }}
                ref={inputRef}
                type="text"
                value={msg}
                placeholder={connected ? 'Write words...' : 'Connecting...'}
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
            </Item>
          </div>
          <Item>
            {/* <div className={chat.test}> */}
            <Button
              fullWidth={true}
              // color="success"
              style={{
                // width: 290,
                position: 'relative',
                width: '90%',

                borderRadius: 5,
                backgroundColor: ' #00897d',
                // padding: '18px 18px',
                paddingBottom: '10px',
                fontSize: '18px',
              }}
              variant="contained"
              onClick={sendMessage}
              disabled={!connected}
            >
              SEND
            </Button>
            {/* </div> */}
          </Item>
          {/* </div> */}
        </Box>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Chat;

// is user ID stored in token? where verified?

{
  /* <Grid style={{ display: "flex", flex: 1 }} container spacing={3}>
          <Grid style={{ display: "flex", flex: 1 }} item xs={6}>
            <Box overflow="auto" id="scroll" flex={1} bgcolor="white"></Box> */
}
