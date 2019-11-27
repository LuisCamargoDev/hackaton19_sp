const studentService = require("../../core/services/student.services");

class studentController {
  insert({ body }, res) {
    studentService.insert(body)
    .then(resul => res.sendStatus(200).json(resul))
    .catch(err => {
      res.sendStatus(500).json({ error: "error on insert" });
    });
  }
  
  show(req, res) {
    studentService.list()
    .then(resul => res.json(resul))
    .catch(err => {
      res.sendStatus(500).json({ error: "error on list" });
    });
  }
}

module.exports = new studentController();