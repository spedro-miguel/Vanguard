var database = require("../database/config");

function guardarPontuacao(pontuacao, totalPerguntas, fkUsuario) {
  var instrucao = `INSERT INTO pontuacao (pontuacao, totalPerguntas, fkUsuario) VALUES (${pontuacao}, ${totalPerguntas}, ${fkUsuario})`;

  return database.executar(instrucao);
}

module.exports = {
  guardarPontuacao,
};
