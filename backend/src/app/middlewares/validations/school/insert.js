const yup = require('yup');

module.exports = (req, res, next) => {
  const schema = yup.object().shape({
    login: yup.string().min(3).required(),
    password: yup.string().min(3).required(),
    name: yup.string().required(),
    address_postalcode: yup.string().required(),
    address_number: yup.number().required(),
  });

  if (!(await schema.isValid())) {
    return res.status(400).json({
      error: 'Required Parameters',
    });
  }

  return next();
}
