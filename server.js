const express = require("express");
const app  = express();
require('dotenv').config()
const cors = require('cors');
const mongoose = require("mongoose");
app.use(cors());

const http = require('http');
const server = http.createServer(app);

// Importing routes
const userRouter = require('./routes/users');

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.set('debug', true);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/users', userRouter);


const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
