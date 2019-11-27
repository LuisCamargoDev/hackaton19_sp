const yup = require('yup');

module.exports = async (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    cep: yup.string().required(),
  });

  if (!(await schema.isValid())) {
    return res.status(400).json({
      error: 'required parameters',
    });
  }

  return next();
}