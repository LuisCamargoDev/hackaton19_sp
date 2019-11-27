const mongoose = require("mongoose");
const repo = require("../repo");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
  phone: String
});

studentSchema.pre("save", function(next) {
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

const model = mongoose.model("Student", studentSchema);

module.exports = repo(model);
