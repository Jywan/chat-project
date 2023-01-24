const express = require('express');
const http = require('http').Server(express);
const io = require('socket.io')(http);


const app = express();
const PORT = 15000;

app.get('/', (_req, res) => {
  res.send('test');
});

app.listen(PORT, () => {
  console.info(`app listen ${PORT} ...`);
})

io.on('connection', (sokect)=>{
  sokect.on('request_msg', (msg) => {
    io.emit('response_message', msg);
  });

  sokect.on('disconnect', async () =>{
    console.log('user_disconnect');
  })
})
