const bcrypt = require("bcrypt");

const comparePassword = (candidatePassword, password) =>
  new Promise(resolve =>
    bcrypt.compare(candidatePassword, password, (err, isMatch) => {
      if (err) throw err;
      resolve(isMatch);
    })
  );

module.exports = { comparePassword };
