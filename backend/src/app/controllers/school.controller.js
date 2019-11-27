const schoolService = require("../../core/services/school.services");
class schoolController {
  insert({ body, header }, res) {
    return schoolService
      .insert(body)
      .then(resul => res.status(200).json(resul))
      .catch(err => {
        console.log("error on insert", err);
        return res.status(500).json({ error: "error on insert" });
      });
  }
}

module.exports = new schoolController();
