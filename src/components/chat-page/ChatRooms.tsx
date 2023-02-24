import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Chat } from 'cabServer/global/__generated__/types';
import { useAddChatMessageMutation } from 'cabServer/mutations/__generated__/postChatMessage';
import { useGetChatsQuery } from 'cabServer/queries/__generated__/chats';
import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { useSocket } from 'src/hooks/useSocket';

import ChatRoom from './ChatRoom';

//! logged ibnuser
interface IMsg {
  user: string;
  msg: string;
  ts: string;
}

const ChatRooms: React.FC = () => {
  const { data, loading, error } = useGetChatsQuery({
    variables: {},
  });
  const [connected, setConnected] = useState<boolean>(false);
  const [rooms, setRooms] = useState({});
  const [room, setRoom] = useState<string>('');
  const { user } = useAuth();

  const { socket } = useSocket();

  useEffect(() => {
    if (socket) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [socket]);

  return (
    <div>
      {connected && room !== '' && <ChatRoom roomId={room}></ChatRoom>}

      <div
        style={{
          backgroundColor: 'white',
          width: '85%',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1,
          justifyItems: 'center',
          position: 'fixed',
          left: '20vw',
          bottom: '0vh',
        }}
      >
        {data?.chats?.data.map((room) => (
          <Button
            sx={{ m: 1 }}
            component="span"
            variant="contained"
            color={room.attributes?.name === room ? 'inherit' : 'primary'}
            onClick={() => setRoom(room?.id || '')}
            key={room.id}
          >
            {room.attributes?.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChatRooms;
