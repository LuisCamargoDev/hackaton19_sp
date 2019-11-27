const Coach = require("../../core/db/models/Coach");
const coachService = require("../../core/services/coach.services");
const viacepService = require("../services/viacep");

class CoachController {
  async insert({ body }, res) {
    const viacep = await viacepService(body.address_postalcode);
    const { localidade } = JSON.parse(viacep);

    body.address_city = localidade;

    const coach = await Coach.insert(body);

    return res.json(coach);
  }

  async session({ body }, res) {
    const { login, password } = body;
    coachService
      .session(login, password)
      .then(resp =>
        resp.message ? res.sendStatus(401).json(resp) : res.json(resp)
      )
      .catch(_ => res.sendStatus(500).json({ message: "error when login" }));
  }
}

module.exports = new CoachController();
