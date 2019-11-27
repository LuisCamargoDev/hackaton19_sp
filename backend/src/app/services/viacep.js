const request = require('request');

const URL_VIACEP = cep => `https://viacep.com.br/ws/${cep}/json/`

module.exports = cep => {
  return request.get(URL_VIACEP(cep));
}