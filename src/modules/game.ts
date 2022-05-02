import { CanvasView } from "./canvas-elements/CanvasView";
import { Brick } from "./canvas-elements/Brick";
import { Paddle } from "./canvas-elements/Paddle";
import { Ball } from "./canvas-elements/Ball";
import { Collision } from "./canvas-elements/Collision";
import { createBrickArray } from "./canvas-elements/brick-array";
import { ballImg, paddleImg } from "../images/images";
import {
  paddleHeight,
  paddleSpeed,
  paddleStartX,
  paddleWidth,
} from "./canvas-elements/setup-helpers/paddle-setup";
import {
  ballSize,
  ballXStartPos,
  ballYStartPos,
} from "./canvas-elements/setup-helpers/ball-setup";
import { btnPlayBtn, highscoreList, removeChilds } from "./helpers/domutils";
import { timerStart, timerStop, resetTimer, getTimer } from './timer';
import { Player } from "./helpers/player-helpers";
import { setHighscore } from "./player";
import { displayHighscoreList } from "./helpers/gamepage-setup";
import { updateStorage } from "./localStorage";

//TODO check ball Speed variable
let ballSpeed = 5;
let level = 1;
let gameOver = false;
let score = 0;

export function playTheGame(
  currentPlayer: Player,
  playerList: Player[],
  // time: string
) {
  console.log("Das Spiel wird gestartet");
  const myGame = new CanvasView();
  //start the game for the current level
  startGame(myGame, currentPlayer, playerList);
  //TODO HIer richtig?
  resetTimer();
  removeChilds(highscoreList);
  displayHighscoreList(playerList);
}

// starts the game
function startGame(
  game: CanvasView,
  currentPlayer: Player,
  playerList: Player[],
): CanvasView {
  //reset displays for level
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
  gameLoop(
    game,
    bricks,
    paddle,
    ball,
    collision,
    currentPlayer,
    playerList,
    currentLevel,
  );
  return game;
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
) {
  // remove last game
  game.clear();
  // display game elements in canvas
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

  //check if ball if ball collides with other game elements
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
    return setGameWin(game, currentPlayer, playerList, currentLevel);
  }

  //Set game over, when ball hits the ground
  if (ball.getYPosition() > game.canvas.height) {
    gameOver = true;
    return setGameOver(game);
  }

  // AnimationFrame to create the gameLoop forever and forever
  requestAnimationFrame(() =>
    gameLoop(
      game,
      bricks,
      paddle,
      ball,
      collision,
      currentPlayer,
      playerList,
      currentLevel,
    )
  );
}

// if player looses the ball, the game will be set to game over
function setGameOver(game: CanvasView) {
  game.displayPlayerInfo("Game Over!");
  gameOver = false;
  timerStop();
  // resetTimerNEW();
  btnPlayBtn.innerHTML = "Try Again";
}

function setGameWin(
  game: CanvasView,
  currentPlayer: Player,
  playerList: Player[],
  currentLevel: number,
) {
  game.displayPlayerInfo("Game Won!");
  gameOver = false;
  timerStop();
  const time = getTimer();
  const updatedPlayerList = setHighscore(
    currentPlayer,
    playerList,
    currentLevel,
    time);
  updateStorage(updatedPlayerList);
  // resetTimerNEW();
  if (currentLevel <= 5) {
    btnPlayBtn.innerHTML = "Next Level";
    level += 1;
    // ballSpeed += 2;
  } else {
    level = 1;
    btnPlayBtn.innerHTML = "Play";
  }
}
