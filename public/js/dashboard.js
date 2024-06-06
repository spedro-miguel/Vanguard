document.addEventListener("DOMContentLoaded", function () {
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  let nomeUsuario = document.getElementById("nome_usuario");

  toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  if (sessionStorage.NOME_USUARIO) {
    nomeUsuario.innerHTML = sessionStorage.NOME_USUARIO;
  } else {
    console.error("Sessão do usuário ou pontuação não definida");
  }
});

function mostrar() {
  fetch("/dash/mostrar")
    .then(function (resposta) {
      if (resposta.ok) {
        return resposta.json();
      } else {
        throw "Houve um erro na API!";
      }
    })
    .then(function (resposta) {
      if (resposta.length === 0) {
        var rankingQuiz = document.getElementById("ranking_quiz");
        var mensagem = document.createElement("tr");
        mensagem.innerHTML = `<td colspan="4" style="font-weight: bold;color: #32b9cd;">NENHUM RESULTADO ENCONTRADO PARA O USUÁRIO "${sessionStorage.ID_USUARIO}"</td>`;
        rankingQuiz.appendChild(mensagem);
        return;
      }

      var rankingQuiz = document.getElementById("ranking_quiz");
      rankingQuiz.innerHTML = "";

      let nomeDoUsuario = [];
      let pontosDoUsuario = [];

      for (let i = 0; i < resposta.length; i++) {
        var publicacao = resposta[i];

        nomeDoUsuario.push(publicacao.nomeUsuario);
        pontosDoUsuario.push(publicacao.pontuacao);

        var newRow = document.createElement("tr");
        newRow.innerHTML = `
                  <td>${i + 1}º</td>
                  <td>${publicacao.nomeUsuario}</td>
                  <td>${publicacao.pontuacao}</td>
                  <td>${new Date(publicacao.data).toLocaleString("pt-BR")}</td>
              `;
        rankingQuiz.appendChild(newRow);
      }

      document.getElementById("div_chart").style.display = "block";

      const data = {
        labels: nomeDoUsuario,
        datasets: [
          {
            label: "Pontuação",
            backgroundColor: "#3022cf",
            borderColor: "black",
            borderWidth: 2,
            data: pontosDoUsuario,
          },
        ],
      };

      const config = {
        type: "line",
        data: data,
        options: {
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "black",
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return "Pontuação: " + context.raw;
                },
              },
            },
          },
        },
      };

      const canvas = document.getElementById("myChart");
      new Chart(canvas, config);

      document.getElementById("ranking_table").style.display = "table";
    })
    .catch(function (resposta) {
      console.error(resposta);
    });
}
