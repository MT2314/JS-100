const gameContainer = document.getElementById("game-container");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const score = document.getElementById("score");

const choices = ["rock", "paper", "scissors"];

gameContainer.onclick = play;

function play(e) {
  let computer = choices[Math.floor(Math.random(3) * 3)];
  if (e.target.tagName == "BUTTON") {
    let result = startGame(e.target.id, computer);
    playerChoice.textContent = `You Chose ${e.target.id}`;
    console.log(result);
    score.textContent = `${result.toUpperCase()}`;
    computerChoice.textContent = `Computer Chose ${computer}`;
  }
}

const startGame = (player, computer) => {
  return computer === player
    ? "Tie"
    : computer === "paper" && player === "rock"
    ? "Lose"
    : computer === "scissors" && player === "rock"
    ? "Win"
    : computer === "rock" && player === "paper"
    ? "Lose"
    : computer === "scissors" && player === "paper"
    ? "Lose"
    : computer === "rock" && player === "scissors"
    ? "Win"
    : computer === "paper" && player === "scissors"
    ? "Win"
    : "Error";
};
