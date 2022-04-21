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
        ySpeed: number,
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
}