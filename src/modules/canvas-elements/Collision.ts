// inpired by freeCodeCamp.org. (2021, 25. Februar). 
// TypeScript GameDev Tutorial – Create an Arkanoid Game [Video]. 
// YouTube. https://www.youtube.com/watch?v=7bejSTim38A

// names have been modfied

// imports
import { Ball } from "./Ball";
import { Paddle } from "./Paddle";
import { Brick } from "./Brick";
import { CanvasView } from "./CanvasView";
// imports only used as types - no instances will be created
// class to collect all collision methods in one class
export class Collision {
  // method to check whether the ball hits another element (paddle or canvas wall)
  checkBallColliding(ball: Ball, paddle: Paddle, game: CanvasView): void {
    // Collision with paddle
    if (
      ball.getXPosition() + ball.getWidth() > paddle.getXPosition() &&
      ball.getXPosition() < paddle.getXPosition() + paddle.getWidth() &&
      ball.getYPosition() + ball.getHeight() === paddle.getYPosition()
    ) {
      ball.changeDirectionY();
    }
    // Collision with canvas walls
    // right and left walls
    if (
      ball.getXPosition() > game.canvas.width - ball.getWidth() ||
      ball.getXPosition() < 0
    ) {
      ball.changeDirectionX();
    }
    // top wall
    if (ball.getYPosition() < 0) {
      ball.changeDirectionY();
    }
  }
  // check if ball hits a brick
  checkBallCollidingBrick(ball: Ball, brick: Brick): boolean {
    if (
      ball.getXPosition() < brick.getXPosition() + brick.getWidth() &&
      ball.getXPosition() + ball.getWidth() > brick.getXPosition() &&
      ball.getYPosition() < brick.getYPosition() + brick.getHeight() &&
      ball.getYPosition() + ball.getHeight() > brick.getYPosition()
    ) {
      return true;
    } else {
      return false;
    }
  }
  // if ball hits one or more bricks, we have to reduce the brick difficulty level by one
  // if brick dificulty is 1, we have to delete the brick from display
  reduceBricksOnCollision(ball: Ball, bricks: Brick[]): boolean {
    let collision = false;

    bricks.forEach((brick, i) => {
      if (this.checkBallCollidingBrick(ball, brick)) {
        ball.changeDirectionY();

        if (brick.getDifficulty() === 1) {
          bricks.splice(i, 1);
        } else {
          let newDifficulty = brick.getDifficulty() - 1;
          brick.setBrickDifficulty(newDifficulty);
        }
        collision = true;
      }
    });
    return collision;
  }
}
