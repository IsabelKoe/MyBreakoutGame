import { btnHelpBtn, btnNameBtn, btnStartBtn, gamefield, hmtlMain, htmlDivButtons, htmlHeader, styleSheet } from "./domutils";


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
styleSheet.href = "./src/styles/styleGame.css";
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

