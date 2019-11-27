const mongoose = require('mongoose');
const repo = require('../repo');

const Schema = mongoose.Schema;

const coachSchema = new Schema({
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
  cep: String,
});

const model = mongoose.model('Coach', coachSchema);

module.exports = repo(model);
