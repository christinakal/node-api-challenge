const express = require('express');
const server = express();

server.use(express.json());

const projectsRouter = require('./projects/projectsRouter.js');
server.use('/api/projects', projectsRouter);

server.get("/", (req, res) => {
    res.send("<h2>Welcome to my server!</h2>");
  });
  
module.exports = server;