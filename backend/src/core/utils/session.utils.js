const jwtToken = require("jsonwebtoken");

module.exports = {
  async generateToken(obj) {
    return {
      obj,
      token: jwtToken.sign(obj)
    };
  }
};
