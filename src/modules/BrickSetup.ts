import { canvas } from "../domutils";
import { canvasPadding, canvasRows, canvasColumns } from "./CanvasSetup";
import { blueBrickImg, greenBrickImg, purpleBrickImg, redBrickImg, yellowBrickImg } from '../images/images';

// defining padding, width, height of bricks
const brickPadding = 5;
const brickWidth = canvas?Math.floor((canvas.width - canvasPadding * 2) / canvasColumns) - brickPadding:100;
const brickHeight = canvas?Math.floor((canvas.height - canvasPadding * 2) / canvasRows) - brickPadding:30;

// giving the different brick images a key from type number
const brickImages: {[key: number]: HTMLImageElement} = {
    1: blueBrickImg,
    2: greenBrickImg,
    3: purpleBrickImg,
    4: redBrickImg,
    5: yellowBrickImg,
};

// defining difficulty of bricks according to their key
const brickDifficultyLevel: {[key: number]:number} = {
    1: 1,
    2: 2,
    3: 2,
    4: 3,
    5: 4,
};

export {brickPadding, brickWidth, brickHeight, brickImages, brickDifficultyLevel}