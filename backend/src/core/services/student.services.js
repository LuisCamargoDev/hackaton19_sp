const studentModel = require("../db/models/Student");

class studentServices {
  list() {
    try {
      return studentModel.list();
    } catch (ex) {
      throw ex;
    }
  }

  findById(id) {
    try {
      return studentModel.findById(id);
    } catch (ex) {
      throw ex;
    }
  }

  insert(args) {
    try {
      return studentModel.insert(args);
    } catch (ex) {
      throw ex;
    }
  }

  update(args) {
    try {
      return studentModel.update(args);
    } catch (ex) {
      throw ex;
    }
  }

  delete(id) {
    try {
      return studentModel.del(id);
    } catch (ex) {
      throw ex;
    }
  }

  session(login, password) {
    try {
      return studentModel.session(login, password, "student");
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new studentServices();
