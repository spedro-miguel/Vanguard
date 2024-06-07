const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".cadastro__button");

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));

function cadastrar() {
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = input_nome.value;
  var emailVar = input_email.value;
  var senhaVar = input_senha.value;
  var senhaComparacaoVar = input_compararSenha.value;
  exibirErroNome.innerHTML = "";
  exibirErroEmail.innerHTML = "";
  exibirErroSenha.innerHTML = "";
  exibirErroComparacaoSenha.innerHTML = "";

  if (nomeVar.length <= 3) {
    exibirErroNome.style.display = "block";
    exibirErroNome.innerHTML = "Nome deve ter no mínimo 3 caracteres";
  } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1) {
    exibirErroEmail.style.display = "block";
    exibirErroEmail.innerHTML = "Digite um email válido.";
  } else if (senhaVar.length < 7) {
    exibirErroSenha.style.display = "block";
    exibirErroSenha.innerHTML = "Digite uma senha com no mínimo 7 caracteres.";
  } else if (senhaComparacaoVar != senhaVar) {
    exibirErroComparacaoSenha.style.display = "block";
    exibirErroComparacaoSenha.innerHTML = "As senhas devem ser compatíveis.";

    finalizarAguardar();
    return false;
  } else {
    // setInterval(sumirMensagem, 5000);

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        senhaComparacaoServer: senhaComparacaoVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          // cardErro.style.display = "block";

          /*mensagem_erro.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";*/
          window.location = "./login.html";

          // setTimeout(() => {
          //   window.location = "login.html";
          //}, "1000");

          // limparFormulario();
          // finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });

    return false;
  }
}
