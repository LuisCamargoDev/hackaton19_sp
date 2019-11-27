const request = require('request-promise-native');

const URL_VIACEP = cep => `https://viacep.com.br/ws/${cep}/json/`

module.exports = cep => {
  return request.get(URL_VIACEP(cep));
}