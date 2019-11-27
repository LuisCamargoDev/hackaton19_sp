const studentService = require("../../core/services/student.services");

class studentController {
  insert({ body }, res) {
    studentService
      .insert(body)
      .then(resul => res.sendStatus(200).json(resul))
      .catch(err => {
        res.sendStatus(500).json({ error: "error on insert" });
      });
  }

  show(req, res) {
    studentService
      .list()
      .then(resul => res.json(resul))
      .catch(err => {
        res.sendStatus(500).json({ error: "error on list" });
      });
  }
  async session({ body }, res) {
    const { login, password } = body;
    studentService
      .session(login, password)
      .then(resp =>
        resp.message ? res.statusCode(401).json(resp) : res.json(resp)
      )
      .catch(_ => res.statusCode(500).json({ message: "error when login" }));
  }
}

module.exports = new studentController();
