const express = require("express");
const actionRouter = require("./data/helpers/action-router");
const projectRouter = require("./data/helpers/project-router");
const welcomeRouter = require("./data/welcome/welcome-router");
const logger = require("./data/middleware/logger");
const server = express();
const port = 8000;

server.use(express.json());
server.use(logger());
server.use(actionRouter);
server.use(welcomeRouter);
server.use(projectRouter);

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
