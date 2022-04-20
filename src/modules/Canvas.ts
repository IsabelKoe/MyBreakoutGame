import { canvas, currentScore, startBtn, playerInfo } from "./domutils";

export class CanvasView {
  canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D | null;
  private _currentScore: HTMLObjectElement | null;
  private _startBtn: HTMLButtonElement | null;
  private _playerInfo: HTMLObjectElement | null;

  constructor() {
    this.canvas = canvas as HTMLCanvasElement;
    this._context = this.canvas.getContext("2d");
    this._currentScore = currentScore;
    this._startBtn = startBtn;
    this._playerInfo = playerInfo;
  }

  // clear Methode, die das Canvas wieder komplett zurücksetzt
  clear(): void {
    this._context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // clickStartButton Methode fügt einen EventListener ein & startet Spiel mit der startFunction
  onClickStartButton(startFunction: (view: CanvasView) => void): void {
    this._startBtn?.addEventListener("click", () => startFunction(this));
  }

  // displayScore Methode setzt den aktuellen Score unterdem Spielfeld, in dem die Bricks gezählt werden, die getroffen wurden
  displayScore(score: number): void {
    if (this._currentScore) {
      this._currentScore.innerHTML = score.toString();
    }
  };

  // displayPlayerInfo Methode setzt den Info Text unter dem Spielfeld für den Spieler entsprechend
  displayPlayerInfo(text: string): void {
      if(this._playerInfo) {
          this._playerInfo.innerHTML = text;
      }
  }
}
