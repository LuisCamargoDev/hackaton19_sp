const mongoose = require("mongoose");
const repo = require("../repo");
const bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

const coachSchema = new Schema({
  login: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  address_postalcode: {
    type: String,
    required: true
  },
  address_city: {
    type: String,
    required: true
  }
});
coachSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  });
});

const model = mongoose.model("Coach", coachSchema);

module.exports = repo(model);
