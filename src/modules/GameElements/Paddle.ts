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

        // create EventListeners in Document for movement of paddle (arrow left and right)
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    //Getter methods to be able to call the private Variables from outside
    getImg(): HTMLImageElement {
        return this._paddleImg;
    }

    getXPosition(): number {
        return this._xPosition;
    }

    getYPosition(): number {
        return this._yPosition;
    }

    getWidth(): number {
        return this._paddleWidth;
    }

    getHeight(): number {
        return this._paddleHeight;
    }

    getMovingLeft(): boolean {
        return this._movingLeft;
    }

    getMovingRight(): boolean {
        return this._movingRight;
    }

    handleKeyDown = (event: KeyboardEvent): void => {
        if(event.code === 'ArrowLeft' || event.key === 'ArrowLeft') {
            this._movingLeft = true;
        }
        if(event.code === 'ArrowRight' || event.key === 'ArrowRight') {
            this._movingRight = true;
        }
    }

    handleKeyUp = (event: KeyboardEvent): void => {
        if(event.code === 'ArrowLeft' || event.key === 'ArrowLeft') {
            this._movingLeft = false;
        }
        if(event.code === 'ArrowRight' || event.key === 'ArrowRight') {
            this._movingRight = false;
        }
    }

    movePaddle(): void {
        if(this._movingLeft) {
            this._xPosition -= this._paddleSpeed;
        }
        if(this._movingRight) {
            this._xPosition += this._paddleSpeed;
        }
    }
}