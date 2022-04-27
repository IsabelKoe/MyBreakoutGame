import { styleSheet, htmlBody, htmlHeader, hmtlMain, htmlDivButtons, btnPlayBtn, btnNameBtn, 
  btnHelpBtn, htmlDivGamefield, htmlDivDisplay, htmlDivPlayfield, htmlDivHighscore} from './domutilsStartpage';

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
  htmlDivPlayfield.innerHTML =
    '\
  <canvas id="playfield-canvas" width="1000" height="600"></canvas>\
  <img class="game-background" src="./src/images/background.png"></img>';
}

export {startTheGame, onGamepage}

