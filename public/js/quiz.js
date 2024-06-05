let questions = [
  {
    numb: 1,
    question: "Quantos mapas o valorant possui?",
    answer: "10",
    options: ["6", "8", "10", "9"],
  },
  {
    numb: 2,
    question: "Qual o nome da agente brasileira?",
    answer: "Raze",
    options: ["Viper", "Raze", "Skye", "Reyna"],
  },
  {
    numb: 3,
    question: "Quando o jogo foi lançado?",
    answer: "2 de junho de 2020",
    options: [
      "12 de julho de 2020",
      "7 de junho de 2020",
      "5 de julho de 2020",
      "2 de junho de 2020",
    ],
  },
  {
    numb: 4,
    question: "Que time ganhou o Valorant Champions em 2021?",
    answer: "Acend",
    options: ["Sentinels", "Acend", "Evil Geniuses", "Loud"],
  },
  {
    numb: 5,
    question: "Quantos agentes iniciadores existem no jogo?",
    answer: "6",
    options: ["5", "7", "6", "4"],
  },

  {
    numb: 6,
    question: "Quantos agentes existiam durante o beta?",
    answer: "10",
    options: ["7", "9", "8", "10"],
  },
];
//selecionando todos os elementos necessários
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// se o botão de começar o quiz for acionado
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //mostra info do quiz
};

// se o botão de sair do quiz for acionado
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //esconde info do quiz
};

// se botão de iniciar do quiz for acionado
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //esconde info do quiz
  quiz_box.classList.add("activeQuiz"); //mostra info do quiz
  showQuetions(0); //chamando função showQestions
  queCounter(1); //passando 1 parametro para queCounter
  startTimer(15); //chamando função startTimer
  startTimerLine(0); //chamando função startTimerLine
};

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// se o botão de replay for acionado
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); //mostra info do quiz
  result_box.classList.remove("activeResult"); //esconde info do quiz
  timeValue = 15;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); //chamando função showQestions
  queCounter(que_numb); //passando valor que_numb para queCounter
  clearInterval(counter); //limpando contador
  clearInterval(counterLine); //limpando counterLine
  startTimer(timeValue); //chamando função startTimer
  startTimerLine(widthValue); //chamando função startTimerLine
  timeText.textContent = "Tempo"; //mudando o texto de timeText
  next_btn.classList.remove("show"); //esconde botão de próximo
};

// se botão de sair do quiz for acionado
quit_quiz.onclick = () => {
  window.location.reload(); //recarregar a página
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// se o botão de próximo for acionado
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++; //incrementando valor para que_count
    que_numb++; //incrementando valor para que_numb
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Tempo";
    next_btn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult(); //chamando função showResult
  }
};

// pegando perguntas e opções do array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  //criando span e div para perguntas e opções, e passando valor index do array
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; //adicionando span em que_tag
  option_list.innerHTML = option_tag; //adicionando div em option_tag

  const option = option_list.querySelectorAll(".option");

  // onclick em todas opções válidas
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// criando div para icones
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//se uma opção for acionada
function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent; //pegando opção selecionada
  let correcAns = questions[que_count].answer; //pegando opção correta do array
  const allOptions = option_list.children.length; //pegando todas opções do array

  if (userAns == correcAns) {
    //se opção selecionado for a correta
    userScore += 1; //incrementa pontuação em 1
    answer.classList.add("correct"); //adiciona cor verde para resposta correta
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adicionando icone se resposta for certa
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adicionando cor vermelha se a resposta for errada
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adicionando icone se resposta for errada
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        //se houver uma opção que corresponda a uma resposta do array
        option_list.children[i].setAttribute("class", "option correct"); //adicionando cor verde à opção correspondente
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adicionando icone à opção correspondente
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //ao selecionar uma opção, as outras opções não são mais selecionáveis
  }
  next_btn.classList.add("show"); //mostra o botão de próximo ao selecionar qualquer opção
}
function showResult() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult"); //mostra o resultado
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 4) {
    // se pontuação for maior que 4
    //criando nova span com o valor da pontuação e uma mensagem
    let scoreTag =
      "<span>Parabéns! 🎉, Você acertou <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; //adicionando span em scoreTag
  } else if (userScore > 2) {
    // se pontuação for maior que 2
    let scoreTag =
      "<span>Boa 😎, Você acertou <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // se pontuação for menor ou igual a 2
    let scoreTag =
      "<span>Que pena 😐, Você acertou <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //alterando o valor de timeCount com valor de tempo
    time--; //decremento no valor do tempo
    if (time < 9) {
      //se o contador de tempo for menor que 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //adiciona um 0
    }
    if (time < 0) {
      //se contador de tempo for menor que 0
      clearInterval(counter);
      timeText.textContent = "Fim"; //mundando o texto para Fim
      const allOptions = option_list.children.length; // pega todas as opções do array
      let correcAns = questions[que_count].answer; // pega a opção certa do array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //se houver uma opção que corresponda a uma resposta de array
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
          console.log("Fim: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //ao selecionar uma opção as outras não são mais selecionáveis
      }
      next_btn.classList.add("show"); //mostra botão de próximo se selecionar qualquer opção
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //incrementando tempo em 1
    time_line.style.width = time + "px"; //aumentando a barra de tempo com px
    if (time > 549) {
      //se o valor do tempo for maior que 549
      clearInterval(counterLine);
    }
  }
}

function queCounter(index) {
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    questions.length +
    "</p> Questões</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag;
}
