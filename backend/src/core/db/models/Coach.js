const mongoose = require('mongoose');
const repo = require('../repo');

const Schema = mongoose.Schema;

const coachSchema = new Schema({
  name: String,
  cep: String,
});

const model = mongoose.model('Coach', coachSchema);

module.exports = repo(model);
