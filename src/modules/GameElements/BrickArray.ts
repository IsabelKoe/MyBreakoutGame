import { LevelOne } from "./LevelList";
import { Brick } from "./Brick";
import { brickPadding, brickWidth, brickHeight, brickImages, brickDifficultyLevel } from "../Setups/BrickSetup";
import { canvasPadding, canvasRows, canvasColumns } from "../Setups/CanvasSetup";

function createBrickArray(): Brick[] {
    return LevelOne.reduce((accumulator, element, i) => {
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