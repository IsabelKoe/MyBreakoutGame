export class Paddle {
    private _paddleImg: HTMLImageElement;
    private _movingLeft: boolean;
    private _movingRight: boolean;

    constructor(
        image: HTMLImageElement,
        private _xPosition: number,
        private _yPosition: number,
        private _paddleWidth: number,
        private _paddleHeight: number,
        private _paddleSpeed: number
    ) {
        this._paddleImg = image;
        this._xPosition = _xPosition;
        this._yPosition = _yPosition;
        this._paddleWidth = _paddleWidth;
        this._paddleHeight = _paddleHeight;
        this._paddleSpeed = _paddleSpeed;
        this._movingLeft = false;
        this._movingRight = false;
    }

    
}