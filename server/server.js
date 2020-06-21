const express = require('express')
require('dotenv').config();
const articleRouter = require('./article/router');
const server = express()

const cors = require('cors')
server.use(cors())

const PORT = process.env.port || 4000;
server.use(express.json())
server.use(express.urlencoded({ extended: false }) )

const uri = process.env.ATLAS_URI
const mongoose = require('mongoose')
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB connection established."))


server.use('/articles', articleRouter)


server.listen(PORT, () => console.log(`Express server listening on ${PORT}`) )