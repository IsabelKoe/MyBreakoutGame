import { CanvasView } from "./modules/Canvas";
import { Brick } from "./modules/GameElements/Brick";
import { Paddle } from "./modules/GameElements/Paddle";
import { paddleImg, paddleWidth, paddleHeight, paddleStartX, paddleSpeed } from "./modules/Setups/PaddleSetup";
import { Ball } from "./modules/GameElements/Ball";
import { createBrickArray } from './modules/BrickArray';

let gameOver = false;
let score = 0;

function gameLoop(
  game: CanvasView,
  bricks: Brick [],

) {
  game.clear();
  game.drawBricks(bricks);

  // AnimationFrame to create the gameLoop forever and forever
  requestAnimationFrame(() => gameLoop(game, bricks));
};

function startGame(game: CanvasView) {
  //reset displays
  score = 0;
  game.displayScore(score);
  game.displayPlayerInfo('');
  //Create all bricks
  const bricks = createBrickArray();
  //Create a paddle
  const paddle = new Paddle(
    paddleImg,
    paddleStartX,
    game.canvas.height - paddleHeight -5,
    paddleWidth,
    paddleHeight,
    paddleSpeed,
  );

  gameLoop(game, bricks)

};

const game = new CanvasView();
game.onClickStartButton(startGame);