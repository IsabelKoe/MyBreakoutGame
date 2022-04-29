import { changeToGamePage, btnPlayBtn, btnNameBtn, btnStartBtn, timer } from './domutils';
import { askForName, nameEntered } from "./Player";
import {playTheGame } from "./playGame";

btnNameBtn.addEventListener("click", askForName);
btnStartBtn.addEventListener("click", () => {
    if(nameEntered) {
        changeToGamePage()
    } else {
        alert("Please enter a name first! If you click cancel, you will play as Mystery Player.")
    }
});
btnPlayBtn.addEventListener('click', playTheGame)

