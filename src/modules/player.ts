import { playerName, highscoreList } from './helpers/domutils';
import { Player } from "./helpers/player-helpers";
import {
  addNewPlayer,
  getLocalStorage,
  checkLocalStorage,
  displayPlayerArrayHighscore,
} from "./localStorage";

export function askForName(playerList: Player[]): string {
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
  console.log("in setHighscore Function");
  //get highscore array of current player
  let highscoreList = currentPlayer.highscore;
  console.log(highscoreList, "highscore list of current player");
  //in case there is no highscore yet, set first highscore
  if (!highscoreList?.length) {
    highscoreList = [{ level: currentLevel, time: time }];
  console.log(highscoreList.length, "Highscorelist length");  
  } else {
    // if there are already highscores for that player
    // check if a highscore for the current level exists
    if (highscoreList.length <= currentLevel) {
      // if level alread exists, then update the object with the current time
      highscoreList[(currentLevel - 1)] = {
        level: currentLevel,
        time: time,
      };
  console.log(highscoreList[(currentLevel -1)], "Highscore for current level");  

    } else {
      // if there is no highscore for this level yet, then add an highscore object with current level and time
      highscoreList.push({ level: currentLevel, time: time });
  console.log(highscoreList, "new highscore list of current player");
    }
  }
  // update currentplayer highscore
  currentPlayer.highscore = highscoreList;
  console.log(currentPlayer.highscore, "highscore list of current player after change");

  const updatedPlayerList = playerList.map(player => {
    if(player.name === currentPlayer.name) {
      console.log(currentPlayer.name, player.name);
      return {...player, highscore: currentPlayer.highscore};
    }
    return player;
  });
  console.log(updatedPlayerList);
  localStorage.setItem("players", JSON.stringify(updatedPlayerList));
  console.log(localStorage.getItem("players"));


  

}

// const  updatedPlayerList = playerList.map(player => {
//   if(player.name === currentPlayer.name){
//     console.log(currentPlayer.name, player.name);

//       const playerHighscore = player.highscore;
//       const updatedHighscore = playerHighscore?.map(score => {
//         if(score.level === currentLevel) {
//           return {...score, time: time}
//         } else {
//           const newScore = {level: currentLevel, time: time};
//           updatedHighscore?.push(newScore);
//         }
//          return score;
//       })

//     return {...player, highscore: updatedHighscore};

//   }
//   console.log(player);
//   return player;
// })
// localStorage.setItem("players", JSON.stringify(updatedPlayerList));
// console.log(JSON.parse(localStorage.getItem("players") || "[]"))
