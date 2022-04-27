//grab html elements
const styleSheet = document.querySelector("link") as HTMLLinkElement;
const htmlBody = document.querySelector("body") as HTMLBodyElement;
const htmlHeader = document.querySelector(".header") as HTMLElement;
const hmtlMain = document.querySelector(".main") as HTMLElement;
const htmlDivButtons = document.querySelector(".buttons") as HTMLDivElement;
const btnStartBtn = document.querySelector(".startBtn") as HTMLButtonElement;
const btnNameBtn = document.querySelector(".nameBtn") as HTMLButtonElement;
const btnHelpBtn = document.querySelector(".helpBtn") as HTMLButtonElement;
const htmlDivGamefield = document.querySelector(".gamefield") as HTMLDivElement;
const htmlDivDisplay = document.querySelector(".display") as HTMLDivElement;
const htmlDivPlayfield = document.querySelector(".playfield") as HTMLDivElement;
const htmlDivHighscore = document.querySelector(".highscore") as HTMLDivElement;

export { styleSheet, htmlBody, htmlHeader, hmtlMain, htmlDivButtons, btnStartBtn, btnNameBtn, 
    btnHelpBtn, htmlDivGamefield, htmlDivDisplay, htmlDivPlayfield, htmlDivHighscore}