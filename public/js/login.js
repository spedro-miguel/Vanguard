const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("dsadad");
  // nameValidate();
  // emailValidate();
  // mainPasswordValidate();
  // comparePassword();
});

function setError(index) {
  campos[index].style.border = "2px solid #e63636";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function emailValidate() {
  if (!emailRegex.test(campos[0].value)) {
    setError(0);
  } else {
    removeError(0);
  }
}

function mainPasswordValidate() {
  if (campos[1].value.length < 7) {
    setError(1);
  } else {
    removeError(1);
  }
}

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
