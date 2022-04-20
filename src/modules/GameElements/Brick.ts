export class Brick {
  private _brickImg: HTMLImageElement;

  constructor(
    image: HTMLImageElement,
    private _xPosition: number,
    private _yPosition: number,
    private _brickWidth: number,
    private _brickHeight: number,
    private _brickDifficulty: number
  ) {
    this._brickImg = image;
    this._xPosition = _xPosition;
    this._yPosition = _yPosition;
    this._brickWidth = _brickWidth;
    this._brickHeight = _brickHeight;
    this._brickDifficulty = _brickDifficulty;
  }

  //Getter Methoden, um an die verschiedenen Properties von außen heranzukommen
  getImg(): HTMLImageElement {
    return this._brickImg;
  }

  getXPosition(): number {
    return this._xPosition;
  }

  getYPosition(): number {
    return this._yPosition;
  }

  getWidth(): number {
    return this._brickWidth;
  }

  getHeight(): number {
    return this._brickHeight;
  }

  getDifficulty(): number {
    return this._brickDifficulty;
  }

  //Setter Methode, um den Schwierigkeitsgrad eines einzelnen Bricks zu setzen (wie oft er getroffen werden muss bis er verschwindet)
  setBrickDifficulty(difficultyLevel: number) {
      this._brickDifficulty = difficultyLevel;
  }
}
