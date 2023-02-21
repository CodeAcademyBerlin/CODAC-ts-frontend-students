import Image from 'next/image';
import React from 'react';
import { useAuth } from 'src/hooks/useAuth';

import favicon from '../../../public/favicon.ico';

export const ChatBubble = ({ message }) => {
  const { user } = useAuth();
  console.log('message', message);

  const formatDate = (timestamp) => {
    let date = new Date(timestamp);
    let today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    let formattedDate = '';
    if (date.getDate() === today.getDate()) {
      formattedDate = 'Today';
    } else if (date.getDate() === yesterday.getDate()) {
      formattedDate = 'Yesterday';
    } else {
      formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
    }
    formattedDate += ` @ ${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${
      date.getMinutes() < 10 ? '0' : ''
    }${date.getMinutes()}`;

    return formattedDate;
  };

  return (
    <>
      {user.username === 'Eren' && (
        <div
          style={{
            position: 'relative',
            backgroundColor: ' #00897d',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            border: '1px solid green',
            borderRadius: '20px 5px 20px 5px',
            paddingRight: '10px',
            margin: '20px',
            width: '90%',
            height: '100%',
            textAlign: 'right',
            left: '1vw',
          }}
        >
          <p
            style={{
              position: 'absolute',
              left: '1.5vw',
              bottom: '-10px',
              color: 'white',
              fontSize: '10px',
            }}
          >
            <b>Eren </b>

            {formatDate(message.timestamp)}
          </p>
          <div
            style={{
              backgroundColor: ' #00897d',
              color: 'white',
              display: 'flex',
              borderRadius: '20px 20px 20px 5px',
              flexDirection: 'row',
              justifyContent: 'right',
              paddingRight: '10px',
              paddingLeft: '10px',
              textAlign: 'right',
            }}
          >
            <p>{message.body}</p>
          </div>

          <div
            style={{
              backgroundColor: ' #ffffff',
              marginTop: 'auto',
              marginBottom: 'auto',
              width: '30px',
              height: '30px',
              padding: '7px',
              borderRadius: '50%',
              // backgroundColor: ' #00897d',
            }}
          >
            <Image
              style={{ transform: 'rotate(270deg)' }}
              width={15}
              height={15}
              src={favicon}
              alt="Picture of the author"
            ></Image>
          </div>
        </div>
      )}
      {user.username === 'Eren' && (
        <div
          style={{
            position: 'relative',
            backgroundColor: ' white',
            color: ' #00897d',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            border: '1px  #00897d',
            borderRadius: '20px 5px 20px 5px',
            paddingLeft: '10px',
            margin: '15px',
            width: '90%',
            height: '100%',
            textAlign: 'left',
            right: '1vw',
          }}
        >
          <div
            style={{
              backgroundColor: ' #ffffff',
              marginTop: 'auto',
              marginBottom: 'auto',
              width: '30px',
              height: '30px',
              padding: '7px',
              borderRadius: '50%',
            }}
          >
            <Image
              style={{ transform: 'rotate(90deg)' }}
              width={15}
              height={15}
              src={favicon}
              alt="Picture of the author"
            ></Image>
          </div>
          <p
            style={{
              position: 'absolute',
              right: '1.5vw',
              bottom: '-10px',
              color: ' #00897d',
              fontSize: '10px',
            }}
          >
            <b> Eren</b> {formatDate(message.timestamp)}
          </p>
          <div
            style={{
              backgroundColor: ' white',
              borderRadius: '20px 5px 20px 5px',
              color: ' #00897d',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'left',
              paddingRight: '10px',
              paddingLeft: '10px',
              textAlign: 'left',
            }}
          >
            <p>{message.body}</p>
          </div>
        </div>
      )}
    </>
  );
};
