const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

//-------------------------------------------//

io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box);
  });
});

// conectando ao mongodb
mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-lfidn.mongodb.net/omnistack?retryWrites=true',
  { useNewUrlParser: true }
);

// middleware global
app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());
// permite enviar arquivos na requisição
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

// esta ouvindo request http e websocket
server.listen(process.env.PORT || 3333);
