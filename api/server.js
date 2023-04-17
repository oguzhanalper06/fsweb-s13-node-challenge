const express = require("express");
const server = express();

server.use(express.json());

require("dotenv").config();

const actionsRouter = require("./actions/actions-router");
server.use("./api/actions", actionsRouter);

const projectsRouter = require("./projects/projects-router");
server.use("./api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: process.env.MESSAGE || "Server is up and runing..",
  });
});

// Sunucunuzu yapılandırın
// Eylem routerınızı /api/actions/actions-router.js içinde oluşturun
// Proje roterlarınızı /api/projects/projects-router.js içinde oluşturun
// Bu dosyanın içinde `server.listen()` YAPMAYIN!

module.exports = server;
