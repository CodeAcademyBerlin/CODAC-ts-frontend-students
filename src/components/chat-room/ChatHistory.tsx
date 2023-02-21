import { useGetChatsQuery } from 'cabServer/queries/__generated__/chats';
import React, { useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';

const ChatHistory = () => {
  const { user } = useAuth();
  const { data, loading, error } = useGetChatsQuery({
    variables: {},
  });
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);

  useEffect(() => {
    if (data) {
      let history = data.chats.data;
      console.log('history', history);
      history.map((obj) => {
        // todo: make 'cats' dynamic to user permissions
        if (obj.attributes.name === 'cats') {
          let myCohortChats = obj.attributes.messages;
          setChatHistory(myCohortChats);
          console.log('chatHistory', chatHistory);
        }
      });
    }
  }, []);

  let userLoggedIn = user === 'Eren' ? 'Eren' : 'someone else';

  return (
    <div>
      <ChatHistory />
      {chatHistory &&
        chatHistory.map((message, i) => (
          <>
            {user === 'Eren' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid black',
                  borderRadius: '5px',
                  padding: '10px',
                  margin: '10px',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  {/* <h6>author: {message?.authorString}</h6> */}
                  {/* <h6>{formatDate(message.timestamp)}</h6> */}
                  {/* <h1>author: {message?.author.data?.attributes.username}</h1> */}
                </div>
                <p>{message.body}</p>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid black',
                  borderRadius: '5px',
                  padding: '10px',
                  margin: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '10%',
                  }}
                >
                  {/* <h6>author: {message?.authorString}</h6> */}
                  {/* <h6>{formatDate(message.timestamp)}</h6> */}
                  {/* <h1>author: {message?.author.data?.attributes.username}</h1> */}
                </div>
                <p>{message.body}</p>
              </div>
            )}
          </>
        ))}
    </div>
  );
};
export default ChatHistory;
