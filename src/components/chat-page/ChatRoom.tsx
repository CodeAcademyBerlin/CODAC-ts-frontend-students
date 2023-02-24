import { TextField } from '@mui/material';
import {
  Chat,
  ComponentChatMessage,
  Maybe,
} from 'cabServer/global/__generated__/types';
import { useAddChatMessageMutation } from 'cabServer/mutations/__generated__/postChatMessage';
import { useGetChatQuery } from 'cabServer/queries/__generated__/chats';
import React, { useEffect, useRef, useState } from 'react';
import { useSocket } from 'src/hooks/useSocket';

import { ChatBubble } from './ChatBubble';

type Props = { roomId: string };

interface IMsg {
  user: string;
  msg: string;
  ts: string;
}

const ChatRoom: React.FC<Props> = ({ roomId }) => {
  const [chatHistory, setChatHistory] = useState<Maybe<ComponentChatMessage>[]>(
    [],
  );
  const { data, loading, error, refetch } = useGetChatQuery({
    variables: {
      id: roomId,
    },
  });
  const [addChatMessageMutation, {}] = useAddChatMessageMutation();
  const [msg, setMsg] = useState<string>('');
  const [typing, setTyping] = useState<boolean>(false);
  const inputRef = useRef(null);
  const { socket } = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on('chat:update', (chatEvent: Chat) => {
        let history = chatEvent?.messages;
        history?.length && setChatHistory(history);
      });
    }
  }, [socket]);

  useEffect(() => {
    refetch();
    if (data) {
      let history = data?.chat?.data?.attributes?.messages;
      console.log('history roomId', history);
      history?.length && setChatHistory(history);
      console.log('updatedHistory roomId', chatHistory);
    }
  }, [roomId, data]);

  const sendMessage = async () => {
    if (msg) {
      addChatMessageMutation({
        variables: {
          chatId: `${roomId}`,
          body: msg,
        },
      });
      setMsg('');
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: 'inherit',
          width: '95%',
          height: '110%',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        {chatHistory &&
          chatHistory?.map((message, i) => (
            <>
              <ChatBubble key={message?.id} message={message}></ChatBubble>
            </>
          ))}

        {typing && (
          <div
            style={{
              position: 'relative',
              backgroundColor: 'white',
              color: ' #00897d',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'right',
              borderRadius: '5px 5px 5px 5px',
              paddingRight: '10px',
              width: '95%',
              height: '4vh',
              textAlign: 'right',
              left: '0.vw',
              marginBottom: '2vh',
            }}
          >
            <h6 style={{ position: 'absolute', top: '-18px', right: '30px' }}>
              someone typing...
            </h6>
          </div>
        )}
        {roomId !== '' && (
          <TextField
            onFocus={() => setTyping(true)}
            onBlur={() => setTyping(false)}
            style={{ width: '90%' }}
            id="outlined-basic"
            label={{ socket } ? 'Write something' : 'Connecting...'}
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
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
