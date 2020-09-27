import UdpSockets from 'react-native-udp';
import UdpSocket from 'react-native-udp/lib/types/UdpSocket';
import { UdpAddress } from '../types/types';

let socket: UdpSocket | null;

export const connect = (address: UdpAddress, callback?: any) => {
  socket && socket.close();

  socket = UdpSockets.createSocket({
    type: 'udp4',
    reusePort: true,
    debug: true,
  });

  socket.bind(address.port, address.host);

  socket.on('message', callback);

  return () => {
    socket && socket.close();
    socket = null;
  };
};
