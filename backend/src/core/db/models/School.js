const mongoose = require("mongoose");
const repo = require("../repo");

const courseSchema = mongoose.Schema({
  name: String,
  description: String,
  limitSubscriptionDate: {
    type: Date,
    required: true
  },
  room: String,
  period: String,
  startDate: Date,
  finishDate: Date,
  limitStudents: String,
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach"
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
});

const schoolSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address_postalcode: {
    type: String,
    required: true
  },
  address_city: {
    type: String,
    required: true
  },
  address_number: {
    type: String,
    required: true
  },
  address_latlong: {
    type: String,
    required: true
  },
  courses: [courseSchema]
});

schoolSchema.pre("save", function(next) {
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

const model = mongoose.model("School", schoolSchema);

module.exports = repo(model);
