//Grab or create HTML Elements needed for playing the game
const canvas: HTMLCanvasElement | null =
  document.querySelector("#playfield-canvas");
const currentScore: HTMLObjectElement | null =
  document.querySelector(".current-score");
const startBtn: HTMLButtonElement | null =
  document.querySelector(".playBtn");
const playerInfo: HTMLObjectElement | null = document.querySelector("#player-info");
const ballImg: HTMLImageElement = document.createElement("img");
const blueBrickImg: HTMLImageElement = document.createElement("img");
const greenBrickImg: HTMLImageElement = document.createElement("img");
const purpleBrickImg: HTMLImageElement = document.createElement("img");
const redBrickImg: HTMLImageElement = document.createElement("img");
const yellowBrickImg: HTMLImageElement = document.createElement("img");
const paddleImg: HTMLImageElement = document.createElement("img");

//Grab HTML Elements outside grid-gamefield
const nameBtn: HTMLButtonElement | null = document.querySelector('.nameBtn')


//export HTML Elements
export {
  canvas,
  currentScore,
  startBtn,
  playerInfo,
  ballImg,
  blueBrickImg,
  greenBrickImg,
  purpleBrickImg,
  redBrickImg,
  yellowBrickImg,
  paddleImg,
};
