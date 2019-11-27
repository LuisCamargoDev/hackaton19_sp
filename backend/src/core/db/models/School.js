const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const repo = require('../repo');

const schoolSchema = new mongoose.Schema({
    login: {
      type: String,
      require:true,
    },
    password: {
      type: String,
      require: true,
    },
    name: String,
    endereco: String,
    cursos: [{
      name: String,
      description: String,
      room: String,
      limitSubscriptionDate: {
        type: Date,
        require: true,
      },
      startDate: {
        type: Date,
        require: true,
      },
      finishDate: Date,
      limitStudents: {
        type: Number,
        require: true,
      },
      coach: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach'
      },
      students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
      }]
    }],    
});

const model = mongoose.model('School', schoolSchema);

module.exports = repo(model);