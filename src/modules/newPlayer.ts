import { playerName } from "../helpers/domutils";
import { Player } from "../helpers/playerHelpers";
import {
  addNewPlayer,
  getLocalStorage,
  checkLocalStorage,
  displayPlayerArrayHighscore,
} from "../helpers/localStorage";


export function askForName(
  playerList: Player[]
): string {
  //get the current localStorage
  // const localStorageArray = getLocalStorage() as Player[];
  //ask player for name and save answer in userInput
  const userInput = prompt("Please enter your name for the game.");
  // if player did not enter any character, then set current player to mysterPlayer from local Storage
  if (userInput === null || userInput === "") {
    return playerList[0].name;
    // if player entered a name, set currentPlayer to this name and also give an playerId
  }

  //   // check if playername already exists in local Storage
  //   if(!checkLocalStorage(currentPlayer, localStorageArray)) {
  //     console.log(checkLocalStorage(currentPlayer, localStorageArray))
  //     // if not push current player into playerArray and update localStorage
  //   addNewPlayer(currentPlayer, playerArray);
  //   };

  return userInput;
  // playerName.innerHTML = `<p class="player-name">Current Player: ${currentPlayer.name} </p>`;
}

export function setHighscore(
  currentPlayer: Player,
  playerArray: Player[],
  currentLevel: number,
  time: string
) {
  let _currentPlayer = currentPlayer;
  for (let player of playerArray) {
    if (player.name === _currentPlayer.name) {
      currentPlayer.highscore?.push({ level: currentLevel, time: time });
    }
  }
}
