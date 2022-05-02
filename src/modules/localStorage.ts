import { Player } from "./helpers/player-helpers";
import {
  highscoreList,
  createNewListItem,
  playerName,
} from "./helpers/domutils";

// get localStorage at key "players"
export function getLocalStorage(): Player[] {
  const savedPlayerList = JSON.parse(localStorage.getItem("players") || "[]");
  return savedPlayerList;
}

//set default localStorage with a random player
export function setDefaultLocalStorage(defaultPlayer: Player) {
  localStorage.setItem("players", JSON.stringify([defaultPlayer]));
}

// check if a player already exists in localStorage
export function checkStorageforPlayer(playerList: Player[], name: string): Player| undefined {
  const savedPlayer = playerList.find((player, _index, _other) => {
    if (player.name === name) return true;
    else false;
  });
return savedPlayer;
};

// update localStorage after something has been changed in playerlist
export function updateStorage(playerList: Player[]){
  localStorage.setItem("players", JSON.stringify(playerList));
};




// //ToDo check if all other function can be deleted??
// //push array to localstorage
// export function updateLocalStorage(players: Player[]) {
//   localStorage.setItem("players", JSON.stringify(players));
// }

// // get playerArray from localStorage

// // add new player to player array
// export function addNewPlayer(
//   currentPlayer: Player,
//   players: Player[]
// ): Player[] {
//   // check if player already exists
//   // if (checkLocalStorage(currentPlayer, players) === false) {
//   // if not, then push to player array and update local storage
//   players.push(currentPlayer);
//   updateLocalStorage(players);
//   // } else {
//   // get player from localStorage with name of currentPlayer
//   // const savedPlayer = getPlayerFromStorage(currentPlayer);
//   // _currentPlayer = savedPlayer;
//   // }
//   return players;
// }

// // check if player already exists in storage
// export function checkLocalStorage2(
//   currentPlayer: Player,
//   localStorageArray: Player[]
// ): boolean {
//   let playerExists: boolean = false;
//   let players = JSON.parse(localStorage.getItem("players") || "[]") as Player[];
//   for (let player of players) {
//     if (player.name == currentPlayer.name) {
//       console.log("Der Name wurde bereits gespeichert.");
//       console.log(currentPlayer, player);
//       playerExists = true;
//     } else playerExists = false;
//   }
//   return playerExists;
// }

// // get player with certain name from local storage
// // function getPlayerFromStorage(currentPlayer: Player): Player {
// //   const existingPlayers = getLocalStorage();
// //   let savedPlayer: Player = { playerId: 0, name: "" };
// //   for (let player of existingPlayers) {
// //     if (currentPlayer.playerId === player.playerId) {
// //       console.log("Wir haben dich in der Liste gefunden.");
// //       savedPlayer = player;
// //     } else
// //       console.log(
// //         "Hier ist etwas schief gelaufen. Wir konnten dich nicht in der Liste finden."
// //       );
// //   }
// //   return savedPlayer;
// // }

// // display all players' highscores in HTML
// export function displayPlayerArrayHighscore() {
//   const currentPlayerList = getLocalStorage();
//   for (let player of currentPlayerList) {
//     let playerName = player.name;
//     let playerHighscore = player.highscore!;
//     if (!playerHighscore === null) {
//       for (let highscore of playerHighscore) {
//         const liItem = createNewListItem();
//         liItem.innerHTML = `<pre>${playerName}:   ${highscore.level}   ${highscore.time}</pre>`;
//         highscoreList.appendChild(liItem);
//       }
//     }
//   }
// }
