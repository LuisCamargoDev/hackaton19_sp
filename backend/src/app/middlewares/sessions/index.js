const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = (entity, req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.send({ message: "Token not provided" });

  /*const [, token] = authHeader.split(" ");
  console.log(authHeader,token); */
  return promisify(jwt.verify)(authHeader, process.env.JWT_KEY)
    .then(decoded => {
      if (decoded.entity != entity)
        return res.status(401).send({ message: "Not Authorized" });
      req.body.entityId = decoded.id;
      return next();
    })
    .catch(err => {
      console.log(err);
      res.status(401).send({ message: "Token invalid" });
    });
};
