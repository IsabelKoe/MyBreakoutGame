import { CanvasView } from "./modules/GameElements/Canvas";
import { Brick } from "./modules/GameElements/Brick";
import { Paddle } from "./modules/GameElements/Paddle";
import { paddleImg, paddleWidth, paddleHeight, paddleStartX, paddleSpeed } from "./modules/Setups/PaddleSetup";
import { Ball } from "./modules/GameElements/Ball";
import { createBrickArray } from './modules/GameElements/BrickArray';
import { ballImg, ballSpeed, ballSize, ballXStartPos, ballYStartPos } from "./modules/Setups/BallSetup";

let gameOver = false;
let score = 0;

function gameLoop(
  game: CanvasView,
  bricks: Brick [],
  paddle: Paddle,
  ball: Ball,
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

  // AnimationFrame to create the gameLoop forever and forever
  requestAnimationFrame(() => gameLoop(game, bricks, paddle, ball));
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
  //Create a ball
  const ball = new Ball(
    ballImg,
    ballSize,
    ballXStartPos,
    ballYStartPos,
    ballSpeed,
    -ballSpeed,
  );

  gameLoop(game, bricks, paddle, ball)
};

const game = new CanvasView();
game.onClickStartButton(startGame);