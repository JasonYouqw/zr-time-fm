import socketIo from 'socket.io';
const io = socketIo('http://localhost');
io.on('news', (data: any) => {
  console.log(`data: ${data}`);
  io.emit('test news event', {
    data: 'news'
  });
});

