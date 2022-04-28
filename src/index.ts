import { changeToGamePage, btnPlayBtn } from "./domutils";
import {playTheGame} from "./playGame";

changeToGamePage();
btnPlayBtn.addEventListener('click', playTheGame)
// playTheGame();
