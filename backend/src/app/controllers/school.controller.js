const schoolService = require("../../core/services/school.services");
const viacepService = require("../services/viacep");
const gmaps = require("../services/gmaps");

class schoolController {
  async insert({ body, header }, res) {
    const viacepResult = await viacepService(body.address_postalcode);
    const { localidade, logradouro } = JSON.parse(viacepResult);

    body.address_city = localidade;

    const result = await gmaps(
      encodeURIComponent(`${logradouro},${localidade},${body.address_number}`)
    );
    const { results } = result;
    console.error(result);

    if (!results.length) {
      return res.status(500).json({
        error: "erro to get a geolocation"
      });
    }

    const {
      geometry: { location }
    } = results[0];
    const { lat, lng } = location;

    body.address_latlong = `${lat},${lng}`;

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
      .catch(_ => res.sendStatus(500).json({ error: "school not found" }));
  }
  async session({ body }, res) {
    const { login, password } = body;
    schoolService
      .session(login, password)
      .then(resp =>
        resp.message ? res.statusCode(401).json(resp) : res.json(resp)
      )
      .catch(_ => res.statusCode(500).json({ message: "error when login" }));
  }
}

module.exports = new schoolController();
