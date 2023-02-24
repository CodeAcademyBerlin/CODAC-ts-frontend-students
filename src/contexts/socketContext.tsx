import { Chat, ChatEntity } from 'cabServer/global/__generated__/types';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { io, Socket } from 'socket.io-client';
import { useAuth } from 'src/hooks/useAuth';
import { getToken } from 'src/lib/apolloClient';

// export type Chat = {
//   __typename?: 'Chat';
//   createdAt?: Maybe<Scalars['DateTime']>;
//   messages?: Maybe<Array<Maybe<ComponentChatMessage>>>;
//   name?: Maybe<Scalars['String']>;
//   updatedAt?: Maybe<Scalars['DateTime']>;
//   users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
// };

// export type ComponentChatMessage = {
//   __typename?: 'ComponentChatMessage';
//   author?: Maybe<UsersPermissionsUserEntityResponse>;
//   body?: Maybe<Scalars['String']>;
//   id: Scalars['ID'];
//   timestamp?: Maybe<Scalars['DateTime']>;
// };

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  ['chat:update']: (chat: Chat) => void;
  ['chat']: (chat: Chat) => void;
}

interface ClientToServerEvents {
  // chat: () => void;
}
type SocketIface = Socket<ServerToClientEvents, ClientToServerEvents>;

export type SocketContextIface = {
  socket: SocketIface | null;
  connectSocket: () => void;
};
const init = {
  socket: null,
  connectSocket: () => console.log('error connecting socket'),
};
export const SocketContext = createContext<SocketContextIface>(init);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [socket, setSocket] = useState<SocketIface | null>(null);

  const connectSocket = () => {
    if (!user || socket || typeof window === 'undefined') {
      return;
    } else {
      // const s = io(SERVER_URL);
      const token = getToken();
      console.log('token', token);
      const s: SocketIface = io(
        process.env.NEXT_PUBLIC_CAB_SERVER_API_URL_PROD!,
        {
          auth: {
            token: token,
          },
        },
      );
      setSocket(s);
    }
  };
  // useEffect(() => {
  //   connectSocket();
  // }, [socket, user]);

  const data = {
    socket,
    connectSocket,
  };
  console.log('socket', socket);
  return (
    <SocketContext.Provider value={data}>{children}</SocketContext.Provider>
  );
};
