//imports
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
import { btnHelpBtn } from "./modules/helpers/domutils";
import { openHelpModal } from "./modules/helpBtn";
import {
  getLocalStorage,
  setDefaultLocalStorage,
  checkStorageforPlayer,
  updateStorage,
} from "./modules/localStorage";


// main gamelogic

// for a new game, we need a (1)current player, a (2)default  mystery player
// a (3) playerlist with all existing players
// a (4) variable to check whether a name has been entered
let currentPlayer: Player;
let mysteryPlayer: Player = { name: "Mystery Player" };
let playerList: Player[] = getLocalStorage();
let nameEntered: boolean = false;


// check if playerlist already contains items
// if not, then set localStorage at key "players" with Mystery Player
// and save LocalStorage with Mystery Player in playerlist Array for game
if (!playerList.length) {
  setDefaultLocalStorage(mysteryPlayer);
  playerList = getLocalStorage();
}

// Buttons & EventListeners for Game

// (1) Enter the name Button
// On click, player is asked for name which returns a string
btnNameBtn.addEventListener("click", () => {
  const name = askForName(playerList);

  // then check if player already exists in localStorage
  // if name already exists, save player in playerFromPlayerList
  // if  not, undefined is returned
  const playerFromPlayerList = checkStorageforPlayer(playerList, name);

  // if player does not exist in playerlist, create a new player object
  // and push it to playerList Array
  if (playerFromPlayerList === undefined) {
    const newPlayer = { name: name };
    playerList.push(newPlayer);
    // set currentPlayer to newly created player
    currentPlayer = newPlayer;
    // update localstorage with updated playerList
    updateStorage(playerList);
  } else {
    // set existing player from storage to currentPlayer
    currentPlayer = playerFromPlayerList;
  }
  // display currentplayer name in HTML on startopage
  playerName.innerHTML = `<p class="player-name">Current Player: ${currentPlayer.name} </p>`;
  nameEntered = true;
});

// (2) Start the Game Button
btnStartBtn.addEventListener("click", () => {
  // if player entered a name, page will change to game setup 
  // and existings highscores will be displayed
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

// (3) Help Button
// on click a modal opens and displays some information regarding the game
btnHelpBtn.addEventListener("click", () => {
  openHelpModal();
});


// (4) Play Button on Gamepage
// on click, game will be started
btnPlayBtn.addEventListener("click", () => {
  playTheGame(currentPlayer, playerList);
});
