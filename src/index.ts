import { startTheGame, onGamepage } from "./gamepageSetup";
import { CanvasView } from "./modules/GameElements/CanvasView";
import { Brick } from "./modules/GameElements/Brick";
import { Paddle } from "./modules/GameElements/Paddle";
import { paddleImg, paddleWidth, paddleHeight, paddleStartX, paddleSpeed } from "./modules/GameSetups/PaddleSetup";
import { Ball } from "./modules/GameElements/Ball";
import { createBrickArray } from './modules/GameElements/BrickArray';
import { ballImg, ballSpeed, ballSize, ballXStartPos, ballYStartPos } from "./modules/GameSetups/BallSetup";
import { Collision } from './modules/GameSetups/Collision';

let gameOver = false;
let score = 0;

function setGameOver(game: CanvasView) {
  game.displayPlayerInfo('Game Over!');
  gameOver = false;
};

function setGameWin(game: CanvasView) {
  game.displayPlayerInfo('Game Won!');
  gameOver = false;
};

function gameLoop(
  game: CanvasView,
  bricks: Brick [],
  paddle: Paddle,
  ball: Ball,
  collision: Collision,
) {
  game.clear();
  game.drawBricks(bricks);
  game.displayGameElement(paddle);
  game.displayGameElement(ball);
  
  //Move paddle and make sure it will stay in the Canvas
  if (
      (paddle.getMovingLeft() && paddle.getXPosition() > 0) ||
      (paddle.getMovingRight() && paddle.getXPosition() < game.canvas.width - paddle.getWidth())
  ) {
    paddle.movePaddle();
  };

  //Move ball in Canvas
  ball.moveBall();

  collision.checkBallColliding(ball, paddle, game);
  const collidingBrick = collision.reduceBricksOnCollision(ball, bricks);

  if(collidingBrick) {
    score +=1;
    game.displayScore(score)
;  }

  // Set game won, when all bricks are hit
  if (bricks.length === 0) {
    game.clear();
    game.displayGameElement(paddle);
    return setGameWin(game);
  };
  //Set game over, when ball hits the ground
  if (ball.getYPosition() > game.canvas.height) {
    gameOver = true;
    return setGameOver(game);
  };

  // AnimationFrame to create the gameLoop forever and forever
  requestAnimationFrame(() => gameLoop(game, bricks, paddle, ball, collision));
};

function startGame(game: CanvasView): CanvasView {
  //reset displays
  score = 0;
  game.displayScore(0);
  game.displayPlayerInfo('Please Press Play!');
  // Setup a Collisison instance for game
  const collision = new Collision();

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
  //Create a ball
  const ball = new Ball(
    ballImg,
    ballSize,
    ballXStartPos,
    ballYStartPos,
    ballSpeed,
    -ballSpeed,
  );

  gameLoop(game, bricks, paddle, ball, collision)
  return game;
};

startTheGame();
const myGame = new CanvasView();
myGame.onClickStartButton(startGame);


// async function playTheGame() {
//   await waitforClick();
//   const myGame = new CanvasView();
//   myGame.onClickStartButton(startGame);
// }

// function waitforClick() {
//   return new Promise<void>((resolve, reject) => {
//     startTheGame();
//     resolve();
//   });
// }

