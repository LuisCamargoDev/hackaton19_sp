const mongoose = require('mongoose');
const repo = require('../repo');

const courseSchema = mongoose.Schema({
  name: String,
  description: String,
  limitSubscriptionDate: {
    type: Date,
    required: true,
  },
  room: String,
  period: String,
  startDate: Date,
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
});

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
    courses: [courseSchema],    
});


const model = mongoose.model('School', schoolSchema);

module.exports = repo(model);