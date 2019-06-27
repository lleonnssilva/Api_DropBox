const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(cors());

const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("connectRoom", box => {
    socket.join(box);
  });
});

// mongoose.connect(
//   "mongodb://localhost:27017/week7",
//   //"mongodb+srv://digidigi:digidigi@cluster0-9ty9k.mongodb.net/digi?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );
mongoose.connect(process.env.StrConexaoWeb, { useNewUrlParser: true });
app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

//server.listen(process.env.PORT || 3333);
server.listen(3333, console.log("Conectado"));
