import { Player } from "./helpers/playerHelpers";
import { updateLocalStorage, setDefaultLocalStorage } from './helpers/localStorage';
import { btnPlayBtn, btnNameBtn, btnStartBtn } from "./helpers/domutils";
import { askForName } from "./modules/newPlayer";
import { changeToGamePage } from "./helpers/gamepageSetup";
import { playTheGame } from "./playGame";
import { time } from './timer';

let currentPlayer: Player;
let mysteryPlayer: Player = { playerId: 99, name: "Mystery Player" };
let playerArray: Player[] = [mysteryPlayer];
let localStorageArray = JSON.parse(localStorage.getItem("players") || '[]');
let nameEntered: boolean = false;
let currentLevel = 1;


//get localStorage
console.log(localStorageArray);
if(localStorageArray == null) {
    console.log(localStorageArray);
//set default localStorage if localStorage is empty
    localStorage.setItem("players", JSON.stringify(playerArray));
    localStorageArray = JSON.parse(localStorage.getItem("players") || "[]");
  console.log(localStorageArray)
}

// create EventListener for Enter Name Button
// On click, player is asked for name
// Once player entered a name boolen nameEntered is set to true
// Only then player can start with game
btnNameBtn.addEventListener("click", () => {
  askForName(currentPlayer, playerArray, localStorageArray);
  nameEntered = true;
});

// create EventListener for Start the Game Button
btnStartBtn.addEventListener("click", () => {
  // if player entered a name, page will change to game setup
  if (nameEntered) {
    changeToGamePage();
    // if player did not enter a name yet, alert will be shown
  } else {
    alert(
      "Please enter a name first! If you click cancel, you will play as Mystery Player."
    );
  }
});

//create EventListener for Play Button on game page
btnPlayBtn.addEventListener("click", () => {
  playTheGame(currentPlayer,playerArray, currentLevel, time);
});
