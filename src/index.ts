import { Player } from "./modules/helpers/player-helpers";
import {
  btnPlayBtn,
  btnNameBtn,
  btnStartBtn,
  playerName,
} from "./modules/helpers/domutils";
import { askForName } from "./modules/player";
import {
  changeToGamePage,
  displayHighscoreList,
} from "./modules/helpers/gamepage-setup";
import { playTheGame } from "./modules/game";
import { time } from "./modules/timer";
import {
  getLocalStorage,
  setDefaultLocalStorage,
  checkStorageforPlayer,
  updateStorage,
} from "./modules/localStorage";

// for a game we need a current player, a default  mystery player
// a playerlist with all existing players
// a variable to check whether a name has been entered
let currentPlayer: Player;
let mysteryPlayer: Player = { name: "Mystery Player" };
let playerList: Player[] = getLocalStorage();
let nameEntered: boolean = false;

//check if playerlist already contains items
// if not, then set localStorage at key players with Mystery Player
if (!playerList.length) {
  setDefaultLocalStorage(mysteryPlayer);
  playerList = getLocalStorage();
  console.log(playerList);
}

// create EventListener for Enter Name Button
// On click, player is asked for name
// Once player entered a name boolen nameEntered is set to true
// Only then player can start with game
btnNameBtn.addEventListener("click", () => {
  const name = askForName(playerList);

  //check if player already exists in localStorage
  // if name already exists, save player in playerFromPlayerList
  const playerFromPlayerList = checkStorageforPlayer(playerList, name);

  // if player does not exist in playerlist, create a new player
  if (playerFromPlayerList === undefined) {
    const newPlayer = { name: name };
    playerList.push(newPlayer);
    //set currentPlayer to newly created player
    currentPlayer = newPlayer;
    // update localstorage
    updateStorage(playerList);
  } else {
    //set existing player from storage to currentPlayer
    currentPlayer = playerFromPlayerList;
  }
  // display currentplayer name in HTML
  playerName.innerHTML = `<p class="player-name">Current Player: ${currentPlayer.name} </p>`;
  nameEntered = true;
});

// create EventListener for Start the Game Button
btnStartBtn.addEventListener("click", () => {
  // if player entered a name, page will change to game setup
  if (nameEntered) {
    changeToGamePage();
    displayHighscoreList(playerList);
    // if player did not enter a name yet, alert will be shown
  } else {
    alert(
      "Please enter a name first! If you click cancel, you will play as Mystery Player."
    );
  }
});

//create EventListener for Play Button on game page
btnPlayBtn.addEventListener("click", () => {
  playTheGame(currentPlayer, playerList, time);
});
