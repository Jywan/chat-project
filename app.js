const express = require('express');
const cors = require('cors')
const http = require('http');
const { Server } = require('socket.io');

const app = express();

// INFO: FOR CORS
app.use(cors())
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static('public'))

app.get('/', (_req, res) => {
  res.send('test');
});

app.get('/test', (_req, res) => {
  res.render(__dirname + '/index.html');
})

const server = http.createServer(app);
const io = new Server(server);
// INFO: PORT NUMBER
const PORT = 15000;

// INFO: socket connetion
io.on('connection', (sokect) => {
  sokect.on('request_msg', (text) => {
    console.log(text);
    io.emit('response_message', text);
  });


  // INFO: socket disconnet
  sokect.on('disconnect', async () => {
    console.log('user_disconnect');
  })
})

server.listen(PORT, () => {
  console.info(`app listen ${PORT} ...`);
})
