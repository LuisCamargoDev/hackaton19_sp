const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const repo = require('../repo');

const schoolSchema = new mongoose.Schema({
    login: {
      type: String,
      required:true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address_postalcode: {
      type: String,
      required: true,
    },
    address_number: {
      type: String,
      required: true,
    },
    latlong: String,
    cursos: [{
      name: String,
      description: String,
      room: String,
      limitSubscriptionDate: {
        type: Date,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      finishDate: Date,
      limitStudents: {
        type: Number,
        required: true,
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