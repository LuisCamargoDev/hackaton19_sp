const schoolService = require("../../core/services/school.services");
const viacepService = require("../services/viacep");

class schoolController {
  async insert({ body, header }, res) {
    const viacepResult = await viacepService(body.address_postalcode);
    const { localidade } = JSON.parse(viacepResult);

    body.address_city = localidade;

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
    .then(resul => res.json(resul.courses))
    .catch(_ => res.sendStatus(500).json({error: "school not found"}));
  }

  update({ query, body }, res) {
    // schoolService
    // .findById(query.id)
    // .then(school => {
    //     const index = school.courses.findIndex(x => x._id == body._id);

    //     delete body._id;

    //     school.courses[index] = body;
    // })
    // .catch(err => {
    //   return res.status(500);
    // })
  }
}

module.exports = new schoolController();
