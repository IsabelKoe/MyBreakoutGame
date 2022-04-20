import { CanvasView } from "./modules/Canvas";
import { Brick } from "./modules/GameElements/Brick";
import { Paddle } from "./modules/GameElements/Paddle";
import { Ball } from "./modules/GameElements/Ball";
import { ballImg, blueBrickImg, greenBrickImg, purpleBrickImg, redBrickImg, yellowBrickImg, paddleImg } from "./modules/domutils";  

function startGame(game: CanvasView) {

};

const game = new CanvasView();
game.onClickStartButton(startGame);