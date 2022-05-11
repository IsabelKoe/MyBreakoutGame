//imports
import { Player, score } from "./helpers/player-helpers";

//set default localStorage with a random player
export function setDefaultLocalStorage(defaultPlayer: Player) {
  localStorage.setItem("players", JSON.stringify([defaultPlayer]));
}

// get localStorage at key "players" and return PlayerArray or an empty array
export function getLocalStorage(): Player[] {
  const savedPlayerList = JSON.parse(localStorage.getItem("players") || "[]");
  return savedPlayerList;
}

// check if a specific player already exists in localStorage and return player or undefined
export function checkStorageforPlayer(
  playerList: Player[],
  name: string
): Player | undefined {
  const savedPlayer = playerList.find((player, _index, _other) => {
    if (player.name === name) return true;
    else false;
  });
  return savedPlayer;
}

// update localStorage after something has been changed in playerlist
export function updateStorage(playerList: Player[]) {
  localStorage.setItem("players", JSON.stringify(playerList));
}

// check if player already has an highscore list
export function playerHasHighscoreStorage(currentPlayer: Player): boolean {
  if (currentPlayer.highscore != undefined) return true;
  else return false;
}

// return the highscoreArray of player or return undefined
export function getExistingHighscoreList(currentPlayer: Player, localStorageList: Player[]) {
  for(let player of localStorageList){
    if(player.name === currentPlayer.name){
      return player.highscore;
    }
  }
}

// check if player has score for current level and return boolean
export function hasScoreForLevel(
  currentPlayer: Player,
  currentLevel: number
): boolean {
  let levelExists: boolean = false;
  const currentPlayerHighscores = currentPlayer.highscore;
  if (!currentPlayerHighscores) {
    console.log("Error");
    return false;
  }
  for (let score of currentPlayerHighscores) {
    if (score.level === currentLevel) {
      levelExists = true;
    } else levelExists;
  }
  return levelExists;
}

// return a highscore object of current level
export function getExistingScoreFromStorage(
  highscores: score[],
  currentLevel: number
) {
  const existingScore = highscores.find((score, _index, _other) => {
    if (score.level === currentLevel) return true;
    else false;
  });
  return existingScore;
}
