//Un bouton pour chaque chiffre

//Un bouton pour chaque signe d'opération

//Un tableau pour stocker les nombres de l'opération et les signes d'opération
let currentOperation = [];

let currentNbr = "";

let displayDiv = document.querySelector("#current-operation");

const updateDisplay = () => {
  console.log(currentOperation);
  console.log(displayDiv);
  displayDiv.textContent = currentOperation.join(" ");
};

const addToArrayOperation = () => {
  currentOperation.push(strToNumber());
  currentNbr = "";
  console.log(currentOperation);

}
const strToNumber = () => {
  return Number.parseInt(currentNbr);
};

const addNumberStrToCurrent = (numberStr) => {
  //Si on clique sur 0 alors que le nombre est vide (inutile de mettre un 0 en premier)
  if (numberStr == "0" && currentNbr == "") {
    return;
  }
  console.log("vous avez cliqué sur le bouton " + numberStr);
  currentNbr += numberStr;
  console.log(currentNbr);
};


const addSignToOperation = (signStr) => {
  updateDisplay();
  currentOperation.push(signStr);
  console.log(currentOperation);
};

let button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
  addNumberStrToCurrent("1");
});

let button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {
  addNumberStrToCurrent("2");
});

let button3 = document.querySelector("#button3");
button3.addEventListener("click", () => {
  addNumberStrToCurrent("3");
});

let button4 = document.querySelector("#button4");
button4.addEventListener("click", () => {
  addNumberStrToCurrent("4");
});

let button5 = document.querySelector("#button5");
button5.addEventListener("click", () => {
  addNumberStrToCurrent("5");
});

let button6 = document.querySelector("#button6");
button6.addEventListener("click", () => {
  addNumberStrToCurrent("6");
});

let button7 = document.querySelector("#button7");
button7.addEventListener("click", () => {
  addNumberStrToCurrent("7");
});

let button8 = document.querySelector("#button8");
button8.addEventListener("click", () => {
  addNumberStrToCurrent("8");
});

let button9 = document.querySelector("#button9");
button9.addEventListener("click", () => {
  addNumberStrToCurrent("9");
});

let button0 = document.querySelector("#button0");
button9.addEventListener("click", () => {
  addNumberStrToCurrent("0");
});

let buttonPlus = document.querySelector("#buttonPlus");
buttonPlus.addEventListener("click", () => {
  addSignToOperation("+");
});

//let button0 = document.querySelector("#0");
