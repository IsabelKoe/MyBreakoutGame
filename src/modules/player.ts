// imports
import {
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

// asks a player for name input
export function askForName(playerList: Player[]) {
  // save player's answer in userInput
  const userInput = prompt("Please enter your name for the game.");
  // if player did not enter any character, then return name of Mystery Player which has been stored in LocalStorage
  if (userInput === null || userInput === "") {
    return playerList[0].name;
  }
  // otherwise return userInput
  return userInput;
}

// displays all highscore objects from currentPlayer
export function displayPlayerHighscores(currentPlayer: Player) {
  //show all highscores in highscore array in html
  if (currentPlayer.highscore !== undefined) {
    for (let highscore of currentPlayer.highscore) {
      const liItem = createNewListItem();
      liItem.innerHTML = `<pre>${currentPlayer.name}:  /  ${highscore.level}  /  ${highscore.time}</pre>`;
      highscoreList.appendChild(liItem);
    }
    // in case highscoreArray from current player is undefined log out an Error
  } else console.log("Error in displayPlayerHighcore function.");
}

// function to modify highscores for current Player and return an updated PlayerList Array
export function setHighscore(
  currentPlayer: Player,
  playerList: Player[],
  currentLevel: number,
  time: string
): Player[] {
  // create variable for new Highscore List
  let newHighscoreList: score[] = [{ level: 0, time: "" }];
  // get the current playerlist form local Storage
  const storagePlayerList = getLocalStorage();

  // check if player has already an highscorelist in storage
  const hasHighscoreList = playerHasHighscoreStorage(currentPlayer);

  // If player has no HighscoreList, console log and
  // create a new HighscoreList and set first object with currentLevel and time
  if (hasHighscoreList === false) {
    console.log("No highscore at all for player", currentPlayer);
    newHighscoreList = [{ level: currentLevel, time: time }];

    // if player has already a Highscore list in local Storage
  } else {
    // get the existing highscore list for that player
    const existingHighscoreList = getExistingHighscoreList(
      currentPlayer,
      storagePlayerList
    );

    // Check if player has already a score for the current level
    const scoreForLevel = hasScoreForLevel(currentPlayer, currentLevel);

    // if player has already a score for that level
    if (scoreForLevel && existingHighscoreList) {
      // get the old score
      const oldScore = getExistingScoreFromStorage(
        existingHighscoreList,
        currentLevel
      );
      // update the old score with the new time for that level and save it to newHighscoreList
      newHighscoreList = existingHighscoreList.map((score) => {
        if (score.level === oldScore?.level) {
          return { ...score, time: time };
        }
        return score;
      });

    // if player has no highscore for this level yet
    } else if (!scoreForLevel && existingHighscoreList) {
      // expand existing highscore list with new score for this level
      const newScore = { level: currentLevel, time: time };
      existingHighscoreList?.push(newScore);
      newHighscoreList = existingHighscoreList;
    }
  }
  // update player list
  const updatedPlayerList = updatePlayerHighscores(
    currentPlayer,
    playerList,
    newHighscoreList
  );
  return updatedPlayerList;
}

// function that iterates over playerList, updates the current player's highscore list and returns
// an updatedPlayerList
function updatePlayerHighscores(
  currentPlayer: Player,
  playerList: Player[],
  highscoreList: score[]
): Player[] {
  currentPlayer.highscore = highscoreList;
  const updatedPlayerList = playerList.map((player) => {
    if (player.name === currentPlayer.name) {
      return { ...player, highscore: currentPlayer.highscore };
    }
    return player;
  });
  return updatedPlayerList;
}
