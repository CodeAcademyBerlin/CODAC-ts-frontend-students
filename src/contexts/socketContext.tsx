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

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  ['chat:update']: (chat: Chat) => void;
}

interface ClientToServerEvents {
  chat: () => void;
}
type SocketIface = Socket<ServerToClientEvents, ClientToServerEvents>;

export type SocketContextIface = {
  socket: SocketIface | null;
};
const init = {
  socket: null,
};
export const SocketContext = createContext<SocketContextIface>(init);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [socket, setSocket] = useState<SocketIface | null>(null);

  useEffect(() => {
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
  }, [socket, user]);

  useEffect(() => {
    if (socket) {
      socket.on('chat:update', (chat: Chat) => {
        console.log(chat);
      });
    }
  }, [socket]);
  const data = {
    socket,
  };
  console.log('socket', socket);
  return (
    <SocketContext.Provider value={data}>{children}</SocketContext.Provider>
  );
};
