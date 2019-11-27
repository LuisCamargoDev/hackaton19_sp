const coachService = require("../../core/services/coach.services");
const viacepService = require("../services/viacep");

class PlacesNearbyController {
  async index({ headers }, res) {
    const { coachid } = headers;

    if (!coachid) {
      return res.status(401).json({
        error: 'Coach not informed',
      });
    }

    const coach = await coachService.findById(coachid);
    
    if (!coach) {
      return res.status(401).json({
        error: 'Coach not found'
      })
    }

    const coachAddress = await viacepService(coach.cep);

    return res.json(coachAddress);
  }
}

module.exports = new PlacesNearbyController();