const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const authMiddleware = require("../app/middlewares/validations/session");

class AppController {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(authMiddleware); // incluir somente onde antes tiver autenticação
    this.app.use("school", routes.schoolRoutes);
  }
}

module.exports = new AppController().app;
