import { ballImg } from "../../../images/images";

// defining size, speed and start position of ball
const ballSpeed = 5;
const ballSize = 20;
const ballXStartPos = randomStartPos();
const ballYStartPos = 400;

//TODO random start position?
function randomStartPos(): number{
    const randomNum = Math.floor(Math.random() * (750 - 100) + 100);
    console.log(randomNum, "randomNum");
    const randomPos = Math.ceil(randomNum / 10)*10;
    console.log(randomPos, "randomPos");
    return randomPos;
}

export { ballImg, ballSpeed, ballSize, ballXStartPos, ballYStartPos, randomStartPos };


