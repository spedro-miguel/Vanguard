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

function logar() {
  var emailVar = input_email.value;
  var senhaVar = input_senha.value;
  exibirErroEmail.innerHTML = "";
  exibirErroSenha.innerHTML = "";

  if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1) {
    exibirErroEmail.style.display = "block";
    exibirErroEmail.innerHTML = "email inválido";
  } else if (senhaVar.length < 7) {
    exibirErroSenha.style.display = "block";
    exibirErroSenha.innerHTML = "Digite uma senha com no mínimo 7 caracteres.";

    finalizarAguardar();
    return false;
  } else {
    exibirErroEmail.innerHTML = "";
    exibirErroSenha.innerHTML = "";
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!");

        if (resposta.ok) {
          console.log(resposta);

          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));
            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.nomeUsuario;
            sessionStorage.ID_USUARIO = json.idUsuario;

            // sessionStorage.AQUARIOS = JSON.stringify(json.aquarios);
            window.location = "./quiz.html";
          });
        } else {
          exibirErroLogin.innerHTML = "Login incorreto, tente novamente.";

          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then((texto) => {
            console.error(texto);
            finalizarAguardar(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });

    return false;
  }
}
