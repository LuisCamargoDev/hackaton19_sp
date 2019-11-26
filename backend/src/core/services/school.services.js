const schoolModel = require("../db/models/School");

class schoolServices {
  list() {
    try {
      return schoolModel.list();
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
}

module.exports = new schoolServices();
