const depareObjects = (arg, model) =>
  new Promise(resolve => {
    for (let key in arg) {
      if (arg.hasOwnProperty(key)) {
        if (arg[key] != undefined && arg[key] != null) model[key] = arg[key];
      }
    }
    return resolve(model);
  });

const pipe = (...funcoes) => valorInicial =>
  funcoes.reduce((valor, funcao) => funcao(valor), valorInicial);

function parseJwt(token) {
  return pipe([
    token.split(".")[1],
    base64Url => base64Url.replace(/-/g, "+").replace(/_/g, "/"),
    base64 => new Buffer(base64, "base64"),
    buff => buff.toString("ascii"),
    payloadinit => JSON.parse(payloadinit)
  ]);
}

module.exports = { parseJwt, depareObjects };
