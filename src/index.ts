//grab html elements
const styleSheet = document.querySelector("link") as HTMLLinkElement;
const htmlBody = document.querySelector("body") as HTMLBodyElement;
const htmlHeader = document.querySelector(".header") as HTMLElement;
const hmtlMain = document.querySelector(".main") as HTMLElement;
const htmlDivButtons = document.querySelector(".buttons") as HTMLDivElement;
const btnPlayBtn = document.querySelector(".playBtn") as HTMLButtonElement;
const btnNameBtn = document.querySelector(".nameBtn") as HTMLButtonElement;
const btnHelpBtn = document.querySelector(".helpBtn") as HTMLButtonElement;
const htmlDivGamefield = document.querySelector(".gamefield") as HTMLDivElement;
const htmlDivDisplay = document.querySelector(".display") as HTMLDivElement;
const htmlDivplayfield = document.querySelector(".playfield") as HTMLDivElement;
const htmlDivHighscore = document.querySelector(".highscore") as HTMLDivElement;

let onGamepage = false;

// change page setting / styling of from startpage to gamepage
function startTheGame() {
  btnPlayBtn?.addEventListener("click", () => {
    changeStylesheet();
    changeHeader();
    changeMain();
  });
  onGamepage = true;
}
startTheGame();

//exchange the linked stylesheet with the stylesheet for the gamepage
function changeStylesheet() {
  styleSheet.href = "styleGame.css";
}
// change header element for gamepage
function changeHeader() {
  htmlHeader.classList.add("gamepage");
  htmlHeader.innerHTML = "<h1>Breakout Game</h1>";
}

function changeButtons() {
btnPlayBtn.innerHTML="Play";
btnNameBtn.remove();
btnHelpBtn.remove();
}

function changeMain() {
  hmtlMain.classList.add("grid");
  htmlDivButtons.classList.add("grid");
  htmlDivButtons.appendChild(htmlDivDisplay);
  changeButtons();
  changeGamefield();
  changeHighscore();
}

function changeHighscore() {
  htmlDivHighscore.innerHTML = "<h2>Your Highscores:</h2>";
}

function changeGamefield() {
  htmlDivGamefield.classList.add("grid");
  htmlDivDisplay.innerHTML =
    '\
    <div class="player-info">Please press play!</div> \
  <div class="current-score">Current Score: 0</div>';
  htmlDivplayfield.innerHTML =
    '\
  <canvas class="playfield-canvas" width="1000" height="600"></canvas>\
  <img class="game-background" src="./src/images/background.png"></img>';
}
