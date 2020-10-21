require('dotenv').config()
const express = require('express');
const server  = express();
const routes  = require("./routes");

server.use(routes);
server.listen(process.env.API_PORT);
