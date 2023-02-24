import { Server as NetServer, Socket } from 'net';
import { NextApiResponse } from 'next/types';
import { Server as SocketIOServer } from 'socket.io';
// import { io, Socket } from 'socket.io-client';

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

// export type socketType = Socket<ServerToClientEvents, ClientToServerEvents>;

// export interface IO {
//   <ClientToServerEvents>,
//     <ServerToClientEvents>,
//     <InterServerEvents>,
//     <SocketData>}
