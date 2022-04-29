import { playerName } from "./domutils";

// Hier muss noch eine Logik für implementiert werden!
enum status {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  EXPERT = "Expert",
}

export interface Player {
  playerId: number;
  name: string;
  status?: status;
  highscore?: number;
}

let index = 0;
let userInput: string;
export let currentPlayer: Player = { playerId: index, name: "" };
let playerArray: [Player] = [currentPlayer];

export function askForName() {
  userInput = prompt("Please enter your name for the game.") as string;
  if (userInput != null) {
    currentPlayer = {
      playerId: index,
      name: userInput,
    };
    // check whether the name has been used already
    checkPlayerName();
    playerArray.push(currentPlayer);
  } else {
    currentPlayer = {
      playerId: 99,
      name: "Mystery Player",
    };
    playerArray.push(currentPlayer);
  }
  playerName.innerHTML = `<p class="player-name">Current Player: ${currentPlayer.name} </p>`;
  localStorage.setItem("player", JSON.stringify(playerArray));
}

// check if userinput name already exist in our playerArray
function checkPlayerName() {
  for (let player of playerArray) {
    if (player.name === userInput) {
      console.log("Dein Name wurde bereits gespeichert.");
      currentPlayer = player;
    }
  } 
}
