'use strict'

const express = require('express');
const routes = require('./api/routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(8080);
console.log("Server running...");