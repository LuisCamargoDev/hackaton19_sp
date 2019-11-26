const schoolService = require("../../core/services/school.services");
class schoolController {
  insert({ body, header }, res) {
    schoolService
      .insert(body)
      .then(resul => res.sendStatus(200).json(resul))
      .catch(err => {
        console.log("error on insert", err);
        res.sendStatus(500).json({ error: "error on insert" });
      });
  }
}

module.exports = new schoolController();
