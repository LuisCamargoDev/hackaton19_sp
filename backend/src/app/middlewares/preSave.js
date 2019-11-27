const bcrypt = require('bcryptjs');

module.exports = async ({ body }, res, next) => {
  bcrypt.hash(body.password, 10, function(err, hash) {
    if (err) return next(err);

    body.password = hash;
    return next();
  });
}