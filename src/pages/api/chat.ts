import { NextApiRequest } from 'next/types';
import { NextApiResponseServerIO } from 'src/lib/sockets/types';

const chat = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === 'POST') {
    // get message
    const message = req.body;

    // dispatch to channel "message"
    res?.socket?.server?.io?.emit('message', message);

    // return message
    res.status(201).json(message);
  }
};
export default chat;
