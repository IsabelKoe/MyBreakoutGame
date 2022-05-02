import { playerName, highscoreList, createNewListItem } from "./helpers/domutils";
import { Player } from "./helpers/player-helpers";

export function askForName(playerList: Player[]): string {
  //ask player for name and save answer in userInput
  const userInput = prompt("Please enter your name for the game.");
  // if player did not enter any character, then set current player to mysterPlayer from local Storage
  if (userInput === null || userInput === "") {
    return playerList[0].name;
  }
  // otherwise return userInput
  return userInput;
}

export function displayPlayerHighscores(currentPlayer: Player) {
  //show all highscores in highscore array in html
  if (currentPlayer.highscore !== undefined) {
    for (let highscore of currentPlayer.highscore) {
      const liItem = createNewListItem();
      liItem.innerHTML = `<pre>${currentPlayer.name}:   ${highscore.level}   ${highscore.time}</pre>`;
      highscoreList.appendChild(liItem);
    }
  } else console.log("Error in displayPlayerHighcore function.")
};



export function setHighscore(
  currentPlayer: Player,
  playerList: Player[],
  currentLevel: number,
  time: string
): Player[] {
  //TODO lösch mich
  //console.log("in setHighscore Function");
  //get highscore array of current player
  let highscoreList = currentPlayer.highscore;
  //ToDO lösch mich
  //console.log(highscoreList, "highscore list of current player");
  //in case there is no highscore yet, set first highscore
  if (!highscoreList?.length) {
    highscoreList = [{ level: currentLevel, time: time }];
    //TODO lösch mich
    //console.log(highscoreList.length, "Highscorelist length");
  } else {
    // if there are already highscores for that player
    // check if a highscore for the current level exists
    if (highscoreList.length <= currentLevel) {
      // if level alread exists, then update the object with the current time
      highscoreList[currentLevel - 1] = {
        level: currentLevel,
        time: time,
      };
      //TODO lösch mich
      // console.log(
      //   highscoreList[currentLevel - 1],
      //   "Highscore for current level"
      // );
    } else {
      // if there is no highscore for this level yet, then add an highscore object with current level and time
      highscoreList.push({ level: currentLevel, time: time });
      //TODO lösch mich
      // console.log(highscoreList, "new highscore list of current player");
    }
  }

  // update currentplayer highscore in playerList and return updated playerList
  const updatedPlayerList = updatePlayerHighscores(currentPlayer, playerList, highscoreList);
  return updatedPlayerList;
}

function updatePlayerHighscores(currentPlayer: Player, playerList: Player[], highscoreList: [{level: number, time: string}]): Player[] {
  currentPlayer.highscore = highscoreList;
  //TODO lösch mich
  // console.log(
  //   currentPlayer.highscore,
  //   "highscore list of current player after change"
  // );
  const updatedPlayerList = playerList.map((player) => {
    if (player.name === currentPlayer.name) {
      console.log(currentPlayer.name, player.name);
      return { ...player, highscore: currentPlayer.highscore };
    }
    return player;
  });
  return updatedPlayerList;
  // //TODO lösch mich
  // console.log(updatedPlayerList);
  // localStorage.setItem("players", JSON.stringify(updatedPlayerList));
  // console.log(localStorage.getItem("players"));
}

