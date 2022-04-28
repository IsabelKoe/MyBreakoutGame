import { changeToGamePage, btnPlayBtn, btnNameBtn, btnStartBtn } from "./domutils";
import { askForName, currentPlayer, Player } from "./Player";
import {playTheGame} from "./playGame";

btnNameBtn.addEventListener("click", askForName);

btnStartBtn.addEventListener("click", changeToGamePage);
btnPlayBtn.addEventListener('click', playTheGame)

