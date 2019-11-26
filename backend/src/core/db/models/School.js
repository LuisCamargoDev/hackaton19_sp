const { Schema, model }= require('mongoose');
const repo = require('../repo');

const SchoolSchema = new Schema({
    name: String,
    endereco: String,
    cursos: [{
      name: String,
      description: String,
      limitSubscriptionDate: Date,
      startDate: Date,
      finishDate: Date,
      coach: {
        type: Schema.Types.ObjectId,
        ref: 'Coach'
      },
      limitStudents: Number,
      students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
      }]
    }],    
});

const Model = model('School', SchoolSchema);

module.exports = repo(Model);