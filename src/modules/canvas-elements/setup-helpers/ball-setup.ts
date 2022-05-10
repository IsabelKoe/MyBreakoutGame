import { ballImg } from "../../../images/images";

// defining size, speed and start position of ball
const defaultBallSpeed = 5;
const ballSize = 20;
const ballXStartPos = randomStartPos();
const ballYStartPos = 400;

function randomStartPos(): number{
    const randomNum = Math.floor(Math.random() * (850 - 100) + 100);
    //TODO lösch mich!
    console.log(randomNum, "randomNum");
    const randomPos = Math.ceil(randomNum / 10)*10;
    console.log(randomPos, "randomPos");
    return randomPos;
}

export { ballImg, defaultBallSpeed, ballSize, ballXStartPos, ballYStartPos, randomStartPos };


