//adaug aici in comentarii explicatia logica a jocului
//creez 3 variabile in care sa stochez alegerea utilizatorului, cea a computeruluisi rezultatul.
//Am ales sa creez si o variabila care sa-mi afiseze rezultatul,sa vad daca fucntioneaza cand dau click pe buton....:))
//nu mi-a fost clar cum sa folosesc querySelector,asa ca am folosit getElemenByClass...
const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("playerChoice");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll("button"); //['paper', 'scissor','rock']
let userChoice;
let computerChoice;
let result;

buttons.forEach((buttons) =>
  buttons.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its'a a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win";
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "you lost";
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "you won";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "you win";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost";
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "you lost";
  }
  resultDisplay.innerHTML = result;
}
