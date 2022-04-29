import { playerName, timer } from "./domutils";
import { time } from "./timer";

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
  highscore?: [{level: number, time: string}];
}

let index = 0;
let userInput: string;
let mysteryPlayer: Player = { playerId: 99, name: "Mystery Player" };
export let currentPlayer: Player;
let playerArray: [Player] = [mysteryPlayer];
let alreadyExist: boolean = false;
export let nameEntered = false 

export function askForName(): boolean {
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
  return nameEntered = true;
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

//getter for current player's name
function getPlayerName(player: Player): string {
  return player.name;
}

// set time for level in player storage
// export function storeLevelTime(level: number, time: string) {
//     let nameOfPlayer = getPlayerName(currentPlayer);
//     for (let player of playerArray) {
//       if (player.name === nameOfPlayer) {
//         currentPlayer.highscore?.push({level, time});
//         localStorage.setItem("player", JSON.stringify(playerArray))
//         let newHighscore  = 
//       }
//     }
    
// }
