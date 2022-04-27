// //grab html elements
// const styleSheet = document.querySelector("link") as HTMLLinkElement;
// const htmlBody = document.querySelector("body") as HTMLBodyElement;
// const htmlHeader = document.querySelector(".header") as HTMLElement;
// const hmtlMain = document.querySelector(".main") as HTMLElement;
// const htmlDivButtons = document.querySelector(".buttons") as HTMLDivElement;
// const btnPlayBtn = document.querySelector(".playBtn") as HTMLButtonElement;
// const htmlDivGamefield = document.querySelector(".gamefield") as HTMLDivElement;
// const htmlDivDisplay = document.querySelector(".display") as HTMLDivElement;
// const htmlDivplayfield = document.querySelector(".playfield") as HTMLDivElement;
// const htmlDivHighscore = document.querySelector(".highscore") as HTMLDivElement;

// // change page setting / styling of from startpage to gamepage
// function startTheGame() {
//   btnPlayBtn?.addEventListener("click", () => {
//     changeStylesheet();
//     changeHeader();
//     changeMain();
//   });
// }

// //exchange the linked stylesheet with the stylesheet for the gamepage
// function changeStylesheet() {
//   styleSheet.href = "styleGame.css";
// }
// // change header element for gamepage
// function changeHeader() {
//   htmlHeader.classList.toggle("gamepage");
//   htmlHeader.innerHTML = "<h1>Breakout Game</h1>";
// }

// function changeMain() {
//   hmtlMain.classList.toggle("grid");
//   htmlDivButtons.classList.toggle("grid");
//   changeGamefield();
//   changeHighscore();
// }

// function changeHighscore() {
//   htmlDivHighscore.innerHTML = "<h2>Your Highscores:</h2>";
// }

// function changeGamefield() {
//   htmlDivGamefield.classList.toggle("grid");
//   htmlDivDisplay.innerHTML =
//     '\
//   <div class="current-score"></div> \
//   <div class="player-info">Press play!</div>';
//   htmlDivplayfield.innerHTML =
//     '\
//   <canvas class="playfield-canvas" width="1000" height="600"></canvas>\
//   <img class="game-background" src="./src/images/background.png"></img>';

//   // const htmlDivCurrentScore = document.createElement('div') as HTMLDivElement
//   // htmlDivCurrentScore.classList.add('current-score');
//   // const htmlDivPlayerInfo = document.createElement('div') as HTMLDivElement
//   // htmlDivPlayerInfo.classList.add('player-info');
//   // htmlDivGamefield.appendChild(htmlDivDisplay);
//   // htmlDivDisplay.appendChild(htmlDivCurrentScore);
//   // htmlDivDisplay.appendChild(htmlDivPlayerInfo);
// }
