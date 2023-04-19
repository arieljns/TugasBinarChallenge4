let gunting = document.getElementsByClassName("gunting");
let kertas = document.getElementsByClassName("kertas");
let batu = document.getElementsByClassName("batu");
const restartButton = document.getElementsByClassName("restart-button");
const playerOptions = [gunting, batu, kertas];
const computerOptions = ["batu-kom", "kertas-kom", "gunting-kom"];
for (var i = 0; i < playerOptions.length; i++) {
  let result = playerOptions[i];
  result[0].addEventListener("click", (event) => {
    rulesOfTheGame(event.target.className);
    result[0].style.backgroundColor = "white";
    result[0].style.borderRadius = "50px";
    result[0].disabled=true;
  });
}
const rulesOfTheGame = (input) => {
  const randomizeSequence = Math.floor(Math.random() * 3);
  const botResult = computerOptions[randomizeSequence];
  const changeBackground = document.getElementsByClassName(botResult);
  changeBackground[0].style.backgroundColor = "white";
  changeBackground[0].style.borderRadius = "50px";
  const splitter = botResult.split("-kom");
  winner(input, splitter[0]);
};
const computerWinner = () => {
  let manipulation = document.getElementsByClassName("computer-win");
  let versus = document.getElementsByClassName("versus");
  versus[0].style.display = "none";
  const computerWin = (manipulation[0].style.display = "block");
  return computerWin;
};
const playerWinner = () => {
  let manipulation = document.getElementsByClassName("player-win");
  let versus = document.getElementsByClassName("versus");
  versus[0].style.display = "none";
  const playerWin = (manipulation[0].style.display = "block");
  return playerWin;
};
const bothTie = () => {
  let manipulation = document.getElementsByClassName("tie");
  let versus = document.getElementsByClassName("versus");
  versus[0].style.display = "none";
  const tieGame = (manipulation[0].style.display = "block");
  return tieGame;
};
const winner = (player, computer) => {
  if (player == computer) {
    bothTie();
  } else if (player == "gunting") {
    computer == "kertas" ? playerWinner() : computerWinner();
  } else if (player == "batu") {
    computer == "gunting" ? playerWinner() : computerWinner();
  } else if (player == "kertas") {
    computer == "batu" ? playerWinner() : computerWinner();
  }
};
restartButton[0].addEventListener("click", () => {
  window.location.reload();
});
