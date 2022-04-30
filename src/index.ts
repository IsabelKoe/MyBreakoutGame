import { Player } from "./helpers/playerHelpers";
import {
  updateLocalStorage,
  setDefaultLocalStorage,
} from "./helpers/localStorage";
import { btnPlayBtn, btnNameBtn, btnStartBtn, playerName } from "./helpers/domutils";
import { askForName } from "./modules/newPlayer";
import { changeToGamePage } from "./helpers/gamepageSetup";
import { playTheGame } from "./playGame";
import { time } from "./timer";

let currentPlayer: Player;
let mysteryPlayer: Player = { name: "Mystery Player" };

let playerList: Player[] = JSON.parse(localStorage.getItem("players") || "[]");
let nameEntered: boolean = false;
let currentLevel = 1;


if (!playerList.length) {
  //set default localStorage if localStorage is empty
  localStorage.setItem("players", JSON.stringify([mysteryPlayer]));
  playerList = JSON.parse(localStorage.getItem("players") || "[]");
  console.log(playerList);
}

// TODO: Lösch mich nur zur Erklärung
function findInArray(
  playerList: Player[],
  predicate: (player: Player) => boolean
): Player | undefined {
  for (let player of playerList) {
    if (predicate(player)) {
      return player;
    }
  }

  return undefined;
}

// create EventListener for Enter Name Button
// On click, player is asked for name
// Once player entered a name boolen nameEntered is set to true
// Only then player can start with game
btnNameBtn.addEventListener("click", () => {
  const name = askForName(playerList);

  //check if player already exists in localStorage
  const playerFromPlayerList = playerList.find((player, _index, _other) => {
    if (player.name === name) return true;
    else false;
  });

  if (playerFromPlayerList === undefined) {
    // if not, add new player to playerList
    const newPlayer = { name: name };
    playerList.push(newPlayer);
    currentPlayer = newPlayer;
    console.log(playerList, 'newPlayer added')
    localStorage.setItem("players", JSON.stringify(playerList));
  } else {
    currentPlayer = playerFromPlayerList;
  }
  //   for(let player of playerList) {
  //       if(player.name === currentPlayer.name){
  //           currentPlayer = player;
  //       }
  //   }
  playerName.innerHTML = `<p class="player-name">Current Player: ${currentPlayer.name} </p>`;
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
  playTheGame(currentPlayer, playerList, currentLevel, time);
});
