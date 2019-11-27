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

  show({ query }, res) {
    schoolService
    .findById(query.id)
    .then(resul => res.json(result.courses))
    .catch(_ => res.sendStatus(500).json({error: "school not found"}));
  }
}

module.exports = new schoolController();
