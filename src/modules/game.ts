// inpired by freeCodeCamp.org. (2021, 25. Februar). 
// TypeScript GameDev Tutorial – Create an Arkanoid Game [Video]. 
// YouTube. https://www.youtube.com/watch?v=7bejSTim38A

// names have been modified
// logic has been modified and expanded with own logic
// especially setGameWin logic, timer, random ball start

// imports
import { CanvasView } from "./canvas-elements/CanvasView";
import { Brick } from "./canvas-elements/Brick";
import { Paddle } from "./canvas-elements/Paddle";
import { Ball, setRandomStartPos } from "./canvas-elements/Ball";
import { Collision } from "./canvas-elements/Collision";
import { createBrickArray } from "./canvas-elements/brick-array";
import { ballImg, paddleImg } from "../images/images";
import {
  defaultPaddleWidth,
  paddleHeight,
  paddleStartX,
  defaultPaddleSpeed
} from "./canvas-elements/setup-helpers/paddle-setup";
import {
  defaultBallSpeed,
  ballSize,
  ballXStartPos,
  ballYStartPos,
} from "./canvas-elements/setup-helpers/ball-setup";
import { btnPlayBtn, highscoreList, removeChilds, displayLevel } from "./helpers/domutils";
import { timerStart, timerStop, resetTimer, getTimer } from "./timer";
import { Player } from "./helpers/player-helpers";
import { setHighscore } from "./player";
import { displayHighscoreList, displayCurrentLevel } from './helpers/gamepage-setup';
import { updateStorage } from "./localStorage";


// game logic

// set up variables with default values needed for the first level
// set level to 1 and score to 0
let ballSpeed = defaultBallSpeed;
let paddleSpeed = defaultPaddleSpeed;
let paddleWidth = defaultPaddleWidth;
let level = 1;
let score = 0;

// on play, the game can start with the current player
export function playTheGame(
  currentPlayer: Player,
  playerList: Player[]
) {
  console.log("Das Spiel wird gestartet");
  displayCurrentLevel(displayLevel, level);
  // reset the timer to 00:00
  resetTimer();
  // clear Highscore List to display the most updated HighscoreList
  removeChilds(highscoreList);
  displayHighscoreList(playerList);
  // create a new Canvas for the game
  const myGame = new CanvasView();
  // start the game for the current level
  startGame(myGame, currentPlayer, playerList);
}

// starts the game
function startGame(
  game: CanvasView,
  currentPlayer: Player,
  playerList: Player[]
): CanvasView {

  // set the level
  const currentLevel = level;

  // reset displays for level
  score = 0;
  game.displayScore(0);
  game.displayPlayerInfo(`Please Press Play!`);

  // Create a new Collision instance for the level
  const collision = new Collision();

  // Create all bricks for the current level
  const bricks = createBrickArray(currentLevel);

  // Create a paddle
  const paddle = new Paddle(
    paddleImg,
    paddleStartX,
    game.canvas.height - paddleHeight - 5,
    paddleWidth,
    paddleHeight,
    paddleSpeed
  );

  // Create a ball
  const ball = new Ball(
    ballImg,
    ballSize,
    ballXStartPos,
    ballYStartPos,
    ballSpeed,
    -ballSpeed
  );

  // set a random Ball Position for current level
  setRandomStartPos(ball);

  // start the timer to count how long player needs to finish the current level
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
    currentLevel
  );
  return game;
}

// function to implement the movmements and collisions within the canvas
function gameLoop(
  game: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: Collision,
  currentPlayer: Player,
  playerList: Player[],
  currentLevel: number
) {
  // remove last game / clear canvas
  game.clear();
  // display game elements in canvas
  game.drawBricks(bricks);
  game.displayGameElement(paddle);
  game.displayGameElement(ball);
  game.displayPlayerInfo("");

  // Move paddle and make sure it will stay within the canvas
  if (
    (paddle.getMovingLeft() && paddle.getXPosition() > 0) ||
    (paddle.getMovingRight() &&
      paddle.getXPosition() < game.canvas.width - paddle.getWidth())
  ) {
    paddle.movePaddle();
  }

  // Move ball in Canvas
  ball.moveBall();

  // check if ball collides with other game elements
  collision.checkBallColliding(ball, paddle, game);
  // check if ball collides with a  brick an return a boolean
  const collidingBrick = collision.reduceBricksOnCollision(ball, bricks);
  // if ball hits a brick
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

  // Set game over, when ball hits the ground
  if (ball.getYPosition() > game.canvas.height) {
    return setGameOver(game);
  }

  // AnimationFrame to create the gameLoop forever and forever
  // until setGameWin or setGameOver function is called
  requestAnimationFrame(() =>
    gameLoop(
      game,
      bricks,
      paddle,
      ball,
      collision,
      currentPlayer,
      playerList,
      currentLevel
    )
  );
}

// if player looses the ball, the game will be set to game over
// timer will be stopped and Play Button text will change
function setGameOver(game: CanvasView) {
  game.displayPlayerInfo("Game Over!");
  timerStop();
  btnPlayBtn.innerHTML = "Try Again";
}

// if player finishes the level, level will be set to game won
function setGameWin(
  game: CanvasView,
  currentPlayer: Player,
  playerList: Player[],
  currentLevel: number
) {
  game.displayPlayerInfo("Game Won!");
  // timer will be stopped and time needed for the level will be stored in time variable
  // Highscore Array of player needs to be updated
  timerStop();
  const time = getTimer();
  const updatedPlayerList = setHighscore(
    currentPlayer,
    playerList,
    currentLevel,
    time
  );
  // update localStorage with adapted playerList to display it in next level under highscores
  updateStorage(updatedPlayerList);
  // adapt the level with ball speed and paddle speed and width
  switch (currentLevel) {
    case 1:
      btnPlayBtn.innerHTML = "Next Level";
      level += 1;
      ballSpeed = 6;
      paddleSpeed = 12;
      break;
    case 2:
      btnPlayBtn.innerHTML = "Next Level";
      level += 1;
      ballSpeed = 6;
      paddleSpeed = 12;
      paddleWidth = 100;
      break;
    case 3:
      btnPlayBtn.innerHTML = "Next Level";
      level += 1;
      ballSpeed = 10;
      paddleSpeed = 20;
      paddleWidth = 150;
      break;
    case 4:
      btnPlayBtn.innerHTML = "Next Level";
      level += 1;
      ballSpeed = 10;
      paddleSpeed = 20;
      paddleWidth = 120;
      break;
    default:
      level = 1;
      btnPlayBtn.innerHTML = "Play";
      ballSpeed = defaultBallSpeed;
      paddleSpeed = defaultPaddleSpeed;
      paddleWidth = defaultPaddleWidth;
  }
}
