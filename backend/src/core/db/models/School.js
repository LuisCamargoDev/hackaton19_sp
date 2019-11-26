const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
    name: String,
    endereco: String,
    cursos: [{
      name: String,
      description: String,
      limitSubscriptionDate: Date,
      startDate: Date,
      finishDate: Date,
      coach: String,
      limitStudents: Number,
      students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
      }]
    }],    
});

module.exports = mongoose.model('School', SchoolSchema);