const yup = require('yup');

module.exports = async (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    cep: yup.string().required(),
    login: yup.string().required(),
    password: yup.string().min(3).required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'required parameters',
    });
  }

  return next();
}