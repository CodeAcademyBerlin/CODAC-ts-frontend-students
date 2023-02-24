import { TextField } from '@mui/material';
import { Chat } from 'cabServer/global/__generated__/types';
import { useAddChatMessageMutation } from 'cabServer/mutations/__generated__/postChatMessage';
import { useGetChatQuery } from 'cabServer/queries/__generated__/chats';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useSocket } from 'src/hooks/useSocket';

import { ChatBubble } from './ChatBubble';
import { chatReducer } from './chatReducer';

type Props = { roomId: string };

const ChatRoom: React.FC<Props> = ({ roomId }) => {
  const { data, loading, error } = useGetChatQuery({
    variables: {
      id: roomId,
    },
  });
  console.warn(data);

  const [state, dispatch] = useReducer(chatReducer, {
    chatHistory: [],
    msg: null,
    input: '',
    typing: false,
    loading: true,
    error: null,
  });

  const [addChatMessageMutation, {}] = useAddChatMessageMutation();

  const { socket } = useSocket();

  useEffect(() => {
    let cleanupFunc = () => {}; // Define a cleanup function
    if (socket) {
      socket.on('chat:update', (chatEvent: Chat) => {
        console.log('chatEvent', chatEvent);
        dispatch({ type: 'SET_MESSAGE_HISTORY', payload: chatEvent.messages });
      });
      cleanupFunc = () => {
        socket.off('chat:update'); // Remove the event listener when the component unmounts
      };
    }
    return cleanupFunc;
  }, [socket]);

  useEffect(() => {
    if (data) {
      let history = data.chat.data.attributes.messages;
      console.log('history', history);
      dispatch({ type: 'SET_MESSAGE_HISTORY', payload: history });
    }
    console.log('state in data useeffect', state);
  }, [roomId, data]);

  const sendMessage = async () => {
    if (state.input) {
      dispatch({ type: 'SET_TYPING', payload: false });
      addChatMessageMutation({
        variables: {
          chatId: `${roomId}`,
          body: state.input,
        },
      });
      dispatch({ type: 'SET_INPUT', payload: '' });
    }
  };

  console.log('state', state);

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
        {state.chatHistory &&
          state.chatHistory.map((message, i) => (
            <ChatBubble key={i} message={message}></ChatBubble>
          ))}
        {state.typing && (
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
            style={{ width: '90%' }}
            id="outlined-basic"
            label={socket ? 'Write something' : 'Connecting...'}
            variant="standard"
            value={state.input}
            onChange={(e) =>
              dispatch({ type: 'SET_INPUT', payload: e.target.value })
            }
            onKeyDown={() => dispatch({ type: 'SET_TYPING', payload: true })}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                dispatch({ type: 'SET_MSG', payload: state.input });
                sendMessage();
                dispatch({ type: 'SET_TYPING', payload: false });
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
