import { Player } from "./playerHelpers";
import { highscoreList, createNewListItem, playerName } from './domutils';

//set default player into array
export function setDefaultLocalStorage(localStorageArray: Player[], playerArray: Player[]) {
  localStorage.setItem("players", JSON.stringify(playerArray));
  // localStorageArray = JSON.parse(localStorage.getItem("players") || "[]");
  // console.log(localStorageArray)
  }

//push array to localstorage
export function updateLocalStorage(players: Player[]) {
  localStorage.setItem("players", JSON.stringify(players));
}

// get playerArray from localStorage
export function getLocalStorage(): Player[] {
  const currentPlayerArray = JSON.parse(localStorage.getItem("players") || "[]") as Player[];
  return currentPlayerArray;
}

// add new player to player array
export function addNewPlayer(currentPlayer: Player, players: Player[]): Player[] {
    // check if player already exists
  // if (checkLocalStorage(currentPlayer, players) === false) {
    // if not, then push to player array and update local storage
    players.push(currentPlayer);
    updateLocalStorage(players);
  // } else {
    // get player from localStorage with name of currentPlayer
    // const savedPlayer = getPlayerFromStorage(currentPlayer);
    // _currentPlayer = savedPlayer;
  // }
  return players;
}

// check if player already exists in storage
export function checkLocalStorage(currentPlayer: Player, localStorageArray: Player[]): boolean {
  let playerExists: boolean = false;
  let players = JSON.parse(localStorage.getItem("players") || "[]") as Player[];
  for (let player of players) {
    if (player.name == currentPlayer.name) {
      console.log("Der Name wurde bereits gespeichert.")
      console.log(currentPlayer, player);
      playerExists = true;
    } else playerExists = false;
  }
  return playerExists;
}

// get player with certain name from local storage
// function getPlayerFromStorage(currentPlayer: Player): Player {
//   const existingPlayers = getLocalStorage();
//   let savedPlayer: Player = { playerId: 0, name: "" };
//   for (let player of existingPlayers) {
//     if (currentPlayer.playerId === player.playerId) {
//       console.log("Wir haben dich in der Liste gefunden.");
//       savedPlayer = player;
//     } else
//       console.log(
//         "Hier ist etwas schief gelaufen. Wir konnten dich nicht in der Liste finden."
//       );
//   }
//   return savedPlayer;
// }

// display all players' highscores in HTML
export function displayPlayerArrayHighscore(){
    const currentPlayerList = getLocalStorage();
    for(let player of currentPlayerList) {
        let playerName = player.name;
        let playerHighscore = player.highscore!;
        if(!playerHighscore === null) {
          for(let highscore of playerHighscore) {
        const liItem = createNewListItem();
        liItem.innerHTML = `<pre>${playerName}:   ${highscore.level}   ${highscore.time}</pre>`
        highscoreList.appendChild(liItem);
        }
      }
    }
}


