const express = require("express");
const routes = require("./routes");
const cors = require("cors");

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
    this.app.use("/school", routes.schoolRoutes);
    this.app.use("/coach", routes.coachRoutes);
    this.app.use("/student", routes.studentRoutes);
    this.app.use("/placesnear", routes.placesnearRoutes);
  }
}

module.exports = new AppController().app;
