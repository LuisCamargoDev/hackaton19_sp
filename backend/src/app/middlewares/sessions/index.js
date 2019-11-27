const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const objectUtils = require("../../../core/utils/objects");
module.exports = (entity,req, res, next) => {
  const authHeader = req.headers.authorization;

  const tokenObj = objectUtils.parseJwt(authHeader);
  if (tokenObj.entity != entity)
    return res.status(401).send({ message: "Not Authorized" });

  if (!authHeader) return res.send({ message: "Token not provided" });

  const [, token] = authHeader.split(" ");

  return promisify(jwt.verify)(token, process.env.APP_SECRET)
    .then(decoded => {
      req.userId = decoded.id;
      return next();
    })
    .catch(err => res.status(401).send({ message: "Token invalid" }));
};
