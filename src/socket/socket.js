import socketIoClient from 'socket.io-client'
const socket = socketIoClient('http://localhost:30725/')
export default socket
