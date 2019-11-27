const Coach = require("../../core/db/models/Coach");

class CoachController {
  async insert(req, res) {
    const coach = await Coach.insert(req.body);
    return res.json(coach);
  }
}

module.exports = new CoachController();
