import { timer } from "./../modules/helpers/domutils";

let startTime: Date;
let stopTime: Date;
let active: boolean = false;
let minutes: number = 0;
let seconds: number = 0;
export let time: string;

function timercount() {
  if (active) {
    stopTime = new Date();
    displayTime();
    time = `0${minutes}:${seconds}`
    timer.innerHTML = `<p class="timer">Time: 0${minutes}:${seconds}</p>`;
    setTimeout(() => {
      timercount();
    }, 1000);
  }
}

function displayTime() {
  if (seconds < 60) {
    seconds += 1;
  } else {
    minutes += 1;
    seconds = 0;
  }
}

export function timerStart() {
  startTime = new Date();
  stopTime = stopTime;
  active = true;
  timercount();
}

export function timerStop() {
  // time = `0${minutes}:${seconds}`;
  stopTime = new Date();
  active = false;
}

export function resetTimer() {
  seconds = 0;
  minutes = 0;
}
