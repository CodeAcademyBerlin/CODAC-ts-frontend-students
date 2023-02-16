import { useContext } from 'react';

import { SocketContext, SocketContextIface } from '../contexts/socketContext';

export const useSocket = (): SocketContextIface => useContext(SocketContext);
