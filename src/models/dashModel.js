var database = require("../database/config");

function mostrar() {
  console.log(
    "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucaoSql = `
SELECT u.nomeUsuario, p.pontuacao, p.data
FROM pontuacao p
JOIN usuario u ON p.fkUsuario = u.idUsuario
JOIN (
    SELECT fkUsuario, MAX(idPontuacao) AS ultimoId
    FROM pontuacao
    GROUP BY fkUsuario
) AS sq ON p.fkUsuario = sq.fkUsuario AND p.idPontuacao = sq.ultimoId
ORDER BY p.pontuacao DESC
LIMIT 7;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  mostrar,
};
