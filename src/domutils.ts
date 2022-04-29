//grab html elements from startpage
export const styleSheet = document.querySelector("link") as HTMLLinkElement;
export const htmlHeader = document.querySelector(".header") as HTMLElement;
export const hmtlMain = document.querySelector(".main") as HTMLElement;
export const htmlDivButtons = document.querySelector(".buttons") as HTMLElement;
export const btnStartBtn = document.querySelector(".startBtn") as HTMLButtonElement;
export const btnNameBtn = document.querySelector(".nameBtn") as HTMLButtonElement;
export const btnHelpBtn = document.querySelector(".helpBtn") as HTMLButtonElement;
export const btnPlayBtn = document.querySelector('.playBtn') as HTMLButtonElement;
export const gamefield = document.querySelector(".gamefield") as HTMLElement;
export const playfield = document.querySelector(".playfield") as HTMLElement;
export const canvas = document.querySelector('#playfield-canvas') as HTMLCanvasElement;
export const canvasImg = document.querySelector('.game-background') as HTMLImageElement;
export const display = document.querySelector(".display") as HTMLElement;
export const currentScore = document.querySelector('.current-score') as HTMLElement;
export const playerInfo = document.querySelector('.player-info') as HTMLElement;
export const highscore = document.querySelector(".highscore") as HTMLElement;
export const playerName = document.querySelector(".player-name") as HTMLElement;
export const timer = document.querySelector(".timer") as HTMLElement;


export const ballImg: HTMLImageElement = document.createElement("img");
export const blueBrickImg: HTMLImageElement = document.createElement("img");
export const greenBrickImg: HTMLImageElement = document.createElement("img");
export const purpleBrickImg: HTMLImageElement = document.createElement("img");
export const redBrickImg: HTMLImageElement = document.createElement("img");
export const yellowBrickImg: HTMLImageElement = document.createElement("img");
export const paddleImg: HTMLImageElement = document.createElement("img");

// change styling of page to styleGame.css and adjust classes
export function changeToGamePage(){
        //insert the new stylesheet
        changeStyleSheet();
        //adjust the header
        changeHeader(); 
        //adjust the main
        changeMain();
}

//exchange stylesheet in html
function changeStyleSheet(){
    styleSheet.href = "styleGame.css";
}

//adjust the header element for game
function changeHeader() {
    htmlHeader.classList.add('gamepage');
    htmlHeader.firstChild?.remove()
}

//adjust the main element for game
function changeMain() {
    hmtlMain.classList.add('grid');
    htmlDivButtons.classList.add('grid');
    btnNameBtn.remove();
    btnStartBtn.remove();
    btnHelpBtn.remove();
    gamefield.classList.add('grid');
}

