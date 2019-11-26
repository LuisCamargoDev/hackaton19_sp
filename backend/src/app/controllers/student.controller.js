const studentService = require('../../core/services/student.services');

class studentController {
  insert({ body }, res) {
    studentService.insert(body)
    .then(resul => res.sendStatus(200).json(resul))
    .catch(err => {
      console.log("error on insert", err);
      res.sendStatus(500).json({ error: "error on insert" });
    });
  }
}

module.exports = new studentController();