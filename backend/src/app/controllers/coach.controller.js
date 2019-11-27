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

  async session({ body }, res) {
    const { login, password } = body;
    Coach.session(login, password)
      .then(resp =>
        resp.message ? res.statusCode(401).json(resp) : res.json(resp)
      )
      .catch(_ => res.statusCode(500).json({ message: "error when login" }));
  }
}

module.exports = new CoachController();
