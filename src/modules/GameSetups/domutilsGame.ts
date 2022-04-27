//import HTML Elements from domutilsStartpage
import { styleSheet, htmlBody, htmlHeader, hmtlMain, htmlDivButtons, btnStartBtn, btnNameBtn, 
  btnHelpBtn, htmlDivGamefield, htmlDivDisplay, htmlDivPlayfield, htmlDivHighscore} from '../../domutilsStartpage';

//Grab or create HTML Elements needed for playing the game
const canvas =
  document.getElementById("#playfield-canvas") as HTMLCanvasElement;
const currentScore: HTMLObjectElement | null =
  document.querySelector(".current-score");
const playBtn: HTMLButtonElement | null =
  document.querySelector(".playBtn");
const playerInfo: HTMLObjectElement | null = document.querySelector(".player-info");
const ballImg: HTMLImageElement = document.createElement("img");
const blueBrickImg: HTMLImageElement = document.createElement("img");
const greenBrickImg: HTMLImageElement = document.createElement("img");
const purpleBrickImg: HTMLImageElement = document.createElement("img");
const redBrickImg: HTMLImageElement = document.createElement("img");
const yellowBrickImg: HTMLImageElement = document.createElement("img");
const paddleImg: HTMLImageElement = document.createElement("img");

//Grab HTML Elements outside grid-gamefield
// const nameBtn: HTMLButtonElement | null = document.querySelector('.nameBtn')


//export HTML Elements
export {
  canvas,
  currentScore,
  playBtn,
  playerInfo,
  ballImg,
  blueBrickImg,
  greenBrickImg,
  purpleBrickImg,
  redBrickImg,
  yellowBrickImg,
  paddleImg,
};
