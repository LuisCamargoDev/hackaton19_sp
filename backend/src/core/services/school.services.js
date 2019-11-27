const schoolModel = require("../db/models/School");
const jwt = require("jsonwebtoken");
require("dotenv/config");

class schoolServices {
  list(obj) {
    try {
      return schoolModel.list(obj);
    } catch (ex) {
      throw ex;
    }
  }

  findById(id) {
    try {
      return schoolModel.findById(id);
    } catch (ex) {
      throw ex;
    }
  }

  insert(args) {
    try {
      return schoolModel.insert(args);
    } catch (ex) {
      throw ex;
    }
  }

  update(args) {
    try {
      return schoolModel.update(args);
    } catch (ex) {
      throw ex;
    }
  }

  delete(id) {
    try {
      return schoolModel.del(id);
    } catch (ex) {
      throw ex;
    }
  }

  session(login, password) {
    try {
      return schoolModel.session(login, password, "school");
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new schoolServices();
