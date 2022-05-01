import { playerName } from "../helpers/domutils";
import { Player } from '../helpers/playerHelpers';
import {
  addNewPlayer,
  getLocalStorage,
  checkLocalStorage,
  displayPlayerArrayHighscore,
} from "../helpers/localStorage";


export function askForName(
  playerList: Player[]
): string {
  //ask player for name and save answer in userInput
  const userInput = prompt("Please enter your name for the game.");
  // if player did not enter any character, then set current player to mysterPlayer from local Storage
  if (userInput === null || userInput === "") {
    return playerList[0].name;
    // if player entered a name, set currentPlayer to this name and also give an playerId
  }
  return userInput;
  // playerName.innerHTML = `<p class="player-name">Current Player: ${currentPlayer.name} </p>`;
}

export function setHighscore(
  currentPlayer: Player,
  playerList: Player[],
  currentLevel: number,
  time: string
) {
  console.log('init setGameWin Function');
  // const playerFromPlayerList = playerList.find((player, _index, _other) => {
  //   if (player.name === currentPlayer.name) return player;
  //   else undefined;

  //   if(playerFromPlayerList === player) {
  //     console.log("HIghscore wird gesetzt")
  //     currentPlayer.highscore?.push({ level: currentLevel, time: time });
  //     localStorage.setItem("players", JSON.stringify(playerList));
  //   } else console.log("Fehler");

  // });

  const  updatedPlayerList = playerList.map(player => {
    if(player.name === currentPlayer.name){
      console.log(currentPlayer.name, player.name);
      return {...player, highscore: [{level: currentLevel, time: time}]};

    }
    console.log(player);
    return player;
  })
  localStorage.setItem("players", JSON.stringify(updatedPlayerList));
  console.log(JSON.parse(localStorage.getItem("players") || "[]"));
}
