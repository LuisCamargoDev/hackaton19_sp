const yup = require("yup");

module.exports = async ({ body }, res, next) => {
  const schema = yup.object().shape({
    limitSubscriptionDate: yup.date().required(),
    limitStudents: yup.number().min(1).required(),
  });

  if (!(await schema.isValid(body))) {
    return res.status(400).json({
      error: 'Required Parameters',
    });
  }

  return next();
}