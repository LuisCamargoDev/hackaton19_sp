const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const repo = require('../repo');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  login: {
    type: String,
    require:true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: String,
});

const model = mongoose.model('Student', studentSchema);

module.exports = repo(model);
