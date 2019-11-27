const Coach = require("../db/models/Coach");

class CoachService {
  list(obj) {
    try {
      return Coach.list(obj);
    } catch (ex) {
      throw ex;
    }
  }

  findById(id) {
    try {
      return Coach.findById(id);
    } catch (ex) {
      throw ex;
    }
  }

  insert(args) {
    try {
      return Coach.insert(args);
    } catch (ex) {
      throw ex;
    }
  }

  update(args) {
    try {
      return Coach.update(args);
    } catch (ex) {
      throw ex;
    }
  }

  delete(id) {
    try {
      return Coach.del(id);
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new CoachService();