import { timer } from "./helpers/domutils";

let totalSeconds = 0;
let active: boolean = false;
let minutes: number | string = 0;
let seconds: number | string = 0;
let time: string;

function countTime() {
  if (active) {
    ++totalSeconds;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds - minutes * 60;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    time = `${minutes}:${seconds}`;
    timer.innerHTML = `<p class="timer">Time: ${minutes}:${seconds}</p>`;
    setTimeout(() => {
      countTime();
    }, 1000);
  }
}

export function timerStart() {
  active = true;
  countTime();
}

export function timerStop() {
  active = false;
  console.log("in timerStopNew", time);
}

export function resetTimer() {
  timer.innerHTML = `<p>Time: 00:00</p>`;
  totalSeconds = 0;
  seconds = 0;
  minutes = 0;
  console.log(seconds, minutes);
}

export function getTimer(): string {
  const levelTimer = time;
  return levelTimer;
}
