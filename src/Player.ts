import { playerName } from "./domutils";

enum status {
    BEGINNER = 'Beginner',
    INTERMEDIATE = 'Intermediate',
    EXPERT = 'Expert'
}

export interface Player {
  name: string;
  status?: status
}

export let currentPlayer: Player = {name: ''};

export function askForName() {
  let userInput = prompt("Please enter your name for the game.");
  if (userInput != null) {
    currentPlayer = {
      name: userInput,
    };
  } else {
    currentPlayer = {
      name: "Mystery Player",
    };
  };
  playerName.innerHTML=`<p class="player-name">Current Player: ${currentPlayer.name} </p>`
}
