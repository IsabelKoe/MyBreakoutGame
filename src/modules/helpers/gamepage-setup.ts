import { displayPlayerHighscores } from "../player";
import {
  btnHelpBtn,
  btnNameBtn,
  btnStartBtn,
  createNewListItem,
  gamefield,
  highscoreList,
  hmtlMain,
  htmlDivButtons,
  htmlHeader,
  styleSheet,
} from "./domutils";
import { Player } from "./player-helpers";

// change styling of page to styleGame.css and adjust classes
export function changeToGamePage() {
  //insert the new stylesheet
  changeStyleSheet();
  //adjust the header
  changeHeader();
  //adjust the main
  changeMain();
}

//set up the highscore list on gamepage in html
export function displayHighscoreList(playerList: Player[]){
  //loop over all players in playerlist
  let atLeastOneHighscore = false;
  for (let player of playerList) {
    //if players, have highscores, then display PlayerName: Level Time
    if (player.highscore !== undefined) {
      atLeastOneHighscore = true;
      //TODO lösch mich
      console.log("in player Highscore loop");
      console.log(player, player.highscore)

      //show all highscores in highscore array in html
      displayPlayerHighscores(player);
    };
  };
  // if no player has an highscore yet, show one time in html
  if(!atLeastOneHighscore) {
  const liItem = createNewListItem();
  highscoreList.appendChild(liItem);
  liItem.innerHTML = "<li>No highscores yet</li>";
  }
};

//exchange stylesheet in html
function changeStyleSheet() {
  styleSheet.href = "./src/styles/styleGame.css";
}

//adjust the header element for game
function changeHeader() {
  htmlHeader.classList.add("gamepage");
  htmlHeader.firstChild?.remove();
}

//adjust the main element for game
function changeMain() {
  hmtlMain.classList.add("grid");
  htmlDivButtons.classList.add("grid");
  btnNameBtn.remove();
  btnStartBtn.remove();
  btnHelpBtn.remove();
  gamefield.classList.add("grid");
}
