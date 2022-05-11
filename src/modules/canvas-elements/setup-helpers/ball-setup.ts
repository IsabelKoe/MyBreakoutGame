// imports
import { ballImg } from "../../../images/images";

// defining size, speed and start position of ball
const defaultBallSpeed = 5;
const ballSize = 20;
const ballXStartPos = randomStartPos();
const ballYStartPos = 400;

// function to generate a random number as start position for the ball
function randomStartPos(): number{
    const randomNum = Math.floor(Math.random() * (850 - 100) + 100);
    // Math.ceil rounds up to the clostest 10
    const randomPos = Math.ceil(randomNum / 10)*10;
    return randomPos;
}

export { ballImg, defaultBallSpeed, ballSize, ballXStartPos, ballYStartPos, randomStartPos };


