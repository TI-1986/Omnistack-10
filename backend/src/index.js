const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

mongoose.set('useCreateIndex', true);

setupWebsocket(server);

mongoose.connect('mongodb+srv://<user:passoword>@cluster0-ac9du.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);
