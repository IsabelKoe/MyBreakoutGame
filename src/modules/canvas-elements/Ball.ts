// ball for game

import { randomStartPos } from "./setup-helpers/ball-setup";

// methods to get variables from ball and to move the ball
export class Ball {
  private _ballImg: HTMLImageElement;
  private _xSpeed: number;
  private _ySpeed: number;

  constructor(
    image: HTMLImageElement,
    private _ballSize: number,
    private _xPosition: number,
    private _yPosition: number,
    xSpeed: number,
    ySpeed: number
  ) {
    this._ballImg = image;
    this._ballSize = _ballSize;
    this._xPosition = _xPosition;
    this._yPosition = _yPosition;
    this._xSpeed = xSpeed;
    this._ySpeed = ySpeed;
  }

  //Getter methods to be able to call the private Variables from outside
  getImg(): HTMLImageElement {
    return this._ballImg;
  }

  getBallSize(): number {
    return this._ballSize;
  }

  getXPosition(): number {
    return this._xPosition;
  }

  getYPosition(): number {
    return this._yPosition;
  }

  getWidth(): number {
    return this._ballSize;
  }

  getHeight(): number {
    return this._ballSize;
  }

  setXPosition(randomNumber: number){
    this._xPosition = randomNumber;
  }

  //TODO lösch mich??
  setYPosition(randomNumber: number){
    this._yPosition = randomNumber;
  }

  // Methods to move the ball and to change direction of moving
  moveBall(): void {
    this._xPosition += this._xSpeed;
    this._yPosition += this._ySpeed;
  }

  changeDirectionX(): void {
    this._xSpeed = -this._xSpeed;
  }

  changeDirectionY(): void {
    this._ySpeed = -this._ySpeed;
  }
}

export function setRandomStartPos(ball: Ball) {
  const randomXNum = randomStartPos();
  ball.setXPosition(randomXNum);
}
