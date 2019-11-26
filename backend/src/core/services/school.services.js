const schoolModel = require("../db/models/School");

class schoolServices {
  list() {
    try {
      return schoolModel.list();
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
}

module.exports = new schoolServices();
