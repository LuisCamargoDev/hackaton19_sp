const Coach = require("../../core/db/models/Coach");
const viacepService = require("../services/viacep");

class CoachController {
  async insert({ body }, res) {
    const viacep = await viacepService(body.address_postalcode);
    const { localidade } = JSON.parse(viacep);

    body.address_city = localidade;

    const coach = await Coach.insert(body);

    return res.json(coach);
  }
}

module.exports = new CoachController();
