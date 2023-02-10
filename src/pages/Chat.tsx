import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Server as NetServer } from 'http';
import { NextServer } from 'next/dist/server/next';
import React, { useEffect, useRef, useState } from 'react';
import SocketIOClient from 'socket.io-client';
import { io } from 'socket.io-client';

import chat from './styles.module.css';

// client side API manager. version issue.
// import className from 'classNamein.macro';

interface IMsg {
  user: string;
  msg: string;
}

//! logged ibnuser

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
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let URL = 'http://localhost:3000/';

// create random user
const user = 'User_' + String(new Date().getTime()).substr(-3);

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
  function createManager(url) {}

  useEffect((): any => {
    const socket = SocketIOClient({
      //? process.env.BASE_URL
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

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, [chat]); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!IF STUPID REMOVE DEPENDENCY????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const sendMessage = async () => {
    console.log('hello');

    if (msg) {
      // build message obj
      const message: IMsg = {
        user,
        msg,
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

  return (
    <div className="flex flex-col w-full h-screen">
      <Stack direction="row" spacing={2}>
        <div className="py-4 text-white  bg-blue-500 sticky top-0">
          {/* <Item3> */}
          <h1 className="text-center text-2xl font-semibold">Whatsthat</h1>
          {/* </Item3>
          <Item3> */}
          <QuestionAnswerIcon></QuestionAnswerIcon>
          {/* </Item3> */}
          <h4 className="mt-2 text-center">hello</h4>
        </div>
      </Stack>
      <div className="flex flex-col flex-1 bg-gray-200">
        <div className="flex-1 p-4 font-mono">
          {chat.length ? (
            chat.map((chat, i) => (
              <div key={'msg_' + i} className="mt-1">
                <Item2>
                  <span>{chat.user === user ? 'someone' : chat.user}</span>:{' '}
                  {chat.msg}
                </Item2>
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

            <div className="flex flex-row flex-1 h-full divide-gray-200 divide-x">
              <div className="pr-2 flex-1">
                <Item>
                  <TextField
                    fullWidth={true}
                    error
                    ref={inputRef}
                    type="text"
                    value={msg}
                    placeholder={connected ? 'Write words...' : 'Connecting...'}
                    // className={chat}
                    // className="chat-input"
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

                {/* <input
                // style={{ width: '100%' }}
                ref={inputRef}
                type="text"
                value={msg}
                placeholder={connected ? 'Write words...' : 'Connecting...'}
                // className={chat}
                // className="chat-input"
                disabled={!connected}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage();
                  }
                }}
              /> */}
              </div>
              <Item>
                <div className={chat.test}>
                  <Button
                    fullWidth={true}
                    color="error"
                    variant="contained"
                    className="bg-blue-500 rounded shadow text-sm text-white h-full px-2"
                    onClick={sendMessage}
                    disabled={!connected}
                  >
                    SEND
                  </Button>
                </div>
              </Item>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Chat;
