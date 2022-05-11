import {
  canvas,
  currentScore,
  btnPlayBtn,
  playerInfo,
} from "../helpers/domutils";
import { Brick } from "./Brick";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";

export class CanvasView {
  canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D | null;
  private _currentScore: HTMLElement | null;
  private _playerInfo: HTMLElement | null;

  constructor() {
    this.canvas = canvas as HTMLCanvasElement;
    this._context = this.canvas.getContext("2d");
    this._currentScore = currentScore;
    this._playerInfo = playerInfo;
  }

  // function to clear the whole canvas at once
  clear(): void {
    this._context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // function to display the current score in html
  // counts if brick has been hit
  displayScore(score: number): void {
    if (this._currentScore) {
      this._currentScore.innerHTML = `Current Score: ${score.toString()}`;
    }
  }

  // function to display different text as player info
  displayPlayerInfo(text: string): void {
    if (this._playerInfo) {
      this._playerInfo.innerHTML = text;
    }
  }

  // create/ display game elements in canvas (draw)
  displayGameElement(element: Brick | Paddle | Ball): void {
    if (!element) return;
    else {
      this._context?.drawImage(
        element.getImg(),
        element.getXPosition(),
        element.getYPosition(),
        element.getWidth(),
        element.getHeight()
      );
    }
  }

  // function to draw an array of bricks in canvas
  drawBricks(bricks: Brick[]): void {
    bricks.forEach((brick) => this.displayGameElement(brick));
  }
}
