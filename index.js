const express = require("express");
const server = express();
const port = 8000;
const actionRouter = "./data/helpers/action-router";

server.use(express.json());
server.use(actionRouter);

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
