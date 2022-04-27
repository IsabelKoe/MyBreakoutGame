import { startTheGame, onGamepage } from "./gamepageSetup";
import { CanvasView } from "./modules/GameElements/CanvasView";
import { myGame, startGame } from "./Game";


startTheGame();
myGame.onClickStartButton(startGame);

// async function playTheGame() {
//   await waitforClick();
//   myGame.onClickStartButton(startGame);
// }

// function waitforClick() {
//   return new Promise<void>((resolve, reject) => {
//     startTheGame();
//     resolve();
//   });
// }

