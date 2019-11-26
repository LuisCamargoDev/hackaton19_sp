const mongoose = require('mongoose');
const repo = require('../repo');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: String,
  phone: String,
});

const model = mongoose.model('Student', studentSchema);

module.exports = repo(model);
