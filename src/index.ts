import { CanvasView } from "./modules/GameElements/CanvasView";
import { Brick } from "./modules/GameElements/Brick";
import { Paddle } from "./modules/GameElements/Paddle";
import { paddleImg, paddleWidth, paddleHeight, paddleStartX, paddleSpeed } from "./modules/Setups/PaddleSetup";
import { Ball } from "./modules/GameElements/Ball";
import { createBrickArray } from './modules/GameElements/BrickArray';
import { ballImg, ballSpeed, ballSize, ballXStartPos, ballYStartPos } from "./modules/Setups/BallSetup";
import { Collision } from './modules/Setups/Collision';

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



  // AnimationFrame to create the gameLoop forever and forever
  requestAnimationFrame(() => gameLoop(game, bricks, paddle, ball, collision));
};

function startGame(game: CanvasView) {
  //reset displays
  score = 0;
  game.displayScore(0);
  game.displayPlayerInfo('Press Play!');
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
};

const game = new CanvasView();
game.onClickStartButton(startGame);