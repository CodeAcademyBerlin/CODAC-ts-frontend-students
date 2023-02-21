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
import { useGetChatsQuery } from 'cabServer/queries/__generated__/chats';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import SocketIOClient from 'socket.io-client';
import { useAuth } from 'src/hooks/useAuth';
import { useSocket } from 'src/hooks/useSocket';

import favicon from '../../../public/favicon.ico';
import ChatHistory from '../chat-room/ChatHistory';
import { ChatBubble } from './ChatBubble';

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

const ChatRoom: React.FC = () => {
  const { data, loading, error } = useGetChatsQuery({
    variables: {},
  });
  const { socket } = useSocket();
  const inputRef = useRef(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);
  const [rooms, setRooms] = useState(null);
  const [chat, setChat] = useState<Chat | null>(null);
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [msg, setMsg] = useState<string>('');
  const [ts, setTs] = useState(new Date().toLocaleDateString('de-DE'));
  const { user } = useAuth();

  useEffect(() => {
    if (socket) {
      setConnected(true);
      socket.on('chat:update', (chatEvent: Chat) => {
        setChat(chatEvent);
      });

      socket.on('newMessage', (chatEvent: Chat) => {
        console.log('chatEvent in useEffect:', chatEvent);
      });
    }
  }, [socket]);

  useEffect(() => {
    let roomsArr = [];
    if (data) {
      if (user.role?.name === 'Student') {
        roomsArr = data.chats.data.map((room) => room.attributes.name);
        console.log('rooms', roomsArr);
      }
    }
    setRooms(roomsArr);
  }, [data]);

  const sendMessage = async () => {
    // if (msg) {
    //   const message: IMsg = {
    //     user: user.username,
    //     msg,
    //     ts,
    //   };

    //   const resp = await fetch(
    //     '/api/chat', //? req
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(body),
    //     }, //? res
    //   );
    //   console.warn('resp', resp);
    //   if (resp.ok) setMsg('');
    // }
    console.warn('chat', chat, 'msg', msg);
  };

  let userLoggedIn = user;
  const printMessage = (message) => {
    console.warn('message', message);
  };

  // console.log(chatHistory);

  // this function should be called when a room is clicked
  const joinRoom = (e, t) => {
    // we use t to get the room name. this is the room name that we want to join
    socket.emit('chat:join', t);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: '20px',
          borderRadius: '10px',
          // position: 'fixed',
          zIndex: 1,
          justifyItems: 'center',
          position: 'relative',
        }}
      >
        {rooms &&
          rooms.map((room, i) => (
            <Button
              sx={{ m: 1 }}
              key={i}
              variant="contained"
              color="primary"
              onClick={(e) => joinRoom(e, room)}
              // onClick={() => {
              //   // socket.emit('chat:join', room);
              //   // setChatHistory([...chatHistory, chat]);
              // }}
            >
              {room}
            </Button>
          ))}
        <Button
          sx={{ m: 1 }}
          variant="contained"
          color="primary"
          onClick={(e) => joinRoom(e, 'general')}
        >
          ALL
        </Button>
      </div>

      {chat && <h1>cohort: {chat.name}</h1>}
      {chat &&
        chat.messages?.map((message, i) => (
          <>
            <ChatBubble message={message}></ChatBubble>
          </>
        ))}
      {typing && (
        <div
          style={{
            position: 'relative',
            backgroundColor: 'white',
            // backgroundColor: ' #00897d',

            color: ' #00897d',
            // color: 'white',

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            borderRadius: '5px 5px 5px 5px',
            paddingRight: '10px',
            // margin: '20px',
            width: '95%',
            height: '4vh',
            textAlign: 'right',
            left: '1vw',
            marginBottom: '2vh',
          }}
        >
          <h6 style={{ position: 'absolute', top: '-18px' }}>typing...</h6>
        </div>
      )}
      <div
        style={{
          backgroundColor: 'white',
          width: '95%',
          height: '110%',
          padding: '20px',
          // paddingTop: '20px',
          borderRadius: '10px',
        }}
      >
        <TextField
          onFocus={() => setTyping(true)}
          onBlur={() => setTyping(false)}
          style={{ width: '90%' }}
          id="outlined-basic"
          label={connected ? 'Write something' : 'Connecting...'}
          variant="standard"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          inputRef={inputRef}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        {/* <Button
          style={{ width: '80%' }}
          sx={{ m: 1 }}
          variant="contained"
          color="primary"
          onClick={sendMessage}
        >
          Send
        </Button> */}
      </div>
    </div>
  );
};

export default ChatRoom;
