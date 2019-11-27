const yup = require("yup");

module.exports = async ({ body }, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    description: yup.string().min(3).required(),
    finishDate: yup.date().required(),
  });

  if (!(await schema.isValid(body))) {
    return res.status(400).json({
      error: 'Required parameters',
    });
  }

  return next();
}