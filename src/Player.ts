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
let mysteryPlayer: Player = { playerId: 99, name: "Mystery Player" };
export let currentPlayer: Player;
let playerArray: [Player] = [mysteryPlayer];
let alreadyExist: boolean = false;

export function askForName() {
  if (playerArray.length === 1) {
    localStorage.setItem("player", JSON.stringify(playerArray[0]));
  }
  userInput = prompt("Please enter your name for the game.") as string;
  if (userInput === null || userInput === "") {
    currentPlayer = mysteryPlayer;
  } else {
    currentPlayer = {
      playerId: (index += 1),
      name: userInput,
    };
    // check whether the name has been used already
    checkPlayerName(currentPlayer.name);
    if (alreadyExist === false) {
      playerArray.push(currentPlayer);
      localStorage.setItem("player", JSON.stringify(playerArray));
    }
  }
  playerName.innerHTML = `<p class="player-name">Current Player: ${currentPlayer.name} </p>`;
}

// check if userinput name already exist in our playerArray
function checkPlayerName(playerNm: string): boolean {
  for (let player of playerArray) {
    if (player.name === playerNm) {
      console.log("Dein Name wurde bereits gespeichert.");
      currentPlayer.playerId = player.playerId;
      currentPlayer.name = player.name;
      currentPlayer.highscore = player.highscore;
      alreadyExist = true;
    } else {
      alreadyExist = false;
    }
  }
  return alreadyExist;
}
