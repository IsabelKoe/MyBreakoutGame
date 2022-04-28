import { LevelOne, LevelTwo, LevelThree, LevelFour, LevelFive } from "./LevelList";
import { Brick } from "./Brick";
import { brickPadding, brickWidth, brickHeight, brickImages, brickDifficultyLevel } from "./BrickSetup";
import { canvasPadding, canvasRows, canvasColumns } from "./CanvasSetup";

//create Array of Levels
const levels: {[key: number]: number[]} = {
    1: LevelOne,
    2: LevelTwo,
    3: LevelThree,
    4: LevelFour,
    5: LevelFive
}


function createBrickArray(currentLevel: number): Brick[] {
    return levels[currentLevel].reduce((accumulator, element, i) => {
        const row = Math.floor((i+1) / canvasColumns);
        const col = i % canvasColumns;

        const x = canvasPadding + col * (brickWidth + brickPadding);
        const y = canvasPadding + row * (brickHeight + brickPadding);

        if (element === 0) {
            return accumulator;
        } else {

        return [
            ...accumulator,
            new Brick(
                brickImages[element],
                x,
                y,
                brickWidth,
                brickHeight,
                brickDifficultyLevel[element],
                
            )
        ] };
    }, [] as Brick[]);
}

export {createBrickArray };