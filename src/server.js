const express = require('express');
const mongose = require('mongoose');

const filePath  = require('../src/config/fileConfig');
const connectString = require('./config/dbconfig');
const cors = require('cors');


mongose.connect(connectString, {
    useNewUrlParser: true
});

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io  = require('socket.io')(server);

io.on('connection',socket=>{
    console.log('ok');
    socket.on('connectRoom',box=>{
        socket.join(box);
    });
})

app.use((req,res, next)=>{

    req.io = io;

    return  next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files',express.static(filePath));
app.use(require('./routes'));


server.listen(process.env.PORT || 3001);


