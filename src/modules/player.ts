import {
  playerName,
  highscoreList,
  createNewListItem,
} from "./helpers/domutils";
import { Player, score } from "./helpers/player-helpers";
import {
  getLocalStorage,
  playerHasHighscoreStorage,
  hasScoreForLevel,
  getExistingScoreFromStorage,
  getExistingHighscoreList,
} from "./localStorage";

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
      liItem.innerHTML = `<pre>${currentPlayer.name}:  /  ${highscore.level}  /  ${highscore.time}</pre>`;
      highscoreList.appendChild(liItem);
    }
  } else console.log("Error in displayPlayerHighcore function.");
}

export function setHighscore(
  currentPlayer: Player,
  playerList: Player[],
  currentLevel: number,
  time: string
): Player[] {
  //create variable for new Highscore List
  let newHighscoreList: score[] = [{level: 0, time: ''}];
  // get the current playerlist form local Storage
  const storagePlayerList = getLocalStorage();

  // check if player has already an highscorelist in storage
  const hasHighscoreList = playerHasHighscoreStorage(currentPlayer);

  // If player has no HighscoreList
  if (hasHighscoreList === false) {
    console.log("No highscore at all for player", currentPlayer);
    newHighscoreList = [{ level: currentLevel, time: time }];

    // Player has already a Highscore list in local Storage
  } else {
    //get the existing highscore list for that player
    const existingHighscoreList = getExistingHighscoreList(
      currentPlayer,
      storagePlayerList
    );

    //Check if player has already a score for the current level
    const scoreForLevel = hasScoreForLevel(currentPlayer, currentLevel);

    //if player has already a score for that level
    if (scoreForLevel && existingHighscoreList) {
      // get the old score
      const oldScore = getExistingScoreFromStorage(
        existingHighscoreList,
        currentLevel
      );
      newHighscoreList = existingHighscoreList.map((score) => {
        if (score.level === oldScore?.level) {
          // update the old score with the new time for that level and save it to newHighscoreList
          return { ...score, time: time };
        }
        return score;
      });

      // player has no highscore for this level yet
    } else if (!scoreForLevel && existingHighscoreList) {
      // expand existing highscore list with new score for this level
      const newScore = { level: currentLevel, time: time };
      existingHighscoreList?.push(newScore);
      newHighscoreList = existingHighscoreList;
    }
  }
  const updatedPlayerList = updatePlayerHighscores(
    currentPlayer,
    playerList,
    newHighscoreList
  );
  return updatedPlayerList;
}

function updatePlayerHighscores(
  currentPlayer: Player,
  playerList: Player[],
  highscoreList: score []
): Player[] {
  currentPlayer.highscore = highscoreList;
  const updatedPlayerList = playerList.map((player) => {
    if (player.name === currentPlayer.name) {
      console.log(currentPlayer.name, player.name);
      return { ...player, highscore: currentPlayer.highscore };
    }
    return player;
  });
  return updatedPlayerList;
}
