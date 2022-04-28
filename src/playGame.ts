import { CanvasView } from './modules/CanvasView';
import { Brick } from './modules/Brick';
import { Paddle } from './modules/Paddle';
import { Ball } from './modules/Ball';
import { Collision } from './modules/Collision';
import { createBrickArray } from './modules/BrickArray';
import { ballImg, paddleImg } from './images/images';
import { paddleHeight, paddleSpeed, paddleStartX, paddleWidth } from './modules/PaddleSetup';
import { ballSize, ballSpeed, ballXStartPos, ballYStartPos } from './modules/BallSetup';
import { btnPlayBtn, playerInfo } from './domutils';

let currentLevel = 1;
let gameOver = false;
let score = 0;

export function playTheGame() {
    console.log('Das Spiel wird gestartet');
    const myGame = new CanvasView();
    startGame(myGame);
}

function setGameOver(game: CanvasView) {
    game.displayPlayerInfo('Game Over!');
    gameOver = false;
    btnPlayBtn.innerHTML="Try Again";
}

function setGameWin(game: CanvasView) {
    game.displayPlayerInfo('Game Won!');
    gameOver = false;
    if(currentLevel <= 5) {
    btnPlayBtn.innerHTML="Next Level";
    currentLevel +=1;
    } else {
      currentLevel = 1;
      btnPlayBtn.innerHTML="Play";
    }
}

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
  game.displayPlayerInfo('');
  
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
  game.displayPlayerInfo(`Please Press Play!`);
  // Setup a Collisison instance for game
  const collision = new Collision();

  //Create all bricks
  const bricks = createBrickArray(currentLevel);
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
