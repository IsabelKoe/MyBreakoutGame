import { CanvasView } from "./modules/CanvasView";
import { Brick } from "./modules/Brick";
import { Paddle } from "./modules/Paddle";
import { Ball } from "./modules/Ball";
import { Collision } from "./modules/Collision";
import { createBrickArray } from "./modules/BrickArray";
import { ballImg, paddleImg } from "./images/images";
import {
  paddleHeight,
  paddleSpeed,
  paddleStartX,
  paddleWidth,
} from "./modules/PaddleSetup";
import { ballSize, ballXStartPos, ballYStartPos } from "./modules/BallSetup";
import { btnPlayBtn } from "./helpers/domutils";
import { timerStart, timerStop, resetTimer, } from './timer';
import { Player } from './helpers/playerHelpers';
import { displayPlayerArrayHighscore } from "./helpers/localStorage";
import { setHighscore } from './modules/newPlayer';

let ballSpeed = 5;
let level = 1;
let gameOver = false;
let score = 0;

export function playTheGame(currentPlayer: Player, playerList: Player[], time: string) {
  console.log("Das Spiel wird gestartet");
  const myGame = new CanvasView();
  startGame(myGame, currentPlayer, playerList, time);
}

// if player looses the ball, the game will be set to game over
function setGameOver(game: CanvasView) {
  game.displayPlayerInfo("Game Over!");
  gameOver = false;
  timerStop();
  resetTimer();
  btnPlayBtn.innerHTML = "Try Again";
}

function setGameWin(game: CanvasView, currentPlayer: Player, playerList: Player[], currentLevel: number, time: string) {
  game.displayPlayerInfo("Game Won!");
  gameOver = false;
  timerStop();
  console.log('setGameWin Function');
  setHighscore(currentPlayer, playerList, currentLevel, time)
  resetTimer();
  if (currentLevel <= 5) {
    btnPlayBtn.innerHTML = "Next Level";
    level += 1;
    // ballSpeed += 2;
  } else {
    level = 1;
    btnPlayBtn.innerHTML = "Play";
  }
}

function gameLoop(
  game: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: Collision,
  currentPlayer: Player,
  playerList: Player[],
  currentLevel: number,
  time: string 
)  {
  game.clear();
  game.drawBricks(bricks);
  game.displayGameElement(paddle);
  game.displayGameElement(ball);
  game.displayPlayerInfo("");

  //Move paddle and make sure it will stay in the Canvas
  if (
    (paddle.getMovingLeft() && paddle.getXPosition() > 0) ||
    (paddle.getMovingRight() &&
      paddle.getXPosition() < game.canvas.width - paddle.getWidth())
  ) {
    paddle.movePaddle();
  }

  //Move ball in Canvas
  ball.moveBall();

  collision.checkBallColliding(ball, paddle, game);
  const collidingBrick = collision.reduceBricksOnCollision(ball, bricks);

  // count the collision of ball with bricks and display it in html
  if (collidingBrick) {
    score += 1;
    game.displayScore(score);
  }

  // Set game won, when all bricks are hit
  if (bricks.length === 0) {
    game.clear();
    game.displayGameElement(paddle);
    return setGameWin(game,currentPlayer, playerList, currentLevel, time);
  }
  //Set game over, when ball hits the ground
  if (ball.getYPosition() > game.canvas.height) {
    gameOver = true;
    return setGameOver(game);
  }

  // AnimationFrame to create the gameLoop forever and forever
  requestAnimationFrame(() => gameLoop(game, bricks, paddle, ball, collision, currentPlayer, playerList, currentLevel, time));
}

// starts the game
function startGame(game: CanvasView, currentPlayer: Player, playerList: Player[], time: string): CanvasView {
  //reset displays
  const currentLevel = level;
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
    game.canvas.height - paddleHeight - 5,
    paddleWidth,
    paddleHeight,
    paddleSpeed
  );

  //Create a ball
  const ball = new Ball(
    ballImg,
    ballSize,
    ballXStartPos,
    ballYStartPos,
    ballSpeed,
    -ballSpeed
  );

  // start the timer to count how long player needs to solve the current level
  timerStart();  
  // starts the game loop function
  gameLoop(game, bricks, paddle, ball, collision, currentPlayer, playerList, currentLevel, time);
  return game;
}