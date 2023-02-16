import { NextApiRequest } from 'next/types';
import { NextApiResponseServerIO } from 'src/lib/sockets/types';
//? need to run over
const chat = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  // console.warn('req, roomId', req, roomId);
  if (req.method === 'POST') {
    // get message
    const { message, roomId } = req.body;

    // dispatch to channel "message"
    res?.socket?.server?.io?.to(roomId).emit('message', message);

    // return message
    // res.status(201).json('hi');
    res.status(201).json(req.body);
  } else {
    // const roomNumber = req.body;
    // res?.socket?.server?.io?.to(`${roomNumber}`).emit('message');
    // res?.socket?.server?.io?.to(`${roomNumber}`).emit('message');

    res.status(201);
  }
};
export default chat;

//! my steps:
// - clarify req, res when using fetch. not possible to add roomId?
//* 1) chat.ts currently emits to the 'message' channel. so:
//? - i need to specify the channel in the req.body in order to differentiate?
//? - OR the channel should already be 'known', because it was created/comnected to before any 'chat' is submitted?
//* 2) my intention in testing is to have the room 'decided' by MyTabs component. this is causing some keyword related confusion. in the documentation they use 'io.on' (writing this way throws an error), while i write 'socket.on' (does not throw error but is incompatible with 'join').
//? is this related to how we appeand the SocketIO server to Nextjs server response?
// why does console.log not work here?
