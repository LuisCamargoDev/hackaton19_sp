const coachService = require("../../core/services/coach.services");
const schoolService = require("../../core/services/school.services");

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

    const schools = await schoolService.list({
      address_city: coach.address_city,
    })

    return res.json(schools);
  }
}

module.exports = new PlacesNearbyController();