const express = require('express');
const server = express();

server.use(express.json());

const projectsRouter = require('./projects/projectsRouter.js');
server.use('/api/projects', projectsRouter);

const actionsRouter = require('./actions/actionsRouter.js');
server.use('/api/actions', actionsRouter);

server.get("/", (req, res) => {
    res.send("<h2>Welcome to my server!</h2>");
  });
  
module.exports = server;