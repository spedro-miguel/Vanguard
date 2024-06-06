var medidaModel = require("../models/medidaModel");

function guardarPontuacao(req, res) {
  var pontuacao = req.body.pontuacao;
  var totalPerguntas = req.body.totalPerguntas;
  var fkUsuario = req.body.fkUsuario;

  medidaModel
    .guardarPontuacao(pontuacao, totalPerguntas, fkUsuario)
    .then(function (resultado) {
      res.status(201).json({ message: "Pontuação guardada com sucesso!" });
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao guardar a pontuação.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  guardarPontuacao,
};
