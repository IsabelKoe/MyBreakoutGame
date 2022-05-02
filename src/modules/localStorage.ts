import { Player } from "./helpers/player-helpers";

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
