// inpired by freeCodeCamp.org. (2021, 25. Februar). 
// TypeScript GameDev Tutorial – Create an Arkanoid Game [Video]. 
// YouTube. https://www.youtube.com/watch?v=7bejSTim38A

// has been modified due to implementation of 5 levels

// imports
import { LevelOne, LevelTwo, LevelThree, LevelFour, LevelFive } from "../level-list";
import { Brick } from "./Brick";
import { brickPadding, brickWidth, brickHeight, brickImages, brickDifficultyLevel } from "./setup-helpers/brick-setup";
import { canvasPadding, canvasColumns } from "./setup-helpers/canvas-setup";

// create Array of Levels with key:value pairs
const levels: {[key: number]: number[]} = {
    1: LevelOne,
    2: LevelTwo,
    3: LevelThree,
    4: LevelFour,
    5: LevelFive
}

// method to set the bricks according to current level
export function createBrickArray(currentLevel: number): Brick[] {
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
};