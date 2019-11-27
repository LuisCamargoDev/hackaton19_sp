const { depareObjects } = require("../utils/objects");
const { comparePassword } = require("../utils/encrypt");
const db = require("./");
const jwt = require("jsonwebtoken");
require("dotenv/config");

class repo {
  constructor(model) {
    this.model = model;
  }

  list(obj = {}) {
    return db.execute(this.model.find(obj)).catch(err => {
      throw err;
    });
  }

  findById(id) {
    return db.execute(this.model.findById({ _id: id })).catch(err => {
      throw err;
    });
  }

  findOne(args) {
    return db
      .execute(this.model.findOne(args))
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }

  insert(arg) {
    return db.execute(new this.model(arg).save()).catch(err => {
      throw err;
    });
  }

  update(arg) {
    return db
      .execute(
        this.model
          .findById(arg._id)
          .then(modelFind => depareObjects(arg, modelFind))
          .then(deparedObject => new this.model(deparedObject).save())
      )
      .catch(err => {
        throw err;
      });
  }

  del(id) {
    return db
      .execute(
        this.model.remove(
          { _id: id },
          err =>
            new Promise((resolve, reject) => {
              if (err) throw reject(err);
              else return db.resolve({ deleted: true });
            })
        )
      )
      .catch(err => {
        throw err;
      });
  }

  session(login, password, entity) {
    return this.model.findOne({ login }).then(res =>
      !res
        ? { message: "login not found" }
        : comparePassword(password, res.password).then(matchPassword =>
            !matchPassword
              ? { message: "Incorrect password" }
              : {
                  res,
                  token: jwt.sign({ id: res._id, entity }, process.env.JWT_KEY)
                }
          )
    );
  }
}

module.exports = model => new repo(model);
