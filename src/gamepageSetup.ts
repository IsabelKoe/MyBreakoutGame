import { styleSheet, htmlBody, htmlHeader, hmtlMain, htmlDivButtons, btnStartBtn, btnNameBtn, 
  btnHelpBtn, htmlDivGamefield, htmlDivDisplay, htmlDivPlayfield, canvas, canvasImg, htmlDivHighscore} from './domutilsStartpage';

let onGamepage = false;

// change page setting / styling of from startpage to gamepage
function startTheGame() {
  btnStartBtn?.addEventListener("click", () => {
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

function changeMain() {
  hmtlMain.classList.add("grid");
  htmlDivButtons.classList.add("grid");
  htmlDivButtons.appendChild(htmlDivDisplay);
  changeButtons();
  changeGamefield();
  changeHighscore();
}

function changeButtons() {
  btnStartBtn.remove();
  btnNameBtn.remove();
  btnHelpBtn.remove();
  const btnPlayBtn = document.createElement('button');
  btnPlayBtn.classList.add('btnPlayBtn');
  htmlDivButtons.appendChild(btnPlayBtn);
  btnPlayBtn.innerHTML='Play'
  }

function changeHighscore() {
  htmlDivHighscore.innerHTML = "<h2>Your Highscores:</h2>";
}

function changeGamefield() {
  htmlDivGamefield.classList.add("grid");
  canvas.id = 'playfield-canvas';
  canvas.width=1000;
  canvas.height=600;
  // canvasImg.src='./images/background.png';
//   htmlDivDisplay.innerHTML =
//     '\
//     <div class="player-info">Please press play!</div> \
//   <div class="current-score">Current Score: 0</div>';
//   htmlDivPlayfield.innerHTML =
//     '\
//   <canvas id="playfield-canvas" width="1000" height="600"></canvas>\
//   <img class="game-background" src="./src/images/background.png"></img>';
}

export {startTheGame, onGamepage}

